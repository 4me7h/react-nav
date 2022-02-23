import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/';
import About from './pages/about';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import Contact  from './pages/contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/portfolio" element={<Portfolio/>}/>
        <Route exact path="/contact-us" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
