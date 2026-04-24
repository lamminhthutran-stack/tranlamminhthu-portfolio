import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "AI Daily M&A Report",
    impact: "Saved analysts hours every week with auto-curated market briefings.",
    tags: ["Automation", "AI", "Finance"],
    year: "2025",
    metric: "↓ 8 hrs / week",
    gradient: "linear-gradient(135deg, oklch(0.5 0.2 255), oklch(0.18 0.06 270))",
  },
  {
    n: "02",
    title: "Project X Comms System",
    impact: "Automated communication for 100+ applicants across multiple cohorts.",
    tags: ["Operations", "Systems"],
    year: "2025",
    metric: "100+ applicants",
    gradient: "linear-gradient(135deg, oklch(0.45 0.18 240), oklch(0.16 0.05 260))",
  },
  {
    n: "03",
    title: "Fraud Prevention Strategy",
    impact: "Reduced repetitive manual review tasks and lowered platform risk.",
    tags: ["Strategy", "Risk"],
    year: "2024",
    metric: "↓ Manual tasks",
    gradient: "linear-gradient(135deg, oklch(0.4 0.17 270), oklch(0.16 0.05 250))",
  },
  {
    n: "04",
    title: "Growth & Ops Execution",
    impact: "Shipped cross-functional initiatives across product, growth & partnerships.",
    tags: ["Growth", "Product"],
    year: "2024",
    metric: "Cross-functional",
    gradient: "linear-gradient(135deg, oklch(0.46 0.18 248), oklch(0.18 0.06 268))",
  },
];

export function Work() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="work" className="relative py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 reveal">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-accent mb-4">
              ⌗ Selected Work / 2024 — 25
            </div>
            <h2 className="text-4xl md:text-6xl tracking-[-0.035em] font-semibold max-w-3xl">
              <span className="text-gradient">A few projects built</span>{" "}
              <span className="italic font-light text-muted-foreground">
                for real leverage.
              </span>
            </h2>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            ({String(projects.length).padStart(2, "0")}) projects · ↓ list
          </div>
        </div>

        {/* Editorial list */}
        <div className="relative border-t border-border">
          {projects.map((p, i) => {
            const isHover = hover === i;
            return (
              <a
                key={p.n}
                href="#"
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="reveal group relative block border-b border-border transition-all duration-500"
                style={{
                  transform: isHover ? "translateX(12px)" : "translateX(0)",
                }}
              >
                {/* Subtle blue glow behind row */}
                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500"
                  style={{
                    opacity: isHover ? 1 : 0,
                    background:
                      "radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.12), transparent 60%)",
                  }}
                />

                {/* Left blue indicator bar */}
                <span
                  className="absolute left-0 top-0 h-full w-px bg-accent transition-transform duration-500 origin-top"
                  style={{
                    transform: isHover ? "scaleY(1)" : "scaleY(0)",
                    boxShadow: isHover ? "0 0 24px var(--accent)" : "none",
                  }}
                />

                <div className="relative grid grid-cols-12 gap-3 md:gap-6 py-8 md:py-10 px-2 md:px-4">
                  {/* Number */}
                  <div className="col-span-2 md:col-span-1 font-mono text-xs pt-3 text-accent">
                    {p.n}
                  </div>

                  {/* Title + impact */}
                  <div className="col-span-10 md:col-span-6" data-cursor="focus">
                    <h3 className="text-3xl md:text-5xl lg:text-6xl tracking-[-0.03em] font-medium leading-[1.05] transition-colors duration-300 group-hover:text-accent">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-lg leading-relaxed">
                      {p.impact}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent/90">
                      <span className="h-px w-5 bg-accent/60" />
                      {p.metric}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="hidden md:flex col-span-3 flex-wrap gap-2 items-start pt-3">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-border text-muted-foreground group-hover:border-accent/60 group-hover:text-accent transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Year + arrow */}
                  <div className="col-span-12 md:col-span-2 flex items-start justify-between md:justify-end gap-4 font-mono text-xs text-muted-foreground pt-3">
                    <span className="flex md:hidden gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-full border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </span>
                    <span className="group-hover:text-accent transition-colors">
                      {p.year}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-all duration-500 group-hover:text-accent"
                      style={{
                        transform: isHover
                          ? "translate(6px, -6px)"
                          : "translate(0,0)",
                      }}
                    />
                  </div>
                </div>
              </a>
            );
          })}

          {/* Floating preview card (desktop) */}
          <div
            className="pointer-events-none hidden lg:block fixed top-1/2 right-12 w-[340px] h-[230px] rounded-2xl border border-border overflow-hidden transition-all duration-500 z-40"
            style={{
              opacity: hover !== null ? 1 : 0,
              transform: `translateY(-50%) scale(${hover !== null ? 1 : 0.92})`,
              background: hover !== null ? projects[hover].gradient : "transparent",
              boxShadow:
                hover !== null
                  ? "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 60px -20px var(--glow)"
                  : "none",
            }}
          >
            <div className="absolute inset-0 grain opacity-30" />
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                {hover !== null && projects[hover].n} — Preview
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blink" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <div className="text-white text-base font-medium">
                  {hover !== null && projects[hover].title}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 mt-1">
                  {hover !== null && projects[hover].metric}
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-white/80" />
            </div>
          </div>
        </div>

        {/* Mobile preview grid */}
        <div className="mt-16 grid sm:grid-cols-2 gap-4 lg:hidden">
          {projects.map((p) => (
            <div
              key={p.n}
              className="aspect-[4/3] rounded-2xl border border-border overflow-hidden relative"
              style={{ background: p.gradient }}
            >
              <div className="absolute inset-0 grain opacity-30" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                  {p.n} · {p.metric}
                </div>
                <div className="text-white text-sm font-medium mt-1">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
