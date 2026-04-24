import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Work } from "@/components/portfolio/Work";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Portfolio — Building systems, workflows & ideas that scale" },
      {
        name: "description",
        content:
          "Personal portfolio of a young builder focused on product, operations, automation, and strategic problem solving.",
      },
      { property: "og:title", content: "Portfolio — Systems, Workflows & Ideas that Scale" },
      {
        property: "og:description",
        content:
          "Turning messy problems into structured execution through product thinking, operations, and automation.",
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased grain">
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
