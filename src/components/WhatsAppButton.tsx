
import React from 'react';
import { MessageCircle } from 'lucide-react';

type WhatsAppButtonProps = {
  text: string;
  message?: string;
  phone?: string;
  className?: string;
};

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  text,
  message = "Olá, estou interessado nos suplementos!",
  phone = "5511999999999", // Example number, replace with real one
  className = ""
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-green-600 hover:bg-green-700 text-white font-norwester py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 ${className}`}
    >
      <MessageCircle className="w-6 h-6" />
      {text}
    </button>
  );
};

export default WhatsAppButton;
