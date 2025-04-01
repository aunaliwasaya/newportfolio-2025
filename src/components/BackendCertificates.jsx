import React, { useState } from "react";
import mern1 from "../assets/mern-stack-bmj.webp";
import mern2 from "../assets/consul-mern.webp";
import ReactDOM from "react-dom";

export default function BackendCertificates() {
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

  // Modal component using React Portal
  const Modal = ({ image }) => {
    if (!image) return null;

    return ReactDOM.createPortal(
      <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex items-center justify-center z-[9999]">
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
      {/* Certifications Backend */}
      <div className="flex justify-center gap-4 flex-wrap items-center w-[100%] p-3">
        {/* Backend Certificate One */}
        <div className="rounded-2xl bg-black w-[300px] h-[222px] mt-5 shadow-xl overflow-hidden">
          <img
            src={mern1}
            alt="mern1"
            className="h-[210px] w-[99%] p-[2px] pl-2 pt-3 object-cover rounded-2xl cursor-pointer"
            onClick={() => handleImageClick(mern1)}
          />
        </div>
        {/* Backend Certificate Two */}
        <div className="rounded-2xl bg-black w-[300px] h-[440px] mt-5 shadow-xl overflow-hidden">
          <img
            src={mern2}
            alt="mern2"
            className="h-[434px] w-[98%] m-1 object-cover rounded-2xl cursor-pointer"
            onClick={() => handleImageClick(mern2)}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <Modal image={currentImage} />}
    </>
  );
}
