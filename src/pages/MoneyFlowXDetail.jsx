import { useNavigate } from 'react-router-dom';

export default function MoneyFlowXDetail() {
  const navigate = useNavigate();

  return (
    <div className="pd-page">
      <div className="pd-container">

        {/* Back button */}
        <div style={{ paddingTop: '2rem', marginBottom: '2.5rem' }}>
          <button onClick={() => navigate(-1)}
            style={{ background: 'none', border: '1px solid rgba(255,255,255,0.15)', color: 'var(--text-secondary)', padding: '0.5rem 1.2rem', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <i className="fas fa-arrow-left" /> Back
          </button>
        </div>

        {/* Page Heading */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#5dade2', marginBottom: '0.75rem' }}>
            💸 Full-Stack Finance App — Web + Mobile
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem', background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            MoneyFlowX — Personal Finance & Expense Tracker
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '1.5rem' }}>
            A cross-platform personal finance management system with a React web app, React Native Android app, and a shared Node.js/MongoDB backend. Covers everything from daily expense tracking to EMI planning, SIP investments, savings goals, and real-time push notifications.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['Expense Tracking', 'Cash Flow', 'Bank Management', 'EMI Planner', 'SIP Calculator', 'Goals', 'Analytics', 'Push Notifications', 'React Native', 'JWT Auth'].map(tag => (
              <span key={tag} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '0.3rem 0.9rem', borderRadius: '50px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Live Links */}
        <div className="pd-section">
          <h2>🔗 Links</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="https://money-flow-x.vercel.app/" target="_blank" rel="noreferrer"
              style={{ background: 'rgba(41,128,185,0.15)', border: '1px solid rgba(41,128,185,0.4)', padding: '0.5rem 1.2rem', borderRadius: '8px', color: '#5dade2', textDecoration: 'none', fontWeight: 600 }}>
              <i className="fas fa-external-link-alt" /> Live Web App
            </a>
           <a
              href="/apk/MoneyFlowX-v1.0.0.apk"
              download
              style={{
                background: "rgba(46,204,113,0.12)",
                border: "1px solid rgba(46,204,113,0.35)",
                padding: "0.5rem 1.2rem",
                borderRadius: "8px",
                color: "#2ecc71",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              <i className="fas fa-download" /> Download Android APK
            </a>
            <a href="https://github.com/Preethesh26/MoneyFlowX" target="_blank" rel="noreferrer"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', padding: '0.5rem 1.2rem', borderRadius: '8px', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
              <i className="fab fa-github" /> GitHub Repo
            </a>
          </div>
        </div>

        {/* QR Code */}
        <div className="pd-section">
          <h2>📱 Mobile App — Scan to Download</h2>
          <div className="pd-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', background: 'rgba(41,128,185,0.08)', border: '1px solid rgba(41,128,185,0.25)' }}>
            <img src="/assets/scanner.png" alt="MoneyFlowX APK QR Code"
              style={{ width: '130px', height: '130px', borderRadius: '8px', objectFit: 'contain', background: '#fff', padding: '6px' }} />
            <div>
              <h3 style={{ marginBottom: '0.4rem', color: '#5dade2' }}>Android APK</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Scan the QR code with your phone camera to open the Expo build page and download the Android APK directly. No Play Store required.
              </p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="pd-section">
          <h2>📌 Project Overview</h2>
          <div className="pd-card pd-card-wide">
            <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
              MoneyFlowX is a full-stack, cross-platform personal finance tracker built to give users complete visibility and control over their money. The platform runs as a responsive React web application and a native Android app (React Native + Expo), both powered by the same Node.js/Express REST API and MongoDB Atlas database. Features are designed around real-world financial workflows — logging daily cash flows, tracking bank account balances, planning loan EMIs, investing via SIPs, setting savings goals, and receiving smart push notifications via Firebase Cloud Messaging.
            </p>
          </div>
        </div>

        {/* Core Features */}
        <div className="pd-section">
          <h2>✨ Core Features</h2>
          <div className="pd-contributions-grid">

            <div className="pd-card">
              <h3><span className="pd-dot" />Cash Flow Tracking</h3>
              <ul>
                <li>Log income and expense transactions with categories and notes</li>
                <li>Real-time running balance calculation</li>
                <li>Filter by date range, type, and category</li>
                <li>Monthly and weekly summaries</li>
                <li>Edit and delete past entries</li>
              </ul>
            </div>

            <div className="pd-card">
              <h3><span className="pd-dot" />Bank Account Management</h3>
              <ul>
                <li>Add and manage multiple bank accounts</li>
                <li>Track individual account balances</li>
                <li>Inter-account transfer logging</li>
                <li>Transfer history per account</li>
                <li>Color-coded account cards for quick identification</li>
              </ul>
            </div>

            <div className="pd-card">
              <h3><span className="pd-dot" />EMI Planner</h3>
              <ul>
                <li>Add active EMIs with principal, interest rate, and tenure</li>
                <li>Auto-calculated monthly instalment amount</li>
                <li>Track paid vs remaining months</li>
                <li>Total interest payable breakdown</li>
                <li>Mark EMIs as completed</li>
              </ul>
            </div>

            <div className="pd-card">
              <h3><span className="pd-dot" />SIP Investment Tracker</h3>
              <ul>
                <li>Log SIP investments with fund name and monthly amount</li>
                <li>Track invested amount vs current value</li>
                <li>Returns calculation and visualisation</li>
                <li>Start date and tenure management</li>
                <li>Portfolio-level SIP summary</li>
              </ul>
            </div>

            <div className="pd-card">
              <h3><span className="pd-dot" />Savings Goals</h3>
              <ul>
                <li>Create goals with a target amount and deadline</li>
                <li>Add contributions toward each goal</li>
                <li>Progress bar showing completion percentage</li>
                <li>Estimated months to reach the goal</li>
                <li>Mark goals as achieved</li>
              </ul>
            </div>

            <div className="pd-card">
              <h3><span className="pd-dot" />Analytics Dashboard</h3>
              <ul>
                <li>Pie chart breakdown of expenses by category</li>
                <li>Bar chart for monthly income vs expense trends</li>
                <li>Net savings trend over time</li>
                <li>Top spending categories highlight</li>
                <li>Filterable by custom date ranges</li>
              </ul>
            </div>

            <div className="pd-card">
              <h3><span className="pd-dot" />Push Notifications (FCM)</h3>
              <ul>
                <li>Firebase Cloud Messaging for real-time alerts</li>
                <li>Web push notifications via service worker</li>
                <li>Mobile push notifications on Android</li>
                <li>In-app notification centre with read/unread states</li>
                <li>Notification history persisted in MongoDB</li>
              </ul>
            </div>

            <div className="pd-card">
              <h3><span className="pd-dot" />Authentication & Profile</h3>
              <ul>
                <li>JWT-based auth with secure httpOnly tokens</li>
                <li>Register with phone number and OTP verification</li>
                <li>Password reset via SMS OTP</li>
                <li>Profile management with avatar and preferences</li>
                <li>Dark / Light theme toggle</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Architecture */}
        <div className="pd-section">
          <h2>🏗 Architecture</h2>
          <div className="pd-card pd-card-wide">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', fontSize: '0.9rem' }}>
              {[
                'React (Web Client)',
                'React Native + Expo (Android)',
                'Node.js + Express (REST API)',
                'MongoDB Atlas (Database)',
                'Firebase FCM (Push Notifications)',
                'Vercel (Web Hosting)',
                'Render (API Hosting)',
              ].map((step, i, arr) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ background: 'rgba(41,128,185,0.12)', border: '1px solid rgba(41,128,185,0.3)', padding: '0.3rem 0.7rem', borderRadius: '6px' }}>{step}</span>
                  {i < arr.length - 1 && <i className="fas fa-arrow-right" style={{ opacity: 0.4 }} />}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cross-Platform Note */}
        <div className="pd-section">
          <h2>🌐 Cross-Platform Design</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            <div className="pd-card" style={{ background: 'rgba(41,128,185,0.08)', border: '1px solid rgba(41,128,185,0.25)' }}>
              <h3 style={{ color: '#5dade2' }}><i className="fas fa-desktop" /> Web App</h3>
              <ul>
                <li>Built with React + Vite</li>
                <li>Responsive layout for desktop and mobile browsers</li>
                <li>Sidebar navigation on desktop, bottom nav on mobile</li>
                <li>Deployed on Vercel with CI/CD on push</li>
                <li>PWA-ready with web push notification support</li>
              </ul>
            </div>
            <div className="pd-card" style={{ background: 'rgba(46,204,113,0.08)', border: '1px solid rgba(46,204,113,0.25)' }}>
              <h3 style={{ color: '#2ecc71' }}><i className="fas fa-mobile-alt" /> Android App</h3>
              <ul>
                <li>Built with React Native + Expo</li>
                <li>Native bottom tab navigation</li>
                <li>Expo EAS build — distributed as APK</li>
                <li>Native push notifications via Firebase FCM</li>
                <li>Shared API and authentication with web app</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="pd-section">
          <h2>🛠 Tech Stack</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {[
              'React', 'React Native', 'Expo', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Mongoose',
              'JWT', 'bcryptjs', 'Firebase FCM', 'Twilio SMS', 'Vercel', 'Render', 'MongoDB Atlas',
              'React Navigation', 'Recharts', 'Axios', 'Context API'
            ].map(t => (
              <span key={t} style={{ background: 'rgba(41,128,185,0.12)', border: '1px solid rgba(41,128,185,0.3)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.82rem' }}>{t}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
