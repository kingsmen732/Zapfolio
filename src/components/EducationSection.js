import React from "react";

const Education = ({ isDarkMode }) => {
  const educationDetails = [
    {
      institution: "Vellore Institute of Technology, Andhra Pradesh",
      duration: "2022-2026",
      degree: "Bachelor of Technology - Computer Engineering",
      cgpa: "CGPA: 7.56",
    },
    {
      institution: "Sri Chaitanya Techno School, Chennai",
      duration: "2021-2022",
      degree: "CBSE Class XII Aggregate",
      score: "82.2%",
    },
    {
      institution: "Lalaji Memorial Omega International School, Chennai",
      duration: "2019-2020",
      degree: "CBSE Class X Aggregate",
      score: "82.5%",
    },
  ];

  return (
    <div className={`flex flex-col justify-center items-center h-screen w-screen p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className={`max-w-2xl w-full rounded-lg shadow-md mb-7 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
        <h2 className={`text-2xl font-bold text-center mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Education Details</h2>
        {educationDetails.map((edu, index) => (
          <div key={index} className={`p-4 mb-4 rounded-lg shadow-sm ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
            <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{edu.institution}</h3>
            <p className={`text-gray-400 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.duration}</p>
            <p className="italic">{edu.degree}</p>
            {edu.cgpa && <p className="mt-1">{edu.cgpa}</p>}
            {edu.score && <p className="mt-1">{edu.score}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
