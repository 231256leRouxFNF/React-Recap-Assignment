// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ServicesPage from "./pages/ServicesPage";
import BPOPage from "./pages/BPOPage";

// You can add HomePage, AboutPage, ContactPage etc.
const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/bpo" element={<BPOPage />} />
          {/* Other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
