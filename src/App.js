import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';

import './App.css';  // Make sure this line is there to import your CSS file


const App = () => {
  return (
    <Router>
      {/* trying to wrap in gradient */}
      <div class="gradient-bg"> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*add more routes here when you create more pages */}
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;

