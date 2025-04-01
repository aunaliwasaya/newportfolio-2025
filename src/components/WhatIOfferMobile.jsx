

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import design4 from "../assets/figma-to-react.webp";
import tax1 from "../assets/figma-to-html.webp";
import tax2 from "../assets/graphics-Design.webp";
import design3 from "../assets/figma-to-wordpress.webp";
import shopify from "../assets/shopify.webp";
import digitalmarketing from "../assets/digital-marketing.webp";
import woocommerce from "../assets/woocommerce.webp";
import contentwriting from "../assets/content-writing.webp"
import gohighlevel from "../assets/go-highlevel.webp"
import squarespace from "../assets/square-space.webp"
import figmadesign from "../assets/figmadesign.webp"
import wixdesign from "../assets/wix-design.webp"
import portfolio from "../assets/parallex/portfolio-design.webp"
import website from "../assets/parallex/website.webp"
import resume from "../assets/resume-design.webp"


const WhatIOfferMobile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const services = [

    { image: design4, alt: "Figma to React", title: "Figma to React" },
    { image: figmadesign, alt: "figmadesign", title: "Figma Design Expert" },
    { image: resume, alt: "resume", title: "Attractive Resume / Cv" },
    { image: wixdesign, alt: "wixdesign", title: "Wix Expert" },
    { image: tax1, alt: "Figma to HTML", title: "Figma to HTML" },
    { image: tax2, alt: "Graphics Design", title: "Graphics Design" },
    { image: design3, alt: "Figma to WordPress", title: "Figma to WordPress" },
    { image: shopify, alt: "Shopify Development", title: "Shopify Development" },
    { image: digitalmarketing, alt: "Digital Marketing Expert", title: "Digital Marketing Expert" },
    { image: woocommerce, alt: "Expert", title: "Ecommerce Website Expert" },
    { image: contentwriting, alt: " contentwriting", title: " Content Writing Expert" },
    { image: gohighlevel, alt: "gohighlevel", title: "Go High Level Expert" },
    { image: squarespace, alt: "squarespace", title: "Square Space Expert" },
    { image: portfolio, alt: "Portfolio", title: "Stunning Portflio" },
    { image: website, alt: "website", title: "Stunning Websites" },

  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Disable arrows
    dots: false, // Disable dots
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className={` ${isDarkMode ? " text-white" : " text-black"}`}>
            <p
                  className={`drop-shadow-md card rounded-lg  text-sm text-center font-bold m-3 w-[200px] py-2 mx-auto first-letter ${
                    isDarkMode
                      ?  "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm" : "bg-black text-white shadow-sm shadow-white"
                  }`}
                >
        What I Offer
      </p>

      <div className="relative rounded-xl py-2 w-full mx-auto h-auto mt-3 mb-5 bg-gradient-to-b from-gray-100 to-gray-300 overflow-hidden">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-2">
              <div
                className={`rounded-2xl w-[99%] ${isDarkMode ? "bg-black shadow-lg" : "bg-white shadow-xl"} sm:w-[300px] h-auto mx-auto`}
                onClick={() => openModal(service.image)}
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-[248px] w-[99%] p-[2px] pl-1 pt-1 object-cover rounded-2xl cursor-pointer"
                />
                <div className={`text-center font-bold mt-1 pb-1 ${isDarkMode ? "text-white" : "text-black"}`}>
                  <p>{service.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {isModalOpen &&
        ReactDOM.createPortal(
          <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex items-center justify-center z-[10005]">
            <div className="relative h-[95%]">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full px-3 py-1 hover:bg-red-600"
              >
                x
              </button>
              <img
                src={modalImage}
                alt="certificate-modal"
                className="max-w-full max-h-screen object-contain rounded-2xl"
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default WhatIOfferMobile;
