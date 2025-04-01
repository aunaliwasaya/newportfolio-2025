import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppMeButton = () => {
  const whatsappNumber = '+923333116295';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-300 hover:text-green-400" // Lighter green color
    >
      <FaWhatsapp size={40} />
    </a>
  );
};

export default WhatsAppMeButton;
