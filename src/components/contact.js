
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    help: '',
    fullnames: '',
    email: '',
    country: '',
  });

  // const setMessage = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // POST request to Django API
      const response = await axios.post('http://localhost:8000/api/user/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        setMessage('User created successfully!');
        // Reset the form
        setFormData({
            help: '',
            fullnames: '',
            email: '',
            country: '',
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
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create User</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light shadow">
      <div className="mb-3">
          <label htmlFor="help" className="form-label">
            Select 
          </label>
          <select
            id="help"
            name="help"
            className="form-select"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Choose a role
            </option>
            <option value="admin">Admin</option>
          <option value="instructor">Instructor</option>
          <option value="student">Student</option>
          </select>
        </div>
      <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Full names
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your Full names"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
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

        <div className="container mt-3">
      <label htmlFor="country" className="form-label">
        Select Country
      </label>
      <select
        className="form-select"
        id="country"
        value={selectedCountry}
        onChange={handleChange}
      >
        <option value="">Choose a country</option>
        {countries.map((country) => (
          <option key={country.cca3} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
    </div>

      <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
    </form>
    {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default ContactForm;

