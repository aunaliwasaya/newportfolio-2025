import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import aun from "../assets/aun-img.png";

const accordionData = [
    {
        title: "What services do I offer as a freelancer?",
        content:
          "I specialize in MERN Stack development, React-based projects, WordPress, Shopify Liquid themes, Squarespace, and graphics design services tailored to your business needs.",
      },
      {
        title: "Do I provide custom React development?",
        content:
          "Yes, I offer custom React solutions, including front-end designs, state management, API integration, and reusable component development for your applications.",
      },
      {
        title: "Can I customize WordPress and Shopify themes?",
        content:
          "Absolutely! I can customize WordPress themes, develop custom Shopify Liquid themes, and ensure they align with your branding and business goals.",
      },
      {
        title: "Do I design graphics for websites or marketing materials?",
        content:
          "Yes, I provide graphics design services, including banners, logos, social media designs, and website visuals using Canva and other tools.",
      },
      {
        title: "How can you get started with a project?",
        content:
          "You can contact me via WhatsApp or email to discuss your project requirements, timelines, and budget. Let’s build something amazing together!",
      },
];

export default function Accordions() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <>
      <h2
        className={`drop-shadow-md card rounded-lg mt-5 mb-8 text-lg text-center font-bold m-3 w-[300px] break-words md:w-[350px] py-3 mx-auto truncate ${
          isDarkMode
            ? "bg-gradient-to-l from-slate-600 hover:to-from-black text-white shadow-white shadow-sm"
            : "bg-black text-white shadow-lg"
        } first:uppercase `}
      >
        Frequently Asked Questions
      </h2>
      <div
        className={`flex flex-col items-center px-4 py-8  rounded-xl mt-10 ${
          isDarkMode ? "bg-gradient-to-r from-black to-gray-950" : "bg-slate-50"
        }`}
      >
        <div className="text-center mb-8">
          <div
            className={`text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">
              What is asked Frequently ?
            </h3>
          </div>

          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            As a MERN stack developer, I specialize in building scalable
            applications using React, WordPress development for websites, and
            Canva designs for creative branding. Here are answers to the
            questions I’m frequently asked.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="w-full flex justify-center items-center flex-wrap gap-5">
          {/* Image Section */}
          <div className="w-full  md:w-[40%]">
            <img
              src={aun}
              alt="Profile"
              className="w-full h-full rounded-2xl object-cover "
            />
          </div>

          {/* faqs */}
          <div className="w-full  md:w-[48%] flex flex-col items-center gap-6 ">
            {accordionData.map((item, index) => (
              <div key={index} className="w-full">
             <div
  className={`flex justify-between items-center cursor-pointer h-16 px-6 rounded-lg  hover:bg-blue-950
    ${isDarkMode 
      ? "bg-gradient-to-l from-black to-slate-600  text-white  hover:bg-gradient-to-l hover:from-slate-600 hover:to-from-black "
      : "bg-black text-white "}` 
  }
  onClick={() => toggleAccordion(index)}
>
  <p className="text-sm lg:text-lg font-semibold">{item.title}</p>
  <div
    className={`transition-transform duration-300 ${
      openAccordion === index ? "rotate-180" : ""
    }`}
  >
    <svg
      width="15"
      height="17"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 15.207L11.1621 2.54004H3.88184V0H15V12.6006H12.7588V4.34961L1.58203 17L0 15.207Z"
        fill="#7CD5F0"
      />
    </svg>
  </div>
</div>

                {openAccordion === index && (
                  <div
                    className={`p-4 mt-2 rounded-lg ${
                      isDarkMode
                        ? "bg-white text-black shadow-md shadow-white  border-gray-400"
                        : "bg-blue-50 text-gray-700"
                    }`}
                  >
                    <p className="text-sm lg:text-lg mb-2">{item.content}</p>
                    <a
                      href="https://wa.me/923352251671"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        text-xs lg:text-lg underline 
                        ${isDarkMode ? 'decoration-blue-500' : 'decoration-orange-400'} 
                        font-semibold hover:decoration-black text-transparent bg-clip-text 
                        ${isDarkMode 
                          ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:text-black' 
                          : 'bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 hover:text-black'
                        }
                      `}
                      
                      

                    >
                    Learn More
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
