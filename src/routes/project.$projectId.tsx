import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { projects } from "@/data/projects";
import { ArrowLeft, Download } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/project/$projectId")({
    component: ProjectDetail,
});

function ProjectDetail() {
    useReveal();
    const { projectId } = Route.useParams();
    const project = projects.find((p) => p.id === projectId);

    if (!project) {
        return (
            <div className="dark min-h-screen bg-background text-foreground antialiased grain flex flex-col">
                <Nav />
                <main className="flex-1 flex items-center justify-center pt-24">
                    <div className="text-center px-6">
                        <h1 className="text-4xl md:text-6xl font-semibold mb-6">Project not found</h1>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 hover:text-accent transition-colors text-muted-foreground"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Portfolio
                        </Link>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="dark min-h-screen bg-background text-foreground antialiased grain flex flex-col">
            <CursorGlow />
            <Nav />
            {/* Spacer for fixed nav */}
            <div className="h-24"></div>

            <main className="flex-1 px-6 md:px-10 max-w-[1400px] mx-auto w-full py-12 md:py-20 mb-20">
                <div className="mb-8 reveal">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 hover:text-accent font-mono text-xs uppercase tracking-widest text-muted-foreground transition-all group"
                    >
                        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                        Back
                    </Link>
                </div>

                <header className="mb-20">
                    <div className="font-mono text-xs uppercase tracking-[0.22em] text-accent mb-6 reveal">
                        ⌗ {project.n} / {project.year}
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-[-0.03em] font-medium leading-[1.05] mb-8 reveal">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed reveal">
                        {project.impact}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-12 reveal">
                        {project.tags.map((t) => (
                            <span
                                key={t}
                                className="text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border border-border text-foreground hover:border-accent/60 hover:text-accent transition-colors"
                                style={{
                                    background: "rgba(255,255,255,0.03)"
                                }}
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Feature/Hero Image or Video mockup for the project */}
                {project.demoUrl ? (
                    <div className="w-full rounded-2xl md:rounded-3xl border border-border mb-24 relative overflow-hidden reveal shadow-2xl bg-card" style={{ aspectRatio: '1140 / 541.25' }}>
                        <iframe
                            title="Interactive Demo"
                            className="w-full h-full absolute inset-0"
                            src={project.demoUrl}
                            frameBorder="0"
                            allowFullScreen={true}>
                        </iframe>
                    </div>
                ) : project.video ? (
                    <div className="aspect-video w-full rounded-2xl md:rounded-3xl border border-border mb-24 relative overflow-hidden reveal shadow-2xl bg-black">
                        <video
                            src={project.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                ) : (
                    <div
                        className="aspect-video w-full rounded-2xl md:rounded-3xl border border-border mb-24 relative overflow-hidden reveal shadow-2xl"
                        style={{ background: project.gradient }}
                    >
                        <div className="absolute inset-0 grain opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8 text-white/90">
                            <div className="font-mono text-xs uppercase tracking-widest mb-2 opacity-70">
                                Metrics
                            </div>
                            <div className="text-2xl font-medium tracking-tight">
                                {project.metric}
                            </div>
                        </div>
                    </div>
                )}

                <div className="max-w-3xl ml-auto md:mr-24 text-lg md:text-xl text-muted-foreground leading-relaxed space-y-12 reveal pb-20">
                    {typeof project.content === 'string' ? (
                        <>
                            <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
                                Overview
                            </div>
                            <p>
                                {project.content}
                            </p>
                        </>
                    ) : (
                        project.content.map((section, idx) => (
                            <div key={idx} className="space-y-4">
                                <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
                                    {section.title}
                                </div>
                                {Array.isArray(section.body) ? (
                                    <ul className="list-disc pl-6 space-y-2">
                                        {section.body.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                ) : section.body ? (
                                    <p className="whitespace-pre-wrap">{section.body}</p>
                                ) : null}

                                {section.fileDownload && (
                                    <div className="mt-6 mb-8">
                                        <a
                                            href={section.fileDownload.url}
                                            download
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg border border-border"
                                        >
                                            <Download className="w-4 h-4" />
                                            {section.fileDownload.label}
                                        </a>
                                    </div>
                                )}

                                {section.demoUrl && (
                                    <div className="w-full rounded-2xl border border-border mt-8 relative overflow-hidden shadow-xl bg-card" style={{ aspectRatio: '1140 / 541.25' }}>
                                        <iframe
                                            title={section.title}
                                            className="w-full h-full absolute inset-0"
                                            src={section.demoUrl}
                                            frameBorder="0"
                                            allowFullScreen={true}>
                                        </iframe>
                                    </div>
                                )}
                                {section.video && (
                                    <div className="aspect-video w-full rounded-2xl border border-border mt-8 relative overflow-hidden shadow-xl bg-black">
                                        <video
                                            src={section.video}
                                            controls
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}
