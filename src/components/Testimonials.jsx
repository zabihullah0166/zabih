import React, { useState, useEffect } from 'react';
import { testimonialsData } from '../content';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonialsData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonialsData.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            What People <span className="highlight">Say</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="testimonials-slider">
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialsData.map((item, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-stars">
                  {[...Array(item.stars)].map((_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>
                <p className="testimonial-text">"{item.quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar-initials">{item.initials}</div>
                  <div className="testimonial-info">
                    <h4>{item.author}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-controls">
            <button className="testimonial-btn prev" onClick={handlePrev} aria-label="Previous testimonial">
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="testimonial-dots">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>

            <button className="testimonial-btn next" onClick={handleNext} aria-label="Next testimonial">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
