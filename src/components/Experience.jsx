import { useFadeUp } from '../hooks/useFadeUp';
import { experience } from '../data';

export default function Experience() {
  const headerRef = useFadeUp();
  const timelineRef = useFadeUp();

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header fade-up" ref={headerRef}>
          <h2 className="section-title">Experience</h2>
          <div className="section-line" />
        </div>
        <div className="timeline fade-up" ref={timelineRef}>
          {experience.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-content glass-panel">
                <h3>{item.title}</h3>
                <div className="company">{item.company}</div>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
