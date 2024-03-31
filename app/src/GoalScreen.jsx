import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GoalScreen.css'

function GoalScreen({ setGoal }) {
  const [localGoal, setLocalGoal] = useState('');
  const navigate = useNavigate();

  const handleSubmitGoal = () => {
    setGoal(localGoal);  // Set the goal in the parent state
    navigate('/roadmap');  // Navigate to the RoadMapScreen
  };

  return (
    <div className="goal-screen-container">
        <h1 className="goal-screen-heading">What's your goal?</h1>
        <input
            className="goal-screen-input"
            type="text"
            value={localGoal}
            onChange={(e) => setLocalGoal(e.target.value)}
            placeholder="Enter your goal"
        />
        <button className="goal-screen-button" onClick={handleSubmitGoal}>Next</button>
    </div>

  );
}

export default GoalScreen;
