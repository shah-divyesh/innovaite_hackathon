import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Education from "./Education";
import Skills from "./Skills";
import Courses from "./Courses";
import ResultScreen from "./ResultScreen";
import "./App.css";
import RoadMapScreen from "./RoadMapScreen";
import GoalScreen from "./GoalScreen";
import HomePage from "./HomePage";
import _ from "lodash";

function App() {
  const [userData, setUserData] = useState({
    educationLevel: "",
    goal: "",
    skills: [],
    courses: [],
  });

  const [goal, setGoal] = useState("");
  var initialValueNodes = [
    {
      id: "1",
      data: { label: "Hello" },
      position: { x: 50, y: 150 },
      type: "input",
    },
    {
      id: "2",
      data: { label: "World" },
      position: { x: 400, y: 150 },
    },
    {
      id: "3",
      data: { label: "World" },
      position: { x: 750, y: 150 },
    },
    {
      id: "4",
      data: { label: "World" },
      position: { x: 750, y: 300 },
    },
    {
      id: "5",
      data: { label: "World" },
      position: { x: 400, y: 300 },
    },
    {
      id: "6",
      data: { label: "World" },
      position: { x: 50, y: 300 },
    },
    {
      id: "7",
      data: { label: "World" },
      position: { x: 50, y: 450 },
    },
    {
      id: "8",
      data: { label: "World" },
      position: { x: 400, y: 450 },
    },
  ];
  const updateEducationLevel = (level) => {
    setUserData({ ...userData, educationLevel: level });
  };

  const updateSkills = (skills) => {
    setUserData({ ...userData, skills: skills });
  };

  const updateCourses = (courses) => {
    setUserData({ ...userData, courses: courses });
  };
  const updateGoals = (goals) => {
    setUserData({ ...userData, goal: goals });
  };

  function processApiResponse(responseText) {
    // Split the text based on the pattern: "number. "
    // The positive lookahead (?=) ensures we split at the start of each number followed by a dot and a space without removing those characters.
    const stepsArray = responseText.split(/(?=\d+\. )/g).filter(Boolean);
    return stepsArray;
  }

  const careerQuestion = "What are my potential career roles?";

  const roadMapPrompt =
    "Give me a roadmap to reach goal based on my skills and expereince in 8 short sentence steps";

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [initialNodes, setInitialNodes] = useState(initialValueNodes);
  const handleSubmit = async (type) => {
    //type.preventDefault();
    // const fullPrompt = `${careerQuestion}\nEducation Level: ${userData.educationLevel}\nSkills: ${userData.skills.join(', ')}\nCourses: ${userData.courses.join(', ')}`;
    let fullPrompt;
    if (type === "roadmap") {
      fullPrompt = `${roadMapPrompt}\nEducation Level: ${
        userData.educationLevel
      }\nSkills: ${userData.skills.join(
        ", "
      )}\nCourses: ${userData.courses.join(", ")}\nGoal: ${userData.goal}`;
    } else {
      fullPrompt = `${careerQuestion}\nEducation Level: ${
        userData.educationLevel
      }\nSkills: ${userData.skills.join(
        ", "
      )}\nCourses: ${userData.courses.join(", ")}\nGoal: ${userData.goal}`;
    }

    try {
      if (type === "roadmap") {
        await axios
          .post("http://localhost:8080/chat", { prompt: fullPrompt })
          .then((res) => {
            setResponse(res.data);

            const mappedData = _.compact(
              _.flatMap(res.data.split("."), (e) => {
                return !e.includes("\n") && e.trim();
              })
            );
            // _.forEach(initialValueNodes, (v, k) => {
            //   v["data"]["label"] = mappedData[k];
            // });
            const data = _.map(initialValueNodes, (v, k) => {
              return { ...v, data: { label: mappedData[k] } };
            });
            setInitialNodes(data);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        const res = await axios.post("http://localhost:8080/chat", {
          prompt: fullPrompt,
        });
        setResponse(res.data); // Assuming the response has an 'answer' field
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/education"
              element={
                <Education updateEducationLevel={updateEducationLevel} />
              }
            />
            <Route
              path="/skills"
              element={<Skills updateSkills={updateSkills} />}
            />
            <Route
              path="/courses"
              element={
                <Courses
                  updateCourses={updateCourses}
                  handleSubmit={handleSubmit}
                />
              }
            />
            <Route
              path="/results"
              element={<ResultScreen response={response} />}
            />
            <Route
              path="/goal"
              element={
                <GoalScreen setGoal={updateGoals} handleSubmit={handleSubmit} />
              }
            />
            <Route
              path="/roadmap"
              element={<RoadMapScreen response={response} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
