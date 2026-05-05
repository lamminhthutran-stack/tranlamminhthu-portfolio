const skills = [
  {
    name: "Attention to Detail",
    desc: "Catching what others miss. Designing systems where nothing falls through the cracks.",
  },
  {
    name: "System Thinking",
    desc: "Seeing bottlenecks before they happen. Designing for scale, not just the immediate fix.",
  },
  { name: "Operations", desc: "Running programs, comms, and logistics without dropping the ball." },
  { name: "Workflow Design", desc: "Mapping ops end-to-end into clean, repeatable systems." },
  {
    name: "Automation",
    desc: "Removing manual toil with n8n, webhooks, and AI APIs — as a builder, not just a user.",
  },
  { name: "Data Thinking", desc: "Turning raw data into structured dashboards and decisions." },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-16 reveal">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-accent mb-4">
            ⊹ Capabilities
          </div>
          <h2 className="text-4xl md:text-6xl tracking-[-0.035em] font-semibold max-w-3xl">
            <span className="text-gradient">The toolkit behind</span>{" "}
            <span className="italic font-light text-accent-gradient">the work.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="reveal group bg-background hover:bg-surface transition-colors p-8 md:p-10 min-h-[220px] flex flex-col justify-between relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 0%, var(--glow), transparent 60%)",
                }}
              />
              <div className="relative font-mono text-xs text-accent">0{i + 1}</div>
              <div className="relative">
                <h3 className="text-2xl md:text-3xl tracking-tight font-medium group-hover:text-accent transition-colors">
                  {s.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-justify">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
