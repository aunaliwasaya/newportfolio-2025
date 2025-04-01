import React, { useState } from "react";
import ReactDOM from "react-dom";
import tax1 from "../assets/figma-to-html.webp";
import tax2 from "../assets/graphics-Design.webp";
import design3 from "../assets/figma-to-wordpress.webp";
import shopify from "../assets/shopify.webp";
import design4 from "../assets/figma-to-react.webp"; // Add Figma to React image import
import digitalmarketing from "../assets/digital-marketing.webp";
import woocommerce from "../assets/woocommerce.webp";
import { useSelector } from "react-redux"; // Import to use Redux state for theme
import contentwriting from "../assets/content-writing.webp"
import gohighlevel from "../assets/go-highlevel.webp"
import squarespace from "../assets/square-space.webp"
import figmadesign from "../assets/figmadesign.webp"
import wixdesign from "../assets/wix-design.webp"
import portfolio from "../assets/parallex/portfolio-design.webp"
import website from "../assets/parallex/website.webp"
import resume from "../assets/resume-design.webp"


export default function WhatIOffer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Detect dark mode from Redux

  // Open modal and set image
  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  // Modal component using React Portal
  const Modal = ({ image }) => {
    if (!image) return null;

    return ReactDOM.createPortal(
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex items-center justify-center z-[10005]`}
      >
        <div className="relative h-[95%]">
          <button
            onClick={closeModal}
            className={`absolute top-2 right-2 text-white bg-red-500 rounded-full px-3 py-1 hover:bg-red-600`}
          >
            x
          </button>
          <img
            src={image}
            alt="certificate-modal"
            className="max-w-full max-h-screen object-contain rounded-2xl"
          />
        </div>
      </div>,
      document.body // Render modal at the root of the document
    );
  };

  return (
    <>
      {/* What I offer */}
      <div
        className={`${
          isDarkMode ? 
            "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm" : "bg-black text-white shadow-sm shadow-white"
        } drop-shadow-md card rounded-lg mt-10 text-lg text-center font-bold m-3 w-[250px] truncate xl:w-[250px] py-3 px-2 mx-auto`}
      >
        What I offer !
      </div>

      <div className="flex justify-center gap-8 sm-gap-4 flex-wrap items-center w-[100%] p-3 mb-10">
       {/* Figma */}
<div
  className={`${
    isDarkMode ? "bg-gradient-to-r from-gray-900 to-black shadow-white " : "bg-white shadow-xl"
  } rounded-2xl w-[80%] sm:w-[300px] h-auto mt-5 shadow-sm mx-auto`}
>
  <img
    src={figmadesign}
    alt="shopify"
    className="h-[248px] w-[99%] hover:grayscale p-[2px] pl-1 pt-1 object-cover rounded-2xl cursor-pointer transition-all duration-500 ease-in-out"
    onClick={() => handleImageClick(figmadesign)}
  />
  <div
    className={`rounded-lg w-[100%] ${
      isDarkMode ? "text-white" : "text-black"
    } h-72 text-center mt-2 sm:mt-8`}
  >
    <h2
      className={`font-bold text-transparent bg-clip-text text-lg ${
        isDarkMode
          ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
          : 'bg-gradient-to-r from-orange-400 via-red-500'
      }`}
    >
      Figma Design Expert
    </h2>
    <p className="mt-2 p-2 overflow-y-auto custom-scrollbar bg-transparent border-transparent sm:overflow-y-hidden sm:text-sm h-[75%] ">
      Transform your ideas into stunning designs with my professional Figma services. Specializing in custom UI/UX, prototypes, and wireframes, I create responsive, user-friendly designs that captivate and convert. Let’s collaborate to elevate your digital presence with designs tailored to your needs. Contact me today to bring your vision to life!
    </p>
    <button
      onClick={() => {
        const message = `Hi, I'm interested in the Figma Design service. : ${figmadesign}`;
        const url = `https://wa.me/923333116295?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
      }}
      className={`mt-2 text-white p-2 rounded shadow-md cursor-pointer transition duration-300 hover:font-bold ${
        isDarkMode
          ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-700'
          : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-pink-600 hover:text-black'
      }`}
    >
      Learn More {">"}
    </button>
  </div>
</div>
     {/* resume */}
     <div
  className={`${
    isDarkMode ? "bg-gradient-to-r from-gray-900 to-black shadow-white " : "bg-white shadow-xl"
  } rounded-2xl w-[80%] sm:w-[300px] h-auto mt-5 shadow-sm mx-auto`}
>
  <img
    src={resume}
    alt="shopify"
    className="h-[248px] w-[99%] hover:grayscale p-[2px] pl-1 pt-1 object-cover rounded-2xl cursor-pointer transition-all duration-500 ease-in-out"
    onClick={() => handleImageClick(resume)}
  />
  <div
    className={`rounded-lg w-[100%] ${
      isDarkMode ? "text-white" : "text-black"
    } h-72 text-center mt-2 sm:mt-8`}
  >
    <h2
      className={`font-bold text-transparent bg-clip-text text-lg ${
        isDarkMode
          ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
          : 'bg-gradient-to-r from-orange-400 via-red-500'
      }`}
    >
     Professional Resume
    </h2>
    <p className="mt-2 p-2 overflow-y-auto custom-scrollbar bg-transparent border-transparent sm:overflow-y-hidden sm:text-sm h-[75%] ">
    I design eye-catching resume / CV to showcase your Skills, Experience and Education! Be different from others and get highlighted with my resume designs. 
    </p>
    <button
      onClick={() => {
        const message = `Hi, I'm interested in the Professional Resume / Cv service. : ${resume}`;
        const url = `https://wa.me/923333116295?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
      }}
      className={`mt-2 text-white p-2 rounded shadow-md cursor-pointer transition duration-300 hover:font-bold ${
        isDarkMode
          ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-700'
          : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-pink-600 hover:text-black'
      }`}
    >
      Learn More {">"}
    </button>
  </div>
</div>

        {/* design 1 HTML/CSS */}
        <div
          className={`${
            isDarkMode ? "bg-gradient-to-r from-black to-gray-900 shadow-white shadow-sm" : "bg-white shadow-xl"
          } rounded-2xl w-[80%] sm:w-[300px] h-auto mt-5 shadow-sm mx-auto`}
        >
          <img
            src={tax1}
            alt="tax1"      
           className="h-[248px] w-[99%] hover:grayscale p-[2px] pl-1 pt-1 object-cover rounded-2xl cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => handleImageClick(tax1)}
          />
          <div
            className={`rounded-lg w-[100%] ${
              isDarkMode ? "text-white" : "text-black"
            } h-72 text-center mt-2 sm:mt-8`}
          >
   <h2
  className={`font-bold text-transparent bg-clip-text text-lg ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500'
  }`}
>
              Figma to HTML/CSS
            </h2>
            <p className="mt-2 p-2 overflow-y-auto custom-scrollbar bg-transparent border-transparent sm:overflow-y-hidden sm:text-sm h-[75%] ">
              Get custom HTML/CSS coding for a pixel-perfect, responsive website. I deliver clean, efficient code that ensures your site is visually appealing, fast-loading, optimized for all devices and browsers, SEO-friendly, and highly functional.
            </p>
            <button
   onClick={() => {
    const message = `Hi, I'm interested in the Figma to HTML Service. : ${tax1}`;
    const url = `https://wa.me/923333116295?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}
  className={`mt-2 text-white p-2 rounded shadow-md cursor-pointer transition duration-300 hover:font-bold ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-700'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-pink-600 hover:text-black'
  }`}
>
  Learn More {">"}
</button>

          </div>
        </div>
           {/* design 1 wix */}
           <div
          className={`${
            isDarkMode ? "bg-gradient-to-r from-black to-gray-900 shadow-white shadow-sm" : "bg-white shadow-xl"
          } rounded-2xl w-[80%] sm:w-[300px] h-auto mt-5 shadow-sm mx-auto`}
        >
          <img
            src={wixdesign}
            alt="tax1"      
           className="h-[248px] w-[99%] hover:grayscale p-[2px] pl-1 pt-1 object-cover rounded-2xl cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => handleImageClick(wixdesign)}
          />
          <div
            className={`rounded-lg w-[100%] ${
              isDarkMode ? "text-white" : "text-black"
            } h-72 text-center mt-2 sm:mt-8`}
          >
   <h2
  className={`font-bold text-transparent bg-clip-text text-lg ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500'
  }`}
>
              Figma to Wix
            </h2>
            <p className="mt-2 p-2 overflow-y-auto custom-scrollbar bg-transparent border-transparent sm:overflow-y-hidden sm:text-sm h-[75%] ">
            I deliver pixel-perfect, responsive websites on Wix that are visually appealing, fast-loading, optimized for all devices and browsers, SEO-friendly, and highly functional. My clean and efficient approach ensures your site stands out while offering seamless performance and professional design.
            </p>
            <button
   onClick={() => {
    const message = `Hi, I'm interested in the Figma to WixService. : ${wixdesign}`;
    const url = `https://wa.me/923333116295?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}
  className={`mt-2 text-white p-2 rounded shadow-md cursor-pointer transition duration-300 hover:font-bold ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-700'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-pink-600 hover:text-black'
  }`}
>
  Learn More {">"}
</button>

          </div>
        </div>
            {/* portfolio */}
            <div
          className={`${
            isDarkMode ? "bg-gradient-to-r from-black to-gray-900 shadow-white shadow-sm" : "bg-white shadow-xl"
          } rounded-2xl w-[80%] sm:w-[300px] h-auto mt-5 shadow-sm mx-auto`}
        >
          <img
            src={portfolio}
            alt="tax1"      
           className="h-[248px] w-[99%] hover:grayscale p-[2px] pl-1 pt-1 object-cover rounded-2xl cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => handleImageClick(portfolio)}
          />
          <div
            className={`rounded-lg w-[100%] ${
              isDarkMode ? "text-white" : "text-black"
            } h-72 text-center mt-2 sm:mt-8`}
          >
   <h2
  className={`font-bold text-transparent bg-clip-text text-lg ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500'
  }`}
>
          Stunning PortFolio
            </h2>
            <p className="mt-2 p-2 overflow-y-auto custom-scrollbar bg-transparent border-transparent sm:overflow-y-hidden sm:text-sm h-[75%] ">
            I create customized, responsive portfolios that are visually striking, easy to navigate, and optimized for all devices and browsers. My portfolio designs focus on fast-loading, SEO-friendly layouts with smooth functionality. Whether you're a creative professional or a business, I ensure your portfolio stands out with a polished, user-friendly design that highlights your work in the best light possible.
            </p>
            <button
    onClick={() => {
      const message = `Hi, I'm interested in the PortFolio. : ${portfolio}`;
      const url = `https://wa.me/923333116295?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }}
  className={`mt-2 text-white p-2 rounded shadow-md cursor-pointer transition duration-300 hover:font-bold ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-700'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-pink-600 hover:text-black'
  }`}
>
  Learn More {">"}
</button>

          </div>
        </div>
              {/* website */}
              <div
          className={`${
            isDarkMode ? "bg-gradient-to-r from-black to-gray-900 shadow-white shadow-sm" : "bg-white shadow-xl"
          } rounded-2xl w-[80%] sm:w-[300px] h-auto mt-5 shadow-sm mx-auto`}
        >
          <img
            src={website}
            alt="tax1"      
           className="h-[248px] w-[99%] hover:grayscale p-[2px] pl-1 pt-1 object-cover rounded-2xl cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => handleImageClick(website)}
          />
          <div
            className={`rounded-lg w-[100%] ${
              isDarkMode ? "text-white" : "text-black"
            } h-72 text-center mt-2 sm:mt-8`}
          >
   <h2
  className={`font-bold text-transparent bg-clip-text text-lg ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500'
  }`}
>
        Website For You
            </h2>
            <p className="mt-2 p-2 overflow-y-auto custom-scrollbar bg-transparent border-transparent sm:overflow-y-hidden sm:text-sm h-[75%] ">
            I develop tailored, responsive websites for any business, ensuring they are visually appealing, easy to navigate, and optimized for all devices and browsers. My websites focus on fast-loading, SEO-friendly designs with seamless functionality. Whether you're running a small business or a larger enterprise, I ensure your website stands out with a clean, professional design that helps you reach your goals and connect with your audience.
            </p>
            <button
    onClick={() => {
      const message = `Hi, I'm interested in the Website Service. : ${website}`;
      const url = `https://wa.me/923333116295?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }}
  className={`mt-2 text-white p-2 rounded shadow-md cursor-pointer transition duration-300 hover:font-bold ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-700'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-pink-600 hover:text-black'
  }`}
>
  Learn More {">"}
</button>

          </div>
        </div>

        {/* Shopify */}
        <div
          className={`${
            isDarkMode ? "bg-gradient-to-r from-gray-900 to-black shadow-white " : "bg-white shadow-xl"
          } rounded-2xl w-[80%] sm:w-[300px] h-auto mt-5 shadow-sm mx-auto`}
        >
          <img
            src={shopify}
            alt="shopify"
           className="h-[248px] w-[99%] hover:grayscale p-[2px] pl-1 pt-1 object-cover rounded-2xl cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => handleImageClick(shopify)}
          />
          <div
            className={`rounded-lg w-[100%] ${
              isDarkMode ? "text-white" : "text-black"
            } h-72 text-center mt-2 sm:mt-8`}
          >
 <h2
  className={`font-bold text-transparent bg-clip-text text-lg ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500'
  }`}
>
              Figma to Shopify
            </h2>
            <p className="mt-2 p-2 overflow-y-auto custom-scrollbar bg-transparent border-transparent sm:overflow-y-hidden sm:text-sm h-[75%] ">
              Get custom Figma to Shopify conversion with pixel-perfect, responsive design. I deliver clean, efficient code using the "Liquid Engine" that ensures your store is visually appealing, fast-loading, optimized for all devices and browsers, SEO-friendly, and highly functional.
            </p>
            <button
    onClick={() => {
      const message = `Hi, I'm interested in the Shopify Store Creation. : ${shopify}`;
      const url = `https://wa.me/923333116295?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }}
  className={`mt-2 text-white p-2 rounded shadow-md cursor-pointer transition duration-300 hover:font-bold ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-700'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-pink-600 hover:text-black'
  }`}
>
  Learn More {">"}
</button>

          </div>
        </div>

        {/* design 2 Graphics Design */}
        <div
          className={`${
            isDarkMode ? "bg-gradient-to-r from-black to-gray-900 shadow-white shadow-sm" : "bg-white shadow-xl"
          } rounded-2xl w-[80%] sm:w-[300px] h-auto mt-5 mx-auto`}
        >
          <img
            src={tax2}
            alt="tax2"
      className="h-[248px] w-[99%] hover:grayscale p-[2px] pl-1 pt-1 object-cover rounded-2xl cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => handleImageClick(tax2)}
          />
          <div
            className={`rounded-lg w-[100%] ${
              isDarkMode ? "text-white" : "text-black"
            } h-72 text-center mt-2 sm:mt-8`}
          >
        <h2
  className={`font-bold text-transparent bg-clip-text text-lg ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500'
  }`}
>
              Graphics Design
            </h2>
            <p className="mt-2 p-2 overflow-y-auto custom-scrollbar bg-transparent border-transparent sm:overflow-y-hidden sm:text-sm h-[75%] ">
              Create eye-catching graphics for your brand including brochures, social media posts, banners, flyers, and more. I deliver high-resolution, custom graphics that enhance your brand's identity and engagement.
            </p>
            <button
     onClick={() => {
      const message = `Hi, I'm interested in the Graphics Design. : ${tax2}`;
      const url = `https://wa.me/923333116295?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }}
  className={`mt-2 text-white p-2 rounded shadow-md cursor-pointer transition duration-300 hover:font-bold ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-700'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-pink-600 hover:text-black'
  }`}
>
  Learn More {">"}
</button>

          </div>
        </div>

        {/* design 3 WordPress */}
        <div
          className={`${
            isDarkMode ? "bg-gradient-to-r from-gray-900 to-black shadow-white shadow-sm" : "bg-white shadow-xl"
          } rounded-2xl w-[80%] sm:w-[300px] h-auto mt-5 mx-auto`}
        >
          <img
            src={design3}
            alt="design3"
            className="h-[248px] w-[99%] hover:grayscale p-[2px] pl-1 pt-1 object-cover rounded-2xl cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => handleImageClick(design3)}
          />
          <div
            className={`rounded-lg w-[100%] ${
              isDarkMode ? "text-white" : "text-black"
            } h-72 text-center mt-2 sm:mt-8`}
          >
         <h2
  className={`font-bold text-transparent bg-clip-text text-lg ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500'
  }`}
>
              Figma to WordPress
            </h2>
            <p className="mt-2 p-2 overflow-y-auto custom-scrollbar bg-transparent border-transparent sm:overflow-y-hidden sm:text-sm h-[75%] ">
              Convert your Figma designs into fully functional, responsive WordPress themes. I focus on clean code, SEO-friendly features, and speed optimization.
            </p>
            <button
      onClick={() => {
        const message = `Hi, I'm interested in the Wordpress Website. : ${design3}`;
        const url = `https://wa.me/923333116295?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
      }}
  className={`mt-2 text-white p-2 rounded shadow-md cursor-pointer transition duration-300 hover:font-bold ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-700'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-pink-600 hover:text-black'
  }`}
>
  Learn More {">"}
</button>

          </div>
        </div>
             {/*digital marketing*/}
             <div
          className={`${
            isDarkMode ? "bg-gradient-to-r from-black to-gray-900 shadow-sm shadow-white" : "bg-white shadow-xl"
          } rounded-2xl w-[80%] sm:w-[300px] h-auto mt-5 mx-auto`}
        >
          <img
            src={digitalmarketing}
            alt="design4"
           className="h-[248px] w-[99%] hover:grayscale p-[2px] pl-1 pt-1 object-cover rounded-2xl cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => handleImageClick(digitalmarketing)}
          />
          <div
            className={`rounded-lg w-[100%] ${
              isDarkMode ? "text-white" : "text-black"
            } h-72 text-center mt-2 sm:mt-8`}
          >
        <h2
  className={`font-bold text-transparent bg-clip-text text-lg ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500'
  }`}
>
             Digital Marketing Expert
            </h2>
            <p className="mt-2 p-2 overflow-y-auto custom-scrollbar bg-transparent border-transparent sm:overflow-y-hidden sm:text-sm h-[75%] ">
            Take your brand to the next level with my digital marketing services! From social media management, SEO, and ad campaigns to creative graphic design, I’ll help you stand out and grow online.
            </p>
            <button
    onClick={() => {
      const message = `Hi, I'm interested in the Digital Marketing Services. : ${digitalmarketing}`;
      const url = `https://wa.me/923333116295?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }}
  className={`mt-2 text-white p-2 rounded shadow-md cursor-pointer transition duration-300 hover:font-bold ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-700'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-pink-600 hover:text-black'
  }`}
>
  Learn More {">"}
</button>

          </div>
        </div>

        {/* design 4 Figma to React */}
        <div
          className={`${
            isDarkMode ? "bg-gradient-to-r from-black to-gray-900 shadow-sm shadow-white" : "bg-white shadow-xl"
          } rounded-2xl w-[80%] sm:w-[300px] h-auto mt-5 mx-auto`}
        >
          <img
            src={design4}
            alt="design4"
           className="h-[248px] w-[99%] hover:grayscale p-[2px] pl-1 pt-1 object-cover rounded-2xl cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => handleImageClick(design4)}
          />
          <div
            className={`rounded-lg w-[100%] ${
              isDarkMode ? "text-white" : "text-black"
            } h-72 text-center mt-2 sm:mt-8`}
          >
         <h2
  className={`font-bold text-transparent bg-clip-text text-lg ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500'
  }`}
>
              Figma to React
            </h2>
            <p className="mt-2 p-2 overflow-y-auto custom-scrollbar bg-transparent border-transparent sm:overflow-y-hidden sm:text-sm h-[75%] ">
              I will convert your Figma designs into modern, responsive React applications with clean code and optimized performance.
            </p>
            <button
    onClick={() => {
      const message = `Hi, I'm interested in the React Website. : ${design4}`;
      const url = `https://wa.me/923333116295?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }}
  className={`mt-2 text-white p-2 rounded shadow-md cursor-pointer transition duration-300 hover:font-bold ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-700'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-pink-600 hover:text-black'
  }`}
>
  Learn More {">"}
</button>

          </div>
        </div>
     
                   {/*content Writing*/}
                   <div
          className={`${
            isDarkMode ? "bg-gradient-to-r from-gray-900 to-black shadow-sm shadow-white" : "bg-white shadow-xl"
          } rounded-2xl w-[80%] sm:w-[300px] h-auto mt-5 mx-auto`}
        >
          <img
            src={contentwriting}
            alt="design4"
           className="h-[248px] w-[99%] hover:grayscale p-[2px] pl-1 pt-1 object-cover rounded-2xl cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => handleImageClick(contentwriting)}
          />
          <div
            className={`rounded-lg w-[100%] ${
              isDarkMode ? "text-white" : "text-black"
            } h-72 text-center mt-2 sm:mt-8`}
          >
         <h2
  className={`font-bold text-transparent bg-clip-text text-lg ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500'
  }`}
>
           Content Writing Expert
            </h2>
            <p className="mt-2 p-2 overflow-y-auto custom-scrollbar bg-transparent border-transparent sm:overflow-y-hidden sm:text-sm h-[75%] ">
            I offer professional content writing services to help your brand stand out. From blog posts and website copy to product descriptions and social media content, I craft engaging, high-quality materials tailored to your audience. With a focus on SEO, my content drives traffic, boosts visibility, and aligns with your brand's voice and goals.
            </p>
            <button
     onClick={() => {
      const message = `Hi, I'm interested in the Content Writing Service. : ${contentwriting}`;
      const url = `https://wa.me/923333116295?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }}
  className={`mt-2 text-white p-2 rounded shadow-md cursor-pointer transition duration-300 hover:font-bold ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-700'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-pink-600 hover:text-black'
  }`}
>
  Learn More {">"}
</button>

          </div>
        </div>
            {/*Ecommerce*/}
            <div
          className={`${
            isDarkMode ? "bg-gradient-to-r from-black to-gray-900 shadow-sm shadow-white" : "bg-white shadow-xl"
          } rounded-2xl w-[80%] sm:w-[300px] h-auto mt-5 mx-auto`}
        >
          <img
            src={woocommerce}
            alt="design4"
           className="h-[248px] w-[99%] hover:grayscale p-[2px] pl-1 pt-1 object-cover rounded-2xl cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => handleImageClick(woocommerce)}
          />
          <div
            className={`rounded-lg w-[100%] ${
              isDarkMode ? "text-white" : "text-black"
            } h-72 text-center mt-2 sm:mt-8`}
          >
        <h2
  className={`font-bold text-transparent bg-clip-text text-lg ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500'
  }`}
>
             Ecommerce Website Expert
            </h2>
            <p className="mt-2 p-2 overflow-y-auto custom-scrollbar bg-transparent border-transparent sm:overflow-y-hidden sm:text-sm h-[75%] ">
            "Looking to launch or grow your online store? I offer professional eCommerce website development using WordPress. With customized designs, user-friendly layouts, and secure payment integrations, your website will stand out and deliver an excellent shopping experience. From product pages to checkout systems, I ensure everything is optimized for sales and performance. "
            </p>
            <button
     onClick={() => {
      const message = `Hi, I'm interested in the Ecommerce Store Creation : ${woocommerce}`;
      const url = `https://wa.me/923333116295?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }}
  className={`mt-2 text-white p-2 rounded shadow-md cursor-pointer transition duration-300 hover:font-bold ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-700'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-pink-600 hover:text-black'
  }`}
>
  Learn More {">"}
</button>

          </div>
        </div>
                       {/*squarespace*/}
                       <div
          className={`${
            isDarkMode ? "bg-gradient-to-r from-gray-900 to-black shadow-sm shadow-white" : "bg-white shadow-xl"
          } rounded-2xl w-[80%] sm:w-[300px] h-auto mt-5 mx-auto`}
        >
          <img
            src={squarespace}
            alt="design4"
           className="h-[248px] w-[99%] hover:grayscale p-[2px] pl-1 pt-1 object-cover rounded-2xl cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => handleImageClick(squarespace)}
          />
          <div
            className={`rounded-lg w-[100%] ${
              isDarkMode ? "text-white" : "text-black"
            } h-72 text-center mt-2 sm:mt-8`}
          >
         <h2
  className={`font-bold text-transparent bg-clip-text text-lg ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500'
  }`}
>
          Square Space Expert
            </h2>
            <p className="mt-2 p-2 overflow-y-auto custom-scrollbar bg-transparent border-transparent sm:overflow-y-hidden sm:text-sm h-[75%] ">
            I provide expert Squarespace website development services tailored to your needs. From designing responsive, visually appealing websites to integrating e-commerce functionality, SEO optimization, and custom branding, I ensure your website stands out. Squarespace's user-friendly platform allows for seamless updates and management, making it perfect for individuals and businesses seeking an online presence.
            </p>
            <button
     onClick={() => {
      const message = `Hi, I'm interested in the Square Space Website : ${squarespace}`;
      const url = `https://wa.me/923333116295?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }}
  className={`mt-2 text-white p-2 rounded shadow-md cursor-pointer transition duration-300 hover:font-bold ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-700'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-pink-600 hover:text-black'
  }`}
>
  Learn More {">"}
</button>

          </div>
        </div>
              {/*gohighLevel*/}
              <div
          className={`${
            isDarkMode ? "bg-gradient-to-r from-black to-gray-900 shadow-sm shadow-white" : "bg-white shadow-xl"
          } rounded-2xl w-[80%] sm:w-[300px] h-auto mt-5 mx-auto`}
        >
          <img
            src={gohighlevel}
            alt="design4"
           className="h-[248px] w-[99%] hover:grayscale p-[2px] pl-1 pt-1 object-cover rounded-2xl cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => handleImageClick(gohighlevel)}
          />
          <div
            className={`rounded-lg w-[100%] ${
              isDarkMode ? "text-white" : "text-black"
            } h-72 text-center mt-2 sm:mt-8`}
          >
        <h2
  className={`font-bold text-transparent bg-clip-text text-lg ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-orange-400 via-red-500'
  }`}
>
             Go high Level Expert
            </h2>
            <p className="mt-2 p-2 overflow-y-auto custom-scrollbar bg-transparent border-transparent sm:overflow-y-hidden sm:text-sm h-[75%] ">
            I offer professional website development services using GoHighLevel, a powerful platform designed for businesses. My services include creating custom, responsive websites, integrating CRM, automating marketing workflows, optimizing for SEO, and enhancing lead generation. With GoHighLevel, I ensure seamless functionality, user-friendly designs, and tools to grow your online presence effectively.
            </p>
            <button
    onClick={() => {
      const message = `Hi, I'm interested in the GoHighLevel Website Creation. : ${gohighlevel}`;
      const url = `https://wa.me/923333116295?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }}
  className={`mt-2 text-white p-2 rounded shadow-md cursor-pointer transition duration-300 hover:font-bold ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-700'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-pink-600 hover:text-black'
  }`}
>
  Learn More {">"}
</button>

          </div>
        </div>
    
      </div>

      {/* Render the modal if open */}
      <Modal image={currentImage} />
    </>
  );
}
