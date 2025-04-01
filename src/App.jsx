import React, { useState, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { toggleTheme } from "./store/themeSlice";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import Footer from "./components/Footer";
import SiteRoutes from "./routes/SiteRoutes";
import Social2 from "./components/Social2";
import profileimg from "./assets/profile.png";
import ContactForm from "./components/ContactForm";
import GoogleMapComponent from "./components/GoogleMapComponent";
import ImageSearchApp from "./components/ImageSearchApp";
import Certificates from "./components/Certificates";
import TaxationCertificate from "./components/TaxationCertificate";
import SlidingLogos2 from "./components/SlidingLogos2";
import SocialIcons from "./components/SocialIcons";
import MobileSideBar from "./components/MobileSideBar";
import WhatIOfferMobile from "./components/WhatIOfferMobile";
import aun from "./assets/navbar.png";
import darkmodenavbar from "./assets/sidebar-darkmode.png";
import Location from "./components/Location";
import Languages from "./components/Languages";
import LinearBar from "./pages/Linebar";
import { NAME, DESIGNATION } from "./data/constants";
import Contact from "./components/Contact";
import aunimage from "./assets/aun-img.png"
import cover2 from "./assets/covermobile.png"
import DesignProjects from "./components/DesignProjects";
import VerticalLogoSlider from "./components/VerticalLogoSlider";
import ImageSliderComponent from "./components/ImageSliderComponent";
import Skills from "./components/Skills";
import PortfolioModal from "./pages/PortfolioModal";






function App() {

  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const navigate = useNavigate(); // Initialize navigate function

  const [isIconsVisible, setIsIconsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleIconsVisibility = () => {
    setIsIconsVisible(!isIconsVisible);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    // Display loader for 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    toggleSidebar();
    window.open("https://www.upwork.com/freelancers/~01c9f14b76e1accb17", "_blank");
    window.scrollTo(0, 0);
  };

  const skills = [
    "React",
    "Vue",
    "MERN Stack",
    "Wix",
    "Shopify",
    "WordPress",
    "GoHighLevel",
    "Squarespace",
    "Graphics Design",
    "Canva",
  ];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 500); // Change skill every 0.5 seconds
    return () => clearInterval(skillInterval);
  }, [skills.length]);

  return (
    <>
      {/* Loading Overlay */}
      {isLoading && (
  <div className="absolute inset-0 bg-black bg-opacity-100 backdrop-blur-md flex flex-col gap-10 items-center justify-center z-50 overflow-hidden">
    {/* Top Slider */}
    <div className="absolute -top-[104px] lg:-top-28 w-[95%] md:w-[60%] h-[20%] transform -translate-y-1/2">
      <VerticalLogoSlider />
    </div>

    {/* Profile Image */}
    <div className="z-10 -mt-20 sm:mt-16 w-36 h-36 rounded-full bg-gradient-to-b from-gray-100 to-gray-300 overflow-hidden border-4 border-transparent flex items-center justify-center relative">
      {/* Gradient Border Animation */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-spin-slow"></div>

      {/* Inner Circle with Image */}
      <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
        <img
          src={profileimg}
          alt="Profile"
          className="max-w-full max-h-full animate-logo-slide"
        />
      </div>
    </div>

    {/* Animated Skills */}
    <p
      className="text-lg -mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-fade-in-out"
      key={currentSkill}
    >
      {skills[currentSkill]}
    </p>

    {/* Loading Text */}
    <p className="text-white text-2xl font-bold animate-pulse -mt-10">Loading...</p>

    {/* Bottom Slider */}
    <div className="absolute bottom-32 lg:bottom-24 w-[95%] md:w-[60%] h-[20%] transform translate-y-1/2">
      <VerticalLogoSlider />
    </div>
  </div>
)}


    

      {!isLoading && (
        <div
          className={`flex justify-center gap-1  ${
            isDarkMode
              ? "bg-black text-white"
              : "bg-gradient-to-b from-gray-100 to-gray-300"
          }`}
        >
            <div className="flex justify-center items-center mt-20">
      <div className="w-[10%] h-20 bg-gradient-to-b from-gray-700 to-gray-300"></div>
      </div>
          <Navbar />

          <div>
            <MobileSideBar />
          </div>

          <div className="w-full overflow-hidden flex -mt-5">
            {/* Left Side */}
            <div
              className={`transform ${
                isSidebarVisible
                  ? "ml-0 "
                  : "w-full 1xl:ml-14 2xl:ml-24 xl:w-[99%]"
              } transition-ml -ml-1 sm-ml-0 duration-700 ease-in-out w-full xl:w-[75%] border border-transparent mt-7`}
            >
              <div className="pt-[5rem] px-2 mt-4 py-2">
                <div
                  className={`mx-auto max-w-7xl border border-transparent rounded-xl shadow-lg h-screen xl:overflow-y-scroll custom-scrollbar ${
                    isDarkMode ? "bg-gradient-to-l from-black to-gray-950 text-white" : "bg-white"
                  }`}
                >
                  <SiteRoutes />
                    <PortfolioModal/>
                  <ImageSliderComponent/>
                  <div className="translate-y-16">
                  <p
    className={`mt-5  md:text-3xl max-w-3xl mx-auto mb-8 sm:mb-2 text-center text-2xl font-bold bg-clip-text text-transparent 
      ${isDarkMode 
        ? "bg-gradient-to-r from-blue-500 to-white"  // Gradient from blue to white in dark mode
        : "bg-gradient-to-r from-pink-400 to-red-500" // Gradient from pink to red in light mode
    }`}
  >
    What Skills I Possess ?
  </p>
                  <Skills/>
                  </div>
               
                  {/* image slider component */}
                  <div className="bg-fixed">
         
                  </div>
                
                  {/* Form and Map */}
                  <div className="flex justify-center items-center flex-wrap gap-4 p-5">
                    <div className="w-[97%] md:w-[45%]">
                      <ContactForm />
                    </div>
                    <div className="w-[97%] md:w-[45%] overflow-hidden">
                      <GoogleMapComponent />
                    </div>
                  </div>
                  <div className="p-3">
                    <Social />
                    <Footer />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div
              className={`transform ${
                isSidebarVisible ? "translate-x-0" : "translate-x-full"
              }  hidden xl:block border border-transparent transition-transform duration-500 ease-in-out xl:w-[24%] h-screen overflow-y-scroll custom-scrollbar  rounded-xl mt-32 mb-2 p-2 backdrop-filter backdrop-blur-lg ${
                isDarkMode
                  ? "bg-gradient-to-r from-black to-gray-900"
                  : "bg-gradient-to-b from-gray-100 to-gray-300"
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
            <p className=" text-center text-sm animate-pulse  font-semibold">
             Lets Work together <span onClick={handleClick} className="text-green-700 font-bold cursor-pointer">together</span> {" "}
          
            </p>
          </div>

              <div>
                {/* Featured Project */}
                {/* <div
                  className={` drop-shadow-md card rounded-lg mt-2 text-lg text-center font-bold m-3 w-[250px] py-3 mx-auto first-letter ${
                    isDarkMode
                      ? "bg-white text-black shadow-white shadow-lg"
                      : "bg-black text-white"
                  }`}
                >
                  Featured Project
                </div> */}

                <div
                  className="flex justify-center gap-6 items-center w-full  relative 
      "
                >
                  <div
                    onClick={toggleThemeHandler}
                    className="overflow-hidden
          cursor-pointer w-14 h-14 rounded-full bg-gradient-to-b from-gray-100 to-gray-300 border-2 flex items-center justify-center"
                  >
                    <img
                         src={isDarkMode ? darkmodenavbar : aun}
                      alt=""
                      className="max-w-full h-full mt-3
            object-cover
            "
                    />
                    <div
                      className="text-white p-[5px] bg-black  shadow-md shadow-white rounded-full
                      hover:bg-blue-950
                hover:shadow-black
                 w-7 h-7 absolute left-10 top-0 text-[12px]"
                    >
                      {isDarkMode ? "🌞" : "🌙"}
                    </div>
                  </div>

          {/*  about me  */}
                  {/* <div
                    className={`drop-shadow-md card rounded-lg mt-2 text-lg text-center font-bold m-3 w-[230px] py-2 mx-auto first-letter ${
                      isDarkMode
                        ? "bg-gradient-to-l from-gray-900 to-slate-400 text-white hover:bg-gradient-to-l hover:from-slate-600 hover:to-from-black"
                      : "bg-gradient-to-l from-slate-400 to-white  text-black"
                    }`}
                  >
                    About Me
                  </div> */}
                              <h1
                  className={`text-2xl text-center md:text-2xl font-semibold w-[250px] tracking-tighter bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  ${
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
         className=" absolute w-24 h-24 top-14 left-1/2 -translate-x-1/2 rounded-full border border-blue-950 z-40"
                    src={aunimage}
                    alt="profile picture"
                  />

         </div>
         <div className=" z-50  bg-MidNightBlack  inset-y-0 h-32  flex items-center justify-center w-full flex-col px-4 gap-y-4">
            
             
                  <div className="flex flex-col items-center justify-center">
                  <span
  className={`
    text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 font-bold mt-12
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
      bg-[#050708] text-white shadow-2xl transition-all before:absolute
       before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center`}
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

                     
                        <div
  className={`mt-3 w-[98%] h-[1px] mx-auto ${
    isDarkMode ? "bg-gradient-to-r from-white to-slate-400" : "bg-black"
  }`}
></div>
              <WhatIOfferMobile />
              <div
  className={`mt-3 w-[98%] h-[1px] mx-auto ${
    isDarkMode ? "bg-gradient-to-r from-white to-slate-400" : "bg-black"
  }`}
></div>
              {/* featured projects */}
              <div
                className={`drop-shadow-md card rounded-lg mt-8 text-lg text-center font-bold m-3 w-[230px] py-2 mx-auto first-letter ${
                  isDarkMode
                    ? "bg-white text-black shadow-white shadow-sm"
                    : "bg-black text-white"
                }`}
              >
                Featured Projects
              </div>
              <ImageSearchApp />
              <div
  className={`mt-3 w-[98%] h-[1px] mx-auto ${
    isDarkMode ? "bg-gradient-to-r from-white to-slate-400" : "bg-black"
  }`}
></div>
           
              {/* certificates */}
              <Certificates />
              <div
  className={`mt-3 w-[98%] h-[1px] mx-auto ${
    isDarkMode ? "bg-gradient-to-r from-white to-slate-400" : "bg-black"
  }`}
></div>
              <DesignProjects/>

              <div
              className={`mt-3 w-[98%] h-[1px] mx-auto ${
                isDarkMode ? "bg-gradient-to-r from-white to-slate-400" : "bg-black"
              }`}
            ></div>
           
              <SlidingLogos2 />
              <div
  className={`mt-3 w-[98%] h-[1px] mx-auto ${
    isDarkMode ? "bg-gradient-to-r from-white to-slate-400" : "bg-black"
  }`}
></div>
              <TaxationCertificate />
            </div>

            {/* Toggle Sidebar */}
            <div
              onClick={toggleSidebar}
              className={`fixed hidden top-[94px]  border w-8 h-8 right-[24px] opacity-100 xl:flex justify-center items-center text-white p-2 rounded-full shadow-lg cursor-pointer transition-opacity duration-500 ease-in-out ${
                isSidebarVisible
                ? "bg-red-600 hover:bg-red-500 right-5 opacity-80"
                : isDarkMode
                ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 border-blue-950 hover:bg-blue-700"
                : "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-pink-700 hover:bg-gray-600"
            }
          `}
            >
              {isSidebarVisible ? "x" : "<-"}
            </div>
          </div>

          {/* Social icons */}
          <div className="fixed top-1/2 left-[-90px]">
    
            <div
   className={`
    ${isDarkMode 
      ? " text-blue-white bg-slate-900 hover:text-white border border-white" 
      : "text-black bg-gradient-to-b from-gray-300 to-gray-100 hover:text-pink-600 border"
    } 
    backdrop-filter backdrop-blur-lg border border-transparent rounded-xl shadow-xl h-[40px] w-[200px] flex items-center justify-center rotate-90 hover:bg-black cursor-pointer transition-all ease-in-out duration-400
  `}
  onClick={toggleIconsVisibility}
        
            >
              <p className={`rotate-180 font-bold pt-3 `}>Let's Connect!</p>
            </div>
     
            {isIconsVisible && (
              <div
                onClick={toggleIconsVisibility}
                className="rotate-[-90deg] translate-x-14 -translate-y-12"
              >
                <Social2 />
              </div>
            )}
               
          </div>

     
        </div>
      )}
    </>
  );
}

export default App;
