// components/UserDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
          <p>Email: {user.email}</p>
          <p>First Name: {user.first_name}</p>
          <p>Last Name: {user.last_name}</p>
        </div>
      ) : (
        <p>Select a user to see details.</p>
      )}
    </div>
  );
};

export default UserDetail;
