import React, { useState, useEffect } from 'react';
import { personalInfo } from '../content';

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState('');

  const words = personalInfo.typewriterWords;

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer;

    if (!isDeleting && charIndex < currentWord.length) {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 90);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 45);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 30;
      window.scrollTo({
        top: el.offsetTop - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="hero" id="hero" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background Cyber Ambient Glows */}
      <div style={{
        position: "absolute",
        top: "-10%",
        left: "-10%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, rgba(0,0,0,0) 70%)",
        pointerEvents: "none",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        bottom: "-10%",
        right: "-5%",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 70%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div className="container hero-container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>


          <h1 className="hero-name" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{personalInfo.name}</h1>

          <div className="hero-title-wrapper">
            <span className="hero-title-prefix">Specialized in&nbsp;</span>
            <span className="hero-title" id="typedText" style={{ color: "var(--accent)" }}>
              {typedText}
            </span>
            <span className="hero-cursor" id="cursor">
              |
            </span>
          </div>

          <p className="hero-description">{personalInfo.tagline}</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
              <i className="fas fa-folder-open"></i> View Projects
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              <i className="fas fa-envelope"></i> Contact Me
            </a>
            <a href={personalInfo.resumePdf} className="btn btn-outline" download>
              <i className="fas fa-file-download"></i> Resume PDF
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-img-wrapper">
            <img src={personalInfo.profileImg} alt={personalInfo.name} className="hero-img" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <span>Explore Experience</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
}


