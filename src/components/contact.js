import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    help: '',
    fullnames: '',
    email: '',
    country: '',
    message: '',
  });

  const [message, setMessage] = useState('');
  const [countries, setCountries] = useState([]);

  // Fetch countries when the component mounts
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data); // Verify the structure
        setCountries(data); // Ensure `data` is an array
      } catch (error) {
        console.error('Error fetching country data:', error.message);
      }
    };
  
    fetchCountries();
  }, []);
  

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // POST request to Django API
      const response = await axios.post('http://localhost:8000/api/contact/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        setMessage('Form submited successfully!');
        // Reset the form
        setFormData({
          help: '',
          fullnames: '',
          email: '',
          country: '',
          message: '',
        });
      }
    } catch (error) {
      setMessage(
        'Error creating user: ' +
          (error.response ? JSON.stringify(error.response.data) : error.message)
      );
    }

    console.log('Form submitted:', formData);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={6} style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mt-5">
      <div className="container mt-3">
      
      </div>
      <div className="container mt-3">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light shadow">
        <div className="mb-3">
          <label htmlFor="help" className="form-label">Select</label>
          <select
            id="help"
            name="help"
            className="form-select"
            value={formData.help}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Area of Interest</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Data Science">Data Science</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Product Design">Product Design</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="fullnames" className="form-label">Full Names</label>
          <input
            type="text"
            id="fullnames"
            name="fullnames"
            className="form-control"
            value={formData.fullnames}
            onChange={handleChange}
            placeholder="Enter your full names"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="form-label">Select Country</label>
          <select
            className="form-select"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Choose a country</option>
            {countries.map((country) => (
              <option key={country.cca3} value={country.name.common}>
                {country.name.common}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      {message && <p className="mt-3">{message}</p>}
      
      </div>
      
    </div>
        </Col>
        <Col md={6} style={{ backgroundColor: '#f8f9fa'}}>
        </Col>
      </Row>
    </Container>
    
  );
};

export default ContactForm;
