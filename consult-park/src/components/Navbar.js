// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Consult-Park-Logo-Full.png"; // adjust path if needed

const Navbar = () => {
  const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "1rem",
  };

  return (
    <nav
      style={{
        padding: "1rem 2rem",
        backgroundColor: "#0cca62",  // styled green
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo container */}
      <Link
        to="/"
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          padding: "4px 12px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="Consult Park Logo"
          style={{ height: "40px", width: "auto" }}
        />
      </Link>

      {/* Nav links */}
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
