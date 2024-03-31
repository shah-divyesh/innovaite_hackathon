import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Assume you have a CSS file for styles
import businessImage from './assets/Screenshot 2024-03-30 at 15.21.44.png';
import engineeringImage from './assets/Screenshot 2024-03-30 at 15.31.08.png';
import computerScienceImage from './assets/Screenshot 2024-03-30 at 15.33.26.png';
import howItWorksImage from './assets/Screenshot 2024-03-30 at 19.39.04.png'

const HomePage = () => {
  const navigate = useNavigate();

  const handleOptionClick = (path) => {
    return () => {
      navigate('/education'); // This changes the route to the Education screen.
    };
  };

  const startJourney = () => {
    navigate('/education'); // This changes the route, assuming the education route is the start of the journey.
  };

  return (
    <div className="first-screen">
      <header className="header">
        <div className="logo">GoalForge</div>
        <nav className="navigation">
          <button className="login-btn">Log in</button>
          <button className="signup-btn">Sign up</button>
        </nav>
      </header>
      <main className="main-content">
        <h1>Discover your path</h1>
        <div className="path-options">
          <div className="option" onClick={handleOptionClick()}>
            <img src={businessImage} alt="Business" />
            <span>Business</span>
          </div>
          <div className="option" onClick={handleOptionClick()}>
            <img src={engineeringImage} alt="Engineering" />
            <span>Engineering</span>
          </div>
          <div className="option" onClick={handleOptionClick()}>
            <img src={computerScienceImage} alt="Computer Science" />
            <span>Computer Science</span>
          </div>
        </div>
      </main>
      <section className="how-it-works-section">
        <h2>How it works</h2>
        <img src={howItWorksImage} alt="How it works illustration" className="how-it-works-image" />
        <div className="steps-row">
          <div className="step">
            <h3>Step 1</h3>
            <p>Answer questions based on your interests, education, and preferences.</p>
          </div>
          <div className="step">
            <h3>Step 2</h3>
            <p>Our AI algorithm will take your responses and return career and or school suggestions.</p>
          </div>
          <div className="step">
            <h3>Step 3</h3>
            <p>Learn about your potential career paths and get a personalized roadmap.</p>
          </div>
        </div>
        <button onClick={startJourney} className="start-now-btn">Start now</button>
      </section>
    </div>
  );
};

export default HomePage;
