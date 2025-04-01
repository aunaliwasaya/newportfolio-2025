import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import design1 from "../assets/design1.webp";
import design2 from "../assets/design2.webp";
import design3 from "../assets/desgin3.webp";
import design4 from "../assets/design4.webp";
import design5 from "../assets/design5.webp";
import design8 from "../assets/design8.webp";
import design9 from "../assets/design9.webp";
import design10 from "../assets/design10.webp";
import design11 from "../assets/design11.webp";
import design12 from "../assets/design12.webp";
import design0 from "../assets/design0.webp";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";





const DesignProjects = () => {


  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false, // Hides the previous and next buttons
  };

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };



  // Modal Component
  const Modal = ({ image }) => {
    if (!image) return null;

    return ReactDOM.createPortal(
      <div className="fixed inset-0 z-[11100] flex items-center justify-center bg-black bg-opacity-75">
        <div className="relative w-screen h-screen flex items-center justify-center py-5 px-2">
          <button
            onClick={closeModal}
            className="absolute z-50 top-14 right-7 text-white text-3xl bg-red-700 bg-opacity-50 rounded-full w-10 h-10 border hover:bg-opacity-75"
          >
            &times;
          </button>
          <img
            src={image}
            alt="Modal content"
            className="max-w-full max-h-full object-contain border rounded-lg shadow-lg"
          />
        </div>
      </div>,
      document.body
    );
  };

  const images = [
    design0,
    design1,
    design2,
    design3,
    design4,
    design5,
    design8,
    design9,
    design10,
    design11,
    design12,
  ];

  return (
<>
<div 
    className={`  drop-shadow-md card rounded-lg mt-5 text-sm text-center font-bold m-3 w-[200px] py-2 mx-auto first-letter ${
      isDarkMode
        ?  "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm" : "bg-black text-white shadow-sm shadow-white"
    }`}
        >
       Design Projects
        </div>
    <div className="w-[100%] mt-5 h-auto mx-auto bg-gradient-to-l from-black to-slate-600 rounded-lg px-1 pt-2">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <div
              className="h-[300px] w-full bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal */}
      {isModalOpen && <Modal image={currentImage} />}
    </div>
</>

  );
};

export default DesignProjects;
