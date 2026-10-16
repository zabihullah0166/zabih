import React from 'react';
import { educationData } from '../content';
import { useScrollReveal } from './useScrollReveal';

export default function Education() {
  const sectionRef = useScrollReveal();
  return (
    <section className="education section" id="education" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal-item">
          <h2 className="section-title">
            My <span className="highlight">Education</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="education-grid">
          {educationData.map((item, index) => (
            <div className={`edu-card reveal-item reveal-item--scale reveal-item--delay-${Math.min(index + 1, 5)}`} key={index}>
              <div className="edu-icon">
                <i className={item.icon}></i>
              </div>
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <p className="edu-date">{item.date}</p>
              <p>{item.description}</p>
              {item.verifyUrl && (
                <a
                  href={item.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edu-verify"
                >
                  <i className="fas fa-external-link-alt"></i> Verify
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
