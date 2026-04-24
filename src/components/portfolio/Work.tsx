import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "AI Daily M&A Report",
    impact: "Turned market data into analyst-ready insights, every morning.",
    tags: ["Automation", "AI"],
    year: "2025",
    gradient: "linear-gradient(135deg, oklch(0.45 0.18 255), oklch(0.2 0.08 270))",
  },
  {
    n: "02",
    title: "Project X Comms System",
    impact: "Scalable applicant communication for 100+ participants.",
    tags: ["Operations", "Systems"],
    year: "2025",
    gradient: "linear-gradient(135deg, oklch(0.4 0.15 240), oklch(0.18 0.05 260))",
  },
  {
    n: "03",
    title: "Fraud Prevention Strategy",
    impact: "Operational intervention plan to reduce platform fraud risk.",
    tags: ["Strategy", "Risk"],
    year: "2024",
    gradient: "linear-gradient(135deg, oklch(0.35 0.16 270), oklch(0.18 0.05 250))",
  },
  {
    n: "04",
    title: "Growth & Ops Execution",
    impact: "Cross-functional initiatives across product, growth & partnerships.",
    tags: ["Growth", "Product"],
    year: "2024",
    gradient: "linear-gradient(135deg, oklch(0.42 0.17 248), oklch(0.2 0.06 268))",
  },
];

export function Work() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="work" className="relative py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 reveal">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-accent mb-4">
              ⌗ Selected Work / 2024 — 25
            </div>
            <h2 className="text-4xl md:text-6xl tracking-[-0.035em] font-semibold max-w-2xl">
              <span className="text-gradient">A few projects built</span>{" "}
              <span className="italic font-light text-muted-foreground">for real leverage.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            ({String(projects.length).padStart(2, "0")}) projects
          </div>
        </div>

        {/* Editorial list */}
        <div className="relative border-t border-border">
          {projects.map((p, i) => (
            <a
              key={p.n}
              href="#"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="reveal group relative grid grid-cols-12 gap-3 md:gap-6 py-7 md:py-9 border-b border-border transition-all"
            >
              {/* Hover indicator bar */}
              <span
                className="absolute left-0 top-0 h-full w-px bg-accent transition-all duration-500 origin-top"
                style={{
                  transform: hover === i ? "scaleY(1)" : "scaleY(0)",
                  boxShadow: hover === i ? "0 0 20px var(--accent)" : "none",
                }}
              />

              <div className="col-span-2 md:col-span-1 font-mono text-xs pt-2 transition-colors text-muted-foreground group-hover:text-accent">
                {p.n}
              </div>

              <div className="col-span-10 md:col-span-5">
                <h3 className="text-2xl md:text-4xl tracking-[-0.025em] font-medium transition-transform duration-500 group-hover:translate-x-2">
                  <span className="group-hover:text-accent transition-colors">
                    {p.title}
                  </span>
                </h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-md">
                  {p.impact}
                </p>
              </div>

              <div className="hidden md:flex col-span-3 flex-wrap gap-2 items-start pt-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-border text-muted-foreground group-hover:border-accent/50 group-hover:text-accent transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="col-span-12 md:col-span-3 flex items-start justify-between md:justify-end gap-4 font-mono text-xs text-muted-foreground pt-2">
                <span className="md:hidden flex gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full border border-border">
                      {t}
                    </span>
                  ))}
                </span>
                <span className="group-hover:text-accent transition-colors">{p.year}</span>
                <ArrowUpRight className="h-4 w-4 transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          ))}

          {/* Floating preview card (desktop) */}
          <div
            className="pointer-events-none hidden lg:block fixed top-1/2 right-12 w-[320px] h-[220px] rounded-2xl border border-border overflow-hidden transition-all duration-500 z-40"
            style={{
              opacity: hover !== null ? 1 : 0,
              transform: `translateY(-50%) scale(${hover !== null ? 1 : 0.92})`,
              background: hover !== null ? projects[hover].gradient : "transparent",
              boxShadow: hover !== null ? "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 60px -20px var(--glow)" : "none",
            }}
          >
            <div className="absolute inset-0 grain opacity-30" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                  {hover !== null && projects[hover].n} — Preview
                </div>
                <div className="text-white text-sm font-medium mt-1">
                  {hover !== null && projects[hover].title}
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
                  {p.n}
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
