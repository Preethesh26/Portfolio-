import { useFadeUp } from '../hooks/useFadeUp';
import { skills } from '../data';

export default function Skills() {
  const headerRef = useFadeUp();
  const gridRef = useFadeUp();

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header fade-up" ref={headerRef}>
          <h2 className="section-title">Tech Stack</h2>
          <div className="section-line" />
        </div>
        <div className="skills-grid fade-up" ref={gridRef}>
          {skills.map(s => (
            <div key={s.category} className="skill-category glass-panel">
              <h3><i className={`fas ${s.icon}`} /> {s.category}</h3>
              <div className="skill-tags">
                {s.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
