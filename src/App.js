// App.js
import React, { useState } from 'react';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import UserForm from './components/UserForm';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <UserList selectUser={setSelectedUser} />
      <UserDetail userId={selectedUser} />
      <UserForm userId={selectedUser} refreshUsers={() => setSelectedUser(null)} />
    </div>
  );
};

export default App;
