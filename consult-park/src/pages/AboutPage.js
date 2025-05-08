import React from 'react';
import ValueCard from '../components/ValueCard';
import './AboutPage.css';

const values = [
  { icon: '💡', title: 'Excellence' },
  { icon: '🤝', title: 'Integrity' },
  { icon: '🚀', title: 'Innovation' },
  { icon: '🌍', title: 'Global Reach' },
];

export default function AboutPage() {
  return (
    <div className="aboutpage">
      {/* Who We Are */}
      <section className="aboutpage__section aboutpage__who">
        <h1>Who We Are</h1>
        <p>
          Consult Park is more than just an outsourcing company—we’re your growth partner.
          We blend local insight with global reach to provide tailor-made remote talent solutions,
          ensuring your business scales efficiently and sustainably.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="aboutpage__section aboutpage__mission">
        <h2>Mission &amp; Vision</h2>
        <p>
          Our mission is to empower companies worldwide by connecting them with certified,
          office-based professionals who drive performance and innovation.  
          We envision a future where expertise knows no borders, and every business
          can tap into the best talent—anywhere, anytime.
        </p>
      </section>

      {/* Our Values */}
      <section className="aboutpage__section aboutpage__values">
        <h2>Our Values</h2>
        <div className="aboutpage__values-grid">
          {values.map(({ icon, title }) => (
            <ValueCard key={title} icon={icon} title={title} />
          ))}
        </div>
      </section>
    </div>
  );
}
