import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* ambient blue orb */}
      <div
        className="pointer-events-none absolute -top-60 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-3xl opacity-40 animate-float-slow"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 60%)" }}
      />
      {/* grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 w-full flex-1 flex flex-col justify-center">
        {/* Top label: name + role */}
        <div className="reveal flex flex-wrap items-center gap-x-4 gap-y-2 mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            ● Minh
          </span>
          <span className="h-px w-8 bg-border" />
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Product / Ops / Automation Builder
          </span>
        </div>

        <h1 className="reveal text-[clamp(3rem,10vw,11rem)] leading-[0.9] tracking-[-0.045em] font-semibold">
          <span className="text-gradient">I craft workflows,</span>
          <br />
          <span className="text-gradient">systems</span>{" "}
          <span className="italic font-light text-muted-foreground">&amp;</span>{" "}
          <span className="text-accent-gradient italic font-light">stories.</span>
        </h1>

        <div className="reveal mt-12 grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-6 md:col-start-7 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            I turn messy problems into structured execution through product
            thinking, operations, and automation.
          </p>
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-full text-sm font-medium hover:bg-accent-bright transition-all duration-300 ring-glow"
            style={{ backgroundColor: "var(--accent)" }}
          >
            View Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            About Me
          </a>
        </div>
      </div>

      {/* bottom row: scroll cue + meta */}
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pt-10 border-t border-border/60">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors"
          >
            <span className="h-px w-8 bg-border group-hover:bg-accent transition-colors" />
            Scroll to see work
            <ArrowDown className="h-3.5 w-3.5 animate-bounce-soft" />
          </a>
          <div className="grid grid-cols-2 md:flex gap-8 md:gap-12 text-xs">
            {[
              ["Based", "Seoul, KR"],
              ["Studying", "Yonsei University"],
              ["Status", "Open to roles"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  {k}
                </div>
                <div className="text-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
