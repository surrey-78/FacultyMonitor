import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3500/api/v1/login', {
        role,
        username,
        password,
      });

      if (response.status === 201) {
        alert(`Welcome ${response.data.firstName} ${response.data.lastName}!`);
        localStorage.setItem('token', response.data.token);
        
        if (role === 'administrator') {
          navigate('/admin-dashboard');
        } else if (role === 'faculty') {
          navigate('/faculty-dashboard');
        }
      }
    } catch (error) {
      alert(`Status: ${error.response?.status} - ${error.response?.data?.message}`);
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
          <p className='forgot-password text-right'>
            <a href='#'>Forgot Password?</a>
          </p>
          <p className='text-right'>
            New User? <Link to='/signup'>Register here!</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
