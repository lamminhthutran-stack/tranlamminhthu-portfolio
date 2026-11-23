export function Footer() {
  return (
    <footer id="contact" className="contact-section chapter">
      <div className="editorial-container">
        <div className="contact-main">
          <div>
            <h2 className="section-title">Let’s connect</h2>
            <p className="contact-intro">
              Have a project, a question, or an opportunity in mind? I’d love to hear from you.
            </p>
            <a href="mailto:lamminhthutran@gmail.com" className="lq-pill contact-button">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="footer-details">
          <div>
            <span className="eyebrow">EMAIL</span>
            <a href="mailto:lamminhthutran@gmail.com">lamminhthutran@gmail.com</a>
          </div>
          <div>
            <span className="eyebrow">LINKEDIN</span>
            <a href="https://www.linkedin.com/in/haileythutran/">LinkedIn ↗</a>
          </div>
          <div>
            <span className="eyebrow">RESUME</span>
            <span className="pending-note">Coming soon</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Minh Thư</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
