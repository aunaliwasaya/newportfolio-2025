import React, { useState } from "react";
import { useSelector } from "react-redux";
import portfolio from "../assets/parallex/portfolio-design.webp";
import website from "../assets/parallex/website.webp"; 
import design from "../assets/graphics-Design.webp";
import resume from "../assets/resume-design.webp"
import AOS from "aos";
import "aos/dist/aos.css";


const PortfolioModal = () => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isWebsiteOpen, setIsWebsiteOpen] = useState(false);
  const [isDesignOpen, setIsDesignOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const togglePortfolioModal = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
  };

  const toggleWebsiteModal = () => {
    setIsWebsiteOpen(!isWebsiteOpen);
  };

  const toggleDesignModal = () => {
    setIsDesignOpen(!isDesignOpen);
  };
  const toggleResumeModal = () => {
    setIsResumeOpen(!isResumeOpen);
  };

  const whatsappLink = "https://wa.me/923333116295"; // WhatsApp link

  return (
    <div>
      {/* Buttons to Open Modals */}
      <div className="flex flex-col justify-center items-center gap-3 mb-5">
        {/* website and portfolio buttons */}
        <div className="flex justify-center items-center gap-1 mb-3">
        <button
          onClick={togglePortfolioModal}
          className={` px-2 py-2 sm:px-2 sm:py-2 text-xs sm:text-sm cursor-pointer rounded-lg shadow-md hover:bg-blue-700 ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 border-blue-500 focus:ring-blue-200"
              : "bg-gradient-to-l from-gray-700 via-blue-500 to-slate-400 hover:border-gray-300 focus:ring-gray-100"
          }`}
        >
          Need a Portfolio??
        </button>
        <button
          onClick={toggleWebsiteModal}
          className={`px-2 py-2 sm:px-2 sm:py-2 text-xs sm:text-sm cursor-pointer rounded-lg shadow-md hover:bg-blue-700 ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 border-blue-500 focus:ring-blue-200"
              : "bg-gradient-to-l from-gray-700 via-blue-500 to-slate-400 hover:border-gray-300 focus:ring-gray-100"
          }`}
        >
          Need a Website??
        </button>
        </div>
        {/* design and resume buttons */}
        <div className="flex justify-center items-center gap-1 mb-3">
        <button
          onClick={toggleDesignModal}
          className={`px-2 py-2 sm:px-2 sm:py-2 text-xs sm:text-sm cursor-pointer rounded-lg shadow-md hover:bg-blue-700 ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 border-blue-500 focus:ring-blue-200"
              : "bg-gradient-to-l from-gray-700 via-blue-500 to-slate-400 hover:border-gray-300 focus:ring-gray-100"
          }`}
        >
          Need a Design??
        </button>
        <button
          onClick={toggleResumeModal}
          className={`px-2 py-2 sm:px-2 sm:py-2 text-xs sm:text-sm cursor-pointer rounded-lg shadow-md hover:bg-blue-700 ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 border-blue-500 focus:ring-blue-200"
              : "bg-gradient-to-l from-gray-700 via-blue-500 to-slate-400 hover:border-gray-300 focus:ring-gray-100"
          }`}
        >
          Need a Pro CV ?
        </button>
        </div>

        
    
     
      </div>

      {/* Portfolio Modal */}
      {isPortfolioOpen && (
        <div  data-aos="fade-down" className="rounded-lg fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 overflow-y-auto custom-scrollbar h-screen sm:h-auto">
          <div
            className={`relative rounded-lg shadow-lg  w-12/12 md:w-2/3 lg:w-1/2 ${
              isDarkMode ? "bg-black" : "bg-white"
            }`}
          >
            {/* Cancel Button */}
            <button
              onClick={togglePortfolioModal}
              className={`fixed cursor-pointer right-2 text-white p-1 w-8 h-8 rounded-full z-10 ${
                isDarkMode ? "bg-red-600 hover:bg-red-700" : "bg-red-600 hover:bg-red-700"
              }`}
            >
              ✕
            </button>

            {/* Background Image Section */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <div className="relative h-[400px]">
                <img
                  src={portfolio}
                  alt="Portfolio Design"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </a>

            {/* Content Section */}
            <div className={`p-3 text-center ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            <div className="mt-1 mb-1 flex justify-center gap-3">
                <button
                  onClick={togglePortfolioModal}
                  className={`px-4 py-2 rounded-lg cursor-pointer shadow-md ${
                    isDarkMode
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Back
                </button>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-2 rounded-lg cursor-pointer shadow-md ${
                    isDarkMode
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  Order Now
                </a>
              </div>
              <h1 className="text-xl md:text-4xl font-bold">Need a Stunning Portfolio?</h1>
              <p className="mt-4">
                I design and develop eye-catching portfolios to showcase your skills and work!
              </p>
            
            </div>
          </div>
        </div>
      )}

      {/* Website Modal */}
      {isWebsiteOpen && (
        <div  data-aos="fade-right" className="rounded-lg fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 overflow-y-auto custom-scrollbar h-screen sm:h-auto">
          <div
            className={`relative rounded-lg shadow-lg  w-12/12 md:w-2/3 lg:w-1/2 ${
              isDarkMode ? "bg-black" : "bg-white"
            }`}
          >
            {/* Cancel Button */}
            <button
              onClick={toggleWebsiteModal}
              className={`fixed cursor-pointer right-2 text-white p-1 w-8 h-8 rounded-full z-10 ${
                isDarkMode ? "bg-red-600 hover:bg-red-700" : "bg-red-600 hover:bg-red-700"
              }`}
            >
              ✕
            </button>

            {/* Background Image Section */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <div className="relative h-[400px]">
                <img
                  src={website}
                  alt="Website Design"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </a>

            {/* Content Section */}
            <div className={`p-3 text-center ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            <div className="mt-1 mb-1 flex justify-center gap-3">
                <button
                  onClick={toggleWebsiteModal}
                  className={`px-4 py-2 rounded-lg cursor-pointer shadow-md ${
                    isDarkMode
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Back
                </button>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-2 rounded-lg cursor-pointer shadow-md ${
                    isDarkMode
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  Order Now
                </a>
              </div>
              <h1 className="text-xl md:text-4xl font-bold">Get Your Stunning Website</h1>
              <p className="mt-4">
                I create responsive, user-friendly websites to meet your needs and impress your audience!
              </p>
             
            </div>
          </div>
        </div>
      )}
         {/* Design Modal */}
         {isDesignOpen && (
        <div  data-aos="fade-up" className="rounded-lg fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 overflow-y-auto custom-scrollbar h-screen sm:h-auto">
          <div
            className={`relative rounded-lg shadow-lg  w-12/12 md:w-2/3 lg:w-1/2 ${
              isDarkMode ? "bg-black" : "bg-white"
            }`}
          >
            {/* Cancel Button */}
            <button
              onClick={toggleDesignModal}
              className={`fixed cursor-pointer right-2 text-white p-1 w-8 h-8 rounded-full z-10 ${
                isDarkMode ? "bg-red-600 hover:bg-red-700" : "bg-red-600 hover:bg-red-700"
              }`}
            >
              ✕
            </button>

            {/* Background Image Section */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <div className="relative h-[400px]">
                <img
                  src={design}
                  alt="Portfolio Design"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </a>

            {/* Content Section */}
            <div className={`p-3 text-center ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            <div className="mt-1 mb-1 flex justify-center gap-3">
                <button
                  onClick={toggleDesignModal}
                  className={`px-4 py-2 rounded-lg cursor-pointer shadow-md ${
                    isDarkMode
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Back
                </button>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-2 rounded-lg cursor-pointer shadow-md ${
                    isDarkMode
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  Order Now
                </a>
              </div>
              <h1 className="text-xl md:text-4xl font-bold">Need an Attractive Design?</h1>
              <p className="mt-4">
                I design eye-catching Flyers, Banners, Poster and Thumbnails to showcase your skills, products and Services and brands!
              </p>
            
            </div>
          </div>
        </div>
      )}
             {/* Design Modal */}
             {isResumeOpen && (
        <div  data-aos="fade-left" className="rounded-lg fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 overflow-y-auto custom-scrollbar h-screen sm:h-auto">
          <div
            className={`relative rounded-lg shadow-lg  w-12/12 md:w-2/3 lg:w-1/2 ${
              isDarkMode ? "bg-black" : "bg-white"
            }`}
          >
            {/* Cancel Button */}
            <button
              onClick={toggleResumeModal}
              className={`fixed cursor-pointer right-2 text-white p-1 w-8 h-8 rounded-full z-10 ${
                isDarkMode ? "bg-red-600 hover:bg-red-700" : "bg-red-600 hover:bg-red-700"
              }`}
            >
              ✕
            </button>

            {/* Background Image Section */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <div className="relative h-[400px]">
                <img
                  src={resume}
                  alt="Portfolio Design"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </a>

            {/* Content Section */}
            <div className={`p-3 text-center ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            <div className="mt-1 mb-1 flex justify-center gap-3">
                <button
                  onClick={toggleResumeModal}
                  className={`px-4 py-2 rounded-lg cursor-pointer shadow-md ${
                    isDarkMode
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Back
                </button>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-2 rounded-lg cursor-pointer shadow-md ${
                    isDarkMode
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  Order Now
                </a>
              </div>
              <h1 className="text-xl md:text-4xl font-bold">Need a Pro Resume?</h1>
              <p className="mt-4">
                I design eye-catching resume / CV to showcase your Skills, Experience and Education! Be different from others and get highlighted with my resume designs. 
              </p>
            
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default PortfolioModal;
