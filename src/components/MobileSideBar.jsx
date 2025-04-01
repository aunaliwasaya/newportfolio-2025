import React, { useState } from "react";
import ImageSearchApp from "./ImageSearchApp";
import Certificates from "./Certificates";
import SlidingLogos2 from "./SlidingLogos2";
import TaxationCertificate from "./TaxationCertificate";
import profile from "../assets/navbar.png";
import darkmodenavbar from "../assets/sidebar-darkmode.png";
import WhatIOfferMobile from "./WhatIOfferMobile";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleTheme } from "../store/themeSlice";
import { useDispatch } from "react-redux";
import Location from "./Location";
import Languages from "./Languages";
import LinearBar from "../pages/Linebar";
import Contact from "./Contact";
import aunimage from "../assets/aun-img.png/";
import { NAME, DESIGNATION } from "../data/constants";
import cover2 from "../assets/covermobile.png";
import DesignProjects from "./DesignProjects";

export default function MobileSideBar() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate(); // Initialize navigate function

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const handleClick = () => {
    toggleSidebar();
    window.open("https://www.upwork.com/freelancers/~01c9f14b76e1accb17", "_blank");
    window.scrollTo(0, 0);
  };
  
  

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      {/* Overlay */}
      {isSidebarVisible && (
        <>
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-filter backdrop-blur-lg z-[9998]"
        />

        </>
        )}
      <div className="relative">
        {/* Sidebar */}

        <div
  className={`fixed top-0 right-0 z-[9999] mb-10 ${
    isSidebarVisible ? "translate-x-0" : "translate-x-full"
  } xl:hidden border border-gray-600 transition-transform duration-500 ease-in-out w-[75%] sm:w-[40%] h-screen overflow-y-scroll custom-scrollbar backdrop-filter backdrop-blur-lg rounded-xl mt-20 mb-2 p-2 ${
    isDarkMode
      ? "bg-black  bg-opacity-50 text-white"
      : "bg-white  bg-opacity-70"
  }`}
>
          <div
                className={`flex justify-center items-center rounded-lg 
                  ${
                    isDarkMode
                      ? "bg-gradient-to-l from-gray-900 to-slate-400 text-white hover:bg-gradient-to-l hover:from-slate-600 hover:to-from-black"
                      : "bg-gradient-to-l from-slate-400 to-white  text-black"
                  }
                  h-8 w-full overflow-hidden  mb-1`}
          >
            <p className=" text-center text-sm  animate-pulse  font-semibold">
             Lets Work together <span onClick={handleClick} className="text-green-700 font-bold cursor-pointer">together</span> {" "}
          
            </p>
          </div>
          <div>
            <div className="flex justify-start gap-6 items-center w-full ">
              <div
                onClick={toggleThemeHandler}
                className="ml-1 overflow-hidden relative cursor-pointer w-14 h-14 rounded-full bg-gradient-to-b from-gray-100 to-gray-300 border-2 flex items-center justify-center"
              >
                <img
                  src={isDarkMode ? darkmodenavbar : profile}
                  alt=""
                  className="max-w-full max-h-full "
                />
              
              </div>
              <div
                  onClick={toggleThemeHandler}
                  className="text-white p-[5px] animate-bounce hover:animate-none bg-black  shadow-md shadow-white rounded-full cursor-pointer
               hover:bg-blue-950
                hover:shadow-black
               w-6 h-6 absolute left-[52px] top-12 text-[10px]"
                >
                  {isDarkMode ? "🌞" : "🌙"}
                </div>
              {/*  about me  */}
              {/* <div
                className={` drop-shadow-md card rounded-lg mt-5 text-sm text-center font-bold m-3 w-[200px] py-2 mx-auto first-letter ${
                  isDarkMode
                    ?  "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm" : "bg-black text-white shadow-sm shadow-white"
                }`}
              >
                About Me
              </div> */}
                    <h1
                  className={`text-2xl text-center md:text-2xl font-semibold w-[60%] tracking-tighter bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  ${
                    isDarkMode ? "text-blue-500" : "text-transparent"
                  }`}
                >
                  About Me !
                
                </h1>
            </div>
          </div>

          {/* About me content */}
          <div>
            <div className="relative w-[98%] h-24 bg-black mt-2 rounded-lg border border-black shadow-white shadow-sm">
              <img
                className="  w-full h-full z-40 rounded-lg object-cover "
                src={cover2}
                alt="profile picture"
              />
              <img
                className=" absolute w-20 h-20 top-12 left-1/2 -translate-x-1/2 rounded-full border border-blue-950 z-40"
                src={aunimage}
                alt="profile picture"
              />
            </div>
            <div className=" z-50  bg-MidNightBlack  inset-y-0 h-32  flex items-center justify-center w-full flex-col px-4 gap-y-4">
              <div className="flex flex-col items-center justify-center">
              <span
  className={`
    text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 font-bold mt-5
    ${isDarkMode ? "text-blue-700" : "text-black"}
  `}
>
                  {NAME}
                </span>
                <span className="text-sm text-LightGray font-semibold text-center ">
                  {DESIGNATION}
                </span>
              </div>
            </div>
            {/* intro */}
            <div  className={`w-[90%] mx-auto rounded-xl p-1 
    ${isDarkMode 
      ? "bg-gradient-to-r from-slate-200 to-slate-900" 
      : "bg-gradient-to-l from-slate-400 to-white"}
  `}
>
              <div className="w-[99%] h-60 bg-transparent custom-scrollbar overflow-y-auto p-2 border-transparent">
                <Contact />
                <Location />
    
                <div
  className={`mt-3 w-[98%] h-[1px] mx-auto ${
    isDarkMode ? "bg-gradient-to-l from-slate-400 to-black" : "bg-black"
  }`}
></div>

                <Languages />
                <div
  className={`mt-3 w-[98%] h-[1px] mx-auto ${
    isDarkMode ? "bg-gradient-to-l from-slate-400 to-black" : "bg-black"
  }`}
></div>

                <LinearBar />

           
              </div>
              
            </div>
                        {/* hireme */}
                               <div    className={`flex mt-5 justify-center items-center border
      ${isDarkMode ? 'border-white' : 'border-transparent'} 
      w-32 mx-auto rounded-xl `}
  >
  <button
    type="button"
    className={`gap-x-1 before:ease relative overflow-hidden 
      ${isDarkMode ? 'border-[#ffffff]' : 'border-[#000000]'} 
      bg-[#050708] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center`}
    onClick={() => window.location.href = "https://wa.me/+923352251671"}
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
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
      />
    </svg>
    <span className="truncate">{isDarkMode ? 'Contact Me' : 'Hire Me'}</span>
  </button>

                        </div>
            
          </div>

          <div
  className={`mt-3 w-[98%] h-[1px] mx-auto ${
    isDarkMode ? "bg-gradient-to-l from-white to-slate-400" : "bg-black"
  }`}
></div>
          {/* featured projects */}
          <div
            className={`drop-shadow-md card rounded-lg mt-5 text-sm text-center font-bold m-3 w-[200px] py-2 mx-auto first-letter ${
              isDarkMode
                ?  "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm" : "bg-black text-white shadow-sm shadow-white"
            }`}
          >
            Featured Projects
          </div>
          <ImageSearchApp />
          <div
  className={`mt-3 w-[98%] h-[1px] mx-auto ${
    isDarkMode ? "bg-gradient-to-l from-white to-slate-400" : "bg-black"
  }`}
></div>
          <WhatIOfferMobile />
          <div
  className={`mt-3 w-[98%] h-[1px] mx-auto ${
    isDarkMode ? "bg-gradient-to-l from-white to-slate-400" : "bg-black"
  }`}
></div>
           {/* certificates */}
          <Certificates />
     
          <div
          className={`mt-3 w-[98%] h-[1px] mx-auto ${
            isDarkMode ? "bg-gradient-to-l from-white to-slate-400" : "bg-black"
          }`}
        ></div>
          {/* Slider What i Offer mobile */}
        
          {/* Design Projects */}
        
          {/* Clients i have worked for */}
          <SlidingLogos2 />
          <div
  className={`mt-3 w-[98%] h-[1px] mx-auto ${
    isDarkMode ? "bg-gradient-to-l from-white to-slate-400" : "bg-black"
  }`}
></div>
          <DesignProjects/>
          <div
  className={`mt-3 w-[98%] h-[1px] mx-auto ${
    isDarkMode ? "bg-gradient-to-l from-white to-slate-400" : "bg-black"
  }`}
></div>
          {/* Taxation Certifiates */}
          <TaxationCertificate />
          <div
  className={`mt-3 w-[98%] h-[1px] mx-auto ${
    isDarkMode ? "bg-gradient-to-l from-white to-slate-400" : "bg-black"
  }`}
></div>
     
    
      
        </div>

        {/* Toggle Sidebar Button */}
        <div
          onClick={toggleSidebar}
          className={`fixed z-[20]
              border top-[86px] w-6 h-6 right-1 xl:hidden flex justify-center items-center text-white p-2 rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out ${
            isSidebarVisible
            ? "bg-red-600 scale-100 hover:bg-red-500 right-[72%] top-[10%] sm:right-[38%] opacity-100"
            : isDarkMode
            ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 border-blue-950 hover:bg-blue-700 opacity-100 scale-100"
            : "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-pink-700 hover:bg-gray-600 opacity-100 scale-100"
        }
      `}
        >
          {isSidebarVisible ? "x" : "<"}
        </div>
      </div>
    </>
  );
}
