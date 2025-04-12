import React from "react";
import { useSelector } from "react-redux";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import the CSS
import WhatIOfferMobile from "./WhatIOfferMobile";

// Define a constant array for section data
const sectionData = [
  {
    category: "Front-End",
    skills: ["React", "Vue", "Next", "HTML", "CSS", "JavaScript", "Tailwind", "Bootstrap"],
    emoji: "💻", // Front-End emoji
  },
  {
    category: "CMS",
    skills: ["Shopify", "WordPress", "GoHighLevel", "SquareSpace", "Wix", "WebFlow"],
    emoji: "🌐", // CMS emoji
  },
  {
    category: "Back-End",
    skills: ["MERN", "MySQL", "MongoDB", "Node", "Express", "GitHub", "Amazon Web Services"],
    emoji: "🖥️", // Back-End emoji
  },
  {
    category: "Designing",
    skills: ["Figma", "Canva"],
    emoji: "🎨", // Designing emoji
  },
];

const Skills = () => {
  // Get dark mode state from Redux
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  // Set styles based on dark mode, including gradient backgrounds
  const sectionBackground = isDarkMode
    ? "bg-gradient-to-l from-gray-500 to-gray-800" // Gradient for dark mode
    : "bg-gradient-to-r from-gray-400 to-white"; // Gradient for light mode



  return (
    <section id="skills" className={`${sectionBackground} relative py-2 rounded-2xl mb-10 sm:mb-5`}>
      <div className="container mx-auto ">
        <VerticalTimeline>
          {sectionData.map((section, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work "
              date={section.category}
              iconStyle={{
                background: isDarkMode ? "#000" : "#FFF",
                overflow:"hidden",
              }}
              icon={
                <div style={{ fontSize: "2rem", textAlign: "center", lineHeight: "40px", padding: "5px",  }}>
                  {section.emoji}
                </div>
              } // Add the emoji here
            >
              {/* Section Title */}
              <h1
  className={`text-3xl font-bold text-center mb-5 bg-clip-text text-transparent 
    ${isDarkMode ? "bg-gradient-to-r from-blue-500 via-blue-400 to-white"
        : "bg-gradient-to-r from-pink-400 to-red-500"}`}
>
  {section.category}
</h1>


              {/* Skills List */}
              <ul className="flex justify-center flex-wrap">
  {section.skills.map((skill, i) => (
    <li className="inline-block mx-3" key={i}>
      <div className="text-center font-bold">
        <p className="text-2xl mt-2 font-bold text-black">{skill}</p> {/* Increased font size to 2xl */}
      </div>
    </li>
  ))}
</ul>


            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      {/* What i offer bg absolute */}
  
  
    </section>
  );
};

export default Skills;
