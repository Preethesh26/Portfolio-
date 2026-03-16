import { useFadeUp } from '../hooks/useFadeUp';

export default function About() {
  const headerRef = useFadeUp();
  const contentRef = useFadeUp();

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header fade-up" ref={headerRef}>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </div>
        <div className="about-content fade-up" ref={contentRef}>
          <div className="about-text">
            <p className="lead">AIML Engineering Student &amp; Tech Enthusiast</p>
            <p>
              I am Preethesh, a B.E. graduate in Artificial Intelligence and Machine Learning from
              Vivekananda College of Engineering and Technology, Puttur, currently working as an
              Associate Software Engineer. With a CGPA of 9.09, I combine strong academic foundations
              with hands-on industry experience in building and maintaining production-ready applications.
            </p>
            <p>
              My expertise lies in building scalable full-stack applications, deploying cloud solutions on AWS
              and Render, and integrating AI models into real-world projects.
            </p>
            <p>
              I am currently enhancing my skills through an online certification program in Cloud, DevOps, and
              Generative AI at MicroDegree—having completed AWS Cloud fundamentals, with DevOps ongoing and
              Generative AI scheduled next.
            </p>
            <div className="stats-grid">
              {[
                { value: 'CGPA', sub: '9.09' },
                { value: '6+', sub: 'Projects' },
                { value: '4+', sub: 'Certifications' },
              ].map(s => (
                <div key={s.sub} className="stat-item">
                  <h3 className="gradient-text">{s.value}</h3>
                  <p>{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
