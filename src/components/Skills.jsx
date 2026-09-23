import React, { useState } from 'react';
import { skillsData, skillsCategories } from '../content';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('ai');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Technical <span className="highlight">Skills & Stack</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Proficiency across Agentic Frameworks, Sub-250ms RAG, Vector Search & Fast Microservices</p>
        </div>

        {/* Search & Category Filter Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginBottom: "40px" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: "420px" }}>
            <i className="fas fa-search" style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "var(--accent-cyan)" }}></i>
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

        <div className="skills-grid" id="skillsGrid">
          {filteredSkills.length === 0 ? (
            <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px", color: "var(--text-muted)" }}>
              No skills found matching "{searchQuery}".
            </div>
          ) : (
            filteredSkills.map((skill, idx) => (
              <div className="skill-card" key={idx} style={{ backdropFilter: "blur(16px)" }}>
                <div className="skill-card-header">
                  <div className="skill-icon" style={{ background: "rgba(59, 130, 246, 0.12)", color: "var(--accent)" }}>
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-info">
                    <h4 style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{skill.name}</h4>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--accent-cyan)" }}>{skill.level}%</span>
                  </div>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: `${skill.level}%`,
                      background: "var(--gradient-1)",
                      boxShadow: "0 0 10px var(--accent-glow)"
                    }}
                  ></div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

