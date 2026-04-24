export function About() {
  return (
    <section id="about" className="relative py-32 md:py-48 border-t border-border">
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
        <div className="md:col-span-7 reveal">
          <h2 className="text-3xl md:text-5xl tracking-[-0.03em] font-medium leading-[1.05]">
            <span className="text-gradient">
              I design workflows, solve operational bottlenecks, and build scalable systems
            </span>{" "}
            <span className="text-muted-foreground italic font-light">
              — turning ambiguity into clear, executable processes.
            </span>
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
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