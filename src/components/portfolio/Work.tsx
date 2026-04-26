import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { resolveAsset } from "@/lib/utils";

const getProjectPreviewMedia = (p: typeof projects[0]) => {
  if (p.video) return { type: "video" as const, src: p.video };
  if (Array.isArray(p.content)) {
    const mediaItem = p.content.find((c) => c.video || c.image);
    if (mediaItem?.video) return { type: "video" as const, src: mediaItem.video };
    if (mediaItem?.image) return { type: "image" as const, src: mediaItem.image };
  }
  return null;
};

export function Work() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="work" className="relative py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 reveal">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-accent mb-4">
              ⌗ Selected Work / 2024 — 2026
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-[-0.035em] font-semibold max-w-none md:whitespace-nowrap">
              <span className="text-gradient">A few projects built</span>{" "}
              <span className="italic font-light text-muted-foreground">
                for real leverage.
              </span>
            </h2>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            ({String(projects.length).padStart(2, "0")}) projects · ↓ list
          </div>
        </div>

        {/* Editorial list */}
        <div className="relative border-t border-border">
          {projects.map((p, i) => {
            const isHover = hover === i;
            return (
              <Link
                key={p.n}
                to="/project/$projectId"
                params={{ projectId: p.id }}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="reveal group relative block border-b border-border transition-all duration-500"
                style={{
                  transform: isHover ? "translateX(12px)" : "translateX(0)",
                }}
              >
                {/* Subtle blue glow behind row */}
                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500"
                  style={{
                    opacity: isHover ? 1 : 0,
                    background:
                      "radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.12), transparent 60%)",
                  }}
                />

                {/* Left blue indicator bar */}
                <span
                  className="absolute left-0 top-0 h-full w-px bg-accent transition-transform duration-500 origin-top"
                  style={{
                    transform: isHover ? "scaleY(1)" : "scaleY(0)",
                    boxShadow: isHover ? "0 0 24px var(--accent)" : "none",
                  }}
                />

                <div className="relative grid grid-cols-12 gap-3 md:gap-6 py-8 md:py-10 px-2 md:px-4">
                  {/* Number */}
                  <div className="col-span-2 md:col-span-1 font-mono text-xs pt-3 text-accent">
                    {p.n}
                  </div>

                  {/* Title + impact */}
                  <div className="col-span-10 md:col-span-7" data-cursor="focus">
                    <h3 className="text-3xl md:text-5xl lg:text-6xl tracking-[-0.03em] font-medium leading-[1.05] transition-colors duration-300 group-hover:text-accent">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-lg leading-relaxed">
                      {p.impact}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent/90">
                      <span className="h-px w-5 bg-accent/60" />
                      {p.metric}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="hidden md:flex md:col-span-2 flex-wrap gap-2 justify-end lg:justify-start items-start pt-3">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded border border-border text-muted-foreground group-hover:border-accent/60 group-hover:text-accent transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Year + arrow */}
                  <div className="col-span-12 md:col-span-2 flex items-start justify-between md:justify-end gap-4 font-mono text-xs text-muted-foreground pt-3">
                    <span className="flex md:hidden gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </span>
                    <span className="group-hover:text-accent transition-colors">
                      {p.year}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-all duration-500 group-hover:text-accent"
                      style={{
                        transform: isHover
                          ? "translate(6px, -6px)"
                          : "translate(0,0)",
                      }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}

          {/* Floating preview card (desktop) */}
          <div
            className="pointer-events-none hidden lg:block fixed top-1/2 right-12 w-[340px] h-[230px] rounded border border-border overflow-hidden transition-all duration-500 z-40 bg-card"
            style={{
              opacity: hover !== null ? 1 : 0,
              transform: `translateY(-50%) scale(${hover !== null ? 1 : 0.92})`,
              boxShadow:
                hover !== null
                  ? "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 60px -20px var(--glow)"
                  : "none",
            }}
          >
            {/* Background Media */}
            {hover !== null && (() => {
              const media = getProjectPreviewMedia(projects[hover]);
              if (!media) return null;
              if (media.type === 'video') return <video src={resolveAsset(media.src)} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />;
              if (media.type === 'image') {
                const src = typeof media.src === 'string' ? media.src : media.src.url;
                return <img src={resolveAsset(src)} alt="project preview" className="absolute inset-0 w-full h-full object-cover" />;
              }
              return null;
            })()}
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 opacity-30 transition-all duration-500"
              style={{ background: hover !== null ? projects[hover].gradient : "transparent" }}
            />
            {/* Base legibility overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent z-0" />
            <div className="absolute inset-0 grain opacity-30" />
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 drop-shadow-md">
                {hover !== null && projects[hover].n} — Preview
              </span>
              <span className="h-1.5 w-1.5 rounded bg-accent shadow-[0_0_8px_var(--accent)]" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10">
              <div>
                <div className="text-white text-base font-medium drop-shadow-lg">
                  {hover !== null && projects[hover].title}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 mt-1 drop-shadow-md">
                  {hover !== null && projects[hover].metric}
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-white drop-shadow-md" />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}