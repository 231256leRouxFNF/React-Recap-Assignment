// src/components/Accordion.jsx

import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid #ddd", padding: "1rem 0" }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>
        <span style={{ fontSize: "1.5rem" }}>{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <div style={{ marginTop: "0.5rem", color: "#555" }}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
