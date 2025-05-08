import React from 'react';
import './FeatureCard.css';

export default function FeatureCard({ title }) {
  return (
    <div className="feature-card">
      <h3 className="feature-card__title">{title}</h3>
    </div>
  );
}
