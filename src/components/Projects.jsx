import { useState, useEffect } from "react";
import { getConfigData } from "../data/configReader";
import ImageSearchApp from "./ImageSearchApp";
import wordpress from "../data/wordpress";
import framer from "../data/framer";
import ReactSlickSlider from "./ReactSlickSlider";
// import SlidingLogos from "./SlidingLogos";
import { useSelector, useDispatch } from "react-redux";
import Accordians from "./Accordians";
import ReactSlider from "./ReactSlider";
import WordpressSlider from "./WordpressSlider";
import FramerSlider from "./FramerSlider";
import { FaMobileAlt } from "react-icons/fa";





export default function Projects() {

  // mobile one and two column
  const [isTwoColumn, setIsTwoColumn] = useState(false);
    const [isTwoColumnwordpress, setIsTwoColumnwordpress] = useState(true);
    const [isTwoColumnframer, setIsTwoColumnframer] = useState(false);

    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const configData = getConfigData();
  const projects = configData.projects || [];
  const wordpressprojects = wordpress;
  const framerProjects = framer;

  const [isHovered, setIsHovered] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showAll2, setShowAll2] = useState(false);
  const [showAll3, setShowAll3] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const svgClass = isHovered
    ? "w-6 h-6 text-gray-500 transition delay-150"
    : "w-6 h-6 text-gray-300";

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  const handleViewAll2 = () => {
    console.log("Toggle View All 2:", !showAll2); // Debugging log
    setShowAll2(!showAll2);
  };
  const handleViewAll3 = () => {
    console.log("Toggle View All 3:", !showAll3); // Debugging log
    setShowAll3(!showAll3);
  };

  useEffect(() => {
    console.log("Updated showAll2:", showAll2); // Debugging log for state changes
  }, [showAll2]);

  return (
    <>
   
      
      <div className="-mt-16 px-2">



              {/* Featured Project */}
              <div className="block 2xl:hidden">
              <div className= " b text-white drop-shadow-md card rounded-lg mt-10  text-center font-bold m-3 w-[300px] py-3 mx-auto">
         <p      className={`drop-shadow-md card rounded-lg mt-20 text-lg mb-8 text-center font-bold m-3 w-[250px] py-3 mx-auto ${
                  isDarkMode
                    ? "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm"
                    : "bg-black text-white  shadow-lg"
                } first:uppercase`}>   Featured Project</p>
        </div>

        
        <ImageSearchApp />

              </div>
      
              <h2
                className={`drop-shadow-md card rounded-lg mt-5 mb-8 text-lg text-center font-bold m-3 w-[300px] md:w-[350px] py-3 mx-auto ${
                  isDarkMode
                    ?  "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm"
                    : "bg-black text-white  shadow-lg"
                } first:uppercase`}> 
   Projects Delivered
        </h2>
        <WordpressSlider/>
        {/* React.js Projects Section */}
        <h2
                className={`drop-shadow-md card rounded-lg mt-20 text-lg mb-8 text-center font-bold m-3 w-[250px] py-3 mx-auto ${
                  isDarkMode
                    ? "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm"
                    : "bg-black text-white  shadow-lg"
                } first:uppercase`}> 
          React.Js Projects
        </h2>

        {/* <ReactSlider/>  */}
        <div className={`flex flex-col px-5 py-5 rounded-lg mt-10
  ${isDarkMode ? 'bg-gradient-to-r from-black to-gray-950' : 'bg-gray-100'}`}>
          <div className="flex items-center justify-between mb-5">
            <div className="font-medium text-lg flex items-center gap-x-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <p
  className={`text-transparent bg-clip-text ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500 to-purple-500'
  }`}
>
  Projects
</p>
            </div>
            <button
  type="button"
  onClick={handleViewAll}
  className={`gap-x-2 text-gray-900 border transition-all duration-300 focus:ring-4 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 border-blue-500 focus:ring-blue-200'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-gray-200 hover:border-gray-300 focus:ring-gray-100'
  }`}
>
              {showAll ? "Show Less" : "View All"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
              {/* for mobile devices only */}
          {/* <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-col">
            {(showAll ? projects : projects.slice(0, 4)).map((project, index) => (
              <a
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="  drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex mb-5 md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                href={project["project-link"]}
              >
                <div className=" flex flex-col lg:flex-row justify-around gap-2 w-full">
                <div className="rounded-full  overflow-hidden flex items-center justify-center  ">
                  <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src={project["project-image-url"]}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-[80%] mx-auto flex flex-col justify-center">
                  <h1 className="font-medium text-gray-800 text-lg">{project["project-name"]}</h1>
                  <p className="text-gray-500 text-md">{project["project-desc"]}</p>
                </div>
                <button className="w-[20%]  ml-auto hidden md:inline-block">
                  <svg
                    className={svgClass}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
                </div>
              </a>
            ))}
          </div> */}

          <div className="sm:flex flex-col hidden ">
            {(showAll ? projects : projects.slice(0, 4)).map((project, index) => (
              <a
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex mb-5 md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                href={project["project-link"]}
              >
                <div className="rounded-full overflow-hidden flex items-center justify-center  ">
                  <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src={project["project-image-url"]}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-[80%] flex flex-col justify-center">
                  <h1 className="font-medium text-gray-800 text-lg">{project["project-name"]}</h1>
                  <p className="text-gray-500 text-md">{project["project-desc"]}</p>
                </div>
                <button className="ml-auto hidden md:inline-block">
                  <svg
                    className={svgClass}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </a>
            ))}
          </div>
      
          <div className="flex justify-end gap-2 mb-3 sm:hidden sticky top-[7%] z-50">
  <button
    onClick={() => setIsTwoColumn(false)}
    className={`p-2 rounded-md  shadow-lg shadow-gray-700 ${!isTwoColumn ? 'bg-gradient-to-l from-blue-600 to-gray-500 text-white' : 'bg-white text-gray-700'}`}
  >
    <FaMobileAlt className="w-5 h-5" />
  </button>
  <button
    onClick={() => setIsTwoColumn(true)}
    className={`p-2 rounded-md  shadow-lg shadow-gray-700 ${isTwoColumn ? 'bg-gradient-to-r from-blue-600 to-gray-500 text-white' : 'bg-white text-gray-700'}`}
  >
    <div className="flex space-x-1">
      <FaMobileAlt className="w-5 h-5" />
      <FaMobileAlt className="w-5 h-5" />
    </div>
  </button>
          </div>

        {/* Project cards visible only in mobile */}
        <div className={`sm:hidden grid ${isTwoColumn ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
  {(showAll ? projects : projects.slice(0, 4)).map((project, index) => (
    <a
      key={index}
      className="drop-shadow-md card bg-white rounded-lg px-5 py-3 flex flex-col gap-3 border border-gray-200 hover:border-gray-300 transition duration-300"
      href={project["project-link"]}
    >
      <div className="flex flex-col items-center">
        <div className="card-image w-16 h-16 rounded-full overflow-hidden mb-2">
          <img
            className="w-full h-full"
            src={project["project-image-url"]}
            alt=""
          />
        </div>
        <div className="text-center">
          <h1 className="font-medium text-gray-800 text-lg">{project["project-name"]}</h1>
          <p className="text-gray-500 text-md">{project["project-desc"]}</p>
        </div>
      </div>
    </a>
  ))}
        </div>
        </div>



        {/* WordPress Projects Section */}
        <h2
                className={`drop-shadow-md card rounded-lg mt-5 mb-8 text-lg text-center font-bold m-3 w-[300px] md:w-[350px] py-3 mx-auto ${
                  isDarkMode
                    ?  "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm"
                    : "bg-black text-white  shadow-lg"
                } first:uppercase`}> 
          WordPress / wix / shopify Projects
        </h2>
        {/* <WordpressSlider/> */}
        {/* <div className="flex flex-col bg-gradient-to-r from-gray-950 to-black  rounded-lg px-5 py-5 mt-10">
          <div className="flex items-center justify-between mb-5">
            <div className="font-medium text-lg flex items-center gap-x-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <p
  className={`text-transparent bg-clip-text ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500 to-purple-500'
  }`}
>
  Projects
</p>
         
            </div>
            <button
  type="button"
  onClick={handleViewAll2}
  className={`gap-x-2 text-gray-900 border transition-all duration-300 focus:ring-4 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 border-blue-500 focus:ring-blue-200'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-gray-200 hover:border-gray-300 focus:ring-gray-100'
  }`}
>
              {showAll2 ? "Show Less" : "View All"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col">
            {(showAll2 ? wordpressprojects : wordpressprojects.slice(0, 4)).map((project, index) => (
              <a
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex mb-5 md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                href={project["project-link"]}
              >
                <div className="rounded-full overflow-hidden flex items-center justify-center  ">
                  <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full bg-gray-700"
                      src={project["project-image-url"]}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-[70%] flex flex-col justify-center">
                  <h1 className="font-medium text-lg text-gray-800 text-lg">{project["project-name"]}</h1>
                  <p className="text-gray-500 text-md">{project["project-desc"]}</p>
                </div>
                <button className="ml-auto hidden md:inline-block">
                  <svg
                    className={svgClass}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </a>
            ))}
          </div>
        </div> */}

        {/* WordPress Projects Section */}
<div className="flex flex-col bg-gradient-to-r from-gray-950 to-black rounded-lg px-5 py-5 mt-10">

{/* Header with Title and View All */}
<div className="flex items-center justify-between mb-5">
  <div className="font-medium text-lg flex items-center gap-x-2">
    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
    <p
      className={`text-transparent bg-clip-text ${
        isDarkMode
          ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
          : 'bg-gradient-to-r from-orange-400 via-red-500 to-purple-500'
      }`}
    >
      Projects
    </p>
  </div>

  <button
    type="button"
    onClick={handleViewAll2}
    className={`gap-x-2 text-gray-900 border transition-all duration-300 focus:ring-4 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center ${
      isDarkMode
        ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 border-blue-500 focus:ring-blue-200'
        : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-gray-200 hover:border-gray-300 focus:ring-gray-100'
    }`}
  >
    {showAll2 ? "Show Less" : "View All"}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-3 h-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  </button>
</div>

{/* Desktop View */}
<div className="sm:flex flex-col hidden">
  {(showAll2 ? wordpressprojects : wordpressprojects.slice(0, 4)).map((project, index) => (
    <a
      key={index}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex mb-5 md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
      href={project["project-link"]}
    >
      <div className="rounded-full overflow-hidden flex items-center justify-center">
        <div className="card-image w-16 h-16 rounded-full overflow-hidden">
          <img className="w-full h-full bg-gray-700" src={project["project-image-url"]} alt="" />
        </div>
      </div>
      <div className="w-[70%] flex flex-col justify-center">
        <h1 className="font-medium text-lg text-gray-800">{project["project-name"]}</h1>
        <p className="text-gray-500 text-md">{project["project-desc"]}</p>
      </div>
      <button className="ml-auto hidden md:inline-block">
        <svg
          className={svgClass}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </a>
  ))}
</div>

{/* Layout Toggle Buttons for Mobile */}
<div className="flex justify-end gap-2 mb-3 sm:hidden sticky top-[7%] z-50">
  <button
    onClick={() => setIsTwoColumnwordpress(false)}
    className={`p-2 rounded-md shadow-lg shadow-gray-700 ${!isTwoColumnwordpress ? 'bg-gradient-to-l from-blue-600 to-gray-500 text-white text-white' : 'bg-white text-gray-700'}`}
  >
    <FaMobileAlt className="w-5 h-5" />
  </button>
  <button
    onClick={() => setIsTwoColumnwordpress(true)}
    className={`p-2 rounded-md shadow-lg shadow-gray-700 ${isTwoColumnwordpress ? 'bg-gradient-to-r from-blue-600 to-gray-500 text-white text-white' : 'bg-white text-gray-700'}`}
  >
    <div className="flex space-x-1">
      <FaMobileAlt className="w-5 h-5" />
      <FaMobileAlt className="w-5 h-5" />
    </div>
  </button>
</div>

{/* Mobile View */}
<div className={`sm:hidden grid ${isTwoColumnwordpress ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
  {(showAll2 ? wordpressprojects : wordpressprojects.slice(0, 4)).map((project, index) => (
    <a
      key={index}
      className="drop-shadow-md card bg-white rounded-lg px-5 py-3 flex flex-col gap-3 border border-gray-200 hover:border-gray-300 transition duration-300"
      href={project["project-link"]}
    >
      <div className="flex flex-col items-center">
        <div className="card-image w-16 h-16 rounded-full overflow-hidden mb-2">
          <img className="w-full h-full bg-gray-700" src={project["project-image-url"]} alt="" />
        </div>
        <div className="text-center">
          <h1 className="font-medium text-gray-800 text-lg">{project["project-name"]}</h1>
          <p className="text-gray-500 text-md">{project["project-desc"]}</p>
        </div>
      </div>
    </a>
  ))}
</div>
</div>


      
                 {/* Framer Projects Section */}
                 <h2
                className={`drop-shadow-md card rounded-lg mt-5 mb-8 text-lg text-center font-bold m-3 w-[300px] md:w-[350px] py-3
                   mx-auto ${
                  isDarkMode
                    ?  "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm"
                    : "bg-black text-white  shadow-lg"
                } first:uppercase`}> 
          Framer-Design Projects
        </h2>
 {/* framer projets */}
        {/* <div className={`flex flex-col px-5 py-5 rounded-lg 
  ${isDarkMode ? 'bg-gradient-to-r from-black to-gray-950' : 'bg-gray-100'}`}>
          <div className="flex items-center justify-between mb-5">
            <div className="font-medium text-lg flex items-center gap-x-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <p
  className={`text-transparent bg-clip-text ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500 to-purple-500'
  }`}
>
  Projects
</p>
            </div>
            <button
  type="button"
  onClick={handleViewAll3}
  className={`gap-x-2 text-gray-900 border transition-all duration-300 focus:ring-4 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 border-blue-500 focus:ring-blue-200'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-gray-200 hover:border-gray-300 focus:ring-gray-100'
  }`}
>
              {showAll3 ? "Show Less" : "View All"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col">
            {(showAll3 ? framerProjects : framerProjects .slice(0, 2)).map((project, index) => (
              <a
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex mb-5 md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                href={project["project-link"]}
              >
                <div className="rounded-full overflow-hidden flex items-center justify-center ">
                  <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src={project["project-image-url"]}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-[80%] flex flex-col  justify-center">
                  <h1 className="font-medium text-lg text-gray-800 text-lg">{project["project-name"]}</h1>
                  <p className="text-gray-500 text-md">{project["project-desc"]}</p>
                </div>
                <button className="ml-auto hidden md:inline-block">
                  <svg
                    className={svgClass}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </a>
            ))}
          </div>
        </div> */}

        {/* Framer Projects Section */}
<div
  className={`flex flex-col px-5 py-5 rounded-lg 
  ${isDarkMode ? 'bg-gradient-to-r from-black to-gray-950' : 'bg-gray-100'}`}
>
  {/* Header */}
  <div className="flex items-center justify-between mb-5">
    <div className="font-medium text-lg flex items-center gap-x-2">
      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
      <p
        className={`text-transparent bg-clip-text ${
          isDarkMode
            ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
            : 'bg-gradient-to-r from-orange-400 via-red-500 to-purple-500'
        }`}
      >
        Projects
      </p>
    </div>
    <button
      type="button"
      onClick={handleViewAll3}
      className={`gap-x-2 text-gray-900 border transition-all duration-300 focus:ring-4 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center ${
        isDarkMode
          ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 border-blue-500 focus:ring-blue-200'
          : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-gray-200 hover:border-gray-300 focus:ring-gray-100'
      }`}
    >
      {showAll3 ? "Show Less" : "View All"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-3 h-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </button>
  </div>

  {/* Toggle Buttons for Mobile */}
  <div className="flex justify-end gap-2 mb-3 sm:hidden sticky top-[7%] z-50">
    <button
      onClick={() => setIsTwoColumnframer(false)}
      className={`p-2 rounded-md shadow-lg shadow-gray-700 ${!isTwoColumnframer ? 'bg-gradient-to-l from-blue-600 to-gray-500 text-white' : 'bg-white text-gray-700'}`}
    >
      <FaMobileAlt className="w-5 h-5" />
    </button>
    <button
      onClick={() => setIsTwoColumnframer(true)}
      className={`p-2 rounded-md shadow-lg shadow-gray-700 ${isTwoColumnframer ? 'bg-gradient-to-r from-blue-600 to-gray-500 text-white' : 'bg-white text-gray-700'}`}
    >
      <div className="flex space-x-1">
        <FaMobileAlt className="w-5 h-5" />
        <FaMobileAlt className="w-5 h-5" />
      </div>
    </button>
  </div>

  {/* Desktop View */}
  <div className="sm:flex flex-col hidden">
    {(showAll3 ? framerProjects : framerProjects.slice(0, 2)).map((project, index) => (
      <a
        key={index}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex mb-5 md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
        href={project["project-link"]}
      >
        <div className="rounded-full overflow-hidden flex items-center justify-center">
          <div className="card-image w-16 h-16 rounded-full overflow-hidden">
            <img className="w-full h-full" src={project["project-image-url"]} alt="" />
          </div>
        </div>
        <div className="w-[80%] flex flex-col justify-center">
          <h1 className="font-medium text-gray-800 text-lg">{project["project-name"]}</h1>
          <p className="text-gray-500 text-md">{project["project-desc"]}</p>
        </div>
        <button className="ml-auto hidden md:inline-block">
          <svg
            className={svgClass}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </a>
    ))}
  </div>

  {/* Mobile View */}
  <div className={`sm:hidden grid ${isTwoColumnframer ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
    {(showAll3 ? framerProjects : framerProjects.slice(0, 2)).map((project, index) => (
      <a
        key={index}
        className="drop-shadow-md card bg-white rounded-lg px-5 py-3 flex flex-col gap-3 border border-gray-200 hover:border-gray-300 transition duration-300"
        href={project["project-link"]}
      >
        <div className="flex flex-col items-center">
          <div className="card-image w-16 h-16 rounded-full overflow-hidden mb-2">
            <img className="w-full h-full" src={project["project-image-url"]} alt="" />
          </div>
          <div className="text-center">
            <h1 className="font-medium text-gray-800 text-lg">{project["project-name"]}</h1>
            <p className="text-gray-500 text-md">{project["project-desc"]}</p>
          </div>
        </div>
      </a>
    ))}
  </div>
</div>


    

              {/* slider */}
              <h2
                className={`drop-shadow-md card rounded-lg mt-5 mb-8 text-lg text-center font-bold m-3 w-[300px] md:w-[350px] py-3 mx-auto ${
                  isDarkMode
                    ? "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm"
                    : "bg-black text-white  shadow-lg"
                } first:uppercase`}> 
          Designing Projects
        </h2>
        <div className="flex flex-col bg-gradient-to-r from-gray-950 to-black rounded-lg px-1 py-5">
              <ReactSlickSlider/>
              </div>

              {/* <div className="w-[90%] overflow-hidden mx-auto" >
              <SlidingLogos/>
              </div> */}

                  {/* accordians */}

        <Accordians/>
         
      </div>
    </>
  );
}
