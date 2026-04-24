const skills = [
  { name: "Product Thinking", desc: "Framing problems, defining outcomes, prioritizing what matters." },
  { name: "Workflow Design", desc: "Mapping ops end-to-end into clean, repeatable systems." },
  { name: "Automation", desc: "Removing manual toil with AI and lightweight scripting." },
  { name: "Operations", desc: "Running programs, comms, and logistics at scale." },
  { name: "Business Strategy", desc: "Connecting decisions to leverage, growth and risk." },
  { name: "Data Thinking", desc: "Turning signals into structured insight and action." },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-16 reveal">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              ⊹ Capabilities
            </div>
            <h2 className="text-4xl md:text-6xl tracking-[-0.03em] font-semibold max-w-3xl">
              The toolkit behind <span className="italic font-light text-accent-gradient">the work</span>.
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="reveal group bg-background hover:bg-surface transition-colors p-8 md:p-10 min-h-[220px] flex flex-col justify-between"
            >
              <div className="font-mono text-xs text-muted-foreground">
                0{i + 1}
              </div>
              <div>
                <h3 className="text-2xl tracking-tight font-medium group-hover:text-accent transition-colors">
                  {s.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
