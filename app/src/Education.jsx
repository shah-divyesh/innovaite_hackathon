import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Education.css'; // Importing the CSS file

function Education() {
  let navigate = useNavigate(); // Hook for navigation

  const handleSelect = (level) => {
    console.log(`User selected: ${level}`);
    navigate('/skills'); // This will navigate to the Skills component
  };

  return (
    <div className="homepage-container">
      
      <div className="homepage-content">
        <h2>Select your level of education</h2>
        <div className="button-container">
          <button onClick={() => handleSelect('High School Student')}>
            High School Student
          </button>
          <button onClick={() => handleSelect('College Student')}>
            College Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;
