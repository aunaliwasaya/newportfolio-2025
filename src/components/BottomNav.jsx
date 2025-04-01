import React from "react";
import { Home, Info, Phone, Briefcase, Circle } from "lucide-react";

function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-red shadow-md bg-white border-gray-200 flex justify-around items-center p-3 md:hidden">
      {/* Home */}
      <div className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition">
        <Home size={24} />
        <span className="text-xs">Home</span>
      </div>

      {/* About */}
      <div className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition">
        <Info size={24} />
        <span className="text-xs">About</span>
      </div>

      {/* Logo in the center */}
      <div className="flex flex-col items-center text-blue-600">
        <Circle size={30} />
      </div>

      {/* Contact */}
      <div className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition">
        <Phone size={24} />
        <span className="text-xs">Contact</span>
      </div>

      {/* Services */}
      <div className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition">
        <Briefcase size={24} />
        <span className="text-xs">Services</span>
      </div>
    </div>
  );
}

export default BottomNav;
