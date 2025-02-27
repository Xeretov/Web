import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Employees from './components/Employees';
import News from './components/News';
import './App.css'

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;