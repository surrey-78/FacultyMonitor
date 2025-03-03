import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Salary from './Components/Salary';
import Attendance from './Components/Attendance';
import './App.css';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const facultyData = [
    { id: 1, name: 'John Doe', workingDays: 20, leaves: 2, salary: 5000, deductions: 500 },
    { id: 2, name: 'Jane Smith', workingDays: 22, leaves: 1, salary: 5500, deductions: 600 }
  ];

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirect to dashboard after login */}
          <Route path="/" element={loggedInUser ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={loggedInUser ? <Dashboard username={loggedInUser} onLogout={handleLogout} facultyData={facultyData} /> : <Navigate to="/login" />} />
          <Route path="/salary" element={loggedInUser ? <Salary facultyData={facultyData} /> : <Navigate to="/login" />} />
          <Route path="/attendance" element={loggedInUser ? <Attendance faculty={facultyData} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
