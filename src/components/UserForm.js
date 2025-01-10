
import React, { useState } from 'react';
import axios from 'axios';

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
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Create User </h2>
        <div>
            
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="last_name">Last Name:</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="role">User Role:</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="instructor">Instructor</option>
          <option value="student">Student</option>
        </select>
      </div>

      <div>
        <label htmlFor="is_staff">Staff:</label>
        <input
          type="checkbox"
          id="is_staff"
          name="is_staff"
          checked={formData.is_staff}
          onChange={handleChange}
        />
        <span>Yes</span>
      </div>

      <div>
        <label htmlFor="is_active">Active:</label>
        <input
          type="checkbox"
          id="is_active"
          name="is_active"
          checked={formData.is_active}
          onChange={handleChange}
        />
        <span>Yes</span>
      </div>

      <div>
        <label htmlFor="date_joined">Date Joined:</label>
        <input
          type="datetime-local"
          id="date_joined"
          name="date_joined"
          value={formData.date_joined}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UserForm;
