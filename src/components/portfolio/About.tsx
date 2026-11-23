import BookCarousel3D from "@/components/ui/cue-3d-book-carousel-reading-mode";

const chapters = [
  {
    id: "introduction",
    title: "Curious about people. Fascinated by possibilities.",
    paragraphs: [
      "I'm someone who enjoys exploring how people think, how businesses work, and how technology shapes the world around us. I'm drawn to complex problems, unfamiliar perspectives, and the possibilities that emerge when different disciplines come together.",
      "Studying International Commerce and Applied Information Engineering at Yonsei University has given me two lenses through which to understand the world: business and technology. More importantly, it has taught me to look beyond individual disciplines and explore how they intersect.",
      "I believe meaningful progress begins with curiosity — asking questions, challenging what we take for granted, and staying open to possibilities we haven't discovered yet.",
    ],
  },
  {
    id: "journey",
    title: "Persistent in direction. Flexible in path.",
    paragraphs: [
      "I see understanding oneself as a long and layered process — shaped by experiences, experiments, and sometimes unexpected turns.",
      "My journey has taken me across different environments, from marketing and community operations to product management and entrepreneurship. At every stage, I approach new experiences with a hypothesis: something I want to explore, a capability I want to develop, or a question I want to find answers to.",
      "Not every path is immediately clear, and not every experience leads where I initially expect. But I believe in connecting the dots — trusting that seemingly unrelated experiences can reveal their meaning over time, often in ways I couldn't have anticipated.",
      "I'm persistent in what I seek, yet flexible in how I get there. I want to remain open to changing perspectives, discovering unexpected paths, and recognizing opportunities beyond what I can currently see.",
      "For now, I'll keep exploring, questioning, and building — staying hungry and foolish enough to never stop discovering what's possible.",
    ],
  },
  {
    id: "beyond-work",
    title: "A life driven by curiosity.",
    paragraphs: [
      "Beyond work and technology, I find inspiration in history, books, philosophy, and the stories behind people and ideas.",
      "I'm fascinated by how civilizations evolve, how ideas shape human behavior, and how decisions made in the past continue to influence the present. Exploring different perspectives and questioning what I encounter are ways I continuously expand how I see the world.",
      "I believe curiosity shouldn't stop where professional work begins or ends. It's what keeps me learning, questioning, and imagining what could be possible.",
    ],
  },
];

const books = [
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    cover: "steve-jobs.jpg",
    spineColor: "#FFFFFF",
  },
  {
    title: "Kane and Abel",
    author: "Jeffrey Archer",
    cover: "hai-so-phan.webp",
    spineColor: "#D8C594",
  },
  {
    title: "Elon Musk",
    author: "Ashlee Vance",
    cover: "elon-musk.jpg",
    spineColor: "#151A21",
    spineTextColor: "#FFFFFF",
  },
];

export function About() {
  return (
    <section id="about" className="about-section chapter">
      <div className="editorial-container">
        <header className="narrative-heading">
          <h2 className="section-title">Who I am</h2>
          <p>The person behind the work.</p>
        </header>
        <div className="identity-grid identity-grid--narrative">
          <figure className="portrait">
            <img
              src={`${import.meta.env.BASE_URL}photo.jpg`}
              alt="Trần Lâm Minh Thư"
              loading="lazy"
            />
            <figcaption>
              TRẦN LÂM MINH THƯ
              <br />
              <span>Curious thinker · Builder · Seoul, KR</span>
            </figcaption>
          </figure>
          {chapters.map((chapter) => (
            <article id={chapter.id} className="nb-panel" key={chapter.id}>
              <div className="narrative-card-heading">
                <h3>{chapter.title}</h3>
              </div>
              <div className="identity-prose">
                {chapter.paragraphs.map((paragraph, index) => (
                  <p
                    id={chapter.id === "introduction" && index === 1 ? "background" : undefined}
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {chapter.id === "beyond-work" && (
                <div id="ideas" className="personal-books">
                  <h4>A Shelf of Influences</h4>
                  <p className="cue-intro">
                    Books that shaped how I see people, ideas, and possibilities.
                  </p>
                  <BookCarousel3D books={books} />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
