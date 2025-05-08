import React from 'react';
import './ValueCard.css';

export default function ValueCard({ icon, title }) {
  return (
    <div className="value-card">
      <div className="value-card__icon">{icon}</div>
      <h3 className="value-card__title">{title}</h3>
    </div>
  );
}
