import React, { useState } from 'react';
import { projectsData } from '../content';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Agents' },
    { id: 'web', label: 'Web & Voice Apps' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Production <span className="highlight">AI Projects</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Real-world agentic workflows, RAG search pipelines, and computer vision microservices</p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "40px", flexWrap: "wrap" }}>
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              style={{
                background: activeFilter === tab.id ? "var(--gradient-1)" : "rgba(15, 23, 42, 0.6)",
                color: "#ffffff",
                border: activeFilter === tab.id ? "none" : "1px solid rgba(255, 255, 255, 0.1)",
                padding: "10px 22px",
                borderRadius: "30px",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: activeFilter === tab.id ? "0 4px 15px var(--accent-glow)" : "none"
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="projects-grid" id="projectsGrid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index} style={{ backdropFilter: "blur(16px)" }}>
              <div className="project-image" onClick={() => onSelectProject(project)} style={{ cursor: "pointer" }}>
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-info">
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{project.title}</h3>
                <p style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {project.description}
                </p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span className="project-tag" key={idx}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  )}
                  <button
                    onClick={() => onSelectProject(project)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--accent-cyan)",
                      cursor: "pointer",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    <i className="fas fa-expand-alt"></i> Architecture Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

