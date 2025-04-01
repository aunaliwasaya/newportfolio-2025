import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Home, Info, Briefcase } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import codeuplogo from "../assets/codeup-favicon.png";
import { toggleTheme } from "../store/themeSlice"; // Correctly import toggleTheme action

function BottomNav() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Add useNavigate for navigation functionality

  const toggleThemeHandler = () => {
    dispatch(toggleTheme()); // Dispatch the toggleTheme action
  };

  const navigatetohome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div
      className={`fixed bottom-0 left-0 m-1 w-[98%] p-3 md:hidden rounded-lg flex justify-center items-center shadow-md border 
        backdrop-filter backdrop-blur-lg
        ${isDarkMode
          ? "bg-white bg-opacity-80 text-blue-600 border-gray-300"
          : "bg-black bg-opacity-80 text-white border-gray-200"}`}
    >
      <div className="flex justify-between w-full max-w-md items-center">
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "backdrop-blur-lg bg-gradient-to-l from-black to-slate-600 rounded-full p-2 transition-all duration-300 w-12 h-12 flex justify-center items-center"
              : "opacity-50 p-2 bg-gray-600 text-white hover:bg-black rounded-full transition-all duration-300 hover:opacity-100 w-12 h-12 flex justify-center items-center"
          }
        >
          <Home size={24} />
        </NavLink>

        {/* About */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "backdrop-blur-lg bg-gradient-to-l from-black to-slate-600 rounded-full p-2 transition-all duration-300 w-12 h-12 flex justify-center items-center"
              : "opacity-50 p-2 bg-gray-600 text-white hover:bg-black rounded-full transition-all duration-300 hover:opacity-100 w-12 h-12 flex justify-center items-center"
          }
        >
          <Info size={24} />
        </NavLink>

        {/* Logo in the center */}
        <div className="flex flex-col items-center">
          <a href="https://codeup.solutions/" target="_blank" rel="noopener noreferrer">
            <img src={codeuplogo} alt="Codeup Logo" className="w-20 h-20 -mt-14" />
          </a>
        </div>

        {/* Theme Toggle and Home Navigation */}
        <div className="relative cursor-pointer w-14 h-14 rounded-full bg-gradient-to-b from-gray-100 to-gray-300 border-2 flex items-center justify-center">
          <img
            src={isDarkMode ? "path/to/darkmodenavbar" : "path/to/profile"} // Replace with actual paths
            alt=""
            className="max-w-full max-h-full mt-1"
            onClick={navigatetohome}
          />
          <div
            onClick={toggleThemeHandler}
            className="text-white p-[5px] animate-pulse hover:animate-none bg-black shadow-md rounded-full w-8 h-8 absolute left-12 hover:bg-blue-950 hover:shadow-black top-0"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </div>
        </div>

        {/* Certificates */}
        <NavLink
          to="/certificates"
          className={({ isActive }) =>
            isActive
              ? "backdrop-blur-lg bg-gradient-to-l from-black to-slate-600 rounded-full p-2 transition-all duration-300 w-12 h-12 flex justify-center items-center"
              : "opacity-50 p-2 bg-gray-600 text-white hover:bg-black rounded-full transition-all duration-300 hover:opacity-100 w-12 h-12 flex justify-center items-center"
          }
        >
          <Briefcase size={24} />
        </NavLink>
      </div>
    </div>
  );
}

export default BottomNav;
