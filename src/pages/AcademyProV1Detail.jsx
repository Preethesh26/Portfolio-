import { useNavigate } from 'react-router-dom';

export default function AcademyProV1Detail() {
  const navigate = useNavigate();
  return (
    <div className="pd-page">
      <div className="pd-container">

        {/* Back button */}
        <div style={{ marginBottom: '2rem', paddingTop: '1rem' }}>
          <button onClick={() => navigate(-1)}
            style={{ background: 'none', border: '1px solid rgba(255,255,255,0.15)', color: 'var(--text-secondary)', padding: '0.5rem 1.2rem', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <i className="fas fa-arrow-left" /> Back
          </button>
        </div>
        <div className="pd-section">
          <h2>🔗 Live Links</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="https://academypro-official-v1.vercel.app" target="_blank" rel="noreferrer"
              style={{ background: 'rgba(var(--primary-rgb),0.15)', border: '1px solid rgba(var(--primary-rgb),0.4)', padding: '0.5rem 1.2rem', borderRadius: '8px', color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>
              <i className="fas fa-external-link-alt" /> Live App (v1)
            </a>
            <a href="https://github.com/Preethesh26/lms-platform" target="_blank" rel="noreferrer"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', padding: '0.5rem 1.2rem', borderRadius: '8px', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
              <i className="fab fa-github" /> GitHub Repo
            </a>
            <Link to="/academypro-v2"
              style={{ background: 'rgba(230,126,34,0.1)', border: '1px solid rgba(230,126,34,0.3)', padding: '0.5rem 1.2rem', borderRadius: '8px', color: '#e67e22', textDecoration: 'none', fontWeight: 600 }}>
              <i className="fas fa-arrow-right" /> View v2 (DevOps Edition)
            </Link>
          </div>
        </div>

        {/* Core Features */}
        <div className="pd-section">
          <h2>✨ Core Features</h2>
          <div className="pd-contributions-grid">

            <div className="pd-card">
              <h3><span className="pd-dot" />Student Portal</h3>
              <ul>
                <li>Intelligent dashboard with enrolled courses overview</li>
                <li>Hybrid video player with progress tracking</li>
                <li>Daily streak tracking and gamification (XP, levels)</li>
                <li>Certificate generation and download on course completion</li>
                <li>My Learning page with progress visualization</li>
                <li>Browse and enroll in courses with payment flow</li>
              </ul>
            </div>

            <div className="pd-card">
              <h3><span className="pd-dot" />Standalone Test Engine</h3>
              <ul>
                <li>Aptitude tests independent of course enrollment</li>
                <li>Auto-grading with instant results</li>
                <li>Anti-cheat enforcement (tab switch detection, warnings)</li>
                <li>Configurable time limits and passing scores</li>
                <li>Email invitations with unique access passwords</li>
                <li>Test results emailed to participants</li>
              </ul>
            </div>

            <div className="pd-card">
              <h3><span className="pd-dot" />Enterprise Security</h3>
              <ul>
                <li>2FA (TOTP) via Google Authenticator / Authy</li>
                <li>Inactivity auto-lock after 10 minutes for admins</li>
                <li>Master unlock via super admin 2FA OTP</li>
                <li>Impersonation — admin can view as any student</li>
                <li>Account resolver for locked/inaccessible accounts</li>
                <li>JWT-based authentication with 7-day expiry</li>
              </ul>
            </div>

            <div className="pd-card">
              <h3><span className="pd-dot" />Admin Panel</h3>
              <ul>
                <li>Full course CRUD with lesson and quiz management</li>
                <li>User management with bulk CSV upload</li>
                <li>Analytics dashboard with charts</li>
                <li>Support inbox for student tickets</li>
                <li>Settings panel for platform configuration</li>
                <li>Quiz editor with question bank</li>
              </ul>
            </div>

            <div className="pd-card">
              <h3><span className="pd-dot" />Parallel Universe Demo Mode</h3>
              <ul>
                <li>Separate demo environment for safe exploration</li>
                <li>Read-only mode — no changes affect live data</li>
                <li>Demo admin and demo student accounts</li>
                <li>Mock data for courses, users, quizzes</li>
                <li>Visual indicator showing demo mode is active</li>
              </ul>
            </div>

            <div className="pd-card">
              <h3><span className="pd-dot" />Notifications & Integrations</h3>
              <ul>
                <li>Welcome email with credentials on enrollment (Brevo API)</li>
                <li>Support ticket update notifications</li>
                <li>Google Sheets sync for user data backup</li>
                <li>Gemini AI integration for course assistance</li>
                <li>Cloudflare R2 for file and image storage</li>
                <li>Password reset via email token</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Architecture */}
        <div className="pd-section">
          <h2>🏗 Architecture</h2>
          <div className="pd-card pd-card-wide">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', fontSize: '0.9rem' }}>
              {['React 19 (Frontend)', 'Node.js + Express (API)', 'MongoDB (Database)', 'Vercel (Frontend Host)', 'Render (Backend Host)', 'Brevo (Email)', 'Cloudflare R2 (Storage)'].map((step, i, arr) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ background: 'rgba(var(--primary-rgb),0.15)', border: '1px solid rgba(var(--primary-rgb),0.3)', padding: '0.3rem 0.7rem', borderRadius: '6px' }}>{step}</span>
                  {i < arr.length - 1 && <i className="fas fa-arrow-right" style={{ opacity: 0.4 }} />}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className="pd-section">
          <h2>🔑 Demo Access</h2>
          <div className="pd-card" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '1rem' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '0.95rem', opacity: 0.7 }}>Student Demo</h3>
            <p style={{ fontFamily: 'monospace', fontSize: '0.95rem', margin: 0 }}>
              Email: demo-student@academypro.com<br />
              Password: demo123
            </p>
          </div>
          <div className="pd-card" style={{ background: 'rgba(255,159,67,0.08)', border: '1px solid rgba(255,159,67,0.3)' }}>
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
            {['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'bcryptjs', 'TOTP (otplib)', 'Brevo API', 'Gemini AI', 'Cloudflare R2', 'Google Sheets API', 'Vercel', 'Render'].map(t => (
              <span key={t} style={{ background: 'rgba(var(--primary-rgb),0.12)', border: '1px solid rgba(var(--primary-rgb),0.3)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.82rem' }}>{t}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
