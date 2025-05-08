// src/components/ServiceCard.jsx

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ServiceCard = ({ title, description }) => {
  return (
    <div style={{
      flex: "1 1 300px",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      padding: "1rem",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)"
    }}>
      <h4 style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <FaCheckCircle color="#007BFF" />
        {title}
      </h4>
      {description && (
        <p style={{ fontSize: "0.95rem", color: "#444", margin: 0 }}>{description}</p>
      )}
    </div>
  );
};

export default ServiceCard;
