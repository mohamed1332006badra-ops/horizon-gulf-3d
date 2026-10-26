import { X, CheckCircle2, ShieldAlert, ArrowLeft, Globe, Ship, Handshake, TrendingUp } from 'lucide-react';
import { WHATSAPP_CONFIG, type SectorItem } from '../../config/siteContent';

interface SectorModalProps {
  sector: SectorItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const SectorModal = ({ sector, onClose, onContactClick }: SectorModalProps) => {
  if (!sector) return null;

  const renderIcon = () => {
    switch (sector.icon) {
      case 'globe':
        return <Globe className="w-8 h-8 text-[#D4AF37]" />;
      case 'ship':
        return <Ship className="w-8 h-8 text-[#F3C969]" />;
      case 'handshake':
        return <Handshake className="w-8 h-8 text-[#7890AA]" />;
      case 'trending-up':
        return <TrendingUp className="w-8 h-8 text-[#D4AF37]" />;
      default:
        return <Globe className="w-8 h-8 text-[#D4AF37]" />;
    }
  };

  const whatsappMessage = `مرحبًا، أود مناقشة تفاصيل وفرص قطاع: "${sector.title}" في موقع أفق الخليج HORIZON GULF.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        className="relative bg-[#070B14] border border-[#D4AF37]/35 rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-right shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#A8B0BE] hover:text-white transition-colors cursor-pointer"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-en block">
                {sector.englishTitle}
              </span>
              <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                {sector.title}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#0B1528] border border-[#D4AF37]/30 flex items-center justify-center">
              {renderIcon()}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-6">
          <div>
            <h4 className="text-xs font-semibold text-[#7890AA] uppercase tracking-wider mb-2">
              الوصف الاستراتيجي المقترح
            </h4>
            <p className="text-[#F5F4EF] leading-relaxed text-base">
              {sector.fullDesc}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#7890AA] uppercase tracking-wider mb-3">
              {sector.metricsLabel}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sector.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#0B1528]/80 border border-white/5 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#A8B0BE]">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Illustrative Concept Notice */}
          <div className="p-3.5 rounded-xl bg-[#0B1528] border border-amber-500/20 flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
            <p className="text-xs text-[#A8B0BE] leading-normal">
              توضيح: هذه المنظومة والقدرات المذكورة هي نموذج مقترح للعرض والنقاش الهندسي، وتخضع للتعديل والاعتماد النهائي من قِبل إدارة الشركة.
            </p>
          </div>
        </div>

        {/* Footer Actions with WhatsApp and Form options */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_CONFIG.getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-[#070B14] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.17C10.57 20.17 9.12 19.77 7.86 19.02L7.56 18.84L4.44 19.66L5.27 16.62L5.07 16.3C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17Z" />
              </svg>
              <span>مناقشة القطاع عبر واتساب</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#0B1528] hover:bg-[#121E36] text-white border border-white/10 hover:border-[#D4AF37]/40 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>طلب تفصيل عبر النموذج</span>
              <ArrowLeft className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full text-xs text-[#A8B0BE] hover:text-white transition-colors cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
