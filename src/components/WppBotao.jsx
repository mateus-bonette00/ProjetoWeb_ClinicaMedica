import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WppBotao = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5535998183459"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
    <span className="whatsapp-icon">
        <FaWhatsapp />
    </span>
    </a>
  );
};

export default WppBotao;
