const projects = [
  {
    n: "01",
    title: "AI Daily M&A Report Automation",
    desc: "Built an automated workflow that turns market data into analyst-ready insights, delivered every morning.",
    tags: ["Automation", "AI", "Finance"],
    year: "2025",
  },
  {
    n: "02",
    title: "Project X Communication System",
    desc: "Designed scalable applicant communication workflows for 100+ participants across multiple cohorts.",
    tags: ["Operations", "Systems"],
    year: "2025",
  },
  {
    n: "03",
    title: "Fraud Prevention Strategy",
    desc: "Created an operational intervention plan to reduce platform fraud risk and protect end users.",
    tags: ["Strategy", "Risk"],
    year: "2024",
  },
  {
    n: "04",
    title: "Growth & Ops Execution",
    desc: "Led cross-functional initiatives across product, growth, and partnerships to ship measurable outcomes.",
    tags: ["Growth", "Product"],
    year: "2024",
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-20 reveal">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              ⌗ Selected Work
            </div>
            <h2 className="text-4xl md:text-6xl tracking-[-0.03em] font-semibold max-w-2xl">
              Projects built for real <span className="italic font-light text-accent-gradient">leverage</span>.
            </h2>
          </div>
          <div className="hidden md:block text-sm text-muted-foreground">
            ({projects.length}) projects
          </div>
        </div>

        <div className="border-t border-border">
          {projects.map((p) => (
            <article
              key={p.n}
              className="group reveal relative grid grid-cols-12 gap-6 py-10 border-b border-border cursor-pointer transition-colors hover:bg-surface/40 px-2 -mx-2 rounded-lg"
            >
              <div className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground pt-2">
                {p.n}
              </div>
              <div className="col-span-10 md:col-span-6">
                <h3 className="text-2xl md:text-4xl tracking-[-0.02em] font-medium group-hover:text-accent-gradient transition-all">
                  {p.title}
                </h3>
                <p className="mt-3 text-muted-foreground max-w-xl leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="col-span-8 md:col-span-3 flex flex-wrap gap-2 md:items-start pt-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="col-span-4 md:col-span-2 flex items-start justify-end gap-3 font-mono text-xs text-muted-foreground pt-2">
                <span>{p.year}</span>
                <span className="transition-transform group-hover:translate-x-1 group-hover:text-accent">↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
