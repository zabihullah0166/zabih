import React from 'react';
import { experienceData } from '../content';

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Work <span className="highlight">Experience</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="timeline">
          {experienceData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-content">
                <h3>{item.role}</h3>
                <h4 style={{ color: "var(--accent-cyan)", display: "flex", alignItems: "center", gap: "8px", margin: "4px 0 16px 0" }}>
                  <i className="fas fa-building" style={{ fontSize: "0.85rem" }}></i>
                  {item.company}
                </h4>

                {item.bullets && item.bullets.length > 0 ? (
                  <ul style={{ margin: "12px 0 16px 0", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} style={{ color: "var(--text-secondary)", lineHeight: "1.6", fontSize: "0.95rem", listStyleType: "disc" }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ margin: "12px 0 16px 0", color: "var(--text-secondary)", lineHeight: "1.6" }}>{item.description}</p>
                )}

                {item.skills && item.skills.length > 0 && (
                  <div style={{ marginTop: "16px", paddingTop: "14px", borderTop: "1px solid var(--border-color)" }}>
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-muted)", fontWeight: "600", display: "block", marginBottom: "8px" }}>
                      Technologies & Skills
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {item.skills.map((tech, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: "4px 10px",
                            background: "rgba(59, 130, 246, 0.1)",
                            color: "var(--accent)",
                            border: "1px solid rgba(59, 130, 246, 0.25)",
                            borderRadius: "6px",
                            fontSize: "0.8rem",
                            fontWeight: "500"
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

