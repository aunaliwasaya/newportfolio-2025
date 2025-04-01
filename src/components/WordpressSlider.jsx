
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";  // Import useSelector to access Redux state
import cover1 from "../assets/cover/cover2.webp";
import cover2 from "../assets/cover/cover1.webp";
import cover3 from "../assets/cover/cover3.webp";
import cover4 from "../assets/cover/cover4.webp";
import cover5 from "../assets/cover/cover5.webp";
import cover6 from "../assets/cover/cover6.webp";
import cover7 from "../assets/cover/cover7.webp";

const covers = [cover1, cover2, cover3, cover4, cover5, cover6, cover7];

const WordpressSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(Array(covers.length).fill(0));
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Get isDarkMode from Redux state

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const updatedProgress = [...prevProgress];
        if (updatedProgress[currentIndex] < 100) {
          updatedProgress[currentIndex] += 1; // Increment by 1% each time
        }
        return updatedProgress;
      });
    }, 30); // Increment every 30ms to reach 100% in 3000ms
  
    // Clear the interval when the component unmounts or progress is 100%

  

    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex === covers.length - 1 ? 0 : prevIndex + 1;
        const updatedProgress = Array(covers.length).fill(0); // Reset all progress bars
        updatedProgress[nextIndex] = 0; // Ensure the next slide's bar is full
        setProgress(updatedProgress); // Update progress for the next slide
        return nextIndex;
      });
    }, 4000); // Change slide every 3 seconds

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [currentIndex]);

  const handleProgressClick = (index) => {
    setCurrentIndex(index);
    const updatedProgress = Array(covers.length).fill(0);
    updatedProgress[index] = 100; // Ensure clicked slide's bar is full
    setProgress(updatedProgress);
  };

  return (
    <div className={`w-full flex flex-col items-center justify-center relative ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div
        className={`w-full h-40 sm:h-52 md:h-64 lg:h-80 xl:h-[264px] backdrop-blur-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} bg-opacity-40 shadow-md rounded-2xl border overflow-hidden relative`}
      >
        {covers.map((cover, index) => (
          <img
            key={index}
            src={cover}
            alt={`Cover ${index + 1}`}
            className={`absolute w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div
        className="absolute top-2 left-1/2 h-4 transform -translate-x-1/2 flex justify-center items-center space-x-3 w-4/5"
      >
        {covers.map((_, index) => (
      <div
      key={index}
      className={`w-full transition-all ease-in-out duration-600 bg-slate-400 border-gray-500 rounded cursor-pointer relative overflow-hidden ${
        index === currentIndex
          ? "h-[11px] lg:h-3 border border-white shadow-md shadow-white"
          : "h-2 border border-gray-900 shadow-sm shadow-black"
      } xl:hover:h-3 transition-all duration-600`} // Added transition-all and duration-300
      onClick={() => handleProgressClick(index)}
    >
      <div
        className={`h-full  rounded ${
          index === currentIndex
            ? "bg-gradient-to-r from-blue-400 to-purple-500"
            : "bg-gradient-to-r from-pink-400 to-purple-500"
        }`}
        style={{
          width: `${progress[index]}%`,
        }}
      ></div>
    </div>
    
       
        ))}
      </div>
    </div>
  );
};

export default WordpressSlider;




