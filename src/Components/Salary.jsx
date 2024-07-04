import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Salary.css';

const Salary = ({ facultyData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const totalSalary = facultyData.reduce((acc, faculty) => acc + faculty.salary, 0);
  const totalDeductions = facultyData.reduce((acc, faculty) => acc + faculty.deductions, 0);
  const netSalary = totalSalary - totalDeductions;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFacultyData = facultyData.filter((faculty) =>
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="salary-container">
      <h2 className="black-text">Salary Overview</h2>
      <div className="overall-salary">
        <p className="black-text"><strong>Total Salary: </strong>${totalSalary}</p>
        <p className="black-text"><strong>Total Deductions: </strong>${totalDeductions}</p>
        <p className="black-text"><strong>Net Salary: </strong>${netSalary}</p>
      </div>
      <input
        type="text"
        placeholder="Search Faculty"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <h3 className="black-text">Individual Salaries</h3>
      <div className="individual-salaries-grid">
        {filteredFacultyData.map((faculty) => (
          <div key={faculty.id} className="faculty-salary-card">
            <h4 className="black-text">{faculty.name}</h4>
            <p className="black-text"><strong>Salary: </strong>${faculty.salary}</p>
            <p className="black-text"><strong>Deductions: </strong>${faculty.deductions}</p>
            <p className="black-text"><strong>Net Salary: </strong>${faculty.salary - faculty.deductions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Salary.propTypes = {
  facultyData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      workingDays: PropTypes.number.isRequired,
      leaves: PropTypes.number.isRequired,
      salary: PropTypes.number.isRequired,
      deductions: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Salary;
