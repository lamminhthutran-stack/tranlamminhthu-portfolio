import { ArrowRight, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative pt-16 pb-12 border-t border-border overflow-hidden">
      <div
        className="pointer-events-none absolute -bottom-80 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 60%)" }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="reveal">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-accent mb-6">
            ✺ Contact / Let's talk
          </div>
          <h2 className="text-[clamp(2.75rem,11vw,11rem)] leading-[0.9] tracking-[-0.045em] font-semibold">
            <span className="text-gradient">Let's build something</span>{" "}
            <span className="italic font-light text-accent-gradient">meaningful.</span>
          </h2>
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center gap-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-pointer"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-24 pt-8 border-t border-border grid md:grid-cols-3 gap-8 text-sm text-muted-foreground">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2">Email</div>
            <a className="text-foreground hover:text-accent transition-colors" href="mailto:hello@example.com">
              lamminhthutran@gmail.com
            </a>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2">Elsewhere</div>
            <div className="flex gap-5">
              <a href="https://www.linkedin.com/in/haileythutran/" className="text-foreground hover:text-accent transition-colors">LinkedIn</a>
            </div>
          </div>
          <div className="md:text-right">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2">© 2026 — Minh Thư</div>
            <div>Designed &amp; built with intent.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
