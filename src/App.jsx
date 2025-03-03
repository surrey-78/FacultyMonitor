import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Salary from './Components/Salary';
import Attendance from './Components/Attendance'
import './App.css'; // Add your main application CSS file

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    // Set the logged-in user state
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    // Clear the logged-in user state on logout
    setLoggedInUser(null);
  };

  const facultyData = [
    {
      id: 1,
      name: 'John Doe',
      workingDays: 20,
      leaves: 2,
      salary: 5000,
      deductions: 500
    },
    {
      id: 2,
      name: 'Jane Smith',
      workingDays: 22,
      leaves: 1,
      salary: 5500,
      deductions: 600
    },
    {
      id: 3,
      name: 'Alice Johnson',
      workingDays: 18,
      leaves: 4,
      salary: 4800,
      deductions: 700
    },
    {
      id: 4,
      name: 'Bob Brown',
      workingDays: 21,
      leaves: 3,
      salary: 5100,
      deductions: 550
    },
    {
      id: 5,
      name: 'Carol Davis',
      workingDays: 19,
      leaves: 5,
      salary: 4700,
      deductions: 750
    },
    {
      id: 6,
      name: 'David Wilson',
      workingDays: 23,
      leaves: 0,
      salary: 5600,
      deductions: 600
    },
    {
      id: 7,
      name: 'Eva Moore',
      workingDays: 20,
      leaves: 2,
      salary: 5000,
      deductions: 500
    },
    {
      id: 8,
      name: 'Frank Taylor',
      workingDays: 22,
      leaves: 1,
      salary: 5500,
      deductions: 600
    },
    {
      id: 9,
      name: 'Grace Anderson',
      workingDays: 18,
      leaves: 4,
      salary: 4800,
      deductions: 700
    },
    {
      id: 10,
      name: 'Henry Thomas',
      workingDays: 21,
      leaves: 3,
      salary: 5100,
      deductions: 550
    },
    {
      id: 11,
      name: 'Isabella Martinez',
      workingDays: 19,
      leaves: 5,
      salary: 4700,
      deductions: 750
    },
    {
      id: 12,
      name: 'Jack White',
      workingDays: 23,
      leaves: 0,
      salary: 5600,
      deductions: 600
    },
    {
      id: 13,
      name: 'Karen Harris',
      workingDays: 20,
      leaves: 2,
      salary: 5000,
      deductions: 500
    },
    {
      id: 14,
      name: 'Larry Clark',
      workingDays: 22,
      leaves: 1,
      salary: 5500,
      deductions: 600
    },
    {
      id: 15,
      name: 'Mona Lewis',
      workingDays: 18,
      leaves: 4,
      salary: 4800,
      deductions: 700
    },
    {
      id: 16,
      name: 'Nathan Lee',
      workingDays: 21,
      leaves: 3,
      salary: 5100,
      deductions: 550
    },
    {
      id: 17,
      name: 'Olivia Walker',
      workingDays: 19,
      leaves: 5,
      salary: 4700,
      deductions: 750
    },
    {
      id: 18,
      name: 'Paul Hall',
      workingDays: 23,
      leaves: 0,
      salary: 5600,
      deductions: 600
    },
    {
      id: 19,
      name: 'Quinn Allen',
      workingDays: 20,
      leaves: 2,
      salary: 5000,
      deductions: 500
    },
    {
      id: 20,
      name: 'Rachel Young',
      workingDays: 22,
      leaves: 1,
      salary: 5500,
      deductions: 600
    }
  ];

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route to login if not logged in */}
          <Route path="/dashboard" element={<Dashboard facultyData={facultyData} />} />
          <Route path="/" element={loggedInUser ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
          
          {/* Route to dashboard if logged in */}
          <Route path="/dashboard" element={loggedInUser ? <Dashboard username={loggedInUser} onLogout={handleLogout} /> : <Navigate to="/" />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/salary" element={<Salary facultyData={facultyData} />} />
          <Route path="/attendance" element={<Attendance faculty={facultyData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
