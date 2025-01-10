// components/UserDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserDetail = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId) {
      axios.get(`http://127.0.0.1:8000/api/user/${userId}/`)
        .then(response => setUser(response.data))
        .catch(error => console.error(error));
    }
  }, [userId]);

  return (
    <div>
      <h2>User Details</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>first_name: {user.first_name}</p>
          <p>last_name: {user.last_name}</p>
          <p>password: {user.password}</p>
          <p>role: {user.role}</p>
          <p>email: {user.email}</p>
          <p>is_staff: {user.is_staff}</p>
          <p>is_active: {user.is_active}</p>
          <p>date_joined: {user.date_joined}</p>
        </div>
      ) : (
        <p>Select a user to see details.</p>
      )}
    </div>
  );
};

export default UserDetail;
