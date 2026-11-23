export function Hero() {
  return (
    <section id="top" className="editorial-hero" aria-label="Introduction">
      <div className="hero-content">
        <div className="hero-kicker">HUMAN-CENTERED THINKER. CURIOUS BUILDER.</div>
        <h1 className="hero-title">
          Humanity,
          <br />
          <span>with technology.</span>
        </h1>
        <div className="hero-summary">
          <p>
            I explore the intersection of people, business, and technology — turning complex
            possibilities into meaningful solutions that empower people and create lasting impact.
          </p>
        </div>
      </div>
      <div className="hero-bottom">
        <a href="#work" className="btn">
          Explore my work <span aria-hidden="true">↘</span>
        </a>
        <span className="hero-signature">SOCIETY. TECHNOLOGY. BUSINESS.</span>
      </div>
    </section>
  );
}
