// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/about';
import Home from './components/home';
import ContactForm from './components/contact';


const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>LMS</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
      </div>
    </div>
  );
};

export default App;
