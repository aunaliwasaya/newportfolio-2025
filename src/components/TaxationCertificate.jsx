import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import tax1 from "../assets/tax.webp";
import tax2 from "../assets/tax2.webp";
import resume from "../assets/resume.webp";

export default function TaxationCertificate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

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
      <div
        className={`fixed top-0 left-0 w-screen h-screen ${
          isDarkMode ? "bg-black" : "bg-black"
        } bg-opacity-90 flex items-center justify-center z-[10005]`}
      >
        <div className="relative h-[95%]">
          <button
            onClick={closeModal}
            className={`absolute top-2 right-2 ${
              isDarkMode
                ? "text-white bg-red-500 hover:bg-red-600"
                : "text-black bg-red-300 hover:bg-red-400"
            } rounded-full px-3 py-1`}
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
      document.body
    );
  };

  return (
    <>
      {/* Taxation Certificate Section */}
      <div
  className={`  drop-shadow-md card rounded-lg mt-5 text-sm text-center font-bold m-3 w-[200px] py-2 mx-auto first-letter ${
    isDarkMode
      ?  "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm" : "bg-black text-white shadow-sm shadow-white"
  }`}
      >
      Taxation Certificates
      </div>

      <div className="flex justify-center gap-4 flex-wrap items-center w-[100%] p-3 mb-10">
        {/* Certificate 1 */}
        <div
          className={`rounded-2xl ${
            isDarkMode ? "bg-black " : "bg-white"
          } w-[300px] h-[245px] mt-5 shadow-xl overflow-hidden`}
        >
          <img
            src={tax1}
            alt="tax1"
            className="h-[240px] w-[99%] p-[2px] pl-2 pt-3 object-cover rounded-2xl cursor-pointer"
            onClick={() => handleImageClick(tax1)}
          />
        </div>

        {/* Certificate 2 */}
        <div
          className={`rounded-2xl ${
            isDarkMode ? "bg-black" : "bg-white"
          } w-[300px] h-[444px] mt-5 shadow-xl overflow-hidden`}
        >
          <img
            src={tax2}
            alt="tax2"
            className="h-[434px] w-[98%] m-1 object-cover rounded-2xl cursor-pointer"
            onClick={() => handleImageClick(tax2)}
          />
        </div>

              <div
              className={`mt-3 w-[98%] h-[1px] mx-auto ${
                isDarkMode ? "bg-gradient-to-r from-white to-slate-400" : "bg-black"
              }`}
            ></div>
        {/* Resume */}
        <div className=" flex flex-col px-[2px] mb-5">
     {/*resume heading  */}
     <div
  className={`  drop-shadow-md card rounded-lg mt-5 text-sm text-center font-bold m-3 w-[300px] sm:w-[auto]  py-2 mx-auto first-letter ${
    isDarkMode
      ?   "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm" : "bg-black text-white shadow-sm shadow-white"
  }`}
      >
  Resume
      </div>
      {/* Resume image */}
      <div
          className={`rounded-2xl ${
            isDarkMode ? "bg-black" : "bg-white"
          } w-[300px] h-[444px] mt-5 shadow-xl overflow-hidden px-1 sm:px-0`}
        >
          <img
            src={resume}
            alt="tax2"
            className="h-[434px] w-[98%] m-1 object-cover rounded-2xl cursor-pointer"
            onClick={() => handleImageClick(resume)}
          />
        </div>

        </div>
 

      </div>

      {/* Modal */}
      {isModalOpen && <Modal image={currentImage} />}
    </>
  );
}
