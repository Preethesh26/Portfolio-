import { Link } from 'react-router-dom';
import { useFadeUp } from '../hooks/useFadeUp';
import { projects } from '../data';

function ProjectLink({ l, i }) {
  if (l.internal) {
    return <Link key={i} to={l.href} className="icon-btn" title={l.title}><i className={l.icon} /></Link>;
  }
  return <a key={i} href={l.href} target="_blank" rel="noreferrer" className="icon-btn" title={l.title}><i className={l.icon} /></a>;
}

function FeaturedProject({ p }) {
  const ref = useFadeUp();
  const accentColor = p.badgeColor || 'var(--primary)';

  return (
    <div className="project-card fade-up featured-project" ref={ref} style={{ gridColumn: '1 / -1', marginBottom: '2rem' }}>
      <div className="project-image">
        <img src={p.image} alt={p.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div className="project-overlay">
          <div className="project-links">
            {p.links.map((l, i) => <ProjectLink key={i} l={l} i={i} />)}
          </div>
        </div>
      </div>
      <div className="project-info">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <div className="badge-highlight" style={{ display: 'inline-block', background: accentColor, padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', color: '#fff' }}>
            {p.badge}
          </div>
          {p.underDevelopment && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(230,126,34,0.12)', border: '1px solid rgba(230,126,34,0.4)', padding: '0.25rem 0.7rem', borderRadius: '4px', fontSize: '0.78rem', color: '#e67e22', fontWeight: 600 }}>
              🚧 Under Development
            </div>
          )}
        </div>
        <h3 className="project-title" style={{ fontSize: '1.8rem', marginTop: '0.5rem' }}>{p.title}</h3>
        <p className="project-desc" style={{ fontSize: '1rem', lineHeight: 1.6 }}>{p.desc}</p>

        {p.features && (
          <div className="project-features" style={{ margin: '1.5rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {p.features.map((f, i) => (
              <div key={i} className="feature-item">
                <i className={f.icon} style={{ color: f.color || accentColor }} />
                <strong> {f.label}:</strong> {f.detail}
              </div>
            ))}
          </div>
        )}

        {p.demo && (
          <div className="demo-credentials glass-panel" style={{ padding: '1rem', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '0.5rem', color: 'var(--accent)' }}>{p.demo.label}</h4>
            <p style={{ margin: 0, fontFamily: 'monospace' }}>{p.demo.creds}</p>
          </div>
        )}

        {p.adminNote && (
          <div className="admin-note glass-panel" style={{ padding: '1rem', marginBottom: '1.5rem', background: 'rgba(255,159,67,0.1)', border: '1px solid rgba(255,159,67,0.3)', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '0.5rem', color: '#ff9f43' }}><i className="fas fa-lock" /> Administrative Access</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>To protect system integrity, full admin credentials are not public.</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              <strong>Important:</strong> Interested in a full technical walkthrough? Please{' '}
              <a href="https://linkedin.com/in/preethesh26" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>Contact Me on LinkedIn</a>{' '}
              or email me at{' '}
              <a href="mailto:kulalpreethesh20@gmail.com" style={{ color: 'var(--primary)' }}>kulalpreethesh20@gmail.com</a> for private credentials.
            </p>
            <p style={{ fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.8 }}>Note: The Admin demo is in Read-Only Mode to protect live data.</p>
          </div>
        )}

        {p.architecture && (
          <div className="architecture-flow glass-panel" style={{ padding: '1rem', marginBottom: '1.5rem', background: 'rgba(46,204,113,0.1)', border: '1px solid rgba(46,204,113,0.3)', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '0.5rem', color: '#2ecc71' }}><i className="fas fa-sitemap" /> System Architecture</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', fontSize: '0.9rem' }}>
              {p.architecture.map((step, i) => (
                <span key={i}>
                  {step}
                  {i < p.architecture.length - 1 && <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem', opacity: 0.5, margin: '0 0.25rem' }} />}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="project-tech">
          {p.tech.map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p }) {
  const ref = useFadeUp();

  return (
    <div className="project-card fade-up" ref={ref}>
      <div className="project-image" style={{ height: '200px', overflow: 'hidden' }}>
        <img src={p.image} alt={p.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', ...(p.imgStyle || {}) }} />
        <div className="project-overlay">
          <div className="project-links">
            {p.links.map((l, i) => <ProjectLink key={i} l={l} i={i} />)}
          </div>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{p.title}</h3>
        <p className="project-desc">{p.desc}</p>
        <div className="project-tech">
          {p.tech.map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useFadeUp();
  const viewAllRef = useFadeUp();
  const featured = projects.filter(p => p.featured);
  const regular = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header fade-up" ref={headerRef}>
          <h2 className="section-title">Featured Work</h2>
          <div className="section-line" />
        </div>
        <div className="projects-grid">
          {featured.map((p, i) => <FeaturedProject key={i} p={p} />)}
          {regular.map((p, i) => <ProjectCard key={i} p={p} />)}
        </div>
        <div className="view-all-container fade-up" ref={viewAllRef}>
          <a href="https://github.com/Preethesh26" target="_blank" rel="noreferrer" className="btn btn-outline">
            View All Projects <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </section>
  );
}
