import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(24); // Initial progress value

  // Circle properties for SVG
  const radius = 30; // Radius of the circle (to match the circle's 'r' value)
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div>
      {" "}
      {/* Wrapper div to ensure only one root element */}
      <div id="progress-bar--container">
        <svg className="circular-svg" viewBox="0 0 100 100">
          <circle
            stroke="#EAEAEA"
            strokeWidth="5.5"
            cx="50"
            cy="50"
            r="30"
            fill="none"
          />
          <circle
            id="progress--circle"
            stroke="#28411B"
            strokeWidth="5.5"
            cx="50"
            cy="50"
            r="30"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
          <text
            id="progress--text"
            x="50"
            y="48"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-sm font-bold" 
            style={{ fontSize: '10px' }} 
          >
            {progress}%
          </text>
          <text
            id="progress--text"
            className="progress--text--second text-sm" 
            x="50"
            y="58"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: '10px' }} 
          >
            collected
          </text>
        </svg>
      </div>
    </div> // End of wrapper div
  );
};

export default ProgressBar;
