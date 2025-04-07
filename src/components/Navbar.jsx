import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getConfigData } from "../data/configReader";
import profile from "../assets/profile.png";
import { useNavigate } from "react-router-dom";
import { toggleTheme } from "../store/themeSlice";
import darkmodenavbar from "../assets/navbar-darkmode.png";
import { useState } from "react";
import WhatIOfferMobile from "./WhatIOfferMobile";
import { FaBars, FaTimes } from "react-icons/fa";
import PortfolioModal from "../pages/PortfolioModal";
import WhatsAppMeButton from "../pages/WhatsAppMeButton";
import BottomNav from "./BottomNav";
import codeuplogo from "../assets/codeup-favicon.png";

export default function Navbar() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const configData = getConfigData();
  const [menuVisible, setMenuVisible] = useState(false);

  // Toggle menu visibility function
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    console.log(menuVisible);
  };

  const navigate = useNavigate(); // Initialize useNavigate

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  // Function to navigate to home
  const navigatetohome = () => {
    navigate("/"); // Navigate to the home page ("/")
  };

  return (
    <>
      <header className="py-1 px-2 fixed top-0 left-0 w-full z-40 ">
        {/* Codeup,solutions announcement bar */}
        <div
          className={`relative overflow-hidden flex justify-center backdrop-filter items-center w-[100%] h-5 py-1 mb-[4px] mx-auto rounded-md  backdrop-blur-lg ${
            isDarkMode
              ? "bg-white text-transparent shadow-lg shadow-gray"
              : "bg-black backdrop-filter backdrop-blur-lg shadow-md shadow-white text-transparent border  text-black border-gray-500"
          }`}
        >
          <a
            href="https://codeup.solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <p
              className={`w-full text-[12px] lg:text-[16px] flex justify-center items-center animate-marquee whitespace-nowrap  ${
                isDarkMode
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-black"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-white"
              }`}
            >
              "Check Out My Agency Website {"  "}
              <span className="pl-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-400">
                Codeup.Solutions"
              </span>
            </p>
          </a>
        </div>

        {/* Navbar */}
        <div className="w-[100%] mx-auto  relative">
          <navbar
            className={`backdrop-filter backdrop-blur-lg  
              ${
                isDarkMode
                  ? "bg-gradient-to-l from-blue-900 via-black to-white bg-opacity-75 shadow-md shadow-white"
                  : "bg-black bg-opacity-80 shadow-md shadow-gray-500 border-gray-500"
              }
              
  rounded-xl shadow-md flex items-center justify-between px-3 py-1`}
          >
            {/* image dark and light mode  */}

            <div className="relative cursor-pointer w-14 h-14 rounded-full bg-gradient-to-b from-gray-100 to-gray-300 border-2 flex items-center justify-center">
              <img
                src={isDarkMode ? darkmodenavbar : profile}
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
            {/* button menu  */}
            {/* Whatsapp me button */}
            <div className=" md:hidden  flex justify-center items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-800 shadow-lg shadow-green-400">
                <WhatsAppMeButton />
              </div>

              <p
                className={`${
                  isDarkMode ? "text-green-600" : "text-green-400"
                } animate-pulse text-lg font-semibold`}
              >
                Let's Chat!
              </p>
            </div>
            <div
              onClick={toggleMenu}
              className="lg:hidden flex flex-col gap-[3px] sm:gap-3 px-5 py-1 items-center cursor-pointer text-center"
            >
              <p className="text-center font-bold text-2xl">
                {menuVisible ? (
                  <div className="text-red-700">
                    <FaTimes />
                  </div>
                ) : (
                  <div className="text-white"> 
                       <FaBars />
                  </div>
               
                )}
              </p>
            </div>

            {/* Nav links for desktop menu*/}
            <div className="hidden lg:flex gap-[3px] sm:gap-3 px-5 py-1 items-center">
              {/* featured */}
              {/* New Icon for "🏆" - Link to Project */}
              <a
                href="https://admin-dashboard-portfolio-aun.vercel.app/"
                target="_blank"
                className="p-2 backdrop-blur-lg bg-gradient-to-r from-black to-slate-600 text-white hover:bg-gray-300 rounded-full transition-all duration-300 hover:opacity-100 w-12 h-12"
              >
                <span className="text-2xl text-yellow-500">🏆</span>
              </a>
              {/* Home */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "backdrop-blur-lg bg-gradient-to-l from-black to-slate-600 rounded-full p-2 transition-all duration-300 w-12 h-12"
                    : "opacity-50 p-2 bg-gray-600 text-white hover:bg-black rounded-full transition-all duration-300 hover:opacity-100 w-12 h-12"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 text-white rounded-full mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </NavLink>
              {/* about */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "backdrop-blur-lg bg-gradient-to-l from-black to-slate-600 rounded-full p-2 transition-all duration-300 w-12 h-12"
                    : "opacity-50 p-2 bg-gray-600 text-white hover:bg-black rounded-full transition-all duration-300 hover:opacity-100 w-12 h-12"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 text-white rounded-full mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </NavLink>
              {/* certificates */}
              <NavLink
                to="/certificates"
                className={({ isActive }) =>
                  isActive
                    ? "backdrop-blur-lg bg-gradient-to-l from-black to-slate-600 rounded-full p-2 transition-all duration-300 w-12 h-12"
                    : "opacity-50 p-2 bg-gray-600 text-white hover:bg-black rounded-full transition-all duration-300 hover:opacity-100 w-12 h-12"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 text-white rounded-full mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </NavLink>
              {/* Codeup Solutions */}
              <NavLink
                to="/codeup"
                className={({ isActive }) =>
                  isActive
                    ? "backdrop-blur-lg bg-gradient-to-l from-black to-slate-600 rounded-full p-2 transition-all duration-300 w-12 h-12"
                    : "opacity-50 p-2 bg-gray-600 text-white hover:bg-black rounded-full transition-all duration-300 hover:opacity-100 w-12 h-12"
                }
              >
            <img
                  src={codeuplogo}
                  alt="Codeup"
                  className="w-[28px] h-[28px] object-contain rounded-full"
                />
             
              </NavLink>
      
              {/* codeup.solutions button */}
              {/* <a
                href="https://www.codeup.solutions"
                target="_blank"
                rel="noopener noreferrer"
                className={`backdrop-blur-lg bg-gradient-to-l from-black to-slate-600 rounded-full flex justify-start items-center transition-all  w-12 h-12 p-2  duration-300  border-gray-100 hover:border-gray-200 drop-shadow-sm ${
                  isDarkMode
                    ? "text-black hover:shadow-white shadow-md"
                    : "text-black hover:shadow-black shadow-lg"
                }`}
              >
                <img
                  src={codeuplogo}
                  alt="Codeup"
                  className="w-[28px] h-[28px] object-contain rounded-full"
                />
              </a> */}

              {/* Dark Light Mode */}
              {/* Theme Toggle Button */}
              <button
                onClick={toggleThemeHandler}
                className="text-white bg-gray-700 rounded-full hover:bg-black hidden lg:block w-10 h-10"
              >
                {isDarkMode ? "🌞" : "🌙"}
              </button>
              {/* Whatsapp me button */}
              <div className=" hidden  md:block w-10 h-10 rounded-full bg-gray-800 ">
                <WhatsAppMeButton />
              </div>
            </div>

            {/* hire me button   */}
            <div className="hidden md:block justify-center">
              <a href={configData.hireMeLink}>
                <button
                  type="button"
                  className="gap-x-1 before:ease relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center mx-7"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                    />
                  </svg>
                  <span className="truncate">Hire Me</span>
                </button>
              </a>
            </div>
          </navbar>
          {/* Mobile and tablet menu  */}
          {menuVisible && (
            <>
              <div
                className={`w-[100%] h-screen z-[10000] absolute top-[68px] left-0 lg:hidden 
                  items-center gap-[3px] sm:gap-3 py-1 mx-auto transition-all duration-500 ease-in-out transform 
                  backdrop-filter backdrop-blur-lg p-1 rounded-2xl border border-transparent
                  ${
                    menuVisible ? "slide-from-left" : "slide-from-left"
                  } transition-all duration-500 ease-in-out transform `}
              >
                <div
                  className=" w-full h-[100%] overflow-y-auto custom-scrollbar bg-white
                   bg-opacity-40 flex flex-col justify-start   gap-[3px] "
                >
                  {/* Featured */}
                  <div
                    onClick={toggleMenu}
                    className="flex justify-start items-center gap-3 font-semibold"
                  >
                    <a
                      href="https://admin-dashboard-portfolio-aun.vercel.app/"
                      target="_blank"
                      className="p-2 backdrop-blur-lg bg-gradient-to-r from-black to-slate-600 text-white hover:bg-gray-300 rounded-full transition-all duration-300 hover:opacity-100 w-12 h-12"
                    >
                      <span className="text-2xl text-yellow-500">🏆</span>
                    </a>
                    <a
                      href="https://admin-dashboard-portfolio-aun.vercel.app/"
                      target="_blank"
                      className="text-white"
                    >
                      <p className="text-gray-900"> Featured Project</p>
                    </a>
                  </div>

                  {/* Home */}
                  <div
                    onClick={toggleMenu}
                    className="flex justify-start items-center gap-3 font-semibold"
                  >
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "backdrop-blur-lg bg-gradient-to-l from-black to-slate-600 rounded-full p-2 transition-all duration-300 w-12 h-12"
                          : "opacity-50 p-2 bg-gray-600 text-white hover:bg-black rounded-full transition-all duration-300 hover:opacity-100 w-12 h-12"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-7 h-7 text-white rounded-full mx-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                    </NavLink>
                    <NavLink
                      to="/"
                      className="flex justify-center items-center"
                    >
                      <p> Home</p>
                    </NavLink>
                  </div>

                  {/* About */}
                  <div
                    onClick={toggleMenu}
                    className="flex justify-start items-center gap-3 font-semibold"
                  >
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive
                          ? "backdrop-blur-lg bg-gradient-to-l from-black to-slate-600 rounded-full p-2 transition-all duration-300 w-12 h-12"
                          : "opacity-50 p-2 bg-gray-600 text-white hover:bg-black rounded-full transition-all duration-300 hover:opacity-100 w-12 h-12"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-7 h-7 text-white rounded-full mx-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </NavLink>
                    <NavLink
                      to="/about"
                      className="flex justify-center items-center"
                    >
                      <p> About</p>
                    </NavLink>
                  </div>

                  {/* Certificates */}
                  <div
                    onClick={toggleMenu}
                    className="flex justify-start items-center gap-3 font-semibold"
                  >
                    <NavLink
                      to="/certificates"
                      className={({ isActive }) =>
                        isActive
                          ? "backdrop-blur-lg bg-gradient-to-l from-black to-slate-600 rounded-full p-2 transition-all duration-300 w-12 h-12"
                          : "opacity-50 p-2 bg-gray-600 text-white hover:bg-black rounded-full transition-all duration-300 hover:opacity-100 w-12 h-12"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-7 h-7 text-white rounded-full mx-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        />
                      </svg>
                    </NavLink>
                    <NavLink
                      to="/certificates"
                      className="flex justify-center items-center"
                    >
                      <p> Certificates</p>
                    </NavLink>
                  </div>
                  {/* codeup.solutions button mobile menu */}
{/*            
                  <div
                    onClick={toggleMenu}
                    className="flex justify-start items-center gap-3 font-semibold"
                  >
                    <a
                      href="https://www.codeup.solutions"
                      target="_blank"
                      className="p-2 backdrop-blur-lg bg-gradient-to-r from-black to-slate-600 text-white hover:bg-gray-300 rounded-full transition-all duration-300 hover:opacity-100 w-12 h-12 flex justify-center items-center"
                    >
                      <img
                      src={codeuplogo}
                      alt="Codeup"
                      className="w-[24px] h-[24px]  rounded-full"
                    />
                    </a>
                    <a
                      href="https://www.codeup.solutions"
                      target="_blank"
                      className="text-white"
                    >
                      <p className="text-gray-900">    CodeUp.Solutions</p>
                    </a>
                  </div> */}

                    {/* Codeup Solutions */}
                    <div   onClick={toggleMenu}  className="flex justify-start items-center gap-3 font-semibold">
                    <NavLink
                to="/codeup"
                className={({ isActive }) =>
                  isActive
                    ? "backdrop-blur-lg bg-gradient-to-l from-black to-slate-600 rounded-full p-2 transition-all duration-300 w-12 h-12"
                    : "opacity-50 p-2 bg-gray-600 text-white hover:bg-black rounded-full transition-all duration-300 hover:opacity-100 w-12 h-12"
                }
              >
            <img
                  src={codeuplogo}
                  alt="Codeup"
                  className="w-[28px] h-[28px] object-contain rounded-full"
                />
        
              </NavLink>
              <NavLink
                      to="/codeup"
                      className="flex justify-center items-center"
                    >
                      <p> CodeUp Projects</p>
                    </NavLink>
                    </div>
        

                  {/* Dark/Light Mode Toggle */}
                  <div className="flex justify-start items-center gap-3 font-semibold">
                    <button
                      onClick={toggleThemeHandler}
                      className="text-white bg-gray-700 rounded-full hover:bg-black block w-12 h-12"
                    >
                      {isDarkMode ? "🌞" : "🌙"}
                    </button>
                    <p onClick={toggleThemeHandler}> Toggle Theme</p>
                  </div>

                  <div className="mt-10">
                    <PortfolioModal />
                  </div>
                  <div className="w-[full] p-2 -ml-3 sm:mx-auto sm:w-[360px] mb-10 ">
                    <WhatIOfferMobile />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {/* bottom bar */}
        <BottomNav />
      </header>
    </>
  );
}
