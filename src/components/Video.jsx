import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import video1 from "../assets/shorts/web-video.mp4";
import image2 from "../assets/shorts/video2.png";
import website from "../assets/shorts/website.gif";
import portfolio from "../assets/shorts/portfolio.gif";
import figma from "../assets/shorts/figma.gif";
import custom from "../assets/shorts/custom.gif";
import react from "../assets/shorts/react.gif";
import ecomm from "../assets/shorts/ecomm.gif";
import shopify from "../assets/shorts/shopify.gif";


export default function Video() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [isSliderVisible, setIsSliderVisible] = useState(false); // Set initial state to false
  const [modalVideo, setModalVideo] = useState(null); // State to manage modal video

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isSliderVisible]);

  const videos = [
    { id: 1, src: video1 , thumbnail: website },
    { id: 2, src: video1, thumbnail: portfolio },
    { id: 3, src: video1, thumbnail: figma },
    { id: 4, src: video1, thumbnail: custom },
    { id: 5, src: video1, thumbnail: react },
    { id: 6, src: video1, thumbnail: ecomm },
    { id: 7, src: video1, thumbnail: shopify },

  ];

  const sliderSettings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false, // Disable next/previous arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
    customPaging: () => (
      <div
        className={`w-1 h-1 rounded-full hover:bg-purple-700 ${!isDarkMode ? "bg-gray-800" : "bg-white"}`}
      />
    ),
  };

  const toggleSlider = () => {
    setIsSliderVisible((prev) => !prev);
  };

  const openModal = (videoSrc) => {
    setModalVideo(videoSrc);
  };

  const closeModal = () => {
    setModalVideo(null);
  };

  return (
    <>
      <h1 className="ml-5 flex items-center gap-x-2 text-lg font-medium mt-1">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          Home
        </h1>
       <div className={`relative transition-all  duration-1000 ease-in-out ${isSliderVisible ? 'mt-1' : '-mt-0'} overflow-hidden`}>

{/* Toggle Button */}
<div
onClick={toggleSlider}
className={`sticky z-10 animate-bounce border top-3 -left-4 xl:top-10 w-8 h-8 lg:w-10 lg:h-10 lg:text-2xl flex justify-center items-center text-white rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out ${
isSliderVisible
? "bg-red-400 border-red-600 hover:bg-red-700"
: isDarkMode
? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-700"
: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-gray-600"
}`}
>
  {isSliderVisible ? "🚫" : "📸"}
</div>

{/* Video Slider */}
<div
  className={` transition-all margin-class duration-1000 ease-in-out pb-2 ${isSliderVisible ? "block opacity-100 mb-14" : "-translate-y-96"}`}
>
  <Slider {...sliderSettings}>
    {videos.map((video) => (
      <div key={video.id} className="p-1  sm:px-5 ">
        <div
       className={`transition-all  overflow-hidden duration-1000 ease-in-out w-full rounded-xl border border-black shadow-white shadow-sm p-1 cursor-pointer ${isSliderVisible ? "h-52 md:h-56 2xl:h-72" : "h-0 p-0"}`}

          onClick={() => openModal(video.src)}
        >
          <img
            className="w-full h-full rounded-2xl object-cover hover:filter hover:grayscale transition-all duration-600 ease-in-out "
            src={video.thumbnail}
            alt={`Thumbnail of video ${video.id}`}
          />
        </div>
      </div>
    ))}
  </Slider>
</div>

{/* Video Modal */}
{modalVideo && (
  <div className="fixed inset-0 z-[12000] bg-black bg-opacity-80 flex items-center justify-center">
    <div className="relative w-[300px] h-[500px] sm:w-[350px] sm:h-[600px] bg-black rounded-xl overflow-hidden">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 z-50 bg-red-500 text-white text-lg font-bold rounded-full px-3 py-1 hover:bg-red-600 cursor-pointer"
      >
        ✖
      </button>
      <video className="w-full h-full object-contain" controls autoPlay>
        <source src={modalVideo} type="video/mp4" />
      </video>
    </div>
  </div>
)}
</div></>
 
  );
}
