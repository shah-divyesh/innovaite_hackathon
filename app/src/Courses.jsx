import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Courses.css'; 

function Courses({ updateCourses, handleSubmit: submitData }){ // Renamed prop for clarity
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [customCourse, setCustomCourse] = useState('');
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  

  const handleFormSubmit = async () => {
    await submitData(); // Now clearly calling the prop function
    navigate('/results'); // Navigate after submission completes
  };

  const handleCustomCourseChange = (e) => {
    setCustomCourse(e.target.value);
  };

  const addCustomCourse = () => {
    if(customCourse && !selectedCourses.includes(customCourse)){
      setSelectedCourses(prevCourses => [...prevCourses, customCourse]);
      setCustomCourse(''); // Reset custom course input
    }
  };

  const removeCourse = (indexToRemove) => {
    setSelectedCourses(selectedCourses.filter((_, index) => index !== indexToRemove));
  };

  useEffect(() => {
    updateCourses(selectedCourses); // Update courses in App's state whenever selectedCourses changes
  }, [selectedCourses]);


  return (
    <div className="educonnect">
      <h1>Completed Courses</h1>
      <div>
        {selectedCourses.map((course, index) => (
          <div key={index} className="course-tag">
            {course}
            <button onClick={() => removeCourse(index)} className="remove-course-button">x</button>
          </div>
        ))}
      </div>
      <input type="text" value={customCourse} onChange={handleCustomCourseChange} placeholder="Add a new course" />
      <button onClick={addCustomCourse}>Add Course</button>
      <button onClick={goBack}>Go Back</button>
      <button onClick={handleFormSubmit} className="submit-courses-button">Submit</button>
    </div>
  );
}

export default Courses;
