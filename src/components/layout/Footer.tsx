import type { MouseEvent } from 'react';
import { ArrowUp, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { SITE_CONFIG, WHATSAPP_CONFIG } from '../../config/siteContent';

const currentYear = 2026;

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <footer className="bg-[#05070D] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Discreet Concept Demo Notice Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="p-4 rounded-xl bg-[#070B14] border border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8B0BE]">
          <div className="flex items-center gap-3 text-right">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <p className="leading-relaxed">
              <strong className="text-white">إشعار نموذج العرض المفاهيمي (Concept Demo):</strong> {SITE_CONFIG.disclaimer.short}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-[11px] font-mono text-[#7890AA]">
            <Terminal className="w-3.5 h-3.5 text-[#F3C969]" />
            <span>BADRA • SPEC v1.0</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Positioning (Col 5) */}
          <div className="lg:col-span-5 text-right space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B1528] border border-[#D4AF37]/30 flex items-center justify-center">
                <span className="text-[#F3C969] font-bold text-lg font-en">HG</span>
              </div>
              <div>
                <span className="text-xl font-extrabold text-white font-en tracking-wider block">
                  HORIZON GULF
                </span>
                <span className="text-xs text-[#7890AA] block">
                  أفق الخليج للاستثمار والتجارة الدولية
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A8B0BE] leading-relaxed max-w-sm">
              رؤية معمارية ورقمية متطورة تهدف إلى إبراز مكانة التجارة الدولية وحلول سلاسل الإمداد والاستثمار متعدد الوسائط في الخليج العربي والأسواق الإقليمية.
            </p>

            <div className="pt-2">
              <span className="text-xs text-[#7890AA] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>تصميم وتطوير: فريق BADRA للهندسة الرقمية</span>
              </span>
            </div>
          </div>

          {/* Quick Links (Col 3) */}
          <div className="lg:col-span-3 text-right space-y-3">
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider font-en">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-sm text-[#A8B0BE]">
              {SITE_CONFIG.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-white hover:text-[#F3C969] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/5">
                <a
                  href={WHATSAPP_CONFIG.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>محادثة واتساب المباشرة (<bdi dir="ltr">{WHATSAPP_CONFIG.displayNumber}</bdi>)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Proposed Sectors (Col 4) */}
          <div className="lg:col-span-4 text-right space-y-3">
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider font-en">
              CORE DOMAINS (PROPOSED)
            </h4>
            <ul className="space-y-2 text-xs text-[#A8B0BE]">
              {SITE_CONFIG.sectors.map((s) => (
                <li key={s.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50" />
                  <span>{s.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Back to Top & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7890AA]">
          <div className="text-center sm:text-right">
            <p>© {currentYear} HORIZON GULF — مفهوم رقمي أولي للعرض التجاري والهندسي.</p>
            <p className="text-[11px] text-[#A8B0BE]/60 mt-0.5">
              هذا النموذج مخصص للعرض على العميل المحتمل ولا يمثل موقعًا تشغيليًا بعد.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#0B1528] hover:bg-[#121E36] text-[#D4AF37] border border-white/10 hover:border-[#D4AF37]/40 transition-all flex items-center gap-2 cursor-pointer"
            aria-label="العودة إلى أعلى الصفحة"
          >
            <span>أعلى الصفحة</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
