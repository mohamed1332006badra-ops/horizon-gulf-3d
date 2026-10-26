import { useState } from 'react';
import { WHATSAPP_CONFIG } from '../../config/siteContent';

export const FloatingWhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-40 flex items-center gap-3 pointer-events-auto">
      {/* Expanding Tooltip */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#070B14]/95 border border-[#D4AF37]/35 shadow-2xl backdrop-blur-md text-right transition-all duration-300 transform ${
          isHovered
            ? 'opacity-100 translate-x-0 pointer-events-auto'
            : 'opacity-0 -translate-x-2 pointer-events-none'
        }`}
        role="tooltip"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white">تواصل معنا عبر واتساب</span>
          <span className="text-[10px] text-[#A8B0BE] font-en"><bdi dir="ltr">{WHATSAPP_CONFIG.displayNumber}</bdi></span>
        </div>
      </div>

      {/* Main Floating Button */}
      <a
        href={WHATSAPP_CONFIG.getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-[#070B14] via-[#0B1528] to-[#14233D] border-2 border-[#D4AF37]/60 hover:border-[#F3C969] shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.9),0_0_30px_rgba(37,211,102,0.45)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/40"
        aria-label="تواصل معنا عبر واتساب - Contact HORIZON GULF on WhatsApp"
        title="تواصل معنا عبر واتساب"
      >
        {/* Subtle Ambient Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping opacity-75 pointer-events-none" style={{ animationDuration: '3s' }} />

        {/* WhatsApp Vector Icon */}
        <svg
          className="w-7 h-7 text-[#25D366] transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.17C10.57 20.17 9.12 19.77 7.86 19.02L7.56 18.84L4.44 19.66L5.27 16.62L5.07 16.3C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17ZM16.57 14.38C16.32 14.25 15.1 13.65 14.88 13.57C14.65 13.49 14.48 13.45 14.32 13.7C14.15 13.95 13.68 14.5 13.53 14.67C13.39 14.83 13.24 14.86 13 14.73C12.75 14.61 11.97 14.35 11.04 13.52C10.32 12.87 9.83 12.07 9.69 11.82C9.55 11.58 9.68 11.44 9.8 11.32C9.91 11.21 10.05 11.03 10.18 10.89C10.3 10.74 10.34 10.63 10.42 10.47C10.51 10.3 10.47 10.16 10.41 10.03C10.34 9.91 9.85 8.7 9.65 8.2C9.45 7.72 9.25 7.78 9.1 7.77C8.96 7.77 8.79 7.76 8.63 7.76C8.46 7.76 8.19 7.82 7.96 8.07C7.73 8.32 7.07 8.94 7.07 10.2C7.07 11.46 8 12.67 8.12 12.84C8.25 13.01 9.93 15.6 12.49 16.71C13.1 16.97 13.57 17.13 13.94 17.25C14.55 17.44 15.11 17.41 15.55 17.35C16.04 17.28 17.06 16.73 17.27 16.15C17.48 15.56 17.48 15.06 17.41 14.96C17.35 14.86 17.2 14.8 16.95 14.67L16.57 14.38Z" />
        </svg>

        {/* Online Status Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#070B14]" />
      </a>
    </div>
  );
};
