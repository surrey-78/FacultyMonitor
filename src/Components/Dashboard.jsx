import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ facultyData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter facultyData based on searchTerm
  const filteredFaculty = facultyData.filter(faculty =>
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <h2 className="black-text">Dashboard</h2>
      <div className="button-container">
        <Link to="/login" className="dashboard-button">Login</Link>
        <Link to="/signup" className="dashboard-button">Signup</Link>
        <Link to="/attendance" className="dashboard-button">Attendance</Link>
        <Link to="/salary" className="dashboard-button">Salary</Link>
      </div>
      <input
        type="text"
        placeholder="Search Faculty"
        className="search-bar"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="faculty-cards-grid">
        {filteredFaculty.map(faculty => (
          <div key={faculty.id} className="faculty-card">
            <h4 className="black-text">{faculty.name}</h4>
            <p className="black-text"><strong>Working Days: </strong>{faculty.workingDays}</p>
            <p className="black-text"><strong>Leaves: </strong>{faculty.leaves}</p>
            <p className="black-text"><strong>Salary: </strong>${faculty.salary}</p>
            <p className="black-text"><strong>Deductions: </strong>${faculty.deductions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
