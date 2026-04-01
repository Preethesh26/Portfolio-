import { Link } from 'react-router-dom';

export default function AcademyProV2Detail() {
  return (
    <div className="pd-page">
      <div className="pd-container">

        <div className="pd-header">
          <div className="pd-badge" style={{ background: '#e67e22' }}> Version 2 — DevOps + Multi-Tenant Edition</div>
          <h1>AcademyPro v2 — DevOps Edition</h1>
          <p className="pd-subtitle">Evolved from v1 with a real-world DevOps pipeline, multi-tenant architecture, and enterprise-grade security</p>
          <div className="pd-meta">
            <span><i className="fab fa-docker" /> Docker</span>
            <span><i className="fas fa-code-branch" /> GitHub Actions CI/CD</span>
            <span><i className="fas fa-rocket" /> Vercel + Render</span>
            <span><i className="fas fa-building" /> Multi-Tenant</span>
            <span><i className="fas fa-shield-alt" /> Triple-Step Auth + 2FA</span>
          </div>
        </div>

        <div className="pd-section">
          <h2> Live Links</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="https://academypro-official.vercel.app" target="_blank" rel="noreferrer"
              style={{ background: 'rgba(230,126,34,0.15)', border: '1px solid rgba(230,126,34,0.4)', padding: '0.5rem 1.2rem', borderRadius: '8px', color: '#e67e22', textDecoration: 'none', fontWeight: 600 }}>
              <i className="fas fa-external-link-alt" /> Live App (v2)
            </a>
            <a href="https://github.com/Preethesh26/lms-platform-devops" target="_blank" rel="noreferrer"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', padding: '0.5rem 1.2rem', borderRadius: '8px', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
              <i className="fab fa-github" /> GitHub (v2)
            </a>
            <a href="https://academypro-official-v1.vercel.app" target="_blank" rel="noreferrer"
              style={{ background: 'rgba(100,100,255,0.1)', border: '1px solid rgba(100,100,255,0.3)', padding: '0.5rem 1.2rem', borderRadius: '8px', color: '#a0a0ff', textDecoration: 'none', fontWeight: 600 }}>
              <i className="fas fa-external-link-alt" /> Live App (v1)
            </a>
            <a href="https://github.com/Preethesh26/lms-platform" target="_blank" rel="noreferrer"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.5rem 1.2rem', borderRadius: '8px', color: '#888', textDecoration: 'none', fontWeight: 600 }}>
              <i className="fab fa-github" /> GitHub (v1)
            </a>
          </div>
        </div>

        <div className="pd-section">
          <h2> What is New in v2</h2>
          <div className="pd-contributions-grid">
            <div className="pd-card">
              <h3><span className="pd-dot" style={{ background: '#e67e22' }} />DevOps Pipeline</h3>
              <ul>
                <li>App containerized using Docker + docker-compose locally</li>
                <li>GitHub Actions CI/CD — lint, build, Docker push, auto-deploy on every push to main</li>
                <li>Docker Hub used as container registry (free tier)</li>
                <li>Frontend auto-deploys to Vercel on push to main</li>
                <li>Backend auto-deploys to Render via deploy hook</li>
                <li>Staging branch deploys to staging environment with separate DB</li>
                <li>Jenkinsfile for local CD pipeline (local k3s/Minikube)</li>
                <li>Kubernetes manifests (k8s/) for local cluster deployment</li>
              </ul>
            </div>
            <div className="pd-card">
              <h3><span className="pd-dot" style={{ background: '#e67e22' }} />Multi-Tenant Architecture</h3>
              <ul>
                <li>Platform Super Admin creates and manages organizations (ORG-001, ORG-002...)</li>
                <li>Each organization gets a unique auto-generated Organization ID</li>
                <li>Org Super Admin manages admins within their org</li>
                <li>Full data isolation — each org sees only their own data</li>
                <li>organizationId scoped to all models (User, Course, Quiz, Test, Payment, Progress)</li>
                <li>Org admin login requires Organization ID + email + password</li>
                <li>Portal passphrase gate per organization (set by platform super admin)</li>
              </ul>
            </div>
            <div className="pd-card">
              <h3><span className="pd-dot" style={{ background: '#e67e22' }} />Platform Super Admin</h3>
              <ul>
                <li>Separate login route: /superadmin/login</li>
                <li>Triple-step authentication: Secret Key to Passphrase to Email/Password</li>
                <li>Optional Step 4: 2FA (TOTP) via authenticator app</li>
                <li>Rate limiting: 5 failed attempts = 15 min lockout</li>
                <li>Super Admin Dashboard: create orgs, view stats, manage all organizations</li>
                <li>Org detail view: manage users and courses per org</li>
                <li>Full CRUD on organizations, org users, org courses</li>
                <li>Audit log for all super admin write operations</li>
              </ul>
            </div>
            <div className="pd-card">
              <h3><span className="pd-dot" style={{ background: '#e67e22' }} />Security Enhancements</h3>
              <ul>
                <li>Admin login gated behind portal passphrase (fetched from backend per org)</li>
                <li>ProtectedRoute component blocks direct URL access to admin panel</li>
                <li>AdminGate: org ID entry to passphrase verification to login form</li>
                <li>JWT extended with organizationId claim for org-scoped sessions</li>
                <li>requireOrgScope middleware auto-filters all DB queries by org</li>
                <li>requireSuperAdmin middleware blocks non-superadmin tokens</li>
                <li>Org admins cannot assign superadmin role to any user</li>
              </ul>
            </div>
            <div className="pd-card">
              <h3><span className="pd-dot" style={{ background: '#e67e22' }} />Environment Strategy</h3>
              <ul>
                <li>3 environments: local (lms_dev), staging (lms_staging), production (lms_production)</li>
                <li>All on MongoDB Atlas — different databases per environment</li>
                <li>GitHub Secrets for all credentials — never committed to repo</li>
                <li>Vercel env vars scoped per environment (Production vs Preview)</li>
                <li>Render separate services for staging and production</li>
                <li>v1 and v2 git tags for version tracking</li>
              </ul>
            </div>
            <div className="pd-card">
              <h3><span className="pd-dot" style={{ background: '#e67e22' }} />Observability</h3>
              <ul>
                <li>Prometheus metrics endpoint (/metrics) on backend using prom-client</li>
                <li>HTTP request counter, duration histogram, active connections gauge</li>
                <li>Kubernetes monitoring manifests: Prometheus + Grafana</li>
                <li>Pre-provisioned Grafana dashboard for HTTP rate, error rate, latency</li>
                <li>Prometheus alert rule for 5xx error rate above 5%</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pd-section">
          <h2> v1 vs v2 Comparison</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', opacity: 0.6 }}>Feature</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: 'var(--primary)' }}>v1</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#e67e22' }}>v2</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Deployment', 'Manual (Vercel + Render)', 'Automated CI/CD (GitHub Actions)'],
                  ['Containerization', 'None', 'Docker + docker-compose (local)'],
                  ['CI/CD', 'None', 'GitHub Actions pipeline'],
                  ['Container Registry', 'None', 'Docker Hub'],
                  ['Frontend Host', 'Vercel', 'Vercel (auto-deploy on push)'],
                  ['Backend Host', 'Render', 'Render (auto-deploy via hook)'],
                  ['Dev Environment', 'Local Node setup', 'Dockerized local environment'],
                  ['Multi-Tenancy', 'Single tenant', 'Multi-tenant with org isolation'],
                  ['Super Admin', 'Basic superadmin role', 'Platform super admin with triple-step auth + 2FA'],
                  ['Admin Login', 'Email + password', 'Org ID + passphrase gate + email + password'],
                  ['Database', 'Single DB', '3 DBs: lms_dev / lms_staging / lms_production'],
                  ['Monitoring', 'None', 'Prometheus + Grafana (K8s)'],
                  ['Kubernetes', 'None', 'Local k3s/Minikube manifests + Jenkinsfile'],
                  ['Audit Logging', 'None', 'AuditLog model for all super admin actions'],
                  ['Branch Strategy', 'main only', 'main (prod) + staging (test) + v1/v2 tags'],
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

        <div className="pd-section">
          <h2> Role Hierarchy</h2>
          <div className="pd-contributions-grid">
            {[
              { role: 'Platform Super Admin', color: '#e67e22', desc: 'Platform owner. Creates organizations, manages all data across all orgs. Triple-step + 2FA login at /superadmin/login.' },
              { role: 'Org Super Admin', color: '#3498db', desc: 'Created per organization by the platform super admin. Manages admins within their org. Logs in via /admin/login with Org ID.' },
              { role: 'Org Admin', color: '#2ecc71', desc: 'Created by Org Super Admin. Manages users and courses within their organization.' },
              { role: 'Student / User', color: '#9b59b6', desc: 'Enrolled by admin or self-registered. Takes courses, quizzes, and tests.' },
            ].map(({ role, color, desc }) => (
              <div key={role} className="pd-card" style={{ borderLeft: `3px solid ${color}` }}>
                <h3 style={{ color }}>{role}</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pd-section">
          <h2> Carried Over from v1</h2>
          <div className="pd-contributions-grid">
            <div className="pd-card">
              <h3><span className="pd-dot" />Core LMS Features</h3>
              <ul>
                <li>Student portal with dashboard and video player</li>
                <li>Daily streak tracking and gamification (XP, levels)</li>
                <li>Standalone aptitude test engine with auto-grading</li>
                <li>Anti-cheat enforcement during tests</li>
                <li>Quiz system with course integration</li>
                <li>Certificate generation and download</li>
              </ul>
            </div>
            <div className="pd-card">
              <h3><span className="pd-dot" />Security and Auth</h3>
              <ul>
                <li>2FA (TOTP) for org admins</li>
                <li>Inactivity auto-lock for admin sessions</li>
                <li>Distinct Admin and Demo environments</li>
                <li>Parallel Universe Demo Mode (read-only)</li>
                <li>Impersonation (admin can view as student)</li>
                <li>Master unlock via super admin 2FA</li>
              </ul>
            </div>
            <div className="pd-card">
              <h3><span className="pd-dot" />Notifications and Integrations</h3>
              <ul>
                <li>Email notifications via Brevo API</li>
                <li>Welcome credentials on enrollment</li>
                <li>Support ticket system with inbox</li>
                <li>Google Sheets sync for user data</li>
                <li>Gemini AI integration</li>
                <li>Cloudflare R2 for file storage</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pd-section">
          <h2> Demo Access</h2>
          <div className="pd-card" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '1rem' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '0.95rem', opacity: 0.7 }}>Student Demo</h3>
            <p style={{ fontFamily: 'monospace', fontSize: '0.95rem', margin: 0 }}>
              Email: demo-student@academypro.com<br />
              Password: demo123
            </p>
          </div>
          <div className="pd-card" style={{ background: 'rgba(255,159,67,0.08)', border: '1px solid rgba(255,159,67,0.3)' }}>
            <h3 style={{ color: '#ff9f43', marginBottom: '0.5rem' }}><i className="fas fa-lock" /> Admin / Super Admin Access</h3>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Admin and Super Admin credentials are not public. Contact via{' '}
              <a href="https://linkedin.com/in/preethesh26" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>LinkedIn</a>{' '}
              or <a href="mailto:kulalpreethesh20@gmail.com" style={{ color: 'var(--primary)' }}>email</a> for a private walkthrough.
            </p>
          </div>
        </div>

        <div className="pd-section">
          <h2> Full Tech Stack</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Docker', 'docker-compose', 'GitHub Actions', 'Jenkins', 'Kubernetes (k3s)', 'Docker Hub', 'Vercel', 'Render', 'MongoDB Atlas', 'React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'JWT', 'bcryptjs', 'TOTP (otplib)', 'Prometheus', 'Grafana', 'prom-client', 'Brevo API', 'Gemini AI', 'Cloudflare R2', 'Google Sheets API'].map(t => (
              <span key={t} style={{ background: 'rgba(230,126,34,0.15)', border: '1px solid rgba(230,126,34,0.35)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.82rem' }}>{t}</span>
            ))}
          </div>
        </div>

        <div className="pd-section" style={{ textAlign: 'center' }}>
          <Link to="/#projects" className="btn btn-outline">
            <i className="fas fa-arrow-left" /> Back to Projects
          </Link>
        </div>

      </div>
    </div>
  );
}
