
import React from 'react';

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
      className={`bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 ${className}`}
    >
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.03 18.88c-1.637 0-3.244-.419-4.669-1.212l-5.161 1.352 1.379-5.035a9.08 9.08 0 01-1.33-4.745c0-5.035 4.086-9.121 9.121-9.121S21.5 4.125 21.5 9.16s-4.086 9.121-9.121 9.121H12.3l-.27.6z" />
      </svg>
      {text}
    </button>
  );
};

export default WhatsAppButton;
