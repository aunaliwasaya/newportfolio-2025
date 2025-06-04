


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
import quran from "../../src/assets/quran-edu.webp";
import trip from "../../src/assets/tripinsure.webp";
import codeupsol from "../../src/assets/codeupsol.webp";
import smayaz from "../../src/assets/smayaz.webp";
import samix from "../../src/assets/samix.webp";
import vilnicius from "../../src/assets/vilnicius.webp";
import arrian from "../../src/assets/arrian.webp";
import coredecore from "../../src/assets/coredecore.webp";
import moodking from "../../src/assets/moodking.webp";
import arkhotel from "../../src/assets/arkhotel.webp";
import gulraizart from "../../src/assets/gulraizart.webp";
import bedfud from "../../src/assets/bedfud.webp";
import shahjee from "../../src/assets/shajee.webp";
import isparkly from "../../src/assets/isparkly.webp";
import fgtraders from "../../src/assets/fgtraders.webp";

const CodeupProjects = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [isSingleColumn, setIsSingleColumn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(4);
  const viewMoreRef = useRef(null);
  const lastProjectRef = useRef(null);
  const projects = [

        {
      image: fgtraders,
      link: "https://Fgtraders.store/",
      title: "FG Traders ",
      description:
        "Kitchen Items"
    },
        {
      image: isparkly,
      link: "https://Isparkly.com/",
      title: "isparkly",
      description:
        "Every thing You need !"
    },
        {
      image: shahjee,
      link: "https://Shahjee1autos.com/",
      title: "Shahjee 1 Autos ",
      description:
        "Auto Parts website"
    },
        {
      image: bedfud,
      link: "https://becfudhighendstreetwear.com",
      title: "becfud High End Street Wear ",
      description:
        "High End Street Wear T shirts and much More for Boys"
    },
        {
      image: gulraizart,
      link: "https://gulraizartstudio.com",
      title: "Gulraiz Art Studio ",
      description:
        "Paintings , Art and Craft Website"
    },
        {
      image: arkhotel,
      link: "https://arkhotelsupply.com",
      title: "Ark Hotel Supply ",
      description:
        "Hotel Furniture Supply Vendor Website"
    },
        {
      image: moodking,
      link: "https://Moodking.pk/",
      title: "Moodking.pk ",
      description:
        "Perfume Brand Website"
    },
        {
      image: coredecore,
      link: "https://evonlogistics.com/",
      title: "Evon Logistics ",
      description:
        "Decoration Items website "
    },
    {
      image: arrian,
      link: "https://Arraintraders.com/",
      title: "Arrain Traders ",
      description:
        "Medical and surgical supplies Business portfolio website "
    },
    {
      image: samix,
      link: "https://samixmedia.com/",
      title: "Sami X Media ",
      description:
        "Website Development agency"
    },
    {
      image: vilnicius,
      link: "https://VilniusStarCompany.com/",
      title: "Vilnius Star Company",
      description:
        "Ware houses,  Malls and Cars business portfolio website"
    },

    {
      image: codeupsol,
      link: "https://codeup.solutions/",
      title: "Code Up Solutions ",
      description:
        "Codeup Solutions is my agency website, dedicated to helping you create stunning, high-performing websites tailored to your needs. Find me at Codeup Solutions and let’s build the best website you’ve ever had!"
    },
    {
      image: quran,
      link: "https://quraneducare.com/",
      title: "Quran Education",
      description:
        "“Quran Education is an online learning platform I created to help students of all ages learn the Quran with expert guidance. With qualified mentors, personalized lessons, and a focus on Tajweed and understanding, it’s the perfect way to study the Quran from home.”."
    },
    {
      image: trip,
      link: "https://tripsinsure.pk/",
      title: "Trips Insure",
      description:
        "“TripsInsure is a travel insurance platform created by AunAli to help you secure your journeys with confidence. Whether you're traveling for business or leisure, TripsInsure offers reliable coverage and peace of mind every step of the way.”"
    },
    {
      image: smayaz,
      link: "https://smayazahmad.site/",
      title: "SM AYAZ AHMAD",
      description:
        "SM Ayaz Ahamed offers guidance in spiritual healing and transformative processes, while also teaching the Quran with care and expertise. This platform was created by me to help others find spiritual growth and deeper Quranic understanding."
    },
    {
      image: project1,
      link: "https://celleducation.online/",
      title: "Cell Education",
      description:
        "A dynamic Learning Management System (LMS) and Student Portal built with WordPress and Elementor. Featuring modern animations, intuitive navigation, and a visually engaging design, it delivers a seamless educational experience through interactive courses and user-friendly dashboards."
    },
    {
      image: kamran,
      link: "https://kamranmalikevents.com/",
      title: "Kamran Malik Events",
      description:
        "An elegant and vibrant event management website created with WordPress and Elementor. Designed to showcase events, services, and booking options with a clean layout, interactive elements, and captivating visuals for an unforgettable visitor experience."
    },
    {
      image: tabib,
      link: "https://afringroupoftabib.com/",
      title: "Afrin Group of Tabib",
      description:
        "A healthcare platform developed with WordPress and Elementor, connecting users to traditional healers. Featuring intuitive appointment booking, rich content layouts, and an inviting design focused on accessibility and user trust."
    },
    {
      image: brandwithfriends,
      link: "https://brandswithfriends.store/",
      title: "Brands With Friends",
      description:
        "An attractive e-commerce store built using WordPress and Elementor. Designed with a modern shopping experience in mind, it highlights premium products with seamless navigation, stylish layouts, and smooth checkout flows."
    },
    {
      image: drfiora,
      link: "https://drfiora.com",
      title: "Dr. Fiora",
      description:
        "A sophisticated medical services website built on WordPress and Elementor. Featuring elegant design, smooth navigation, service booking, and patient-focused content tailored to deliver trust and professionalism."
    },
    {
      image: geomobile,
      link: "https://geomobiles.pk",
      title: "Geo Mobiles",
      description:
        "An online mobile store designed with WordPress and Elementor. With a bold, modern aesthetic and easy-to-browse product listings, it ensures a hassle-free shopping experience for mobile enthusiasts."
    },
    {
      image: adfnco,
      link: "https://adfandco.org",
      title: "ADF & Co.",
      description:
        "A professional corporate website crafted with WordPress and Elementor, designed to highlight business solutions through clean layouts, corporate branding, and strategic content presentation."
    },

    {
      image: alibhai,
      link: "https://alibhaitraders.com/",
      title: "Alibhai Traders",
      description:
        "A sleek trading business website designed on WordPress and Elementor, combining strong branding with functional layouts to highlight products and services in a user-friendly manner."
    },
    {
      image: arshi,
      link: "https://arshijewel.com",
      title: "Arshi Jewel",
      description:
        "A luxurious jewelry store website developed with WordPress and Elementor. Showcasing products with high-end visuals, elegant layouts, and smooth browsing experience to elevate brand prestige."
    },
    {
      image: hareem,
      link: "https://haremleathercollection.com",
      title: "Harem Leather Collection",
      description:
        "An exclusive leather goods website crafted on WordPress and Elementor. Featuring minimalist design, stylish product galleries, and a premium online shopping experience."
    },
    {
      image: kingtoys,
      link: "https://kingtoys.store",
      title: "King Toys",
      description:
        "A colorful and playful e-commerce site for toys, developed using WordPress and Elementor. Designed with lively animations, intuitive navigation, and a joyful shopping experience for all ages."
    },
    {
      image: nightblush,
      link: "https://nightblush.com",
      title: "Night Blush",
      description:
        "An elegant fashion and lifestyle store built with WordPress and Elementor. Featuring chic product displays, stylish layouts, and a seamless, mobile-optimized shopping journey."
    },
    {
      image: project3,
      link: "https://buxsongroup.com/",
      title: "Buxson Group",
      description:
        "A business portfolio website designed on WordPress and Elementor. Structured with a modern corporate aesthetic, service highlights, and a strong call-to-action approach for client engagement."
    },
    {
      image: project4,
      link: "https://ikramelectronics.com/",
      title: "Ikram Electronics",
      description:
        "An electronics store website developed with WordPress and Elementor. Combining organized product listings with dynamic features and easy navigation for a seamless shopping experience."
    },
    {
      image: reesha,
      link: "https://reeshapk.com",
      title: "Reesha PK",
      description:
        "A fashion retail website designed with WordPress and Elementor. Focused on stylish presentation, user-centric shopping flow, and a visually captivating design for an elevated online store experience."
    },
    {
      image: joharimmi,
      link: "https://aljuharimmigration.com",
      title: "Al Johar Immigration",
      description:
        "An immigration consultancy website built with WordPress and Elementor. Tailored with professional service pages, engaging layouts, and strong calls to action for better client conversions."
    },
    {
      image: project2,
      link: "https://pakdreamhome.site",
      title: "Pak Dream Home",
      description:
        "A real estate solutions website crafted with WordPress and Elementor. Designed with property listings, smooth navigation, and modern visuals to help users find their dream home effortlessly."
    },
    {
      image: construct,
      link: "https://constructestimating.us",
      title: "Construct Estimating",
      description:
        "A construction estimating services website built using WordPress and Elementor. Structured for clarity, professionalism, and lead generation with well-organized service pages."
    },
    {
      image: dollar,
      link: "https://dollarearningpro.com",
      title: "Dollar Earning Pro",
      description:
        "An online earning and affiliate marketing platform developed on WordPress and Elementor, featuring clean layouts, engaging content, and optimized funnels for maximum user retention."
    },
    {
      image: oneclick,
      link: "https://oneclickprinters.com",
      title: "One Click Printers",
      description:
        "A printing solutions website built with WordPress and Elementor. Offering intuitive service pages, instant quote options, and a modern design to attract business clients."
    },
    {
      image: digi247,
      link: "https://247marketingservices.com/",
      title: "24/7 Marketing Services",
      description:
        "A dynamic marketing agency website built with WordPress and Elementor, offering creative design, strategic service pages, and lead-generation-focused layouts to maximize conversions."
    },
    {
      image: hydra2,
      link: "https://techyardgrowthsolutions.com",
      title: "Techyard Growth Solutions",
      description:
        "A business growth consultancy website crafted on WordPress and Elementor. Featuring innovative layouts, strategic service sections, and high-conversion landing pages."
    },
    {
      image: hydraauto,
      link: "https://techyardautomation.com",
      title: "Techyard Automation",
      description:
        "An automation solutions company website built with WordPress and Elementor. Designed for professional service presentation, smooth interaction, and lead-driven results."
    },
    {
      image: nitrotech,
      link: "https://nitrotechmachines.com",
      title: "Nitrotech Machines",
      description:
        "An industrial machinery website designed with WordPress and Elementor. Highlighting services and machinery products through powerful visuals, detailed content, and easy inquiry options."
    },

  ];
  
  

  const visibleProjects = projects.slice(0, startIndex);

  const handleViewMore = () => {
    setLoading(true);
    setTimeout(() => {
      setStartIndex((prev) => Math.min(prev + 4, projects.length));
      setLoading(false);
    }, 1500);
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

  const topRef = useRef(null);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="p-4 relative">
      


<div  className="flex justify-end gap-4 mb-10 sm:mb-4 z-50">
        <div 
          onClick={() => {
            setIsSingleColumn(false);
            scrollToTop(); // scroll to top on two column view
          }}
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
          onClick={() => {
            setIsSingleColumn(true);
            scrollToTop(); // also scroll to top on one column view if you want
          }}
          className={`cursor-pointer p-2 rounded-lg shadow-lg shadow-gray-700 ${
            isSingleColumn
              ? "bg-gradient-to-r from-blue-600 to-gray-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          <FaMobile size={24} />
        </div>
      </div>


      {/* Projects */}
{/* Projects */}
{isSingleColumn ? (
  <div className="flex flex-col gap-8">
    {visibleProjects.map((project, index) => {
      const isLastVisible = index === visibleProjects.length - 1;
      return (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          ref={isLastVisible ? lastProjectRef : null}
          className="flex flex-col md:flex-row  gap-6 transition-transform duration-300"
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={project.image}
              alt={`Project ${index + 1}`}
              className="mx-auto  w-full h-[500px] md:h-[480px] object-contain "
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 border rounded-md border-black p-5 shadow-md shadow-gray-500">
              {project.description}
            </p>
            <div className="border-b-orange-700 bg-gray-500 h-[1px] mt-10"></div>

 
          </div>
        </a>
      );
    })}
  </div>
) : (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8">
    {visibleProjects.map((project, index) => {
      const isLastVisible = index === visibleProjects.length - 1;
      return (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          ref={isLastVisible ? lastProjectRef : null}
          className="block"
        >
          <img
            src={project.image}
            alt={`Project ${index + 1}`}
            className="mx-auto w-[85%] -mt-12 sm:-mt-0 sm:w-[92%] h-[300px] sm:h-[250px] md:h-[400px] object-contain hover:scale-105 transition-transform duration-300"
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
          <button
            onClick={handleViewMore}
            disabled={loading}
            className={`px-6 py-2 rounded-md text-white transition duration-300 flex items-center justify-center gap-2
              bg-gradient-to-l ${
                isDarkMode
                  ? "from-blue-500 via-purple-500 to-indigo-500"
                  : "from-pink-500 to-red-500"
              }
              ${loading ? "opacity-50 cursor-not-allowed" : "hover:to-pink-300"}
            `}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Loading...
              </>
            ) : (
              "View More"
            )}
          </button>
        )}

        {startIndex > 6 && (
          <button
            onClick={handleViewLess}
            className={`px-6 py-2 rounded-md text-white transition duration-300 
              bg-gradient-to-r 
              ${
                isDarkMode
                  ? "from-red-800 to-red-500 hover:from-red-600 hover:to-red-300"
                  : "from-red-900 to-red-500 hover:from-red-700 hover:to-red-300"
              }
            `}
          >
            View Less
          </button>
        )}
      </div>
    </div>
  );
};

export default CodeupProjects;
