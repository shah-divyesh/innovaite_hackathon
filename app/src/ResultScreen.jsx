import React from 'react';
import './ResultScreen.css'; // Make sure the path is correct

const ResultScreen = ({ response }) => {
  return (
    <div className="result-screen-container"> {/* Updated class name */}
      <div className="max-w-4xl p-5 rounded-lg shadow-lg bg-white">
        <h2 className="result-screen-header">Potential Career Roles</h2> {/* Updated class name */}
        <p className="result-screen-content">{response ? response : 'Your results will appear here...'}</p> {/* Updated class name */}
      </div>
    </div>
  );
};

export default ResultScreen;
