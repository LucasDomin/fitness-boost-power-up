
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
        flex items-center justify-center gap-2 relative overflow-hidden
        transition-all duration-300 ${className}
        before:content-[''] before:absolute before:inset-0 before:bg-white/10 before:translate-y-full 
        before:hover:translate-y-0 before:transition-transform before:duration-300
        after:content-[''] after:absolute after:inset-0 after:bg-black/10 after:translate-y-[-100%] 
        after:hover:translate-y-0 after:transition-transform after:duration-300
        transform hover:translate-y-[-3px] hover:shadow-lg`}
    >
      <MessageCircle className="w-6 h-6 relative z-10" />
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default WhatsAppButton;
