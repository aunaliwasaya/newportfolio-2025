
import React, { useState } from "react";
import ReactDOM from "react-dom";
import mern1 from "../assets/mern-stack-bmj.webp";
import mern2 from "../assets/consul-mern.webp";
import frontend1 from "../assets/front-end-consult.webp";
import frontend2 from "../assets/front-end-bmj.webp";
import frontend3 from "../assets/Front-end-one.webp";
import { useSelector } from "react-redux";

export default function Certificates() {

const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Detect dark mode from Redux

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  const Modal = ({ image }) => {
    if (!image) return null;

    return ReactDOM.createPortal(
      <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex items-center justify-center z-[10005]">
        <div className="relative h-[95%]">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white bg-red-500 rounded-full px-3 py-1 hover:bg-red-600"
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
           <div
                  className={` drop-shadow-md card rounded-lg mt-5 text-sm text-center font-bold m-3 w-[200px] py-2 mx-auto first-letter ${
                    isDarkMode
                      ?  "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm" : "bg-black text-white shadow-sm shadow-white"
                  }`}
                >
        Certifications
      </div>

      <div
                  className={`  drop-shadow-md card rounded-lg mt-5 text-sm text-center font-bold m-3 w-[200px] py-2 mx-auto first-letter ${
                    isDarkMode
                      ?  "bg-black text-white shadow-white shadow-sm" 
                      : "bg-white text-black shadow-black shadow-lg"
                  }`}
                >
        Mern Stack Dev
      </div>

      <div className="rounded-2xl bg-black w-full h-[232px] mt-5 shadow-xl overflow-hidden">
        <img
          src={mern1}
          alt="mern-1"
          className="h-[225px] w-[98%] m-1 object-cover rounded-2xl cursor-pointer"
          onClick={() => handleImageClick(mern1)}
        />
      </div>

      <div className="rounded-2xl bg-black w-full h-[440px] mt-5 shadow-xl overflow-hidden">
        <img
          src={mern2}
          alt="mern-2"
          className="h-[434px] w-[98%] m-1 object-cover rounded-2xl cursor-pointer"
          onClick={() => handleImageClick(mern2)}
        />
      </div>

      <div
                  className={`  drop-shadow-md card rounded-lg mt-5 text-sm text-center font-bold m-3 w-[200px] py-2 mx-auto first-letter ${
                    isDarkMode
                      ?  "bg-black text-white shadow-white shadow-sm" 
                      : "bg-white text-black shadow-black shadow-lg"
                  }`}
                >
        Front End Dev
      </div>

      <div className="rounded-2xl bg-black w-full h-[232px] mt-5 shadow-xl overflow-hidden">
        <img
          src={frontend2}
          alt="front-end2"
          className="h-[225px] w-[98%] m-1 object-cover rounded-2xl cursor-pointer"
          onClick={() => handleImageClick(frontend2)}
        />
      </div>

      <div className="rounded-2xl bg-black w-full h-[440px] mt-5 shadow-xl overflow-hidden">
        <img
          src={frontend1}
          alt="front-end1"
          className="h-[434px] w-[98%] m-1 object-cover rounded-2xl cursor-pointer"
          onClick={() => handleImageClick(frontend1)}
        />
      </div>

      <div className="rounded-2xl bg-black w-full h-[440px] mt-5 shadow-xl overflow-hidden">
        <img
          src={frontend3}
          alt="front-end3"
          className="h-[434px] w-[98%] m-1 object-cover rounded-2xl cursor-pointer"
          onClick={() => handleImageClick(frontend3)}
        />
      </div>

      {isModalOpen && <Modal image={currentImage} />}
    </>
  );
}
