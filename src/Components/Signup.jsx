import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Add more state variables for other signup fields as needed

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic (e.g., API call to create new user)
    // After successful signup, navigate to the login page
    // For demo purposes, navigate immediately after clicking signup
    // Replace with actual signup logic and success handling
    navigate('/'); // Navigate to login page
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
