import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Education from './Education';
import Skills from './Skills';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            {/* ... other routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
