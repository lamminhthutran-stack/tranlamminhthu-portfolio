import { Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { resolveAsset } from "@/lib/utils";
export function Work() {
  return (
    <section id="work" className="work-section chapter">
      <div className="editorial-container">
        <h2 className="section-title reveal">What I’ve built</h2>
        <div className="experience-grid">
          {[
            { name: "Veasyble", id: "veasyble" },
            { name: "Historophile", id: "historophile" },
            { name: "Project X", id: "project-x" },
            { name: "SEO-Vietnam", id: "seo-vietnam" },
            { name: "W Korea", id: "w-korea" },
          ].map((item, index) => (
            <article
              id={item.id}
              className={`experience-card ${item.id === "project-x" ? "experience-feature" : ""}`}
              key={item.id}
            >
              <span className="eyebrow">
                0{index + 1} / {item.id === "project-x" ? "CASE STUDIES" : "COMING SOON"}
              </span>
              <h3>{item.name}</h3>
              {item.id === "project-x" ? (
                <>
                  <p>
                    Workflow design, partner reporting, and campaign operations for Project X
                    Vietnam.
                  </p>
                  <div className="experience-links">
                    {projects
                      .filter((p) => ["partner-reporting", "project-x-workflow"].includes(p.id))
                      .map((project) => (
                        <Link
                          key={project.id}
                          to="/project/$projectId"
                          params={{ projectId: project.id }}
                        >
                          {project.title}
                          <span aria-hidden="true">↗</span>
                        </Link>
                      ))}
                  </div>
                </>
              ) : (
                <p className="pending-note">Coming soon</p>
              )}
            </article>
          ))}
        </div>
        <div className="more-projects-heading">
          <h3>More projects</h3>
          <span className="eyebrow">AUTOMATION / OPERATIONS / DATA</span>
        </div>
        <div className="project-list">
          {projects
            .filter((project) => !["partner-reporting", "project-x-workflow"].includes(project.id))
            .map((project) => {
              const section = Array.isArray(project.content)
                ? project.content.find((s) => s.image)
                : undefined;
              const image = section?.image;
              const src = typeof image === "string" ? image : image?.url;
              return (
                <Link
                  to="/project/$projectId"
                  params={{ projectId: project.id }}
                  key={project.id}
                  className="project-row reveal"
                >
                  <span className="project-number">{project.n}</span>
                  <div className="project-copy">
                    <h3>{project.title}</h3>
                    <p>{project.impact}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  {src && (
                    <div className="project-thumbnail">
                      <img
                        src={resolveAsset(src)}
                        alt={typeof image === "object" ? image.alt || project.title : project.title}
                        loading="lazy"
                      />
                    </div>
                  )}
                  <span className="project-end">
                    <span>{project.year}</span>
                    <span className="project-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </span>
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}
