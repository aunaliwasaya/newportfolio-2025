import React, { useState } from "react";
import { FaMobileAlt, FaMobile } from "react-icons/fa";
import project1 from "../../src/assets/cell.webp";
import project2 from "../../src/assets/pakdream.webp";
import project3 from "../../src/assets/bux.webp";
import project4 from "../../src/assets/ikram.webp";
import { useSelector, useDispatch } from "react-redux";
import digi247 from "../../src/assets/247.webp";
import adfnco from "../../src/assets/adfnco.webp";
import alibhai from "../../src/assets/alibhai.webp";
import arshi from "../../src/assets/arshi.webp";
import construct from "../../src/assets/construct.webp";
import dollar from "../../src/assets/dollar.webp";
import drfiora from "../../src/assets/drfiora.webp";
import geomobile from "../../src/assets/geomobile.webp";
import hareem from "../../src/assets/hareem.webp";
import hydra2 from "../../src/assets/hydra2.webp";
import hydraauto from "../../src/assets/hydraauto.webp";
import joharimmi from "../../src/assets/joharimmi.webp";
import kingtoys from "../../src/assets/kingtoys.webp";
import nightblush from "../../src/assets/nightblush.webp";
import nitrotech from "../../src/assets/nitrotech.webp";
import oneclick from "../../src/assets/oneclick.webp";
import reesha from "../../src/assets/reesha.webp";

const CodeupProjects = () => {

const dispatch = useDispatch();
const isDarkMode = useSelector((state) => state.theme.isDarkMode); 
  const [isSingleColumn, setIsSingleColumn] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    { image: project1, link: "https://celleducation.online/" },
    { image: project2, link: "https://pakdreamhome.site" },
    { image: project3, link: "https://buxsongroup.com/" },
    { image: project4, link: "https://ikramelectronics.com/" },
    { image: digi247, link: "https://247marketingservices.com/" },
    { image: adfnco, link: "https://adfandco.org" },
    { image: alibhai, link: "https://alibhaitraders.com/" },
    { image: arshi, link: "https://arshijewel.com" },
    { image: construct, link: "https://constructestimating.us" },
    { image: dollar, link: "https://dollarearningpro.com" },
    { image: drfiora, link: "https://drfiora.com" },
    { image: geomobile, link: "https://Geomobiles.pk" },
    { image: hareem, link: "https://haremleathercollection.com" },
    { image: hydra2, link: "https://techyardgrowthsolutions.com" },
    { image: hydraauto, link: "https://techyardautomation.com" },
    { image: joharimmi, link: "https://Aljuharimmigration.com" },
    { image: kingtoys, link: "https://kingtoys.store" },
    { image: nightblush, link: "https://nightblush.com" },
    { image: nitrotech, link: "https://nitrotechmachines.com" },
    { image: oneclick, link: "https://Oneclickprinters.com" },
    { image: reesha, link: "https://reeshapk.com" },
  ];
  

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="p-4">
      {/* Icons - visible only on mobile */}
      <div className="flex justify-end gap-4 mb-4 md:hidden sticky top-[50%] z-50">
        <div
          onClick={() => setIsSingleColumn(false)}
          className={`cursor-pointer p-2 rounded-lg flex ${
            !isSingleColumn ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          <FaMobileAlt size={24} />
          <FaMobileAlt size={24} />
        </div>

        <div
          onClick={() => setIsSingleColumn(true)}
          className={`cursor-pointer p-2 rounded-lg ${
            isSingleColumn ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          <FaMobile size={24} />
        </div>
      </div>

      {/* Mobile: 1-column view */}
      {isSingleColumn && (
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {visibleProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300 mb-5"
              />
            </a>
          ))}
        </div>
      )}

      {/* Mobile (2-cols) and Desktop (3-cols) */}
      {!isSingleColumn && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {visibleProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      )}

      {/* View More Button */}
      {!showAll && projects.length > 6 && (
        <div className="flex justify-center mt-6">
     <button
  onClick={() => setShowAll(true)}
  className={`px-6 py-2 rounded-md text-white transition duration-300 
    bg-gradient-to-l 
    ${isDarkMode 
      ? 'from-blue-500 via-purple-500 to-indigo-500' 
      : 'from-pink-500 to-red-500'
    }`}
>
  View More
</button>

        </div>
      )}
    </div>
  );
};

export default CodeupProjects;
