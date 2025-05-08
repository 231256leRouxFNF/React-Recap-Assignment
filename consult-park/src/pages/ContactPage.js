import React, { useState } from 'react';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contactpage">
      <h1>Contact Us</h1>
      <p>We're here to help—drop us a line or reach out directly:</p>
      <p>
        <strong>Email:</strong>{' '}
        <a href="mailto:contact@consultpark.com">
          contact@consultpark.com
        </a>
      </p>
      <p>
        <strong>Phone:</strong>{' '}
        <a href="tel:+18001234567">+1 (800) 123-4567</a>
      </p>

      {submitted ? (
        <div className="contactpage__success">
          🎉 Thank you, {formData.name || 'there'}! Your message has been sent.
        </div>
      ) : (
        <form className="contactpage__form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
}
