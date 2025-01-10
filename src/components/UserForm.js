
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    password: '',
    email: '',
    role: '',
    is_staff: false,
    is_active: false,
    date_joined: '',
  });

  const [ setMessage] = useState('');

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
            username: '',
            first_name: '',
            last_name: '',
            password: '',
            email: '',
            role: '',
            is_staff: false,
            is_active: false,
            date_joined: '',
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
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </div>
      <div className="mb-3">
          <label htmlFor="username" className="form-label">
            First Name
          </label>
         <label htmlFor="first_name">First Name:</label>
         <input
          type="text"
          id="first_name"
          name="first_name"
          className="form-control"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="Enter your First Name"
          required
        />
      </div>

      <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Last Name
          </label>
         <label htmlFor="las_name">Last Name:</label>
         <input
          type="text"
          id="last_name"
          name="last_name"
          className="form-control"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Enter your Last Name"
          required
        />
      </div>

      <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
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
        
      <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Select Role
          </label>
          <select
            id="role"
            name="role"
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

      <div className="form-check mb-3">
          <input
            type="checkbox"
            id="is_staff"
            name="isStaff"
            className="form-check-input"
            checked={formData.is_staff}
            onChange={handleChange}
          />
          <label htmlFor="is_staff" className="form-check-label">
            Staff Access
          </label>
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            id="is_active"
            name="is_active"
            className="form-check-input"
            checked={formData.is_active}
            onChange={handleChange}
          />
          <label htmlFor="is_active" className="form-check-label">
            Staff Access
          </label>
        </div>

      <div className="mb-3">
          <label htmlFor="datetime" className="form-label">
          Date Joined
          </label>
          <input
            type="datetime-local"
            id="date_joined"
            name="date_joined"
            className="form-control"
            value={formData.date_joined}
            onChange={handleChange}
            required
          />
        </div>

      <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
    </form>
    </div>
  );
};

export default UserForm;

