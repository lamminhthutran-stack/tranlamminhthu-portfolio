export function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 reveal">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-accent mb-4">
            ✦ Info
          </div>
          <div className="aspect-[4/5] rounded-2xl border border-border relative overflow-hidden bg-black/20 group">
            {/* Find your photo, put it in the "public" folder, and rename it to "photo.jpg" */}
            <img
              src="/photo.jpg"
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            {/* Gradient overlay so the white text is always readable over the photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

            <div className="absolute inset-0 grain opacity-30 mix-blend-overlay" />

            <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
                ID — 2026
              </div>
              <span className="h-2 w-2 rounded-full bg-accent animate-blink shadow-[0_0_8px_var(--accent)]" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                Operator · Builder
              </div>
              <div className="mt-1 text-2xl font-medium text-white drop-shadow-md">Trần Lâm Minh Thư</div>
              <div className="text-sm text-white/80 drop-shadow-md">Yonsei · International Commerce · Applied Information Engineering</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-7 reveal md:pt-8">
          <h2 className="text-3xl md:text-5xl tracking-[-0.03em] font-medium mb-8 text-foreground">
            About Me
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <p>
              Operations-oriented undergraduate with experience in workflow design,
              automation, and operational problem solving. Currently studying
              International Commerce and Applied Information Engineering at{" "}
              <span className="text-accent">Yonsei University</span>, with a strong
              interest in systems, execution, and continuous improvement.
            </p>

            <p>
              Known for a strong can-do attitude and ownership beyond scope, I proactively
              identify opportunities to improve and scale processes. I combine attention
              to detail with system thinking to turn messy challenges into structured
              workflows, faster execution, and measurable outcomes.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-accent mb-6">
              ✦ Core Values
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-lg font-medium text-accent">Kindness</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Fix the system, not the blame. Encourage and empower people to grow through mistakes.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-accent">Lifelong Learner</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Connect patterns across domains. Every conversation is a resource.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-accent">Can-Do Attitude</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Figure it out first, refine later. Ambiguity is a problem to solve, not a reason to hesitate.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}