import React, { useState, useEffect, useRef } from 'react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pillRef = useRef(null);

  /* ── Active-section tracking ── */
  useEffect(() => {
    const allSections = [...navItems.map((i) => i.href.substring(1)), 'contact'];
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 160;
      for (let i = allSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(allSections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(allSections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Close mobile menu on outside click ── */
  useEffect(() => {
    const handler = (e) => {
      if (pillRef.current && !pillRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isMobileMenuOpen]);

  /* ── Smooth scroll helper ── */
  const scrollTo = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 30, behavior: 'smooth' });
    }
  };

  const contactClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.offsetTop - 30, behavior: 'smooth' });
  };

  return (
    <>
      {/* ════════════ DESKTOP PILL NAVBAR ════════════ */}
      <nav
        id="navbar"
        className={`pill-navbar ${scrolled ? 'pill-navbar--scrolled' : ''}`}
        aria-label="Main navigation"
      >
        <div className="pill-navbar__inner" ref={pillRef}>
          {/* Logo */}
          <a
            href="#hero"
            className="pill-navbar__logo"
            onClick={(e) => scrollTo(e, '#hero')}
            aria-label="Go to top"
          >
            <span className="pill-navbar__logo-box" aria-hidden="true">ZU</span>
            <span className="pill-navbar__logo-text">
              Zabih Ullah
              <small>AI Engineer</small>
            </span>
          </a>

          {/* Centre nav capsule */}
          <div className="pill-navbar__tabs" role="list">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  role="listitem"
                  className={`pill-navbar__tab ${isActive ? 'pill-navbar__tab--active' : ''}`}
                  onClick={(e) => scrollTo(e, item.href)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right-side actions */}
          <div className="pill-navbar__actions">
            {/* Theme toggle */}
            <button
              className="pill-navbar__theme-btn"
              id="themeToggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title="Toggle theme"
            >
              <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} />
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="pill-navbar__cta"
              onClick={contactClick}
              aria-label="Jump to contact section"
            >
              <i className="fas fa-paper-plane" aria-hidden="true" />
              Contact
              <i className="fas fa-arrow-right pill-navbar__cta-arrow" aria-hidden="true" />
            </a>

            {/* Mobile hamburger */}
            <button
              className={`pill-navbar__hamburger ${isMobileMenuOpen ? 'open' : ''}`}
              id="hamburger"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* ════════════ MOBILE DRAWER ════════════ */}
      <div
        className={`pill-mobile-menu ${isMobileMenuOpen ? 'pill-mobile-menu--open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`pill-mobile-menu__link ${isActive ? 'active' : ''}`}
                onClick={(e) => scrollTo(e, item.href)}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="pill-mobile-menu__link pill-mobile-menu__cta"
            onClick={contactClick}
          >
            <i className="fas fa-paper-plane" /> Contact
          </a>
        </nav>
      </div>

      {/* Mobile backdrop */}
      {isMobileMenuOpen && (
        <div
          className="pill-mobile-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
