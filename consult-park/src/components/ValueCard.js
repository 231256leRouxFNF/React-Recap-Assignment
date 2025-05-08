// src/components/ValueCard.js

import React from 'react';
import './ValueCard.css';

export default function ValueCard({ Icon, title }) {
  return (
    <div className="value-card">
      <div className="value-card__icon">
        {/* adjust size or color via props or CSS variables as needed */}
        <Icon size={40} color="var(--color-green)" />
      </div>
      <h3 className="value-card__title">{title}</h3>
    </div>
  );
}
