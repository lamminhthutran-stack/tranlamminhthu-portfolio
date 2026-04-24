export function About() {
  return (
    <section id="about" className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 reveal">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-accent mb-4">
            ✦ Info
          </div>
          <div
            className="aspect-[4/5] rounded-2xl border border-border relative overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, oklch(0.45 0.18 255 / 0.6), transparent 55%), linear-gradient(160deg, oklch(0.22 0.05 260), oklch(0.14 0.02 265))",
            }}
          >
            <div className="absolute inset-0 grain opacity-30" />
            <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                ID — 2026
              </div>
              <span className="h-2 w-2 rounded-full bg-accent animate-blink" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                Operator · Builder
              </div>
              <div className="mt-1 text-2xl font-medium text-white">Minh</div>
              <div className="text-sm text-white/70">Yonsei · Int'l Commerce</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 reveal">
          <h2 className="text-3xl md:text-5xl tracking-[-0.03em] font-medium leading-[1.05]">
            <span className="text-gradient">
              I design workflows, solve operational bottlenecks, and build scalable ideas
            </span>{" "}
            <span className="text-muted-foreground italic font-light">
              — turning ambiguity into clear, executable systems.
            </span>
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <p>
              I'm an International Commerce student at Yonsei University with a
              strong interest in operations, strategy, and systems building. My
              work sits at the intersection of <span className="text-accent">product</span> and execution.
            </p>
            <p>
              I'm energized by messy, ambiguous problems — and translating them
              into <span className="text-accent">automation</span>, structured
              workflows, and measurable outcomes for teams that need to move fast.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-border">
            {[
              ["100+", "applicants supported"],
              ["04", "ops systems shipped"],
              ["∞", "automations dreamt up"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl md:text-4xl font-semibold tracking-tight text-accent">
                  {n}
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-muted-foreground mt-2">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
