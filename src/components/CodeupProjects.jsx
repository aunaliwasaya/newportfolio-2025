

import React, { useState, useRef } from "react";
import { FaMobileAlt, FaMobile } from "react-icons/fa";
import { useSelector } from "react-redux";

// Images
import project1 from "../../src/assets/cell.webp";
import project2 from "../../src/assets/pakdream.webp";
import project3 from "../../src/assets/bux.webp";
import project4 from "../../src/assets/ikram.webp";
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
import tabib from "../../src/assets/tabib.webp";
import kamran from "../../src/assets/kamran.webp";
import brandwithfriends from "../../src/assets/brandwithfr.webp";

const CodeupProjects = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [isSingleColumn, setIsSingleColumn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(4);
  const viewMoreRef = useRef(null);
  const lastProjectRef = useRef(null); // ✅ Add this

  const projects = [
    { image: project1, link: "https://celleducation.online/" },
    { image: kamran, link: "https://kamranmalikevents.com/" },
    { image: tabib, link: "https://afringroupoftabib.com/" },
    { image: brandwithfriends, link: "https://brandswithfriends.store/" },
    { image: drfiora, link: "https://drfiora.com" },
    { image: geomobile, link: "https://geomobiles.pk" },
    { image: adfnco, link: "https://adfandco.org" },
    { image: alibhai, link: "https://alibhaitraders.com/" },
    { image: arshi, link: "https://arshijewel.com" },
    { image: hareem, link: "https://haremleathercollection.com" },
    { image: project2, link: "https://pakdreamhome.site" },
    { image: project3, link: "https://buxsongroup.com/" },
    { image: project4, link: "https://ikramelectronics.com/" },
    { image: reesha, link: "https://reeshapk.com" },
    { image: joharimmi, link: "https://aljuharimmigration.com" },
    { image: kingtoys, link: "https://kingtoys.store" },
    { image: nightblush, link: "https://nightblush.com" },
    { image: construct, link: "https://constructestimating.us" },
    { image: dollar, link: "https://dollarearningpro.com" },
    { image: oneclick, link: "https://oneclickprinters.com" },
    { image: hydra2, link: "https://techyardgrowthsolutions.com" },
    { image: hydraauto, link: "https://techyardautomation.com" },
    { image: nitrotech, link: "https://nitrotechmachines.com" },
    { image: digi247, link: "https://247marketingservices.com/" },
    
   
  ];

  const visibleProjects = projects.slice(0, startIndex);

  const handleViewMore = () => {
    setLoading(true);
    setTimeout(() => {
      setStartIndex((prev) => Math.min(prev + 4, projects.length));
      setLoading(false);
    }, 1000);
  };

  const handleViewLess = () => {
    const newIndex = Math.max(4, startIndex - 4);

    setStartIndex(newIndex);

    setTimeout(() => {
      lastProjectRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <div className="p-4">
      {/* View toggle icons for mobile */}
      <div className="flex justify-end gap-4 mb-4 md:hidden">
        <div
          onClick={() => setIsSingleColumn(false)}
          className={`cursor-pointer p-2 rounded-lg flex shadow-lg shadow-gray-700 ${
            !isSingleColumn
              ? "bg-gradient-to-l from-blue-600 to-gray-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          <FaMobileAlt size={24} />
          <FaMobileAlt size={24} />
        </div>
        <div
          onClick={() => setIsSingleColumn(true)}
          className={`cursor-pointer p-2 rounded-lg shadow-lg shadow-gray-700 ${
            isSingleColumn
              ? "bg-gradient-to-r from-blue-600 to-gray-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          <FaMobile size={24} />
        </div>
      </div>

      {/* Mobile View */}
      {isSingleColumn && (
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {visibleProjects.map((project, index) => {
            const isLastVisible = index === visibleProjects.length - 1;
            return (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                ref={isLastVisible ? lastProjectRef : null}
              >
                <img
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300 mb-5"
                />
              </a>
            );
          })}
        </div>
      )}

      {/* Desktop/Tablet View */}
      {!isSingleColumn && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {visibleProjects.map((project, index) => {
            const isLastVisible = index === visibleProjects.length - 1;
            return (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                ref={isLastVisible ? lastProjectRef : null}
              >
                <img
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </a>
            );
          })}
        </div>
      )}

      {/* Buttons */}
      {startIndex >= projects.length && (
        <div className="text-center mt-4 text-gray-500">End of Content</div>
      )}
      <div className="flex justify-center items-center mt-6 gap-3" ref={viewMoreRef}>
        {startIndex < projects.length && (
          <div>
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : (
              <button
                onClick={handleViewMore}
                className={`px-6 py-2 rounded-md text-white transition duration-300 
                  bg-gradient-to-l ${
                    isDarkMode
                      ? "from-blue-500 via-purple-500 to-indigo-500 hover:to-purple-300"
                      : "from-pink-500 to-red-500 hover:to-pink-300"
                  }`}
              >
                View More
              </button>
            )}
          </div>
        )}

        {startIndex > 6 && (
 <div>
 <button
   onClick={handleViewLess}
   className={`px-6 py-2 rounded-md text-white transition duration-300 
     bg-gradient-to-r 
     ${isDarkMode 
       ? "from-red-800 to-red-500 hover:from-red-600 hover:to-red-300"
       : "from-red-900 to-red-500 hover:from-red-700 hover:to-red-300"
     }`}
 >
   View Less
 </button>
</div>

        )}
      </div>


    </div>
  );
};

export default CodeupProjects;
