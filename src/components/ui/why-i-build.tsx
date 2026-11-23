import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import "./why-i-build.css";

/* ---------- Types ---------- */

export type Segment =
  | { text: string } // plain text
  | { text: string; type: "highlight" } // yellow marker sweep
  | { text: string; type: "strike" } // red line through
  | { text: string; type: "replace" }; // handwritten word that pops in

export type Belief = {
  id: string;
  headline: Segment[];
  origin: string; // the moment that made you believe this
  proof: string; // what you built / do because of it
  link?: { label: string; href: string };
};

/* ---------- Beliefs and stories ---------- */

const BELIEFS: Belief[] = [
  {
    id: "know-what-to-build",
    headline: [
      { text: "AI made building " },
      { text: "hard", type: "strike" },
      { text: "easy", type: "replace" },
      { text: ". " },
      { text: "Knowing what to build", type: "highlight" },
      { text: " is the hard part now." },
    ],
    origin: "Coming soon",
    proof: "Coming soon",
  },
  {
    id: "people-over-machines",
    headline: [
      { text: "Tech should make " },
      { text: "machines", type: "strike" },
      { text: "people", type: "replace" },
      { text: " " },
      { text: "more capable", type: "highlight" },
      { text: "." },
    ],
    origin: "Coming soon",
    proof: "Coming soon",
  },
];

/* ---------- Component ---------- */

export default function WhyIBuild({ beliefs = BELIEFS }: { beliefs?: Belief[] }) {
  return (
    <div className="wib" aria-labelledby="wib-title">
      <header className="wib__header">
        <h2 id="wib-title" className="section-title">
          Why I build
        </h2>
      </header>

      <div className="wib__list">
        {beliefs.map((b) => (
          <BeliefCard key={b.id} belief={b} />
        ))}
      </div>
    </div>
  );
}

function BeliefCard({ belief }: { belief: Belief }) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(true);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const card = cardRef.current;
    if (
      !card ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    setSeen(false);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.6)) {
          setSeen(true);
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const headline = cardRef.current?.querySelector<HTMLElement>(".wib-headline");
    if (!headline || !("ResizeObserver" in window)) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const words = Array.from(headline.querySelectorAll<HTMLElement>("[data-word-motion]"));
    const positions = new Map(
      words.map((word) => [word, { x: word.offsetLeft, y: word.offsetTop }]),
    );
    const animations = new Map<HTMLElement, Animation>();
    const observer = new ResizeObserver(() => {
      // Read all positions before writing animation styles; offsets ignore FLIP transforms.
      const updates = words.map((word) => {
        const previous = positions.get(word)!;
        const next = { x: word.offsetLeft, y: word.offsetTop };
        const matrix = new DOMMatrixReadOnly(getComputedStyle(word).transform);
        return {
          word,
          previous,
          next,
          dx: previous.x + matrix.m41 - next.x,
          dy: previous.y + matrix.m42 - next.y,
        };
      });
      updates.forEach(({ word, previous, next, dx, dy }) => {
        positions.set(word, next);
        if (reduced.matches) {
          animations.get(word)?.cancel();
          return;
        }
        if (previous.x === next.x && previous.y === next.y) return;
        animations.get(word)?.cancel();
        if (Math.abs(dx) + Math.abs(dy) < 0.5) return;
        animations.set(
          word,
          word.animate(
            [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "translate(0, 0)" }],
            { duration: 320, easing: "cubic-bezier(.22,1,.36,1)" },
          ),
        );
      });
    });
    observer.observe(headline);
    const stopMotion = () => {
      if (reduced.matches) animations.forEach((animation) => animation.cancel());
    };
    reduced.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      reduced.removeEventListener("change", stopMotion);
    };
  }, [belief.headline]);
  const words = (text: string) =>
    text.split(/(\s+)/).map((part, index) =>
      /^\s+$/.test(part) ? (
        part
      ) : (
        <span className="wib-word" data-word-motion key={index}>
          {part}
        </span>
      ),
    );
  const finalHeadline = belief.headline
    .filter((segment) => !("type" in segment) || segment.type !== "strike")
    .map((segment) => segment.text)
    .join("");
  // Keep adjacent pairs atomic. Unsupported pairs resolve to the correct plain text.
  let hasEdit = false;
  const renderedHeadline = belief.headline.map((segment, i) => {
    const type = "type" in segment ? segment.type : undefined;
    if (type === "strike") return null;
    if (type === "replace") {
      const previous = belief.headline[i - 1];
      const paired = previous && "type" in previous && previous.type === "strike";
      const comparable =
        paired &&
        Math.max(previous.text.length, segment.text.length) /
          Math.max(1, Math.min(previous.text.length, segment.text.length)) <=
          1.6;
      if (paired && comparable && !hasEdit) {
        hasEdit = true;
        return (
          <span className="wib-edit" data-word-motion key={i}>
            <del>{previous.text}</del>
            <span className="wib-caret" aria-hidden="true">
              ‸
            </span>
            <ins>{segment.text}</ins>
          </span>
        );
      }
      return <span key={i}>{words(segment.text)}</span>;
    }
    return type === "highlight" ? (
      <mark key={i} className="wib-mark">
        {words(segment.text)}
      </mark>
    ) : (
      <span key={i}>{words(segment.text)}</span>
    );
  });
  const panelsId = `wib-panels-${belief.id}`;

  const toggle = () => setOpen((o) => !o);

  // Whole card is clickable, except links inside it.
  const onCardClick = (e: MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest("a, button")) return;
    toggle();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Escape" && open) setOpen(false);
  };

  return (
    <article
      ref={cardRef}
      data-seen={seen}
      data-edit-animate={animate}
      className={`wib-card${open ? " is-open" : ""}`}
      onClick={onCardClick}
      onKeyDown={onKeyDown}
    >
      <div className="wib-card__panels" id={panelsId}>
        {/* Panel 1 — Belief (always visible) */}
        <div className="wib-panel wib-panel--belief">
          <div className="wib-panel__inner">
            <span className="wib-hole" aria-hidden="true" />
            <p className="wib-sr-only" role="heading" aria-level={3}>
              {finalHeadline}
            </p>
            <h3
              className={`wib-headline${hasEdit ? " wib-headline--edited" : ""}`}
              aria-hidden="true"
            >
              {renderedHeadline}
            </h3>
            <button
              type="button"
              className="wib-toggle"
              aria-expanded={open}
              aria-controls={panelsId}
              onClick={toggle}
            >
              {open ? "Fold back" : "Unfold the story"}
              <span aria-hidden="true" className="wib-toggle__icon">
                {open ? "←" : "→"}
              </span>
            </button>
          </div>
        </div>

        {/* Panel 2 — Origin */}
        <div className="wib-panel wib-panel--origin" aria-hidden={!open}>
          <div className="wib-panel__inner">
            <h4 className="wib-panel-title">The moment</h4>
            <p className="wib-body">{belief.origin}</p>
          </div>
        </div>

        {/* Panel 3 — Proof */}
        <div className="wib-panel wib-panel--proof" aria-hidden={!open}>
          <div className="wib-panel__inner">
            <h4 className="wib-panel-title">What I do now</h4>
            <p className="wib-body">{belief.proof}</p>
            {belief.link && (
              <a className="wib-chip" href={belief.link.href} tabIndex={open ? 0 : -1}>
                {belief.link.label} <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
