// Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Optional: Add your login component CSS file

const Login = ({ onLogin }) => {
  const navigate = useNavigate(); // Hook for navigation

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Login.jsx

const handleLogin = (e) => {
  e.preventDefault();
  // Add your login authentication logic here
  if (username === 'john_doe' && password === 'password123') {
    onLogin(username); // Call parent component function to set logged-in user
    navigate('/dashboard'); // Navigate to dashboard after successful login
  } else {
    alert('Invalid username or password. Please try again.');
  }
};


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
