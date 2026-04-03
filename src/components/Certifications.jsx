import { useFadeUp } from '../hooks/useFadeUp';
import { certifications } from '../data';

export default function Certifications() {
  const headerRef = useFadeUp();
  const gridRef = useFadeUp();

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header fade-up" ref={headerRef}>
          <h2 className="section-title">Certifications</h2>
          <div className="section-line" />
        </div>

        <div className="certs-grid fade-up" ref={gridRef}>
          {certifications.map((c, i) => (
            <div key={i} className="cert-card glass-panel cert-card-enhanced">
              <div className="cert-glow-bar" />
              <div className="cert-header">
                <div className="cert-icon cert-icon-enhanced">
                  <i className={c.icon} />
                </div>
                <div className="cert-info">
                  <h3>{c.title}</h3>
                  <div className="issuer">
                    <i className="fas fa-building" style={{ marginRight: '5px', opacity: 0.6 }} />
                    {c.issuer}
                  </div>
                </div>
              </div>
              <div className="cert-body">
                <div className="skill-tags">
                  {c.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
                </div>
                {c.credentialUrl && (
                  <a
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-view-btn"
                  >
                    <i className="fas fa-certificate" />
                    View Certificate
                    <i className="fas fa-arrow-up-right-from-square cert-btn-arrow" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="cert-card glass-panel ongoing-card ongoing-card-enhanced">
          <div className="ongoing-header">
            <div className="cert-icon cert-icon-enhanced ongoing-icon">
              <i className="fas fa-graduation-cap" />
            </div>
            <div className="cert-info">
              <h3>Continuous Learning Journey</h3>
              <div className="issuer">
                <i className="fas fa-building" style={{ marginRight: '5px', opacity: 0.6 }} />
                MicroDegree | 2026
              </div>
            </div>
          </div>
          <div className="cert-body">
            <ul className="learning-list">
              <li className="completed">
                <span className="learning-badge completed-badge"><i className="fas fa-check" /></span>
                AWS Cloud &amp; Architecture
              </li>
              <li className="completed">
                <span className="learning-badge completed-badge"><i className="fas fa-check" /></span>
                DevOps Engineering
              </li>
              <li className="upcoming">
                <span className="learning-badge upcoming-badge"><i className="fas fa-clock" /></span>
                Generative AI &amp; LLM Applications
                <span className="next-tag">Next</span>
              </li>
            </ul>
            <div className="skill-tags" style={{ marginTop: '16px' }}>
              {["AWS EC2", "S3", "IAM", "Docker", "Kubernetes", "Jenkins", "CI/CD"].map(t => (
                <span key={t} className="skill-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
