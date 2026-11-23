import { useRef, useState } from "react";
import example from "@/data/thinking.json";
import "./thinking.css";

export type ThinkingExample = typeof example;
export function Skills({ data = example }: { data?: ThinkingExample }) {
  const [active, setActive] = useState<number | null>(null);
  const [visited, setVisited] = useState<number[]>([]);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const select = (index: number, focus = false) => {
    setActive(index);
    setVisited((previous) =>
      previous.includes(index) ? previous : [...previous, index].sort((a, b) => a - b),
    );
    if (focus) tabs.current[index]?.focus();
  };
  const count = data.lenses.length;
  return (
    <section id="thinking" className="skills-section chapter thinking-story">
      <div className="editorial-container">
        <header className="lens-heading">
          <h2 className="section-title">How I think</h2>
          <p>
            One real problem. Five lenses.{" "}
            <span className="lens-hint">— see how each one changed the decision</span>
          </p>
        </header>
        <div className="lens-problem">
          <span className="lens-label">The problem</span>
          <blockquote>“{data.problem}”</blockquote>
          <p>Sounds simple. Here's what happened when I looked at it from five angles.</p>
        </div>
        <div className="lens-tabs" role="tablist" aria-label="Five lenses on the problem">
          {data.lenses.map((lens, index) => (
            <button
              key={lens.title}
              id={`lens-tab-${index}`}
              ref={(element) => {
                tabs.current[index] = element;
              }}
              role="tab"
              type="button"
              aria-selected={active === index}
              aria-controls={`lens-panel-${index}`}
              tabIndex={index === (active ?? 0) ? 0 : -1}
              data-visited={visited.includes(index)}
              onClick={() => select(index)}
              onKeyDown={(event) => {
                let next = index;
                if (event.key === "ArrowRight") next = (index + 1) % count;
                else if (event.key === "ArrowLeft") next = (index + count - 1) % count;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = count - 1;
                else return;
                event.preventDefault();
                select(next, true);
              }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {lens.title}
            </button>
          ))}
        </div>
        {active === null && (
          <div className="lens-start">
            <p>Start with a question.</p>
            <button className="lens-button" onClick={() => select(0, true)}>
              Explore the first lens <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
        {data.lenses.map((lens, index) => (
          <div
            key={lens.title}
            id={`lens-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`lens-tab-${index}`}
            tabIndex={0}
            hidden={active !== index}
            className="lens-panel"
          >
            <h3>{lens.question}</h3>
            <div className="lens-comparison">
              <div className="lens-without">
                <span className="lens-label">Without this lens</span>
                <p>
                  <s>{lens.without}</s>
                </p>
              </div>
              <span className="lens-arrow" aria-hidden="true">
                →
              </span>
              <div className="lens-with">
                <span className="lens-label">With it</span>
                <p>{lens.with}</p>
                <span className="lens-artifact">Artifact: {lens.artifact}</span>
              </div>
            </div>
            <nav className="lens-paging" aria-label="Move between lenses">
              <button
                className="lens-button"
                disabled={index === 0}
                onClick={() => select(index - 1, true)}
              >
                ← Prev lens
              </button>
              <span>
                {index + 1} / {count}
              </span>
              <button
                className="lens-button"
                disabled={index === count - 1}
                onClick={() => select(index + 1, true)}
              >
                Next lens →
              </button>
            </nav>
          </div>
        ))}
        <div className="lens-trail" aria-live="polite">
          <header>
            <span className="lens-label">Decision trail</span>
            <span>
              {visited.length} / {count} lenses
            </span>
          </header>
          {visited.length ? (
            <ol>
              {visited.map((index) => (
                <li key={index}>
                  <span>
                    {String(index + 1).padStart(2, "0")} {data.lenses[index].trailStep}
                  </span>
                </li>
              ))}
            </ol>
          ) : (
            <p>Each lens you open adds a decision here.</p>
          )}
        </div>
        {count > 0 && visited.length === count && (
          <div className="lens-result">
            <span className="lens-label">Result</span>
            <h3>{data.result}</h3>
            <a className="lens-button" href={`${import.meta.env.BASE_URL}${data.caseStudyHref}`}>
              Read the case study →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
