import React, { useState, useEffect, useRef } from 'react';
import { skillsData, skillsCategories } from '../content';
import { useScrollReveal } from './useScrollReveal';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('ai');
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRef = useScrollReveal();
  const gridRef = useRef(null);

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Animate bars when grid is in view
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const grid = gridRef.current;
    if (!grid) return;

    // Reset bars whenever filters change (they re-render)
    const bars = grid.querySelectorAll('.skill-progress');
    bars.forEach((bar) => bar.classList.remove('animate-bar'));

    if (prefersReducedMotion) {
      // Just show them at full width immediately
      bars.forEach((bar) => {
        bar.style.setProperty('--skill-target-width', bar.dataset.targetWidth);
        bar.classList.add('animate-bar');
      });
      return;
    }

    // Short delay so paint settles before triggering transition
    const animateBars = () => {
      const freshBars = grid.querySelectorAll('.skill-progress');
      freshBars.forEach((bar, i) => {
        const targetW = bar.dataset.targetWidth;
        bar.style.setProperty('--skill-target-width', targetW);
        // Stagger each card's bar slightly for a cascade feel
        setTimeout(() => {
          bar.classList.add('animate-bar');
        }, 80 + i * 30); // 30 ms per card stagger
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small paint delay to allow layout
          setTimeout(animateBars, 120);
          observer.unobserve(grid);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(grid);

    return () => observer.disconnect();
  }, [filteredSkills]); // re-run when filter changes

  return (
    <section className="skills section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal-item">
          <h2 className="section-title">
            Technical <span className="highlight">Skills &amp; Stack</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Proficiency across Agentic Frameworks, Sub-250ms RAG, Vector Search &amp; Fast Microservices</p>
        </div>

        {/* Search & Filter */}
        <div className="reveal-item reveal-item--delay-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
            <i className="fas fa-search" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--accent-cyan)' }}></i>
            <input
              type="text"
              className="skills-search-input"
              placeholder="Search skill (e.g. LangGraph, FastAPI, Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="skills-filter">
            {skillsCategories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="skills-grid" id="skillsGrid" ref={gridRef}>
          {filteredSkills.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
              No skills found matching &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            filteredSkills.map((skill, idx) => (
              <div
                className={`skill-card reveal-item reveal-item--scale reveal-item--delay-${Math.min(idx % 3 + 1, 5)}`}
                key={`${activeCategory}-${skill.name}`}
                style={{ backdropFilter: 'blur(16px)' }}
              >
                <div className="skill-card-header">
                  <div className="skill-icon" style={{ background: 'rgba(59, 130, 246, 0.12)', color: 'var(--accent)' }}>
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-info">
                    <h4 style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{skill.name}</h4>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--accent-cyan)' }}>{skill.level}%</span>
                  </div>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    data-target-width={`${skill.level}%`}
                    style={{
                      background: 'var(--gradient-1)',
                      boxShadow: '0 0 10px var(--accent-glow)',
                    }}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
