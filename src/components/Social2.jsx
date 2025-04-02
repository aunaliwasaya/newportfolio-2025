import { FaXTwitter, FaInstagram, FaDribbble, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import configData from "../data/config.json";
import { useSelector } from "react-redux";
import codeuplogo from "../assets/codeup-favicon.png";

export default function Social() {
  const socialLinks = configData.social;
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="px-2">
      <div
        className={`flex items-center justify-between px-2 py-2 backdrop-filter backdrop-blur-lg rounded-lg bg-white bg-opacity-40 ${
          isDarkMode ? 'text-black' : ''
        }`}
      >
        <div className="font-medium text-lg flex items-center gap-x-2">
          <div className="bg-gray-400 rounded-full"></div>
        </div>
        <div className="flex gap-x-2 items-center">
          {socialLinks.map((socialLink, index) => {
            const iconMap = {
              FaXTwitter,
              FaInstagram,
              FaDribbble,
              FaGithub,
              FaLinkedinIn,
              FaWhatsapp,
            };
            const IconComponent = iconMap[socialLink.icon];

            return (
              <a
                key={index}
                href={socialLink.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white p-2 rounded-full duration-300 border-2 border-gray-100 hover:border-gray-200 drop-shadow-sm ${
                  isDarkMode ? "text-black hover:shadow-white shadow-md" : "text-black hover:shadow-black shadow-lg"
                }`}
              >
                <IconComponent size={20} />
              </a>
            );
          })}
          {/* Codeup Logo Link */}
          <a
            href="https://www.codeup.solutions"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white p-2 rounded-full duration-300 border-2 border-gray-100 hover:border-gray-200 drop-shadow-sm ${
              isDarkMode ? "text-black hover:shadow-white shadow-md" : "text-black hover:shadow-black shadow-lg"
            }`}
          >
            <img src={codeuplogo} alt="Codeup" className="w-[22px] h-[22px] object-contain rounded-full" />
          </a>
        </div>
      </div>
    </div>
  );
}
