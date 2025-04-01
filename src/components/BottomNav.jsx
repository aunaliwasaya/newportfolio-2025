import React from "react";
import { useSelector } from "react-redux";
import { Home, Info, Phone, Briefcase } from "lucide-react";
import codeuplogo from "../assets/codeup-favicon.png";

function BottomNav() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  
  return (
    <div
      className={`fixed bottom-0 left-0 m-1 w-[98%] p-3 md:hidden rounded-lg flex justify-around items-center shadow-md border 
        backdrop-filter backdrop-blur-lg
        ${isDarkMode 
          ? "bg-white bg-opacity-80 text-blue-600 border-gray-300" 
          : "bg-black bg-opacity-80 text-gray-700 border-gray-200"}`}
    >
      {/* Home */}
      <div className="flex flex-col items-center hover:text-blue-500 transition">
        <Home size={24} />
        <span className="text-xs">Home</span>
      </div>

      {/* About */}
      <div className="flex flex-col items-center hover:text-blue-500 transition">
        <Info size={24} />
        <span className="text-xs">About</span>
      </div>

      {/* Logo in the center */}
      <div className="flex flex-col items-center">
        {/* Replace with your image path */}
    
        <a href="https://codeup.solutions/" target="_blank" rel="noopener noreferrer">
  <img src={codeuplogo} alt="Codeup Logo" className="w-12 h-12" />
</a>
      </div>

      {/* Contact */}
      <div className="flex flex-col items-center hover:text-blue-500 transition">
        <Phone size={24} />
        <span className="text-xs">Contact</span>
      </div>

      {/* Services */}
      <div className="flex flex-col items-center hover:text-blue-500 transition">
        <Briefcase size={24} />
        <span className="text-xs">Services</span>
      </div>
    </div>
  );
}

export default BottomNav;
