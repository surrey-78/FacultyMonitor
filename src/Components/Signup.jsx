import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null); // To track selected role
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic (e.g., API call to create new user)
    if (role) {
      alert(`Signed up successfully as ${role}!`);
      navigate('/'); // Redirect to login page after signup
    } else {
      alert('Please select a role before signing up.');
    }
  };

  return (
    <div className="signup-container">
      <h1>Welcome to the Signup Portal</h1>
      <div className="role-selection">
        <div
          className={`role-card ${role === 'administrator' ? 'selected' : ''}`}
          onClick={() => setRole('administrator')}
        >
          <h2>Signup as Administrator</h2>
        </div>
        <div
          className={`role-card ${role === 'faculty' ? 'selected' : ''}`}
          onClick={() => setRole('faculty')}
        >
          <h2>Signup as Faculty</h2>
        </div>
      </div>
      {role && (
        <div className="signup-form">
          <h2>Signup as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
          <form onSubmit={handleSignup}>
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
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <button type="submit">Signup</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Signup;
