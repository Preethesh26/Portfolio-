import { useFadeUp } from '../hooks/useFadeUp';
import { leadership } from '../data';

export default function Leadership() {
  const headerRef = useFadeUp();
  const contentRef = useFadeUp();

  return (
    <section id="leadership" className="section">
      <div className="container">
        <div className="section-header fade-up" ref={headerRef}>
          <h2 className="section-title">Leadership & Responsibilities</h2>
          <div className="section-line" />
        </div>
        <div className="leadership-grid fade-up" ref={contentRef}>
          {leadership.map((item, i) => (
            <div key={i} className="leadership-card glass-panel">
              <div className="leadership-icon">
                <i className={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {item.stats && (
                <div className="leadership-stats">
                  {item.stats.map((s, j) => (
                    <div key={j} className="leadership-stat">
                      <span className="gradient-text">{s.value}</span>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
