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
              src={`${import.meta.env.BASE_URL}photo.jpg`}
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
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
              <div className="mt-1 text-2xl font-medium text-white drop-shadow-md">
                Trần Lâm Minh Thư
              </div>
              <div className="text-sm text-white/80 drop-shadow-md">
                Yonsei · International Commerce · Applied Information Engineering
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-7 reveal md:pt-8">
          <h2 className="text-3xl md:text-5xl tracking-[-0.03em] font-medium mb-8 text-foreground">
            About Me
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <p>
              I design workflows that make operations scalable and reliable. When a process breaks,
              I look for root causes before reaching for a fix — asking whether the problem is worth
              solving, who it actually affects, and what a solution needs to hold up under real constraints.
            </p>

            <p>
              That thinking comes from studying both <span className="text-accent">international commerce</span> and{' '}
              <span className="text-accent">applied information engineering</span> at Yonsei, where I learned
              to read business problems and system problems in the same breath. In practice, this means
              balancing automation with human judgment, keeping quality intact as volume grows, and
              building things that the next person can actually use and hand off.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-accent mb-6">
              ✦ Core Values
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-lg font-medium text-accent">Fix the system, not the person</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  When mistakes repeat, I look at the process before looking at the person — asking whether
                  the workflow actually gave people a fair chance to do quality work. The better fix is
                  designing conditions where doing the right thing becomes the easier thing.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-accent">Learning with Humility</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  I value judgment, but I also recognize that every judgment has gaps. I treat each project,
                  conversation, and unexpected challenge as a chance to uncover blind spots, connect patterns,
                  and improve how I think and work.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-accent">Clarity under ambiguity</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  When facing ambiguity, I don't wait for the perfect answer. I break problems down step by
                  step, act with the best available information, collect feedback, and iterate until the
                  solution becomes clearer and stronger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
