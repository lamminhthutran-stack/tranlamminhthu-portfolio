import { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Work", href: "#work" },
    { label: "Info", href: "#about" },

  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tight flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blink" />
          <span className="text-foreground">Minh Thư (Hailey)</span>
          <span className="text-muted-foreground hidden sm:inline">— Operations</span>
        </a>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden font-mono text-xs uppercase tracking-widest text-muted-foreground"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-foreground hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
