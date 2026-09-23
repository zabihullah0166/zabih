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
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
