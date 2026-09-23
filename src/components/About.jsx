import React from 'react';
import { personalInfo } from '../content';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="about-img-wrapper">
              <img src={personalInfo.swimImg} alt="Zabih Ullah" className="about-img" />
            </div>
          </div>

          <div className="about-text">
            <h3>{personalInfo.role}</h3>

            {personalInfo.bio.map((paragraph, index) => (
              <p
                key={index}
                dangerouslySetInnerHTML={{
                  __html: paragraph
                    .replace(
                      'National Swimmer and Gold Medalist',
                      '<strong>National Swimmer and Gold Medalist</strong>'
                    )
                    .replace('4.0 CGPA', '<strong>4.0 CGPA</strong>')
                    .replace(
                      'sub-250ms RAG search architectures',
                      '<strong>sub-250ms RAG search architectures</strong>'
                    )
                    .replace('50k+ daily records', '<strong>50k+ daily records</strong>')
                    .replace('30+ athletes', '<strong>30+ athletes</strong>'),
                }}
              />
            ))}

            <div className="about-details">
              <div className="about-detail">
                <span className="detail-label">Name:</span>
                <span className="detail-value">{personalInfo.name}</span>
              </div>
              <div className="about-detail">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{personalInfo.email}</span>
              </div>
              <div className="about-detail">
                <span className="detail-label">Location:</span>
                <span className="detail-value">{personalInfo.location}</span>
              </div>
              <div className="about-detail">
                <span className="detail-label">Availability:</span>
                <span className="detail-value availability">{personalInfo.availability}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
