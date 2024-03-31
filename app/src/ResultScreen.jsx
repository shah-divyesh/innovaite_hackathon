import "./ResultScreen.css"; // Make sure the path is correct
const ResultScreen = ({ response }) => {
  return (
    <div className="result-screen-container">
      {" "}
      {/* Updated class name */}
      <header class="top-nav">
        <h1>GoalForge</h1>
      </header>
      <div className="max-w-4xl p-5 rounded-lg shadow-lg bg-white">
        <h2 className="result-screen-header">Potential Career Roles</h2>{" "}
        {/* Updated class name */}
        {response ? (
          <ul className="result-screen-content">
            {response.split("\n").map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        ) : (
          <p className="result-screen-content">
            Your results will appear here...
          </p>
        )}
      </div>
    </div>
  );
};
export default ResultScreen;