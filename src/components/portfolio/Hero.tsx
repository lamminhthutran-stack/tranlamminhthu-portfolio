export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* ambient orb */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-30 animate-float-slow"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 60%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="flex items-center gap-3 mb-8 reveal">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Available for new projects · 2026
          </span>
        </div>

        <h1 className="reveal text-[clamp(2.75rem,7vw,7.5rem)] leading-[0.95] tracking-[-0.04em] font-semibold max-w-6xl">
          <span className="text-gradient">Building systems,</span>
          <br />
          <span className="text-gradient">workflows, and ideas</span>
          <br />
          <span className="text-accent-gradient italic font-light">that scale.</span>
        </h1>

        <p className="reveal mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          I turn messy problems into structured execution through product thinking,
          operations, and automation.
        </p>

        <div className="reveal mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            View Projects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-3 border border-border px-7 py-4 rounded-full text-sm font-medium hover:bg-surface transition-colors"
          >
            About Me
          </a>
        </div>

        {/* meta strip */}
        <div className="reveal mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-border/60">
          {[
            ["Focus", "Product · Ops"],
            ["Based", "Seoul, KR"],
            ["Studying", "Yonsei University"],
            ["Stack", "Systems · AI · Automation"],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                {k}
              </div>
              <div className="text-sm text-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        scroll ↓
      </div>
    </section>
  );
}
