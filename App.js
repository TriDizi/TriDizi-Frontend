import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Service';
import Contact from './Components/Contact';
import Collaboration from './Components/Collaboration';
import Careers from './Components/Careers';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
