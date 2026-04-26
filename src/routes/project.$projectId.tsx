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

            <main className="flex-1 px-6 md:px-10 w-full py-12 md:py-20 mb-20 relative">
                <div className="max-w-5xl mx-auto w-full">
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
                                    className="text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 rounded border border-border text-foreground hover:border-accent/60 hover:text-accent transition-colors"
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
                        <div className="w-full rounded border border-border mb-24 relative overflow-hidden reveal shadow-2xl bg-card" style={{ aspectRatio: '1140 / 541.25' }}>
                            <iframe
                                title="Interactive Demo"
                                className="w-full h-full absolute inset-0"
                                src={project.demoUrl}
                                frameBorder="0"
                                allowFullScreen={true}>
                            </iframe>
                        </div>
                    ) : project.video ? (
                        <div className="aspect-video w-full rounded border border-border mb-24 relative overflow-hidden reveal shadow-2xl bg-black">
                            <video
                                src={project.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ) : null}

                    <div className="w-full text-lg md:text-xl text-muted-foreground leading-relaxed space-y-16 pb-20">
                        {typeof project.content === 'string' ? (
                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 md:gap-12 reveal">
                                <div className="font-mono text-sm uppercase tracking-[0.2em] text-accent font-normal pt-1">
                                    Overview
                                </div>
                                <div className="space-y-6">
                                    <p className="whitespace-pre-wrap">
                                        {project.content}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            project.content.map((section, idx) => {
                                const isSessionTitle = section.title.toLowerCase().startsWith("section") || section.title.toLowerCase().startsWith("dashboard") || section.title.toLowerCase().startsWith("workflow");

                                return (
                                    <div key={idx} className={isSessionTitle ? "reveal mt-20 mb-8" : "grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 md:gap-12 reveal"}>
                                        {isSessionTitle ? (
                                            <div className="text-xl md:text-2xl font-bold text-white tracking-tight mb-8 whitespace-nowrap">
                                                {section.title}
                                            </div>
                                        ) : (
                                            <div className="font-mono text-sm uppercase tracking-[0.2em] text-accent font-normal pt-1">
                                                {section.title}
                                            </div>
                                        )}
                                        <div className="space-y-6">
                                            {Array.isArray(section.body) ? (
                                                <ul className="list-disc pl-6 space-y-3">
                                                    {section.body.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            ) : section.body ? (
                                                <p className="whitespace-pre-wrap">{section.body}</p>
                                            ) : null}

                                            {section.fileDownload && (
                                                <div className="mt-4 mb-8">
                                                    <a
                                                        href={section.fileDownload.url}
                                                        download
                                                        className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors underline underline-offset-4"
                                                    >
                                                        <Download className="w-4 h-4" />
                                                        {section.fileDownload.label}
                                                    </a>
                                                </div>
                                            )}

                                            {section.demoUrl && (
                                                <div className="mt-8 mb-8">
                                                    <div className="w-full rounded border border-border relative overflow-hidden shadow-xl bg-card" style={{ aspectRatio: '1140 / 541.25' }}>
                                                        <iframe
                                                            title={section.title}
                                                            className="w-full h-full absolute inset-0"
                                                            src={section.demoUrl}
                                                            frameBorder="0"
                                                            allowFullScreen={true}>
                                                        </iframe>
                                                    </div>
                                                    {section.demoNote && (
                                                        <p className="mt-4 text-sm text-muted-foreground italic">
                                                            {section.demoNote}
                                                        </p>
                                                    )}
                                                </div>
                                            )}
                                            {section.video && (
                                                <div className={`aspect-video w-full rounded-2xl border border-border relative overflow-hidden shadow-xl bg-black ${!isSessionTitle ? 'mt-8' : ''}`}>
                                                    <video
                                                        src={section.video}
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}
                                            {section.image && (
                                                <div className={`w-full rounded-2xl border border-border relative overflow-hidden shadow-xl bg-card ${!isSessionTitle ? 'mt-8' : ''}`}>
                                                    <img
                                                        src={typeof section.image === 'string' ? section.image : section.image.url}
                                                        alt={typeof section.image === 'string' ? section.title : (section.image.alt || section.title)}
                                                        className="w-full h-auto object-cover rounded"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
