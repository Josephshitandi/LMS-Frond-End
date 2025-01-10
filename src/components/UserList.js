// components/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = ({ selectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/user/')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => selectUser(user.id)}>
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
