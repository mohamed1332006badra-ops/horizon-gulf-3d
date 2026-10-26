import { useState, useEffect, type MouseEvent } from 'react';
import { Menu, X, ArrowLeft, MessageSquareText } from 'lucide-react';
import { SITE_CONFIG, WHATSAPP_CONFIG } from '../../config/siteContent';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'showcase', 'sectors', 'network', 'approach', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070D]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-gradient-to-b from-[#05070D]/90 via-[#05070D]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Corporate Mark (Right in RTL) */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3.5 group cursor-pointer focus:outline-none"
            aria-label="HORIZON GULF - الصفحة الرئيسية"
          >
            {/* Geometric Luxury Monogram Emblem */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0B1528] to-[#070B14] border border-[#D4AF37]/50 group-hover:border-[#F3C969] transition-all duration-300 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]">
              <span className="text-[#F3C969] font-black text-lg sm:text-xl font-en tracking-wider">HG</span>
            </div>

            <div className="flex flex-col text-right">
              <span className="text-base sm:text-lg font-black text-white font-en tracking-wider leading-none group-hover:text-[#F3C969] transition-colors">
                HORIZON GULF
              </span>
              <span className="text-[11px] sm:text-xs text-[#CBD5E1] font-medium mt-1 leading-none">
                أفق الخليج للاستثمار والتجارة الدولية
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 px-3 py-1.5 rounded-full bg-[#070B14]/70 border border-white/10 backdrop-blur-md shadow-inner">
            {SITE_CONFIG.navigation.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3C969] text-[#070B14] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                      : 'text-[#CBD5E1] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Direct Executive WhatsApp CTA Button (Left in RTL) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-xs xl:text-sm font-bold bg-[#0B1528] hover:bg-[#121E36] text-[#25D366] hover:text-emerald-300 border border-[#25D366]/40 hover:border-[#25D366] transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.15)] hover:shadow-[0_0_25px_rgba(37,211,102,0.35)] cursor-pointer group"
              aria-label="تواصل معنا مباشرة عبر واتساب"
            >
              <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.17C10.57 20.17 9.12 19.77 7.86 19.02L7.56 18.84L4.44 19.66L5.27 16.62L5.07 16.3C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17Z" />
              </svg>
              <span>واتساب مباشر</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2.5 rounded-full text-xs xl:text-sm font-bold bg-gradient-to-r from-[#D4AF37] to-[#F3C969] text-[#070B14] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>طلب شراكة</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={WHATSAPP_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#0B1528] text-[#25D366] border border-[#25D366]/30 flex items-center justify-center"
              aria-label="واتساب"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.17C10.57 20.17 9.12 19.77 7.86 19.02L7.56 18.84L4.44 19.66L5.27 16.62L5.07 16.3C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17Z" />
              </svg>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#070B14] border border-white/10 text-white hover:text-[#F3C969] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070B14]/98 border-b border-white/10 backdrop-blur-2xl px-5 pt-4 pb-6 transition-all duration-300 text-right animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-2 mb-5">
            {SITE_CONFIG.navigation.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`p-3 rounded-xl text-sm font-bold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#D4AF37]/20 text-[#F3C969] border border-[#D4AF37]/40'
                      : 'text-[#CBD5E1] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowLeft className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={WHATSAPP_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl text-sm font-bold bg-[#0B1528] text-[#25D366] border border-[#25D366]/40 flex items-center justify-center gap-2 shadow-md"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.17C10.57 20.17 9.12 19.77 7.86 19.02L7.56 18.84L4.44 19.66L5.27 16.62L5.07 16.3C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17Z" />
              </svg>
              <span>محادثة واتساب فورية (<bdi dir="ltr">{WHATSAPP_CONFIG.displayNumber}</bdi>)</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full py-3 px-4 rounded-xl text-sm font-bold bg-gradient-to-r from-[#D4AF37] to-[#F3C969] text-[#070B14] flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>بدء مناقشة شراكة استثمارية</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
