import React from 'react';

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
  large?: boolean;
  phoneNumber?: string;
}

export default function WhatsAppButton({ text = "Fale conosco", className = "", large = false, phoneNumber = "5511999999999" }: WhatsAppButtonProps) {
  // Construir o link do WhatsApp com o número fornecido (sem formatação)
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  
  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 ${large ? 'px-6 py-3 text-lg' : 'px-4 py-2'} bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${large ? 'w-6 h-6' : 'w-5 h-5'}`}>
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M12 3.8C16.53 3.8 20.2 7.47 20.2 12C20.2 16.53 16.53 20.2 12 20.2C10.57 20.2 9.2 19.83 8 19.16L4.8 20.2L5.83 17.07C5.16 15.85 4.8 14.5 4.8 13C4.8 8.47 8.47 4.8 12 4.8M8.27 7.13C8.13 7.13 7.87 7.18 7.65 7.4C7.44 7.62 6.73 8.3 6.73 9.65C6.73 11 7.73 12.3 7.87 12.5C8 12.7 9.77 15.47 12.47 16.53C14.7 17.4 15.17 17.23 15.67 17.2C16.17 17.17 17.3 16.57 17.5 15.97C17.7 15.37 17.7 14.87 17.63 14.77C17.57 14.67 17.37 14.6 17.07 14.47C16.77 14.33 15.43 13.67 15.17 13.57C14.9 13.47 14.7 13.42 14.5 13.72C14.3 14.02 13.77 14.63 13.6 14.83C13.43 15.03 13.27 15.07 12.97 14.93C12.67 14.8 11.77 14.5 10.7 13.57C9.87 12.83 9.3 11.93 9.13 11.63C8.97 11.33 9.11 11.17 9.25 11.03C9.37 10.9 9.53 10.7 9.67 10.53C9.8 10.37 9.87 10.23 9.97 10.03C10.07 9.83 10.03 9.67 9.97 9.53C9.9 9.4 9.33 8.03 9.07 7.43C8.83 6.83 8.6 6.9 8.43 6.9C8.27 6.9 8.1 6.87 7.9 6.87L8.27 7.13Z" />
      </svg>
      {text}
    </a>
  );
}
