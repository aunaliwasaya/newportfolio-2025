import React from "react";
import { useSelector } from "react-redux";

const GoogleMapComponent = () => {
   const isDarkMode = useSelector((state) => state.theme.isDarkMode); 
  return (

    <div className={`${
      isDarkMode ? "bg-gradient-to-r from-black to-gray-900 text-white shadow-md shadow-white" : "bg-gradient-to-b from-gray-100 to-gray-300 shadow-md"
    }w-full mt-[72px] mb-8  p-2 overflow-hidden rounded-lg`}>
      

      <h3
        className={`text-center text-xl font-semibold mb-4 ${
          isDarkMode
            ? "text-white"
            : "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500"
        }`}
      >
        Visit me at Soldier Bazar, Karachi, Pakistan
      </h3>
      {/* Embed Google Maps using iframe */}
      <div className="w-full rounded-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7239.241847207855!2d67.0334565!3d24.8767934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e4337bbcab7%3A0x73be33cff100de60!2sSoldier%20Bazaar%20Karachi%2C%20Karachi%20City%2C%20Sind!5e0!3m2!1ses!2s!4v1733584326446!5m2!1ses!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl w-[99%] mx-auto"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
