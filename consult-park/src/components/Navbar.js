// src/components/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Consult-Park-Logo-Full.png"; // adjust if your path differs

const Navbar = () => {
  return (
    <nav
      style={{
        padding: "1rem 2rem",
        backgroundColor: "#003366",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img
          src={logo}
          alt="Consult Park Logo"
          style={{ height: "40px", width: "auto" }}
        />
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/services" style={{ color: "white", textDecoration: "none" }}>Services</Link>
        <Link to="/bpo" style={{ color: "white", textDecoration: "none" }}>BPO</Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
