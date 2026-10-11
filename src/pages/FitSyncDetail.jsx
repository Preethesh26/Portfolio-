import { useNavigate } from 'react-router-dom';

const actionStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  padding: '0.65rem 1.1rem', borderRadius: '8px', textDecoration: 'none',
  fontWeight: 650, border: '1px solid rgba(34,197,94,0.35)',
  background: 'rgba(34,197,94,0.12)', color: '#4ade80',
};

const groups = [
  { title: 'Nutrition & Muscle Gain', icon: 'fas fa-utensils', items: ['Log meals and portion sizes', 'Track daily calories and protein', 'Support a consistent muscle-gain routine'] },
  { title: 'Health Connect Integration', icon: 'fas fa-heartbeat', items: ['Read supported Android health data with user permission', 'View available steps, exercise, and sleep information', 'Available metrics depend on permissions and source records'] },
  { title: 'Progress & Daily Habits', icon: 'fas fa-chart-line', items: ['Track body weight and progress over time', 'Record workouts, water, and daily habits', 'Review daily history and personal targets'] },
  { title: 'Cloud Sync', icon: 'fas fa-cloud', items: ['Sign in to keep personal records associated with your account', 'Use cloud-backed storage across supported devices'] },
];

export default function FitSyncDetail() {
  const navigate = useNavigate();
  return (
    <div className="pd-page">
      <div className="pd-container">
        <div style={{ paddingTop: '2rem', marginBottom: '2.5rem' }}>
          <button onClick={() => navigate(-1)} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.15)', color: 'var(--text-secondary)', padding: '0.5rem 1.2rem', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <i className="fas fa-arrow-left" /> Back to Portfolio
          </button>
        </div>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#4ade80', marginBottom: '0.75rem' }}>💪 Fitness, Nutrition & Health Tracking</div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem', background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            FitSync — Fitness & Muscle Gain Tracker
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '760px', marginBottom: '1.5rem' }}>
            FitSync brings nutrition logging, calorie and protein tracking, workouts, weight progress, daily habits, and supported Android health data into one fitness experience. Its responsive web app uses cloud-backed account storage, while Android Health Connect integration can provide supported activity and sleep metrics after permissions are granted.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['Muscle Gain', 'Meal Tracking', 'Calories & Protein', 'Health Connect', 'Workouts', 'Weight Progress', 'Cloud Sync', 'Responsive Web'].map(tag => (
              <span key={tag} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '0.3rem 0.9rem', borderRadius: '50px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="pd-section">
          <h2>🔗 Project Links</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="https://fitnesssync.vercel.app/" target="_blank" rel="noreferrer" style={{ ...actionStyle, borderColor: 'rgba(59,130,246,0.4)', background: 'rgba(59,130,246,0.13)', color: '#93c5fd' }}><i className="fas fa-external-link-alt" /> Open FitSync Web App</a>
            <a href="https://github.com/Preethesh26/muscle-gain-tracker/actions/workflows/android-apk.yml" target="_blank" rel="noreferrer" style={actionStyle}><i className="fas fa-download" /> Get Android APK</a>
            <a href="https://github.com/Preethesh26/muscle-gain-tracker" target="_blank" rel="noreferrer" style={{ ...actionStyle, borderColor: 'rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.05)', color: '#fff' }}><i className="fab fa-github" /> GitHub Repository</a>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginTop: '1rem' }}>
            Android APK access opens the GitHub Actions build workflow. Open a successful build and download its APK artifact. A direct portfolio download can be added once the APK file is hosted with the portfolio.
          </p>
        </div>
        <div className="pd-section">
          <h2>📌 Project Overview</h2>
          <div className="pd-card pd-card-wide"><p style={{ lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
            FitSync is designed to make everyday fitness tracking easier by bringing nutrition, activity, and personal progress together. Users can log foods and portions, monitor calories and protein, record workouts and habits, and review weight history. On Android, Health Connect is the integration point for supported health data; available metrics depend on permissions, supported data types, and whether connected source apps have written records.
          </p></div>
        </div>
        <div className="pd-section">
          <h2>✨ Core Features</h2>
          <div className="pd-contributions-grid">
            {groups.map(group => <div className="pd-card" key={group.title}>
              <h3><span className="pd-dot" /><i className={group.icon} /> {group.title}</h3>
              <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
            </div>)}
          </div>
        </div>
        <div className="pd-section">
          <h2>🏗 Architecture</h2>
          <div className="pd-card pd-card-wide">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', fontSize: '0.9rem' }}>
              {['React + Vite', 'Tailwind CSS', 'Capacitor Android', 'Health Connect', 'Supabase Auth + Postgres', 'Vercel'].map((step, i, arr) => <span key={step} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.28)', padding: '0.3rem 0.7rem', borderRadius: '6px' }}>{step}</span>
                {i < arr.length - 1 && <i className="fas fa-arrow-right" style={{ opacity: 0.4 }} />}
              </span>)}
            </div>
          </div>
        </div>
        <div className="pd-section">
          <h2>🛠 Tech Stack</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['React', 'Vite', 'Tailwind CSS', 'Capacitor', 'Android Health Connect', 'Supabase', 'PostgreSQL', 'Vercel', 'GitHub Actions'].map(t => <span key={t} style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.28)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.82rem' }}>{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
