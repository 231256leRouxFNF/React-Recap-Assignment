// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; 

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BPOPage from "./pages/BPOPage";
import ContactPage from "./pages/ContactPage";

// You can add HomePage, AboutPage, ContactPage etc.
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="page-container">
      <div style={{ padding: "2rem" }}>
      <div className="page-content">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/bpo" element={<BPOPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Other routes here */}
        </Routes>
      </div>
      </div>
      </div>
    </Router>
  );
};

export default App;
