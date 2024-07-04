import React from 'react';
import './Attendance.css';

const Attendance = ({ faculty }) => {
  const totalWorkingDays = faculty.reduce((total, member) => total + member.workingDays, 0);
  const totalLeaves = faculty.reduce((total, member) => total + member.leaves, 0);

  return (
    <div className="attendance-container">
      <h2>Attendance Summary</h2>
      <div className="attendance-card">
        <p><strong>Total Working Days:</strong> {totalWorkingDays}</p>
        <p><strong>Total Leaves:</strong> {totalLeaves}</p>
      </div>
    </div>
  );
};

export default Attendance;
