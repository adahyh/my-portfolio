import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Project1 from './pages/Project1';

import './App.css';  // Make sure this line is there to import your CSS file


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add more routes here when you create more pages */}
        <Route path="/project1" element={<Project1 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

