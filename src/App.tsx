import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './Portfolio'
import About from './About'
import Cynthia from './Cynthia'
import ScrollToTop from './ScrollToTop';
import Contact from './Contact'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <Router>
       {/* <ScrollToTop /> */}
      <NavBar />
      <Routes>
      <Route path="/" element={<Cynthia />} />
        <Route path="/cynthia" element={<Cynthia />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App;
