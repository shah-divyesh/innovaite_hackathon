import React, { useState } from "react";

import "./GoalScreen.css";
import { useNavigate } from "react-router-dom";

function GoalScreen(props) {
  const [localGoal, setLocalGoal] = useState("");
  const navigate = useNavigate();

  const handleSubmitGoal = async () => {
    props.setGoal(localGoal);
    await props.handleSubmit("roadmap"); // Set the goal in the parent state
    navigate("/roadmap");
    // Navigate to the RoadMapScreen
  };

  return (
    <>
      <header className="header">
        <div className="logo">GoalForge</div>
      </header>
      <div className="goal-screen-container">
        <h1 className="goal-screen-heading">What's your goal?</h1>
        <input
          className="goal-screen-input"
          type="text"
          value={localGoal}
          onChange={(e) => setLocalGoal(e.target.value)}
          placeholder="Enter your goal"
        />
        <button className="goal-screen-button" onClick={handleSubmitGoal}>
          Next
        </button>
      </div>
    </>
  );
}

export default GoalScreen;
