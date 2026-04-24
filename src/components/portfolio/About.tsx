export function About() {
  return (
    <section id="about" className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4 reveal">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            ✦ About
          </div>
          <div className="aspect-square rounded-2xl bg-surface border border-border relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, var(--accent), transparent 55%), radial-gradient(circle at 70% 80%, oklch(0.4 0.1 270), transparent 60%)",
              }}
            />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Operator · Builder
              </div>
              <div className="mt-1 text-xl font-medium">Yonsei University</div>
              <div className="text-sm text-muted-foreground">International Commerce</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 reveal">
          <h2 className="text-3xl md:text-5xl tracking-[-0.03em] font-medium leading-[1.1]">
            <span className="text-gradient">
              I design workflows, solve operational bottlenecks, and build scalable
              ideas
            </span>{" "}
            <span className="text-muted-foreground">
              — turning ambiguity into clear, executable systems.
            </span>
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-10 text-muted-foreground leading-relaxed">
            <p>
              I'm an International Commerce student at Yonsei University with a
              strong interest in operations, strategy, and systems building. My
              work sits at the intersection of product and execution.
            </p>
            <p>
              I'm energized by messy, ambiguous problems — and the chance to
              translate them into automation, structured workflows, and
              measurable outcomes for teams that need to move fast.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6 pt-8 border-t border-border">
            {[
              ["100+", "applicants supported"],
              ["4+", "ops systems shipped"],
              ["∞", "automations dreamt up"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl font-semibold tracking-tight">{n}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
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
