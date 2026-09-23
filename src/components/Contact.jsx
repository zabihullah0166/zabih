import React, { useState } from 'react';
import { personalInfo, contactEndpoint } from '../content';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    if (onShowToast) {
      onShowToast(`Copied ${label} to clipboard!`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!formData.message.trim()) newErrors.message = 'Please enter a message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    setTimeout(() => {
      setStatus('idle');
    }, 4000);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Get In <span className="highlight">Touch</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Have a project in mind? Let's build something intelligent together!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              I'm currently available for freelance, AI agent contracts, and full-time remote positions across
              any timezone. Click email or phone below to instantly copy to clipboard!
            </p>

            <div className="contact-item" onClick={() => handleCopy(personalInfo.email, 'Email')} style={{ cursor: "pointer" }}>
              <div className="contact-icon" style={{ background: "rgba(59, 130, 246, 0.12)", color: "var(--accent)" }}>
                <i className="fas fa-envelope"></i>
              </div>
              <div style={{ flex: 1 }}>
                <h4>Email <i className="fas fa-copy" style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", marginLeft: "6px" }}></i></h4>
                <span>{personalInfo.email}</span>
              </div>
            </div>

            <div className="contact-item" onClick={() => handleCopy(personalInfo.phone, 'Phone')} style={{ cursor: "pointer" }}>
              <div className="contact-icon" style={{ background: "rgba(59, 130, 246, 0.12)", color: "var(--accent)" }}>
                <i className="fas fa-phone"></i>
              </div>
              <div style={{ flex: 1 }}>
                <h4>Phone <i className="fas fa-copy" style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", marginLeft: "6px" }}></i></h4>
                <span>{personalInfo.phone}</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon" style={{ background: "rgba(59, 130, 246, 0.12)", color: "var(--accent)" }}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4>Location</h4>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className={`form-group ${errors.name ? 'error' : ''}`}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className={`form-group ${errors.email ? 'error' : ''}`}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className={`form-group ${errors.subject ? 'error' : ''}`}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <span className="form-error">{errors.subject}</span>}
            </div>

            <div className={`form-group ${errors.message ? 'error' : ''}`}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={status === 'sending'}
              style={{
                background: status === 'success' ? '#22C55E' : status === 'error' ? '#DC2626' : '',
              }}
            >
              {status === 'sending' && (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Sending...
                </>
              )}
              {status === 'success' && (
                <>
                  <i className="fas fa-check"></i> Message Sent!
                </>
              )}
              {status === 'error' && (
                <>
                  <i className="fas fa-times"></i> Failed to send
                </>
              )}
              {status === 'idle' && (
                <>
                  <i className="fas fa-paper-plane"></i> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
