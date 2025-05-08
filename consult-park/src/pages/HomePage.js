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
      <section className="homepage__hero">
        <h1 className="homepage__title">
          Powering Global Talent, Driving Business Growth
        </h1>
        <h2 className="homepage__subtitle">
          🔹 Your Strategic Outsourcing Partner for Remote Excellence 🔹
        </h2>
        <p className="homepage__copy">
          At Consult Park, we connect businesses with world-class remote talent,
          helping them scale, optimise, and thrive...
        </p>
        <Link to="/contact" className="homepage__cta">
          Contact Us
        </Link>
      </section>

      <section className="homepage__features">
        {features.map((feature) => (
          <FeatureCard key={feature} title={feature} />
        ))}
      </section>
    </div>
  );
}
