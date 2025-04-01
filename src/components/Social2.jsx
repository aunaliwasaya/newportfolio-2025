import { FaXTwitter, FaInstagram, FaDribbble, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import configData from "../data/config.json";
import { useSelector, useDispatch } from "react-redux";

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
        <div className="flex gap-x-1">
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
              className={`bg-white p-2 rounded-full duration-300 border-2 border-gray-100 hover:border-gray-200 drop-shadow-sm ${
                isDarkMode ? "text-black  hover:shadow-white shadow-md " : "text-black  hover:shadow-black shadow-lg"
              }`}
            >
              <IconComponent size={20} />
            </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
