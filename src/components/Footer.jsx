import React from 'react';
import { personalInfo } from '../content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-socials">
          <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href={personalInfo.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>

        <p className="footer-text">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
