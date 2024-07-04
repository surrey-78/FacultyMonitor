import React from 'react';
import './FacultyCard.css';

const FacultyCard = ({ faculty }) => {
  return (
    <div className="faculty-card">
      <h3>{faculty.name}</h3>
      <p><strong>Working Days:</strong> {faculty.workingDays}</p>
      <p><strong>Leaves:</strong> {faculty.leaves}</p>
      <p><strong>Salary:</strong> ${faculty.salary.toFixed(2)}</p>
      <p><strong>Deductions:</strong> ${faculty.deductions.toFixed(2)}</p>
    </div>
  );
};

export default FacultyCard;
