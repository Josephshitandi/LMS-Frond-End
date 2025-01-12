// App.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/navbar';
import About from './components/about';
import Home from './components/home';
import Software from './components/courses/softwareEngineer';
import ContactForm from './components/contact';
import Data from './components/courses/dataScience';
import Cyber from './components/courses/cyberSecurity';
import Product from './components/courses/productDesign';



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
          <Route path="/courses/productDesign" element={<Product />} />
        </Routes>
      </Router>
      </div>
      <div>
        <Container fluid>
          <Row>
              <Col md={6} style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container mt-5">
                  <h1> Full Stack Software Engineering</h1>
                  <p>An intensive software engineering program designed to launch your career in tech.<br/> Master Front-End and Back-End technologies to become a full-stack developer</p>



                </div>  
              </Col>
                <Col md={6} style={{ backgroundColor: '#f8f9fa'}}>


                </Col>
                
          </Row>
        </Container>
      </div>

    </div>
  );
};

export default App;
