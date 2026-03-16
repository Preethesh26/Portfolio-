import { useEffect, useRef } from 'react';

export default function Hero() {
  const typingRef = useRef(null);

  useEffect(() => {
    const el = typingRef.current;
    if (!el) return;
    const words = ['Preethesh'];
    let wordIndex = 0, txt = '', isDeleting = false;

    const type = () => {
      const fullTxt = words[wordIndex % words.length];
      txt = isDeleting
        ? fullTxt.substring(0, txt.length - 1)
        : fullTxt.substring(0, txt.length + 1);
      el.innerHTML = `<span class="txt">${txt}</span>`;
      let speed = isDeleting ? 50 : 100;
      if (!isDeleting && txt === fullTxt) { speed = 3000; isDeleting = true; }
      else if (isDeleting && txt === '') { isDeleting = false; wordIndex++; speed = 500; }
      setTimeout(type, speed);
    };
    type();
  }, []);

  return (
    <section id="hero" className="hero fade-in">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="badge">Associate Software Engineer</div>
          <h1>Hi, I'm <br /><span className="gradient-text typing-effect" ref={typingRef} /></h1>
          <p className="hero-desc">
            Passionate AIML engineering graduate bridging the gap between full-stack development,
            cloud technologies, and artificial intelligence.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/Preethesh26" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-github" />
            </a>
            <a href="https://linkedin.com/in/preethesh26" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="mailto:kulalpreethesh20@gmail.com" className="social-icon">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glowing-circle" />
          <div className="profile-photo-container">
            <img src="/assets/Preethesh.jpeg" alt="Preethesh" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
