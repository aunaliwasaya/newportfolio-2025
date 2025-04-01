import React from "react";
import Slider from "react-slick"; // Import Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.webp";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.webp";
import logo8 from "../assets/logo8.png";
import logo9 from "../assets/logo9.png";
import logo10 from "../assets/logo10.png";
import logo11 from "../assets/logo11.png";
import logo12 from "../assets/logo12.webp";
import logo13 from "../assets/logo13.png";
import logo14 from "../assets/logo-wix.avif";
import logo15 from "../assets/bookco.webp";
import { useSelector } from "react-redux";

const VerticalLogoSlider = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Detect dark mode from Redux
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
  ];

  const settings = {
    infinite: true, // Enable infinite loop
    speed: 2000, // Very slow scrolling for smooth animation
    slidesToShow: 4, // Number of visible slides
    slidesToScroll: 1, // Moves 1 slide at a time
    autoplay: true,
    autoplaySpeed: 0, // Continuous autoplay
    cssEase: "ease", // Linear animation for smooth sliding
    arrows: false, // Disable navigation arrows
    dots: false, // Disable dots
    vertical: true, // Enable vertical sliding
    verticalSwiping: false, // Disable swipe for seamless effect
  };

  return (
    <>
        <div className="border-t-2 mx-auto mt-10 mb-10" style={{ width: "80%" }}></div>
    <div className="relative mb-10 ">
    <div
      className={`absolute inset-0 drop-shadow-md card rounded-3xl m-3 z-10 pointer-events-none -rotate-3 ${
        isDarkMode
          ? "bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600"
          : "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
      }`}
    ></div>


      <div
        className={`z-50 card rounded-lg mt-5 text-sm text-center font-bold m-3 w-[200px] py-2 mx-auto first-letter relative ${
          isDarkMode
            ? "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm"
            : "bg-black text-white shadow-sm shadow-white"
        }`}
      >
        Clients I worked for
      </div>
      <div
        className="flex justify-center items-center gap-1 p-5 pt-8  "

      >
        {/* First Slider */}
        <div
   className={`z-30 relative rounded-xl py-2 w-[48%] sm:w-[32%] lg:w-[22%] mx-auto h-[300px] px-1 mt-2 mb-5 overflow-hidden transform text-xl shadow-lg shadow-white ${
    isDarkMode ? "bg-black text-white" : "bg-gradient-to-b from-white to-black text-black"
  }`}
  
          style={{ transform: "rotate(4deg)" }} // Tilt the div slightly
        >
            {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-10 z-10 pointer-events-none"></div>
          <Slider {...settings}>
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="px-2">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                          className="shadow-md shadow-blue-500 h-20 w-48 rounded-xl brightness-125 saturate-150 bg-gradient-to-l from-slate-300 to-gray-600 p-2 "
                  
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Middle Slider (Reverse Direction) */}
        <div
   className={`z-30 relative rounded-xl py-2 w-[48%] sm:w-[32%] lg:w-[22%] mx-auto h-[300px] px-1 mt-2 mb-5 overflow-hidden transform text-xl shadow-lg shadow-white ${
    isDarkMode ? "bg-black text-white" : "bg-gradient-to-b from-white to-black text-black"
  }`}
          style={{ transform: "rotate(4deg)" }} // Tilt the div slightly
        >
            {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 z-10 pointer-events-none"></div>
          <Slider
            {...{
              ...settings,

              rtl: true, // Reverse the direction
            }}
          >
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="px-2">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                        className="shadow-md shadow-pink-600 h-20 w-48 rounded-xl brightness-125 saturate-150  bg-gradient-to-l from-slate-300 to-gray-600  p-2"
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* className=" z-30 hidden md:block relative rounded-xl py-2 w-[48%] sm:w-[32%]  lg:w-[22%] mx-auto h-[300px] mt-2 mb-5  bg-gradient-to-b from-white to-gray-200 overflow-hidden transform" */}
        {/* Third Slider */}
        <div
       
          className={`z-30 hidden md:block relative rounded-xl py-2 w-[48%] sm:w-[32%] lg:w-[22%] mx-auto h-[300px] px-1 mt-2 mb-5 overflow-hidden transform text-xl shadow-lg shadow-white ${
            isDarkMode ? "bg-black text-white" : "bg-gradient-to-b from-white to-black text-black"
          }`}
          style={{ transform: "rotate(4deg)" }} // Tilt the div slightly
        >
            {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-10 z-10 pointer-events-none"></div>
          <Slider {...settings}>
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="px-2">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                    className="shadow-md shadow-blue-500 h-20 w-48 rounded-xl brightness-125 saturate-150 bg-gradient-to-l from-slate-300 to-gray-600 p-2 "
                 
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div>
      <p
        className={`absolute shadow-sm shadow-white w-full h-16 -mt-16 lg:-mt-[74px] -rotate-3 drop-shadow-md card rounded-lg text-lg text-center font-bold m-3 ml-2 py-2 mx-auto flex justify-center items-center overflow-hidden z-50 ${
          isDarkMode
            ? "bg-gradient-to-r from-black via-slate-200 to-gray-800  hover:to-black text-white shadow-white shadow-sm"
            : "bg-gradient-to-l from-black via-slate-200 to-gray-800 text-white"
        }`}
      >
<div className="relative overflow-hidden whitespace-nowrap">
  <span
    className={`inline-block animate-marquee ${
      isDarkMode
        ? "bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600 text-transparent bg-clip-text"
        : "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
    }`}
    style={{
      animationDuration: "16s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    }}
  >
    Clients I Have Worked For&nbsp;&nbsp;&nbsp;Clients I Have Worked
    For&nbsp;&nbsp;&nbsp;Clients I Have Worked For&nbsp;&nbsp;&nbsp;Clients I
    Have Worked For&nbsp;&nbsp;&nbsp;
  </span>
  <marquee
    className={`inline-block  ${
      isDarkMode
        ? "bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600 text-transparent bg-clip-text"
        : "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
    }`}
    style={{
      animationDuration: "16s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    }}
  >
    Clients I Have Worked For&nbsp;&nbsp;&nbsp;Clients I Have Worked
    For&nbsp;&nbsp;&nbsp;Clients I Have Worked For&nbsp;&nbsp;&nbsp;Clients I
    Have Worked For&nbsp;&nbsp;&nbsp;
  </marquee>
</div>


      </p>
      </div>
     
    </div>
   
 
    </>
  );
};

export default VerticalLogoSlider;
