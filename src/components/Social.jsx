import { FaXTwitter, FaInstagram, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import configData from "../data/config.json";
import { useSelector, useDispatch } from "react-redux";

export default function Social() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const socialLinks = configData.social;

  return (
    <>
      <div className="px-2">
        <div
          className={`px-7 py-3 rounded-lg ${
            isDarkMode ? "bg-gradient-to-r from-gray-900 to bg-black          text-white" : "bg-gray-100"
          }`}
        >
          <div className="font-medium text-lg flex flex-col sm:flex-row justify-center gap-x-5 items-center">
          <div>
          <p
  className={`text-transparent text-center bg-clip-text font-bold ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
  }`}
>
  Follow Me
</p>
          </div>
          
            <div className="flex gap-x-1 justify-center">
            {socialLinks.map((socialLink, index) => {
              const iconMap = {
                FaXTwitter,
                FaInstagram,
                FaDribbble,
                FaGithub,
                FaLinkedinIn,
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
      </div>
    </>
  );
}
