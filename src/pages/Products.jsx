import React, { useState, useEffect } from "react";
import profile from "../../src/assets/certifi.png";
import darkmodeprofile from "../../src/assets/darkmode-profile.jpg";
import CopyEmailButton from "../components/CopyEmailButton";
import { getConfigData } from "../data/configReader";
import cover from "../assets/certificates.png";
import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import SlidingLogos from "../components/SlidingLogos";
import FrontEndCertificate from "../components/FrontEndCertificate";
import BackendCertificates from "../components/BackendCertificates";
import { useSelector, useDispatch } from "react-redux";

export default function Products() {


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
  

  const skills = [
    "React",
    "MERN Stack",
    "Shopify",
    "WordPress",
    "GoHighLevel",
    "Squarespace",
    "Graphics Design",
    "Canva",
    "Flyers design",
    "Brouchure Design",
    "content Writing",
  ];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 1500); // Change skill every 1.5 seconds
    return () => clearInterval(skillInterval);
  }, [skills.length]);

  const configData = getConfigData();
  return (
    <>
      <div id="top" className="px-7 pt-1">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          Certifications
        </h1>
      </div>
      {/* cover photo */}

      {/* cover photo */}
      <div className="mb-5 md:mb-0 lg:mb-0 xl:mb-0 mx-auto w-[100%]  p-4">
        <div className=" flex items-center h-40 sm:h-52 md:h-64 lg:h-80 xl:h-56 justify-between backdrop-blur-lg bg-white bg-opacity-40 shadow-md rounded-2xl  border">
          <img
            src={cover}
   
            alt="Profile"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        {/* image */}
        <div className="relative rounded-full p-2 flex items-center justify-center sm:mb-1 lg:mb-3  ">
          <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-b from-gray-100 to-gray-300 overflow-hidden border-2 flex items-center justify-center">
            {/* Gradient Border Animation */}

            {/* Inner Circle with Image */}
            <div className="w-24 h-24 md:w-36 md:h-36 -top-11 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-spin-slow">
              <img
    
                    src={isDarkMode ? darkmodeprofile : profile}
                alt="Profile"
                className="w-24 h-24 md:w-36 md:h-36  "
              />
            </div>
          </div>
        </div>
      </div>

      {/* content */}

      <div className=" px-7 py-7 mt-5 flex flex-col flex-col-reverse md:flex md:flex-row md:items-center md:justify-between pt-3">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl md:text-4xl font-semibold text-center md:text-justify tracking-tighter  ">
            {"A Certified"}{" "}
            <p
  className={`text-transparent bg-clip-text font-bold text-[40px] ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500'
  }`}
>
  {"Developer"}
</p>
          </h1>
          {/* certifications content both front end */}
          <h2
                className={`drop-shadow-md card rounded-lg mt-5 mb-8 text-lg text-center font-bold m-3 w-[300px] md:w-[350px] py-3 mx-auto ${
                  isDarkMode
                    ? "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm"
                    : "bg-black text-white  shadow-lg"
                } first:uppercase`}> 
            {"Front-End Developer"}
          </h2>

          <div className="flex justify-center items-center gap-3 flex-wrap">
            <div className={`md:w-[48%] p-6 shadow-lg rounded-lg max-w-2xl mx-auto 
  ${isDarkMode ? 'bg-gradient-to-r from-amber-950o-black text-white' : 'bg-white text-gray-800'}`}>
  <h1 className="text-2xl font-bold mb-4">
    🚀 Certified Front-End Developer 🎓
  </h1>
  <h2 className="text-lg font-semibold mb-6">
    Consulnet Corporation & BMJ Digital Education
  </h2>
  <p className="mb-4">
    Proudly certified as a Front-End Developer, I bring a
    comprehensive understanding of crafting beautiful and functional
    web interfaces from two esteemed institutions:{" "}
    <span className="font-semibold">Consulnet Corporation</span> and
    <span className="font-semibold">BMJ Digital Education</span>.
    Through intensive training and project-based learning, I've
    honed my expertise in building responsive, dynamic, and
    user-friendly web applications using:
  </p>
  <ul className="list-disc list-inside mb-4">
    <li>
      <span className="font-semibold">HTML:</span> Structuring content
      with semantic and accessible markup.
    </li>
    <li>
      <span className="font-semibold">CSS:</span> Creating stunning
      layouts with advanced styling techniques and responsive
      design.
    </li>
    <li>
      <span className="font-semibold">JavaScript:</span> Adding
      interactivity and functionality to web pages.
    </li>
    <li>
      <span className="font-semibold">jQuery:</span> Simplifying DOM
      manipulation and enhancing user experiences.
    </li>
  </ul>
  <p>
    My focus is on delivering pixel-perfect designs, smooth
    animations, and intuitive user experiences. Whether it’s
    building responsive layouts, optimizing performance, or
    implementing custom functionality, I thrive on transforming
    ideas into interactive realities.
  </p>
</div>


            {/* certificate image fornt end*/}
            <div className="md:w-[48%]">
              <img
                src={frontend}
                alt="Profile"
                className="w-full h-full rounded-2xl object-cover "
              />
            </div>
          </div>

          {/* certifications frontend */}
          <FrontEndCertificate />
          <div className="mt-3 text-black bg-black w-[98%] h-[1px] mx-auto"></div>

          {/* certifications content both backend */}
          <h2
                className={`drop-shadow-md card rounded-lg mt-5 mb-8 text-lg text-center font-bold m-3 w-[300px] md:w-[350px] py-3 mx-auto ${
                  isDarkMode
                    ? "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm"
                    : "bg-black text-white  shadow-lg"
                } first:uppercase`}> 
            {"Back-End Developer"}
          </h2>
          <div className="flex justify-center items-center gap-3 flex-wrap">
            {/* certificate image backend*/}
            <div className="md:w-[48%]">
              <img
                src={backend}
                alt="Profile"
                className="w-full h-full rounded-2xl object-cover "
              />
            </div>

            {/* backend end developemnt */}

            <div className={`md:w-[48%] p-6 shadow-lg rounded-lg max-w-2xl mx-auto 
  ${isDarkMode ? 'bg-gradient-to-l from-gray-950 to-black text-white' : 'bg-white text-gray-800'}`}>
  <h1 className="text-2xl font-bold mb-4">
    🚀 Certified Backend Developer 🎓
  </h1>
  <h2 className="text-lg font-semibold mb-6">
    Consulnet Corporation & BMJ Digital Education
  </h2>
  <p className="mb-4">
    Proudly certified as a Backend Developer, I bring a
    comprehensive understanding of building scalable, efficient, and secure server-side solutions from two esteemed institutions:{" "}
    <span className="font-semibold">Consulnet Corporation</span> and{" "}
    <span className="font-semibold">BMJ Digital Education</span>. Through hands-on experience and real-world projects, I've honed my skills in developing powerful backend systems using:
  </p>
  <ul className="list-disc list-inside mb-4">
    <li>
      <span className="font-semibold">Node.js:</span> Building fast, scalable server-side applications with JavaScript.
    </li>
    <li>
      <span className="font-semibold">Express.js:</span> Creating robust RESTful APIs and handling HTTP requests.
    </li>
    <li>
      <span className="font-semibold">MongoDB:</span> Designing and managing NoSQL databases with flexible schemas.
    </li>
    <li>
      <span className="font-semibold">JWT Authentication:</span> Implementing secure token-based user authentication and authorization.
    </li>
  </ul>
  <p>
    My goal is to deliver high-performance backend systems that are both efficient and secure. Whether it's developing APIs, managing databases, or ensuring data integrity, I focus on building solutions that power seamless web applications.
  </p>
</div>


            {/* Backend Certificate */}
            <BackendCertificates />
            <div className="mt-3 text-black bg-black w-[98%] h-[1px] mx-auto"></div>
          </div>
        </div>
      </div>

      {/* logos slider */}
      <div className="w-[90%] mx-auto mb-5">
        <SlidingLogos />
      </div>
      <div className="mt-3 text-black bg-black w-[98%] h-[1px] mx-auto mb-10"></div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold">{"Let's work together."}</h1>
        <p className="text-md font-normal text-gray-500 text-center px-3">
          I master in Creating Amazing visually Appealing Designs that allows
          the Best User Experience Ever !
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
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
                Hire Me!
              </button>
            </a>
            <CopyEmailButton />
          </div>
        </div>
      </div>
    </>
  );
}
