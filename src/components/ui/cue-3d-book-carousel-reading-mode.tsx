import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowLeft, ArrowRight, BookOpen, X } from "lucide-react";

export interface ShelfBook {
  title: string;
  author: string;
  cover: string;
  edition?: string;
  spineColor?: string;
  spineTextColor?: string;
  reflection?: string;
  takeaway?: string;
}
const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

/** Stable cover dimensions; animated camera and matching closed-book spines. */
export default function BookCarousel3D({ books }: { books: ShelfBook[] }) {
  const scene = useRef<HTMLDivElement>(null);
  const volumes = useRef<Array<HTMLDivElement | null>>([]);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);
  const engine = useRef({ target: 0, current: 0, opened: -1 });
  const wake = useRef<() => void>(() => {});
  const gesture = useRef<{ x: number; y: number; index: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const wheelTime = useRef(0);
  const [active, setActive] = useState(0);
  const [reading, setReading] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const element = scene.current;
    if (!element || !books.length) return;
    let frame = 0;
    let visible = true;
    let width = 220;
    let gap = 52;
    let spine = 38;
    let small = false;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const step = () => {
      frame = 0;
      if (!visible) return;
      const s = engine.current;
      s.current += (s.target - s.current) * (reduced.matches ? 1 : 0.12);
      if (Math.abs(s.target - s.current) < 0.001) s.current = s.target;
      const positions: number[] = [];
      const widths: number[] = [];
      let left = 0;
      books.forEach((_, i) => {
        positions[i] = left;
        const opening = ease(Math.max(0, 1 - Math.abs(i - s.current)));
        widths[i] = spine + opening * (width - spine);
        left += widths[i] + gap;
      });
      const prev = Math.floor(s.current);
      const next = Math.min(books.length - 1, prev + 1);
      const fraction = s.current - prev;
      const camera =
        (positions[prev] + widths[prev] / 2) * (1 - fraction) +
        (positions[next] + widths[next] / 2) * fraction;
      let moving = s.current !== s.target;
      volumes.current.forEach((el, i) => {
        if (!el) return;
        const distance = i - s.current;
        const opening = ease(Math.max(0, 1 - Math.abs(distance)));
        const x = positions[i] - camera;
        el.style.transform = `translateX(${x}px)`;
        el.style.width = `${widths[i]}px`;
        el.style.zIndex = String(Math.round(100 - Math.abs(distance) * 10));
        el.style.opacity = s.opened !== -1 && s.opened !== i ? "0" : "1";
        const front = el.querySelector<HTMLElement>(".cue-front");
        const spineFace = el.querySelector<HTMLElement>(".cue-spine");
        if (front) front.style.opacity = String(opening);
        if (spineFace) spineFace.style.opacity = String(1 - opening);
      });
      if (moving) frame = requestAnimationFrame(step);
    };
    const schedule = () => {
      if (!frame && visible) frame = requestAnimationFrame(step);
    };
    wake.current = schedule;
    const measure = () => {
      const available = element.parentElement!.clientWidth;
      small = window.innerWidth < 768;
      width = Math.min(240, Math.max(120, available * (small ? 0.52 : 0.36)));
      spine = small ? 30 : 42;
      gap = small ? 18 : 36;
      element.style.setProperty("--cue-width", `${width}px`);
      element.style.setProperty("--cue-height", `${width * 1.5}px`);
      element.style.setProperty("--cue-depth", `${spine}px`);
      element.style.height = `${width * 1.5 + 48}px`;
      setCompact(small);
      schedule();
    };
    const resize = new ResizeObserver(measure);
    resize.observe(element.parentElement!);
    const intersection = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) schedule();
        else {
          cancelAnimationFrame(frame);
          frame = 0;
        }
      },
      { rootMargin: "100px" },
    );
    intersection.observe(element);
    reduced.addEventListener("change", schedule);
    measure();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      intersection.disconnect();
      reduced.removeEventListener("change", schedule);
      wake.current = () => {};
    };
  }, [books]);

  if (!books.length) return null;
  const select = (index: number) => {
    const next = Math.max(0, Math.min(books.length - 1, index));
    engine.current.target = next;
    engine.current.opened = -1;
    setActive(next);
    setReading(false);
    wake.current();
  };
  const toggle = (open: boolean) => {
    engine.current.opened = open ? active : -1;
    setReading(open);
    wake.current();
  };
  const selected = books[active];
  return (
    <div
      className="cue-shelf"
      role="region"
      aria-roledescription="carousel"
      aria-label="A Shelf of Influences"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          toggle(false);
          buttons.current[active]?.focus();
        }
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          const next = Math.max(
            0,
            Math.min(books.length - 1, active + (event.key === "ArrowRight" ? 1 : -1)),
          );
          select(next);
          buttons.current[next]?.focus();
        }
      }}
    >
      <div className="cue-stage" data-reading={reading}>
        <div
          ref={scene}
          className="cue-scene"
          data-reading={reading}
          onWheel={(event) => {
            // Horizontal trackpad gestures only; vertical page scrolling stays native.
            if (
              reading ||
              Math.abs(event.deltaX) <= Math.abs(event.deltaY) ||
              Math.abs(event.deltaX) < 8
            )
              return;
            if (Date.now() - wheelTime.current < 350) return;
            wheelTime.current = Date.now();
            select(active + Math.sign(event.deltaX));
          }}
          onPointerDown={(event) => {
            if (event.button !== 0 || reading) return;
            suppressClick.current = false;
            gesture.current = { x: event.clientX, y: event.clientY, index: active, moved: false };
          }}
          onPointerMove={(event) => {
            const drag = gesture.current;
            if (!drag || reading) return;
            const dx = event.clientX - drag.x;
            const dy = event.clientY - drag.y;
            if (!drag.moved && Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) {
              gesture.current = null;
              return;
            }
            if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
              drag.moved = true;
              event.currentTarget.setPointerCapture(event.pointerId);
            }
            if (drag.moved) {
              engine.current.target = Math.max(
                0,
                Math.min(books.length - 1, drag.index - dx / (compact ? 100 : 180)),
              );
              wake.current();
            }
          }}
          onPointerUp={(event) => {
            const drag = gesture.current;
            if (drag?.moved) {
              suppressClick.current = true;
              select(Math.round(engine.current.target));
            }
            gesture.current = null;
            if (event.currentTarget.hasPointerCapture(event.pointerId))
              event.currentTarget.releasePointerCapture(event.pointerId);
          }}
          onPointerCancel={() => {
            gesture.current = null;
            select(active);
          }}
        >
          <div className="cue-track">
            {books.map((book, index) => (
              <div
                className="cue-volume"
                ref={(el) => {
                  volumes.current[index] = el;
                }}
                key={book.title}
                style={
                  {
                    "--cue-color": book.spineColor ?? "var(--canvas)",
                    "--cue-text": book.spineTextColor ?? "var(--ink)",
                  } as CSSProperties
                }
              >
                <div className="cue-book-body">
                  <div className="cue-front">
                    <img
                      src={`${import.meta.env.BASE_URL}books/${book.cover}`}
                      alt={`${book.title} by ${book.author} — book cover`}
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                  <div className="cue-spine" aria-hidden="true">
                    <span>{book.title}</span>
                  </div>
                  <button
                    type="button"
                    className="cue-book-hit"
                    ref={(el) => {
                      buttons.current[index] = el;
                    }}
                    aria-label={
                      active === index
                        ? `${reading ? "Close" : "Open"} ${book.title}`
                        : `Select ${book.title}`
                    }
                    aria-expanded={index === active && reading}
                    tabIndex={reading && index !== active ? -1 : 0}
                    style={{ visibility: reading && index !== active ? "hidden" : undefined }}
                    onClick={() => {
                      if (suppressClick.current) {
                        suppressClick.current = false;
                        return;
                      }
                      if (active === index) toggle(!reading);
                      else select(index);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cue-notes-slot" aria-hidden={!reading}>
          {reading && (
            <article className="cue-reflection-card" aria-label={`${selected.title} — reflections`}>
              <header>
                <h5 className="book-title">{selected.title}</h5>
                {selected.edition && <span className="cue-edition">({selected.edition})</span>}
                <span className="book-author">{selected.author}</span>
              </header>
              <section>
                <h6>Reflection</h6>
                <p>{selected.reflection?.trim() || "Coming soon"}</p>
              </section>
              <section>
                <h6>Key takeaway</h6>
                <p>{selected.takeaway?.trim() || "Coming soon"}</p>
              </section>
            </article>
          )}
        </div>
      </div>
      <div className="cue-controls">
        <button
          type="button"
          aria-label="Previous book"
          disabled={reading || active === 0}
          onClick={() => select(active - 1)}
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Previous</span>
        </button>
        <span>
          {active + 1} / {books.length}
        </span>
        <button
          type="button"
          aria-label="Next book"
          disabled={reading || active === books.length - 1}
          onClick={() => select(active + 1)}
        >
          <span>Next</span>
          <ArrowRight size={16} aria-hidden="true" />
        </button>
        <button type="button" className="cue-toggle" onClick={() => toggle(!reading)}>
          {reading ? <X size={16} aria-hidden="true" /> : <BookOpen size={16} aria-hidden="true" />}
          <span>{reading ? "Close book" : "Open book"}</span>
        </button>
      </div>
    </div>
  );
}
