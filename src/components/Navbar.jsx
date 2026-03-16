import { useEffect, useState } from 'react';

const links = ['About', 'Skills', 'Experience', 'Internships', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.body.classList.remove('no-scroll');
    const el = document.querySelector(href);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(o => !o);
    document.body.classList.toggle('no-scroll');
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-content">
          <a href="#hero" className="logo" onClick={e => handleNavClick(e, '#hero')}>
            Port<span className="gradient-text">folio</span>.
          </a>
          <div className="nav-links">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className={`nav-link${l === 'Contact' ? ' btn-glow' : ''}`}
                onClick={e => handleNavClick(e, `#${l.toLowerCase()}`)}>
                {l}
              </a>
            ))}
          </div>
          <div className={`hamburger${menuOpen ? ' active' : ''}`} onClick={toggleMenu}>
            <span /><span /><span />
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' active' : ''}`}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className="mobile-link"
            onClick={e => handleNavClick(e, `#${l.toLowerCase()}`)}>
            {l}
          </a>
        ))}
      </div>
    </>
  );
}
