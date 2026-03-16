import { useFadeUp } from '../hooks/useFadeUp';
import { internships } from '../data';

export default function Internships() {
  const headerRef = useFadeUp();
  const timelineRef = useFadeUp();

  return (
    <section id="internships" className="section">
      <div className="container">
        <div className="section-header fade-up" ref={headerRef}>
          <h2 className="section-title">Internship Experience</h2>
          <div className="section-line" />
        </div>
        <div className="timeline fade-up" ref={timelineRef}>
          {internships.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-content glass-panel">
                <h3>{item.title}</h3>
                <div className="company">{item.company}</div>
                <ul style={{ marginTop: '10px' }}>
                  {item.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
