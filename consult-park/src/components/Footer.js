// src/components/Footer.jsx
import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/Consult-Park-Logo.png"; // Adjust the path based on where the logo is stored

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ backgroundColor: "white", padding: "0.5rem", borderRadius: "8px" }}>
            <img src={logo} alt="Consult Park Logo" style={{ width: "50px" }} />
          </div>
          <div>
            <h2>Consult Park</h2>
            <p>Your Strategic Outsourcing Partner</p>
          </div>
        </div>

        <div className={styles.linksSection}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/bpo">BPO</a>
          <a href="/">Contact</a>
        </div>

        <div className={styles.socialSection}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Consult Park. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
