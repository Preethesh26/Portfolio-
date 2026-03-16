import { useFadeUp } from '../hooks/useFadeUp';

export default function Resume() {
  const headerRef = useFadeUp();
  const contentRef = useFadeUp();

  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="section-header fade-up" ref={headerRef}>
          <h2 className="section-title">Resume</h2>
          <div className="section-line" />
        </div>
        <div className="resume-content fade-up glass-panel" ref={contentRef}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '3rem' }}>
          <p style={{ marginBottom: '2rem' }}>
            I'm actively seeking opportunities to apply my skills in full-stack development and AI—view or download my resume below.
          </p>
          <div className="resume-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/assets/PREETHESH_RESUME.pdf" target="_blank" rel="noreferrer" className="btn btn-outline">
              <i className="fas fa-eye" /> Live Preview
            </a>
            <a href="/assets/PREETHESH_RESUME.pdf" download className="btn btn-primary">
              <i className="fas fa-download" /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
