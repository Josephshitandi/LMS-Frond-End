// components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ user, refreshUsers }) => {
  const [formData, setFormData] = useState(user || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = user
      ? axios.put(`http://127.0.0.1:8000/api/user/${user.id}/`, formData)
      : axios.post('http://127.0.0.1:8000/api/user/', formData);

    request
      .then(() => refreshUsers())
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={formData.username || ''} onChange={handleChange} placeholder="Username" required />
      <input name="email" value={formData.email || ''} onChange={handleChange} placeholder="Email" required />
      <input name="first_name" value={formData.first_name || ''} onChange={handleChange} placeholder="First Name" />
      <input name="last_name" value={formData.last_name || ''} onChange={handleChange} placeholder="Last Name" />
      <button type="submit">{user ? 'Update' : 'Create'} User</button>
    </form>
  );
};

export default UserForm;
