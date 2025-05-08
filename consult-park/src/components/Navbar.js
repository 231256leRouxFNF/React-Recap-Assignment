// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // shared style for all links
  const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
    fontWeight: 500,
  };

  return (
    <nav
      style={{
        padding: "1rem 2rem",
        backgroundColor: "#092d35",    // your deep teal
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0, color: "#0cca62" /* your bright green */ }}>
        Consult Park
      </h2>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/services" style={linkStyle}>
          Services
        </Link>
        <Link to="/bpo" style={linkStyle}>
          BPO
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
