export function Footer() {
  return (
    <footer id="contact" className="relative pt-32 pb-12 border-t border-border overflow-hidden">
      <div
        className="pointer-events-none absolute -bottom-60 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 60%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="reveal">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            ✺ Contact
          </div>
          <h2 className="text-[clamp(2.5rem,8vw,8rem)] leading-[0.95] tracking-[-0.04em] font-semibold">
            <span className="text-gradient">Let's build something</span>
            <br />
            <span className="italic font-light text-accent-gradient">meaningful.</span>
          </h2>
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center gap-4">
          <a
            href="mailto:hello@example.com"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all"
          >
            Start a conversation
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-3 border border-border px-7 py-4 rounded-full text-sm font-medium hover:bg-surface transition-colors"
          >
            Back to top ↑
          </a>
        </div>

        <div className="mt-24 pt-8 border-t border-border grid md:grid-cols-3 gap-8 text-sm text-muted-foreground">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2">Email</div>
            <a className="text-foreground hover:text-accent transition-colors" href="mailto:hello@example.com">
              hello@example.com
            </a>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2">Elsewhere</div>
            <div className="flex gap-5">
              <a href="#" className="text-foreground hover:text-accent transition-colors">LinkedIn</a>
              <a href="#" className="text-foreground hover:text-accent transition-colors">GitHub</a>
              <a href="#" className="text-foreground hover:text-accent transition-colors">X</a>
            </div>
          </div>
          <div className="md:text-right">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2">© 2026</div>
            <div>Designed & built with intent.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
