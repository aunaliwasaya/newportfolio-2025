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
import { useSelector, useDispatch } from "react-redux";

const SlidingLogos = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
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
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of logos to show at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false, // Disable arrows
    dots: false, // Disable dots
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
       <h2
        className={`drop-shadow-md card rounded-lg mt-5 mb-8 text-lg text-center font-bold m-3 w-[300px] break-words md:w-[350px] py-3 mx-auto truncate ${
          isDarkMode
            ?  "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm"
            : "bg-black text-white shadow-lg"
        } first:uppercase `}
      >
        Clients I have worked For !
      </h2>
      <div className={`relative rounded-xl py-2 w-full mx-auto h-24 mt-10 mb-5 overflow-hidden 
  ${isDarkMode ? 'bg-black' : 'bg-gradient-to-b from-gray-100 to-gray-300'}`}>
        <Slider {...settings}>
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="px-2">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-20 w-48 rounded-xl brightness-125 saturate-150 bg-gradient-to-l from-slate-400 to-slate-600 p-2"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SlidingLogos;
