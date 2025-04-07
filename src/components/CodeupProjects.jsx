import React, { useState } from "react";
import { FaMobileAlt, FaMobile } from "react-icons/fa";
import project1 from "../../src/assets/project-one.webp";
import project2 from "../../src/assets/project-two.webp";
import project3 from "../../src/assets/project-three.webp";
import project4 from "../../src/assets/project-four.webp";
// Add more sample projects as needed
import project5 from "../../src/assets/project-one.webp";
import project6 from "../../src/assets/project-two.webp";
import project7 from "../../src/assets/project-three.webp";
import project8 from "../../src/assets/project-four.webp";
import { useSelector, useDispatch } from "react-redux";


const CodeupProjects = () => {

const dispatch = useDispatch();
const isDarkMode = useSelector((state) => state.theme.isDarkMode); 
  const [isSingleColumn, setIsSingleColumn] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    { image: project1, link: "https://codeup.solutions" },
    { image: project2, link: "https://codeup.solutions" },
    { image: project3, link: "https://codeup.solutions" },
    { image: project4, link: "https://codeup.solutions" },
    { image: project5, link: "https://codeup.solutions" },
    { image: project6, link: "https://codeup.solutions" },
    { image: project7, link: "https://codeup.solutions" },
    { image: project8, link: "https://codeup.solutions" },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="p-4">
      {/* Icons - visible only on mobile */}
      <div className="flex justify-end gap-4 mb-4 md:hidden">
        <div
          onClick={() => setIsSingleColumn(false)}
          className={`cursor-pointer p-2 rounded-lg flex ${
            !isSingleColumn ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          <FaMobileAlt size={24} />
          <FaMobileAlt size={24} />
        </div>

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
          {visibleProjects.map((project, index) => (
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
          {visibleProjects.map((project, index) => (
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

      {/* View More Button */}
      {!showAll && projects.length > 6 && (
        <div className="flex justify-center mt-6">
     <button
  onClick={() => setShowAll(true)}
  className={`px-6 py-2 rounded-md text-white transition duration-300 
    bg-gradient-to-l 
    ${isDarkMode 
      ? 'from-blue-500 via-purple-500 to-indigo-500' 
      : 'from-pink-500 to-red-500'
    }`}
>
  View More
</button>

        </div>
      )}
    </div>
  );
};

export default CodeupProjects;
