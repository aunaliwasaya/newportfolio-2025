import React, { useState, useEffect } from "react";
import profile from "../../src/assets/aun-esoul.jpg";
import profileone from "../../src/assets/prof-aun.png";
import darkmodeprofile from "../../src/assets/darkmode-profile.jpg";
import CopyEmailButton from "../components/CopyEmailButton";
import { getConfigData } from "../data/configReader";
import cover from "../assets/cover2.png";
import TaxationCertificate from "../components/TaxationCertificate";
import WhatIOffer from "../components/WhatIOffer";
import { useSelector } from "react-redux"; // Import useSelector from Redux


export default function About() {
  
  const skills = [
    "React",
    "MERN Stack",
    "Shopify",
    "WordPress",
    "GoHighLevel",
    "Squarespace",
    "Graphics Design",
    "Canva",
    "Flyer Design",
    "Brochure Design",
    "Content Writing",
  ];
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const configData = getConfigData();

  const [scrollToTop, setScrollToTop] = useState(false); // State to trigger the first useEffect

  

  useEffect(() => {
    if (scrollToTop) {
      // Triggered by the second useEffect
      window.scrollTo(0, 0);
      setScrollToTop(true); // Reset state
    }
  }, [scrollToTop]);

  useEffect(() => {
    // Scroll to the element with id="top" on mount
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
      setScrollToTop(true); // Trigger the first useEffect
    }
  }, []); // Empty dependency array ensures it runs only once on mount

  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Using Redux state for dark mode
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prevSkill) => (prevSkill + 1) % skills.length);
    }, 2000); // Change skill every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [skills.length]);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div  id="top" className={`w-full mx-auto rounded-xl ${isDarkMode ? "bg-gradient-to-r from-black to-gray-950 text-white " : "bg-white  text-black  "}`}>
      <div className="px-7 pt-1">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          About
        </h1>
      </div>

      {/* cover photo */}
      <div className={`m-3 flex items-center h-40 sm:h-52 md:h-64 lg:h-[390px] xl:h-[230px] justify-between backdrop-blur-lg ${isDarkMode ? "bg-black shadow-lg shadow-white" : "bg-white"} bg-opacity-40 shadow-md rounded-2xl border`}>
        <img
          src={cover}
          alt="Profile"
          className="w-full h-full xl:h-[230px] rounded-2xl object-cover xl::object-center"
        />
      </div>

      {/* image */}
      <div className="relative rounded-full p-2 sm:mb-1 lg:mb-3">
        <div className="absolute -mt-16 left-10 w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-b from-gray-100 to-gray-300 overflow-hidden border-2 flex items-center justify-center">
          {/* Gradient Border Animation */}
          <div
  className={`w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center overflow-hidden animate-spin-slow ${
    isDarkMode
      ? "bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600"
      : "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
  }`}
>
<img
  src={isDarkMode ? darkmodeprofile : profileone}
  alt="Profile"
  className="w-28 h-28 md:w-36 md:h-36 rounded-full transform scale-x-[-1]" // Added transform and scale-x-[-1]
/>

</div>

        </div>
        {/* Animated Skills */}
        <p
        className={`absolute left-40 sm:left-48 -top-12 font-bold truncate sm:text-2xl lg:text-3xl mt-16 mb-5 text-center text-transparent bg-clip-text animate-fade-in-out ${
          isDarkMode
            ? "bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600"
            : "bg-gradient-to-r from-orange-400 via-red-500 to-purple-500"
        }`}
      >
          {skills[currentSkill]}
        </p>
      </div>

      {/* content */}
      <div className="px-7 py-7 mt-16 flex flex-col flex-col-reverse md:flex md:flex-row md:items-center md:justify-between pt-3">
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {/* content */}
            <div className="w-full md:w-[70%] ml-0 sm:ml-10">
              <h1 className="text-4xl md:text-4xl font-semibold text-center md:text-justify tracking-tighter lg:mt-5">
                {"It's me "}{" "}
                <p
  className={`text-transparent bg-clip-text font-bold text-[40px] ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500'
  }`}
>
  {configData.name}
</p>
              </h1>
              <p className="text-lg  text-center md:text-justify font-normal tracking-tigh">
                {configData.aboutDesc}
              </p>
            </div>
            {/* image */}
            <div className="w-full md:w-[25%] mx-auto">
              <img
               className="border rounded-md p-3 grayscale hover:grayscale-0 shadow-md h-[300px] mx-auto transition-all duration-500 ease-in-out" 
                src={profile}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    
        
      <WhatIOffer />
  

      <div className="mt-3 text-black bg-black w-[98%] h-[1px] mx-auto"></div>
      {/* resume / taxation certificate */}
      <TaxationCertificate />
      <div className="mt-3 text-black bg-black w-[98%] h-[1px] mx-auto mb-10"></div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold">{"Let's work together."}</h1>
        <p className="text-md font-normal text-center px-3">
          I master in Creating Amazing visually Appealing Designs that allow
          the Best User Experience Ever!
        </p>
      </div>
      <div className="flex flex-col flex-col-reverse md:flex md:flex-row md:items-center justify-center py-8">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center text-center md:text-justify justify-center md:justify-normal">
            <a href={configData.hireMeLink}>
              <button
                type="button"
                className="gap-x-1 before:ease relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center mr-2 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.551a9.95 9.95 0 01.76 3.387c-.04-.091-.106-.185-.191-.271l-.688-.757L13.021 5.685l-.306-.67z"
                  />
                </svg>
                Let's Talk
              </button>
            </a>
          </div>
        </div>
      </div>
   
    </div>
  );
}
