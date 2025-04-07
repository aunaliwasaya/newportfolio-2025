import React, { useState, useEffect } from "react";
import profile from "../assets/about-1.png";
import darkmodeprofile from "../assets/darkmode-profile.jpg";
import darkmodeprofile1 from "../assets/codeup-favicon.png";
import profileone from "../assets/codeup-favicon.png"
import CopyEmailButton from "./CopyEmailButton";
import { getConfigData } from "../data/configReader";
import herosection from "../assets/herosection.png";
import cover from "../assets/cover.png";
import { useSelector, useDispatch } from "react-redux";
import WhatIOfferMobile from "./WhatIOfferMobile";
import CoverSlider from "./CoverSlider";
import Video from "./Video";
import VerticalLogoSlider2 from "./VerticalLogoSlider2";
import AOS from "aos";
import "aos/dist/aos.css";
import PortfolioModal from "../pages/PortfolioModal";
import CodeupProjects from "./CodeupProjects";


export default function Profile() {

  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const [scrollToTop, setScrollToTop] = useState(false);
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  // State to trigger the first useEffect
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

  const skills = [
    "React",
    "MERN Stack",
    "Shopify",
    "Wix",
    "WordPress",
    "GoHighLevel",
    "Squarespace",
    "Graphics Design",
  ];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 1500); // Change skill every 1.5 seconds
    return () => clearInterval(skillInterval);
  }, [skills.length]);

  const configData = getConfigData();

  const workStatusTextClass =
    configData.status == "on"
      ? "bg-[#d0fadf] text-[#109d5c] rounded-full uppercase px-[0.60rem] py-[0.60rem] md:px-2 md:py-1 font-medium"
      : "bg-[#ff9d9d] text-[#f74d4d] rounded-full uppercase px-[0.60rem] py-[0.60rem] md:px-2 md:py-1 font-medium";
  const workStatusClass =
    configData.status == "on"
      ? "w-1.5 h-1.5 bg-[#109d5c] rounded-full"
      : "w-1.5 h-1.5 bg-[#f74d4d] rounded-full";
  const workStatusText =
    configData.status == "on" ? "avaılable for work" : "busy";

  return (
    <>
    {/* video div */}
      <div id="top">
        <Video />
      </div>
    {/* Mern stack dev div  */}
      <div className="mb-1 md:mb-0 lg:mb-0 xl:mb-0 mx-auto w-[75%] lg:w-[75%]  mt-1">
        <div
          className={`flex items-center justify-between px-5 -mt-14 py-2 lg:py-3 
        backdrop-blur-lg shadow-md rounded-2xl p-2 border ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-950 to-slate-500 "
            : "bg-gradient-to-r from-black to-slate-600 text-black"
        }`}
        >
          <div className=" flex items-center gap-x-3 font-bold text-sm lg:text-xl text-white">
            <p
              className={`
   font-bold 
    ${isDarkMode ? "text-white" : "text-white"}
  `}
            >
              {configData.job}
            </p>
          </div>

          <div className={workStatusTextClass}>
            <div className="text-sm font-medium flex items-center gap-x-1">
              <div className={workStatusClass}></div>
              <span className=" hidden md:block">{workStatusText}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`backdrop-blur-lg 
    ${isDarkMode ? "bg-gradient-to-r from-black to-gray-950 " : "bg-white"} 
    shadow-md rounded-2xl p-1  sm:m-3`}
      >
        {/* cover photo */}
        <div className="mb-5 md:mb-0 lg:mb-0 xl:mb-0 mx-auto w-[98%] ">
          {/* <div className=" flex items-center h-40 sm:h-52 md:h-64 lg:h-80 xl:h-[264px] justify-between backdrop-blur-lg bg-white bg-opacity-40 shadow-md rounded-2xl  border">
            <img
              src={cover}
              alt="Profile"
              className="w-full h-full xl:h-[264px] rounded-2xl object-cover xl:object-center"
            />
          </div> */}
          <div data-aos="fade-up">
            <CoverSlider />
          </div>

          {/* image */}
          <div className="relative rounded-full p-2 flex items-center justify-center sm:mb-1 lg:mb-3  ">
            <div className="absolute w-36 h-36 rounded-full bg-gradient-to-b from-gray-100 to-gray-300 overflow-hidden border-2 flex items-center justify-center">
              {/* Gradient Border Animation */}

              {/* Inner Circle with Image */}
              <div
                className={`w-32 h-32 -top-11 rounded-full flex items-center justify-center overflow-hidden animate-spin-slow ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600"
                    : "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                }`}
              >
                <img
                  src={isDarkMode ? darkmodeprofile : profile}
                  alt="Profile"
                  className="w-[128px] h-32"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Animated Skills */}
        <p
          className={`text-lg font-semibold mt-16 mb-5 text-center text-transparent bg-clip-text animate-fade-in-out ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600"
              : "bg-gradient-to-r from-orange-400 via-red-500 to-purple-500"
          }`}
          key={currentSkill}
        >
          {skills[currentSkill]}
        </p>
        <div className=" mt-2">
          {/* content */}
          <div className="px-7  flex  flex-col-reverse md:flex md:flex-row md:items-center md:justify-between pt-1 ">
            <div className="mx-auto flex flex-col ">
              <div className="w-[93%] mx-auto">
                <h1
                  className={`text-2xl text-center md:text-2xl font-semibold w-full tracking-tighter bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 -mt-4 ${
                    isDarkMode ? "text-blue-500" : "text-transparent"
                  }`}
                >
                  Hello!
                  <p>
                    {"I'm "} {configData.name}
                  </p>
                </h1>
                <p className="text-lg text-center font-semibold w-full tracking-tighter mb-3">
                  {configData.desc}
                </p>
              </div>
              {/* Portfolio services  */}
              <div className="flex flex-col items-center justify-center ">
      {!showServices ? (

        <div  className="flex justify-center items-center gap-5 ">
             <button
   onClick={() => setShowServices(true)}
   className={`px-4 py-2 text-sm cursor-pointer mt-5 text-white rounded-lg shadow-md hover:bg-blue-700 transition animate-bounce ${
     isDarkMode
       ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 border-blue-500 focus:ring-blue-200"
       : "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-gray-200 hover:border-gray-300 focus:ring-gray-100"
   }`}
 >
   Featured Services
         </button>
         <div className="text-base sm:text-lg">
         👈
         </div>
      
        </div>

      ) : (
        <div   className="-ml-6 p-1 w-full max-w-md relative">
          <div  >
            < PortfolioModal />
          </div>
          <button
            onClick={() => setShowServices(false)}
            className="bg-red-500 absolute top-0 -right-3 text-white  w-8 h-8 p-3 shadow-md shadow-red-500 rounded-full flex justify-start items-center hover:bg-red-600 transition"
          >
            x
          </button>
        </div>
      )}
    </div>


              {/* skills */}
              <div className="flex gap-4 justify-center items-center flex-wrap flex-row-reverse">
                {/* image */}
                <div className=" w-[100%] lg:w-[48%]">
                  <div className="mx-auto w-[300px]  sm:w-full sm:h-[350px]">
                    <div className="w-[300px]  -ml-3 sm:mx-auto sm:w-[360px] ">
                      <WhatIOfferMobile />
                    </div>
                    {/* <img
                      src={herosection}
                      alt="Profile"
                      className="hidden lg:block w-full lg:h-[280px] xl:h-[300px] 2xl:h-[230px] rounded-2xl object-contain  "
                    /> */}
                  </div>
                </div>

                {/* skills */}

                <div className="lg:w-[48%]">
                  {/* front emd */}
                  <div className="flex flex-col">
                    <h2
                      className={`drop-shadow-md card rounded-lg mt-2 text-md text-center font-bold m-3 w-[250px] py-1  ${
                        isDarkMode
                          ? "bg-gradient-to-r from-blue-950 to-slate-400 text-white shadow-white shadow-sm"
                          : "bg-black text-white"
                      } first:uppercase`}
                    >
                      Front End- Skills:
                    </h2>
                    <div
                      className={`w-full md:w-[100%] backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode
        ? "bg-gradient-to-l from-black to-gray-950 text-white"
        : "bg-gradient-to-b from-gray-100 to-gray-300  text-blue-950"
    } 
     rounded-2xl shadow-md  sm:-ml-0 p-2 md:p-4 flex justify-around flex-wrap gap-1 text-md `}
                    >
                      <div
                        className={`backdrop-filter backdrop-blur-lg
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        HTML 5
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        CSS 3
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        JavaScript
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        React.Js
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        Next.Js
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        Vue.Js
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        API Integration
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        BootStrap
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        Tailwind
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        Canva UI -UX
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        Wordpress
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        Wix
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        WP-Elementor
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        WP-Bakery
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        WP-Divi
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        Shopify
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        Square Space
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        GohighLevel
                      </div>
                    </div>
                    {/* <DraggableItems/> */}
                  </div>
                  {/* backend */}
                  <div className="flex flex-col">
                    <h2
                      className={`drop-shadow-md card rounded-lg mt-5 text-md text-center font-bold m-3 w-[250px] py-1  ${
                        isDarkMode
                          ? "bg-gradient-to-r from-blue-950 to-slate-400 text-white shadow-white shadow-sm"
                          : "bg-black text-white"
                      } first:uppercase`}
                    >
                      Back End- Skills:
                    </h2>
                    <div
                      className={`w-full md:w-[100%] mx-auto backdrop-filter   backdrop-blur-lg 
    
    ${
      isDarkMode
        ? "bg-gradient-to-l from-black to-gray-950 text-white"
        : "bg-gradient-to-b from-gray-100 to-gray-300  text-blue-950"
    } 
    
   rounded-2xl  sm:-ml-0 p-2 md:p-4 flex justify-around flex-wrap gap-1 text-md `}
                    >
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        Node.Js
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        Express.Js
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        Mongo DB
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        FireBase
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        JavaScript
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        MySql
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        Amazon Web Services
                      </div>
                      <div
                        className={`backdrop-filter backdrop-blur-lg 
    ${
      isDarkMode ? "bg-black border border-gray-500" : "bg-white bg-opacity-40"
    } 
    shadow-md rounded-2xl p-2`}
                      >
                        Github
                      </div>
                    </div>
                  </div>
                </div>

                {/* end image */}
              </div>

              <div className=" mx-auto flex items-center text-center md:text-justify justify-center md:justify-normal pt-6">
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
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                    Hire Me
                  </button>
                </a>

                <CopyEmailButton />
              </div>
            </div>
          </div>
        </div>
        <VerticalLogoSlider2 />
      </div>

            {/* codeup logo */}
            <div className="mx-auto w-[100px] h-[100px] border border-gray shadow-md rounded-full flex justify-center items-center">
      <a href="https://www.codeup.solutions" target="_blank" rel="noopener noreferrer">
  <img
    src={isDarkMode ? darkmodeprofile1 : profileone}
    alt="Profile"
    className="w-20 h-20 md:w-20 md:h-20 transform scale-x-[-1]"
  />
</a>

      </div>
    
        
   {/* What We offer */}
   <div
        className={`${
          isDarkMode ? 
            "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm" : "bg-black text-white shadow-sm shadow-white"
        } drop-shadow-md card rounded-lg mt-10 text-lg text-center font-bold m-3 w-[250px] truncate xl:w-[250px] py-3 px-2 mx-auto`}
      >
      25+ Projects Completed 
      </div>

      {/* Projects Div  */}

  
<CodeupProjects/>
    </>
  );
}
