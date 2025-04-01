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
  ];

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "ease",
    arrows: false,
    dots: false,
    vertical: true,
    verticalSwiping: false,
  };

  return (
    <>
      <p
        className={`hidden drop-shadow-md card rounded-lg mt-5 text-sm text-center font-bold m-3 w-[200px] py-2 mx-auto ${
          isDarkMode
            ? "bg-gradient-to-l from-slate-600 hover:to-black text-white shadow-white shadow-sm"
            : "bg-black text-white"
        }`}
      >
        Clients I Have Worked For
      </p>

      <div className="flex justify-center items-center gap-1 p-5 relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 z-10 pointer-events-none"></div>

        {/* First Slider */}
        <div
          className="relative shadow-lg shadow-purple-600 rounded-xl py-2 w-[48%] sm:w-[32%] lg:w-[22%] mx-auto h-[300px] px-1 mt-2 mb-5 bg-gradient-to-b from-white to-gray-200 overflow-hidden transform"
          style={{ transform: "rotate(5deg)" }}
        >
          <Slider {...settings}>
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="px-2">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                 className="shadow-md shadow-blue-500 h-20 w-48 rounded-xl brightness-125 saturate-150 bg-gradient-to-l from-slate-400 to-slate-600 p-2"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Middle Slider (Reverse Direction) */}
        <div
          className="relative shadow-lg shadow-pink-600 rounded-xl py-2 w-[48%] sm:w-[32%] mx-auto lg:w-[22%] h-[300px] mt-2 mb-5 bg-gradient-to-b from-black to-gray-100 overflow-hidden transform"
          style={{ transform: "rotate(5deg)" }}
        >
          <Slider
            {...{
              ...settings,
              rtl: true,
            }}
          >
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="px-2">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                   className="shadow-md shadow-pink-600 h-20 w-48 rounded-xl brightness-125 saturate-150 bg-gradient-to-l from-slate-400 to-slate-600 p-2"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Third Slider */}
        <div
          className="hidden shadow-lg shadow-blue-600  md:block relative rounded-xl py-2 w-[48%] sm:w-[32%] lg:w-[22%] mx-auto h-[300px] mt-2 mb-5 bg-gradient-to-b from-white to-gray-200 overflow-hidden transform"
          style={{ transform: "rotate(5deg)" }}
        >
          <Slider {...settings}>
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="px-2">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
             className="shadow-md shadow-blue-500 h-20 w-48 rounded-xl brightness-125 saturate-150 bg-gradient-to-l from-slate-400 to-slate-600 p-2"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default VerticalLogoSlider;
