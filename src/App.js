// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/navbar';
import About from './components/about';
import Home from './components/home';
import Software from './components/courses/softwareEngineer';
import ContactForm from './components/contact';
import Data from './components/courses/dataScience';
import Cyber from './components/courses/cyberSecurity';



const App = () => {

  return (
    <div>
      <div>
      <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<h1>LMS</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/courses/softwareEngineer" element={<Software />} />
        <Route path="/courses/dataScience" element={<Data />} />
        <Route path="/courses/cyberSecurity" element={<Cyber />} />
      </Routes>
    </Router>
      </div>
    </div>
  );
};

export default App;
