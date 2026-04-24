import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
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
                {project.video ? (
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

                <div className="max-w-3xl ml-auto md:mr-24 text-lg md:text-xl text-muted-foreground leading-relaxed space-y-8 reveal">
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
                        Overview
                    </div>
                    <p>
                        {project.content}
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </main>
        </div>
    );
}
