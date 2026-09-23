import React from 'react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times"></i>
        </button>

        <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "20px", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
          <img src={project.image} alt={project.title} style={{ width: "100%", maxHeight: "320px", objectFit: "cover" }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
          <span className="badge badge-primary" style={{ textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "1px" }}>
            {project.category}
          </span>
        </div>

        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8rem", color: "#ffffff", marginBottom: "12px" }}>
          {project.title}
        </h3>

        <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "1.05rem", marginBottom: "20px" }}>
          {project.description}
        </p>

        <div style={{ marginBottom: "24px" }}>
          <h4 style={{ color: "var(--accent-cyan)", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>
            Technologies & Frameworks
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(59, 130, 246, 0.15)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  color: "#ffffff",
                  padding: "4px 12px",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "20px" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ flex: 1, textDecoration: "none", textAlign: "center", display: "inline-flex", justifyContent: "center", alignItems: "center", gap: "8px" }}
          >
            <i className="fab fa-github"></i> GitHub Repository
          </a>
          <button
            onClick={onClose}
            className="btn btn-outline"
            style={{ flex: 1 }}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
