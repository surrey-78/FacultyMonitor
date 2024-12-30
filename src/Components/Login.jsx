import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null); // To track selected role
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'administrator' && username === 'admin' && password === 'admin123') {
      navigate('/admin-dashboard'); // Navigate to admin dashboard
    } else if (role === 'faculty' && username === 'faculty' && password === 'faculty123') {
      navigate('/faculty-dashboard'); // Navigate to faculty dashboard
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to the Login Portal</h1>
      <div className="role-selection">
        <div
          className={`role-card ${role === 'administrator' ? 'selected' : ''}`}
          onClick={() => setRole('administrator')}
        >
          <h2>Login as Administrator</h2>
        </div>
        <div
          className={`role-card ${role === 'faculty' ? 'selected' : ''}`}
          onClick={() => setRole('faculty')}
        >
          <h2>Login as Faculty</h2>
        </div>
      </div>
      {role && (
        <div className="login-form">
          <h2>Login as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
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
      )}
    </div>
  );
};

export default Login;
