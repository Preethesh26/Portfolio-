import { Link } from 'react-router-dom';

export default function AcademyProV2Detail() {
  return (
    <div className="pd-page">
      <div className="pd-container">

        {/* Header */}
        <div className="pd-header">
          <div className="pd-badge" style={{ background: '#e67e22' }}>⚙️ Version 2 — DevOps Edition</div>
          <h1>AcademyPro v2 — DevOps Edition</h1>
          <p className="pd-subtitle">Evolved from v1 with a real-world DevOps workflow + advanced features</p>
          <div className="pd-meta">
            <span><i className="fab fa-docker" /> Docker</span>
            <span><i className="fas fa-code-branch" /> GitHub Actions</span>
            <span><i className="fas fa-rocket" /> Netlify + Render</span>
          </div>
        </div>

        {/* What Changed from v1 to v2 */}
        <div className="pd-section">
          <h2>🔄 What Changed from v1 → v2</h2>
          <div className="pd-contributions-grid">

            <div className="pd-card">
              <h3><span className="pd-dot" style={{ background: '#e67e22' }} />DevOps Layer Added</h3>
              <ul>
                <li>App containerized using Docker and docker-compose locally</li>
                <li>GitHub Actions CI/CD pipeline set up for automated builds and deployments</li>
                <li>Frontend auto-deploys to Netlify on every push to main</li>
                <li>Backend auto-deploys to Render via GitHub Actions</li>
                <li>Environment-based config separation (dev vs production)</li>
              </ul>
            </div>

            <div className="pd-card">
              <h3><span className="pd-dot" style={{ background: '#e67e22' }} />Deployment Architecture</h3>
              <ul>
                <li>v1 — Manual deployments on Vercel + Render</li>
                <li>v2 — Fully automated via GitHub Actions CI/CD</li>
                <li>Docker used locally for consistent dev environment</li>
                <li>No environment mismatch between dev and production</li>
              </ul>
            </div>

            <div className="pd-card pd-card-wide">
              <h3><span className="pd-dot" style={{ background: '#e67e22' }} />CI/CD Pipeline Flow</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', margin: '0.75rem 0', fontSize: '0.95rem' }}>
                {['Code Push to GitHub', 'GitHub Actions Triggered', 'Build & Test', 'Deploy Frontend → Netlify', 'Deploy Backend → Render'].map((step, i, arr) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ background: 'rgba(230,126,34,0.15)', border: '1px solid rgba(230,126,34,0.4)', padding: '0.3rem 0.7rem', borderRadius: '6px' }}>{step}</span>
                    {i < arr.length - 1 && <i className="fas fa-arrow-right" style={{ opacity: 0.5 }} />}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* v1 vs v2 Comparison */}
        <div className="pd-section">
          <h2>📊 v1 vs v2 Comparison</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', opacity: 0.6 }}>Feature</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: 'var(--primary)' }}>v1</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#e67e22' }}>v2</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Deployment', 'Manual (Vercel + Render)', 'Automated CI/CD (Netlify + Render)'],
                  ['Containerization', 'None', 'Docker + docker-compose (local)'],
                  ['CI/CD', 'None', 'GitHub Actions pipeline'],
                  ['Frontend Host', 'Vercel', 'Netlify'],
                  ['Backend Host', 'Render', 'Render (auto-deploy)'],
                  ['Dev Environment', 'Local Node setup', 'Dockerized local environment'],
                  ['Build Process', 'Manual build & push', 'Automated on every git push'],
                ].map(([feature, v1, v2], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', opacity: 0.7 }}>{v1}</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#e67e22' }}>{v2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Inherited from v1 */}
        <div className="pd-section">
          <h2>✅ Carried Over from v1</h2>
          <div className="pd-contributions-grid">
            <div className="pd-card">
              <h3><span className="pd-dot" />Core LMS Features</h3>
              <ul>
                <li>Student portal with dashboard and video player</li>
                <li>Daily streak tracking</li>
                <li>Standalone aptitude test engine with auto-grading</li>
                <li>Anti-cheat enforcement during tests</li>
              </ul>
            </div>
            <div className="pd-card">
              <h3><span className="pd-dot" />Security & Auth</h3>
              <ul>
                <li>2FA (TOTP) authentication</li>
                <li>Inactivity auto-lock</li>
                <li>Distinct Admin and Demo environments</li>
                <li>Parallel Universe Demo Mode</li>
              </ul>
            </div>
            <div className="pd-card">
              <h3><span className="pd-dot" />Notifications & Access</h3>
              <ul>
                <li>Email notifications via Brevo API</li>
                <li>Welcome credentials on enrollment</li>
                <li>Support update alerts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className="pd-section">
          <h2>🔑 Demo Access (Same as v1)</h2>
          <div className="pd-card" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ fontFamily: 'monospace', fontSize: '1rem', margin: 0 }}>
              Email: demo-student@academypro.com<br />
              Password: student123<br />
              Enrollment ID: DEMO-001
            </p>
          </div>
          <div className="pd-card" style={{ marginTop: '1rem', background: 'rgba(255,159,67,0.08)', border: '1px solid rgba(255,159,67,0.3)' }}>
            <h3 style={{ color: '#ff9f43', marginBottom: '0.5rem' }}><i className="fas fa-lock" /> Admin Access</h3>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Admin credentials are not public. Contact via{' '}
              <a href="https://linkedin.com/in/preethesh26" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>LinkedIn</a>{' '}
              or <a href="mailto:kulalpreethesh20@gmail.com" style={{ color: 'var(--primary)' }}>email</a> for a private walkthrough.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="pd-section">
          <h2>🛠 Tech Stack</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Docker', 'docker-compose', 'GitHub Actions', 'Netlify', 'Render', 'React 19', 'TypeScript', 'Node.js', 'MongoDB', 'Redis', 'Brevo API'].map(t => (
              <span key={t} style={{ background: 'rgba(230,126,34,0.15)', border: '1px solid rgba(230,126,34,0.35)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Back */}
        <div className="pd-section" style={{ textAlign: 'center' }}>
          <Link to="/#projects" className="btn btn-outline">
            <i className="fas fa-arrow-left" /> Back to Projects
          </Link>
        </div>

      </div>
    </div>
  );
}
