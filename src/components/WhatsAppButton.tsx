import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/27734798500?text=Hi! I would like to learn more about your organic sea moss products.',
      '_blank'
    );
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-40 animate-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </button>
  );
}
