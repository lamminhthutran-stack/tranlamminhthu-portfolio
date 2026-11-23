import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";

const sections = [
  ["top", "HOME"],
  ["about", "Who I am"],
  ["why", "Why I build"],
  ["work", "What I’ve built"],
  ["thinking", "How I think"],
  ["contact", "Let’s connect"],
];

export function Nav() {
  const headerRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = useLocation({ select: (location) => location.pathname });

  useEffect(() => {
    const targets = sections
      .map(([id]) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    // Case-study pages share the navigation but have no home-page sections.
    if (!targets.some((element) => element.id === "top")) {
      setActiveSection(null);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const readingLine = (headerRef.current?.getBoundingClientRect().bottom ?? 0) + 32;
      let current = targets[0].id;
      for (const target of targets) {
        if (target.getBoundingClientRect().top <= readingLine) current = target.id;
      }
      // The final section may be too short to reach the reading line.
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = targets[targets.length - 1].id;
      }
      setActiveSection(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    targets.forEach((target) => observer.observe(target));
    if (headerRef.current) observer.observe(headerRef.current);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  return (
    <header className="editorial-nav" ref={headerRef}>
      <nav aria-label="Main navigation">
        {sections.map(([hash, label]) => {
          const current = activeSection === hash;
          const currentProps = { "aria-current": current ? ("location" as const) : undefined };
          return (
            <Link
              key={hash}
              to="/"
              hash={hash}
              data-current={current ? "true" : undefined}
              activeProps={currentProps}
              inactiveProps={currentProps}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
