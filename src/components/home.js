// App.js
import React, { useState } from 'react';
import UserList from './UserList';
import UserDetail from './UserDetail';
import UserForm from './UserForm';

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <UserList selectUser={setSelectedUser} />
      <UserDetail userId={selectedUser} />
      <UserForm userId={selectedUser} refreshUsers={() => setSelectedUser(null)} />
      </div>
  );
};

export default Home;
