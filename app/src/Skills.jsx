import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Skills.css'; // Make sure to create a corresponding CSS file

function Skills(){
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [customSkill, setCustomSkill] = useState('');
  const navigate = useNavigate();

  const goBackToEducation = () => {
    navigate(-1); // Go back to the previous page
  };

  const goToProfessions = () => {
    const dummyJobs = ["cook", "teacher"];
    navigate('/professions', { state: { jobs: dummyJobs } }); // Go to professions page with dummy jobs data  };
  }

  const handleCustomSkillChange = (e) => {
    setCustomSkill(e.target.value);
  };

  const addCustomSkill = () => {
    if (customSkill.trim() && !selectedSkills.includes(customSkill.trim())) {
      setSelectedSkills([...selectedSkills, customSkill.trim()]);
      setCustomSkill('');
    }
  };

  const removeSkill = (indexToRemove) => {
    setSelectedSkills(selectedSkills.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="educonnect">

      <h1>EduConnect</h1>
      <h2>Add your skills/interests</h2>
      <div className="skills-list">
        {selectedSkills.map((skill, index) => (
          <div key={index} className="skill-tag">
            {skill}
            <button onClick={() => removeSkill(index)} className="remove-skill-button">x</button>
          </div>
        ))}
      </div>
      <div className="custom-skill-entry">
        <textarea
          className="custom-skill-input"
          value={customSkill}
          onChange={handleCustomSkillChange}
          placeholder="Type here..."
          rows="4"
          cols="50"
        ></textarea>
        <button 
          className="add-skill-button"
          onClick={addCustomSkill}
        >
          Add Skill
        </button>
      </div>
      <button onClick={goBackToEducation} className="back-button">Back to Education</button>

      <button onClick={goToProfessions} className="to-prof-button">See Results</button>

    </div>
    
  );
}

export default Skills;
