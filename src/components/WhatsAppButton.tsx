
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
      className={`bg-green-600 text-white font-norwester py-3 px-6 rounded-md 
        flex items-center justify-center gap-2
        transition-all duration-300 ${className}
        hover:bg-green-700 shadow-sm
        relative overflow-hidden
        after:content-[''] after:absolute after:inset-0 after:bg-white/10 
        after:opacity-0 after:transition-opacity after:duration-300
        hover:after:opacity-100`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{text}</span>
    </button>
  );
};

export default WhatsAppButton;
