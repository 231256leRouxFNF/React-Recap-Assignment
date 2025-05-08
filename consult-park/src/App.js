import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage";
import BPOPage from "./pages/BPOPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/bpo" element={<BPOPage />} />
        {/* Add other routes like Home, About, Contact here */}
      </Routes>
    </Router>
  );
}

export default App;
