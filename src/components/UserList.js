import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const UserList = ({ selectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/user/')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <h2 className="text-center mb-4">Users</h2>
      <ul >
        {users.map(user => (
          <li key={user.id} onClick={() => selectUser(user.id)} className="text-center mb-4">
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
