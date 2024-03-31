import React, { useState } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Education from './Education';
import Skills from './Skills';
import Courses from './Courses';
import ResultScreen from './ResultScreen';
import './App.css';
import RoadMapScreen from './RoadMapScreen';
import GoalScreen from './GoalScreen';

function App() {
  const [userData, setUserData] = useState({
    educationLevel: '',
    skills: [],
    courses: []
  });

  const [goal, setGoal] = useState('');

  const updateEducationLevel = (level) => {
    setUserData({...userData, educationLevel: level});
  };

  const updateSkills = (skills) => {
    setUserData({...userData, skills: skills});
  };

  const updateCourses = (courses) => {
    setUserData({...userData, courses: courses});
  };

  const careerQuestion = "What are my potential career roles?";

  const roadMapPrompt = "Give me a roadmap to reach goal based on my skills and expereince in steps as an array only";

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (type) => {
    // const fullPrompt = `${careerQuestion}\nEducation Level: ${userData.educationLevel}\nSkills: ${userData.skills.join(', ')}\nCourses: ${userData.courses.join(', ')}`;
    let fullPrompt;
    if (type === 'roadmap') {
      fullPrompt = `${roadMapPrompt}\nEducation Level: ${userData.educationLevel}\nSkills: ${userData.skills.join(', ')}\nCourses: ${userData.courses.join(', ')}`;
    } else {
      fullPrompt = `${careerQuestion}\nEducation Level: ${userData.educationLevel}\nSkills: ${userData.skills.join(', ')}\nCourses: ${userData.courses.join(', ')}`;
    }

    try {
      const res = await axios.post("http://localhost:8080/chat", { prompt: fullPrompt });
      setResponse(res.data); // Assuming the response has an 'answer' field
    } catch (err) {
      console.error(err);
    }
  };
  


  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<Education updateEducationLevel={updateEducationLevel} />} />
            <Route path="/skills" element={<Skills updateSkills={updateSkills} />} />
            <Route path="/courses" element={<Courses updateCourses={updateCourses} handleSubmit={handleSubmit} />} />
            <Route path="/results" element={<ResultScreen response={response} />} />
            <Route path="/goal" element={<GoalScreen setGoal={setGoal} />} />
            <Route path="/roadmap" element={<RoadMapScreen response={response} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
