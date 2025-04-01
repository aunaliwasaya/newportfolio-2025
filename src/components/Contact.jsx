import React from 'react';
import { CONTACTS } from '../data/constants';
import { useSelector } from "react-redux";

const Contact = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="flex flex-col space-y-2 pt-1">
            {/* Upwork linked in x*/}
            <div className='flex justify-start items-center gap-4 flex-wrap'>
      <a 
  href="https://www.upwork.com/freelancers/~01c9f14b76e1accb17" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-green-700 font-bold cursor-pointer hover:text-green-500"
>
  Upwork
</a>

            {/* Upwork linked in x*/}

      <a 
  href="https://www.fiverr.com/aunali1991/buying?source=avatar_menu_profile" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-green-950 font-bold cursor-pointer hover:text-green-500"
>
  Fiverr
</a>

      <a 
  href="https://www.linkedin.com/in/aun-ali-wasaya-b665b3142/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-blue-700 font-bold cursor-pointer hover:text-blue-500"
>
  linked In
</a>
<a 
  href="https://wa.me/+923352251671" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-green-500 hover:text-gray-600 font-semibold cursor-pointer"
>
  whatsApp
</a>
<a 
  href="https://www.instagram.com/aunaliwasaya/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-orange-400 font-bold cursor-pointer hover:text-pink-500"
>
  Instagram
</a>
<a 
  href="https://twitter.com/AunaliWasaya" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-black hover:text-gray-600 font-bold cursor-pointer"
>
  X
</a>


<div
  className={`mt-3 w-[98%] h-[1px] mx-auto ${
    isDarkMode ? "bg-gradient-to-l from-slate-400 to-black" : "bg-black"
  }`}
></div>

      </div>
      {/* Email Address Section */}
      <div className="flex flex-col">
        <span
          className={`text-xs font-bold ${
            isDarkMode ? "text-black" : "text-blue-950"
          }`}
        >
          Email Address
        </span>
        <span
          className={`text-xs ${
            isDarkMode ? "text-gray-950" : "text-gray-600"
          }`}
        >
          <a href={`mailto:${CONTACTS.EMAIL}`} className="hover:underline">
            {CONTACTS.EMAIL}
          </a>
        </span>
      </div>

      {/* Phone Section */}
      <div className="flex flex-col">
        <span
          className={`text-xs font-bold ${
            isDarkMode ? "text-black" : "text-blue-950"
          }`}
        >
          Phone
        </span>
        <span
          className={`text-xs ${
            isDarkMode ? "text-gray-950" : "text-gray-600"
          }`}
        >
          <a href={`tel:${CONTACTS.PHONE}`} className="hover:underline">
            {CONTACTS.PHONE}
          </a>
        </span>
      </div>

    </div>
  );
};

export default Contact;
