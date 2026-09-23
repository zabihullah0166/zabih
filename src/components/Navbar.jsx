import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          if (sectionEl.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navHeight = 30;
      const targetPosition = targetEl.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <a href="#hero" className="nav-logo" onClick={(e) => handleLinkClick(e, '#hero')} style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.4rem" }}>
          Zabih Ullah
        </a>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            id="themeToggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            <i className={theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'}></i>
          </button>

          <button
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            id="hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
