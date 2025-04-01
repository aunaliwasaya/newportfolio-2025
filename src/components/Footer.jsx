import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import profile from "../assets/profile.png";
import { useSelector, useDispatch } from "react-redux";
import darkmodenavbar from "../assets/navbar-darkmode.png";



export default function Footer() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  // Function to navigate to home and scroll to the top
  const navigatetohome = () => {
    if (location.pathname === "/") {
   
      scrollToTop();
    } else {

      navigate("/");
    }
  };

  // Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll to the top
  });
};

  return (
    <div className="px-2 py-2 ">
         <div
          className={`gap-5 flex  justify-center items-center sm:flex-rowitems-center sm:justify-center sm:text-center sm:items-center cursor-pointer px-7 py-3 rounded-lg 
            ${
            isDarkMode ? "bg-gradient-to-r from-black to-gray-900 text-white" : "bg-gray-100"
          }`}
        >

        <div
          onClick={navigatetohome}
          className="w-14 h-14 rounded-full bg-gradient-to-b from-gray-100 to-gray-300 border-2 flex items-center justify-center cursor-pointer"
        >
          <img 
             src={isDarkMode ? darkmodenavbar : profile}
          alt="Profile" className="max-w-full max-h-full mt-2" />
        </div>
        <p className="w-[70%] md:w-auto">
  © 2024 PortFolio – on React by{" "}
  <a
    href="https://aunali-portfolio.netlify.app/"
    className={`font-bold underline ${
      isDarkMode
        ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
        : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
    }`}
  >
    Aun Ali Wasaya
  </a>
</p>

      </div>
    </div>
  );
}
