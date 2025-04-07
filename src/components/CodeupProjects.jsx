import React, { useState } from "react";
import { FaMobileAlt, FaMobile } from "react-icons/fa"; // import the mobile icons
import project1 from "../../src/assets/project-one.png";
import project2 from "../../src/assets/project-two.png";
import project3 from "../../src/assets/project-three.png";
import project4 from "../../src/assets/project-four.png";

const CodeupProjects = () => {
  const [isSingleColumn, setIsSingleColumn] = useState(false);

  const projects = [
    {
      image: project1,
      link: "https://codeup.solutions",
    },
    {
      image: project2,
      link: "https://codeup.solutions",
    },
    {
      image: project3,
      link: "https://codeup.solutions",
    },
    {
      image: project4,
      link: "https://codeup.solutions",
    },
  ];

  return (
    <div className="p-4 ">
      {/* Icons - visible only on mobile */}
      <div className="flex justify-end gap-4 mb-4 md:hidden">
        {/* Icon for 2-column view */}
        <div
          onClick={() => setIsSingleColumn(false)}
          className={`cursor-pointer p-2 rounded-lg flex ${
            !isSingleColumn ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          <FaMobileAlt size={24} />
          <FaMobileAlt size={24} />
        </div>
        
        {/* Icon for 1-column view */}
        <div
          onClick={() => setIsSingleColumn(true)}
          className={`cursor-pointer p-2 rounded-lg ${
            isSingleColumn ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          <FaMobile size={24} />
      
        </div>
      </div>

      {/* Mobile: 1-column view */}
      {isSingleColumn && (
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300 mb-5"
              />
            </a>
          ))}
        </div>
      )}

      {/* Mobile (2-cols) and Desktop (3-cols) */}
      {!isSingleColumn && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default CodeupProjects;
