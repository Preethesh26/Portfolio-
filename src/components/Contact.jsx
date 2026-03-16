import { useFadeUp } from '../hooks/useFadeUp';

export default function Contact() {
  const headerRef = useFadeUp();
  const wrapperRef = useFadeUp();

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header fade-up" ref={headerRef}>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line" />
        </div>
        <div className="contact-wrapper fade-up" ref={wrapperRef}>
          <div className="contact-info glass-panel">
            <h3>Let's Connect</h3>
            <p>I'm currently looking for entry-level opportunities in software development and AI. Feel free to reach out!</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope" />
                <span>kulalpreethesh20@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt" />
                <span>Bantwal, Karnataka</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone-alt" />
                <span>+91 8147357126</span>
              </div>
            </div>
            <div className="social-links big-socials">
              <a href="https://github.com/Preethesh26" target="_blank" rel="noreferrer" className="social-icon">
                <i className="fab fa-github" />
              </a>
              <a href="https://linkedin.com/in/preethesh26" target="_blank" rel="noreferrer" className="social-icon">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="mailto:kulalpreethesh20@gmail.com" className="social-icon">
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>

          <form action="https://formspree.io/f/mdakqpab" method="POST" className="contact-form glass-panel">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your message here..." required />
            </div>
            <button type="submit" className="btn btn-primary full-width">
              Send Message <i className="fas fa-paper-plane" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
