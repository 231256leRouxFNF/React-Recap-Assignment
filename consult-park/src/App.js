// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import HomePage from './pages/HomePage';
=======
import Navbar from "./components/Navbar";
>>>>>>> main
import ServicesPage from "./pages/ServicesPage";
import BPOPage from "./pages/BPOPage";

// You can add HomePage, AboutPage, ContactPage etc.
const App = () => {
  return (
    <Router>
<<<<<<< HEAD
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/bpo" element={<BPOPage />} />
        {/* Add other routes like Home, About, Contact here */}
      </Routes>
=======
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/bpo" element={<BPOPage />} />
          {/* Other routes here */}
        </Routes>
      </div>
>>>>>>> main
    </Router>
  );
};

export default App;
