// App.js
import React, { useState } from 'react';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import UserForm from './components/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/about';


const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>LMS</h1>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
      </div>
      <div>
      <UserList selectUser={setSelectedUser} />
      <UserDetail userId={selectedUser} />
      <UserForm userId={selectedUser} refreshUsers={() => setSelectedUser(null)} />
      </div>
    </div>
  );
};

export default App;
