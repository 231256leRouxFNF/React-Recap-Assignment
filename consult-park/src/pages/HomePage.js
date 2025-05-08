// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import './HomePage.css';

const features = [
  'Reduce Costs',
  'Increase Efficiency',
  'No Rigid Contracts',
  'Fluent Communication',
  'Certified Talent',
  'Office-Based Professionals',
  'Dedicated Workforce',
  'Performance-Driven Approach',
];

export default function HomePage() {

  return (
    <div className="homepage">
      {/* Hero */}
      <section className="homepage__hero">
        <div className="homepage__hero-content">
          <h1 className="hero-title">
            <span>Powering Global Talent,</span>
            <span className="hero-title__highlight">
              Driving Business Growth
            </span>
          </h1>
          <h2 className="hero-subtitle">
            Your Strategic Outsourcing Partner for Remote Excellence
          </h2>
          <p className="hero-copy">
            At Consult Park, we connect businesses with world-class remote talent,
            helping them scale, optimise, and thrive...
          </p>
        </div>
      </section>


      {/* Features */}
      <section className="homepage__features">
        {features.map((f) => (
          <FeatureCard key={f} title={f} />
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="homepage__bottom-cta">
        <h2>Ready to power your growth?</h2>
        <Link to="/contact" className="homepage__bottom-cta-button">
          Contact Us
        </Link>
      </section>
    </div>
  );
}
