import { useState, type FormEvent } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building2,
  User,
  HelpCircle,
  FileText,
  CheckCircle2,
  Info
} from 'lucide-react';
import { SITE_CONFIG, WHATSAPP_CONFIG } from '../../config/siteContent';

export const ContactSection = () => {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [sector, setSector] = useState(SITE_CONFIG.sectors[0].title);
  const [details, setDetails] = useState('');
  const [formSentNotice, setFormSentNotice] = useState(false);

  const generateWhatsAppMessage = () => {
    let msg = `مرحبًا، تواصلت معكم من موقع HORIZON GULF — أفق الخليج للاستثمار والتجارة الدولية.`;
    if (fullName.trim()) msg += `\n• الاسم: ${fullName.trim()}`;
    if (company.trim()) msg += `\n• الجهة/الشركة: ${company.trim()}`;
    if (sector.trim()) msg += `\n• مجال الاهتمام: ${sector.trim()}`;
    if (details.trim()) msg += `\n• تفاصيل الاستفسار: ${details.trim()}`;
    return msg;
  };

  const handleSendViaWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    const formattedMsg = generateWhatsAppMessage();
    const url = WHATSAPP_CONFIG.getWhatsAppUrl(formattedMsg);
    setFormSentNotice(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendViaEmail = () => {
    const subject = encodeURIComponent(`استفسار شراكة وتجارة دولية — HORIZON GULF: ${company || fullName || 'مستثمر'}`);
    const body = encodeURIComponent(generateWhatsAppMessage());
    window.location.href = `mailto:${SITE_CONFIG.contact.emailPlaceholder}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#05070D] border-t border-white/5 overflow-hidden">
      {/* Subtle Background Radiance */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#25D366]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-right mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1528] border border-[#D4AF37]/30 text-xs font-semibold text-[#F3C969] mb-4 shadow-md">
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span className="uppercase tracking-wider font-en">EXECUTIVE COMMUNICATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F4EF] tracking-tight">
            تواصل مع قيادة <span className="text-gold-gradient">أفق الخليج للاستثمار</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#CBD5E1] max-w-3xl leading-relaxed">
            نرحب بممثلي الشركات والمؤسسات الاستثمارية في دول الخليج والأسواق الدولية لبحث فرص الشراكة، وتوريد السلع الاستراتيجية، وتطوير سلاسل الإمداد المتكاملة.
          </p>
        </div>

        {/* 2-Column Executive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Direct Executive Channels & Official Coordinates (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 text-right">
            
            {/* VIP WhatsApp Primary Executive Card */}
            <div className="relative p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#070B14] via-[#0B1528] to-[#0D1E38] border-2 border-[#25D366]/40 hover:border-[#25D366] shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_30px_rgba(37,211,102,0.15)] transition-all group overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#25D366] to-transparent" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold font-en text-[#25D366] uppercase tracking-wider bg-[#25D366]/10 px-3 py-1 rounded-full border border-[#25D366]/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>DIRECT EXECUTIVE LINE</span>
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#070B14] border border-[#25D366]/40 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <svg className="w-7 h-7 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.17C10.57 20.17 9.12 19.77 7.86 19.02L7.56 18.84L4.44 19.66L5.27 16.62L5.07 16.3C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17ZM16.57 14.38C16.32 14.25 15.1 13.65 14.88 13.57C14.65 13.49 14.48 13.45 14.32 13.7C14.15 13.95 13.68 14.5 13.53 14.67C13.39 14.83 13.24 14.86 13 14.73C12.75 14.61 11.97 14.35 11.04 13.52C10.32 12.87 9.83 12.07 9.69 11.82C9.55 11.58 9.68 11.44 9.8 11.32C9.91 11.21 10.05 11.03 10.18 10.89C10.3 10.74 10.34 10.63 10.42 10.47C10.51 10.3 10.47 10.16 10.41 10.03C10.34 9.91 9.85 8.7 9.65 8.2C9.45 7.72 9.25 7.78 9.1 7.77C8.96 7.77 8.79 7.76 8.63 7.76C8.46 7.76 8.19 7.82 7.96 8.07C7.73 8.32 7.07 8.94 7.07 10.2C7.07 11.46 8 12.67 8.12 12.84C8.25 13.01 9.93 15.6 12.49 16.71C13.1 16.97 13.57 17.13 13.94 17.25C14.55 17.44 15.11 17.41 15.55 17.35C16.04 17.28 17.06 16.73 17.27 16.15C17.48 15.56 17.48 15.06 17.41 14.96C17.35 14.86 17.2 14.8 16.95 14.67L16.57 14.38Z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                محادثة واتساب الفورية
              </h3>
              <p className="text-xs text-[#CBD5E1] leading-relaxed mb-4">
                القناة الأسرع للتواصل مع الإدارة التنفيذية ومناقشة عروض التوريد والشراكات التجارية.
              </p>

              <div className="bg-[#05070D]/80 p-4 rounded-2xl border border-white/10 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#7890AA] block">الرقم المعتمد للتواصل</span>
                  <span className="text-lg font-bold font-mono text-[#25D366]" dir="ltr">{WHATSAPP_CONFIG.displayNumber}</span>
                </div>
                <div className="text-left">
                  <span className="text-[11px] text-[#A8B0BE] block">حالة الاتصال</span>
                  <span className="text-xs font-bold text-emerald-400">متاح الآن</span>
                </div>
              </div>

              <a
                href={WHATSAPP_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-[#070B14] hover:shadow-[0_0_35px_rgba(37,211,102,0.5)] transition-all flex items-center justify-center gap-3 shadow-xl cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.17C10.57 20.17 9.12 19.77 7.86 19.02L7.56 18.84L4.44 19.66L5.27 16.62L5.07 16.3C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17ZM16.57 14.38C16.32 14.25 15.1 13.65 14.88 13.57C14.65 13.49 14.48 13.45 14.32 13.7C14.15 13.95 13.68 14.5 13.53 14.67C13.39 14.83 13.24 14.86 13 14.73C12.75 14.61 11.97 14.35 11.04 13.52C10.32 12.87 9.83 12.07 9.69 11.82C9.55 11.58 9.68 11.44 9.8 11.32C9.91 11.21 10.05 11.03 10.18 10.89C10.3 10.74 10.34 10.63 10.42 10.47C10.51 10.3 10.47 10.16 10.41 10.03C10.34 9.91 9.85 8.7 9.65 8.2C9.45 7.72 9.25 7.78 9.1 7.77C8.96 7.77 8.79 7.76 8.63 7.76C8.46 7.76 8.19 7.82 7.96 8.07C7.73 8.32 7.07 8.94 7.07 10.2C7.07 11.46 8 12.67 8.12 12.84C8.25 13.01 9.93 15.6 12.49 16.71C13.1 16.97 13.57 17.13 13.94 17.25C14.55 17.44 15.11 17.41 15.55 17.35C16.04 17.28 17.06 16.73 17.27 16.15C17.48 15.56 17.48 15.06 17.41 14.96C17.35 14.86 17.2 14.8 16.95 14.67L16.57 14.38Z" />
                </svg>
                <span>بدء محادثة واتساب الآن</span>
              </a>
            </div>

            {/* Direct Phone & Voice Call */}
            <div className="card-luxury p-5 sm:p-6 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-[#7890AA] block mb-0.5">الاتصال الهاتفي المباشر</span>
                <a
                  href={`tel:${WHATSAPP_CONFIG.phoneNumber}`}
                  className="text-base sm:text-lg font-bold font-mono text-white hover:text-[#F3C969] transition-colors"
                  dir="ltr"
                >
                  {WHATSAPP_CONFIG.displayNumber}
                </a>
                <span className="text-[11px] text-[#CBD5E1] block mt-0.5">مكالمات دولية ومحلية</span>
              </div>
              <a
                href={`tel:${WHATSAPP_CONFIG.phoneNumber}`}
                className="w-11 h-11 rounded-xl bg-[#0B1528] border border-white/10 hover:border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center transition-all cursor-pointer shadow"
                aria-label="اتصال هاتفي مباشر"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            {/* Corporate Location (Proposed Representation) */}
            <div className="card-luxury p-5 sm:p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">المقر الإقليمي المقترح</h4>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed">
                    مركز الملك عبدالله المالي (KAFD)، الرياض، المملكة العربية السعودية.
                  </p>
                  <p className="text-[11px] text-[#7890AA] mt-1">
                    مركز العمليات البحرية واللوجستية المقترح: دبي، الإمارات العربية المتحدة.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#7890AA] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">أوقات العمل الرسمية</h4>
                  <p className="text-xs text-[#CBD5E1]">
                    الأحد — الخميس: 8:00 صباحًا إلى 5:00 مساءً (توقيت الخليج العربي)
                  </p>
                </div>
              </div>
            </div>

            {/* Architectural & Engineering Attribution */}
            <div className="p-4 rounded-2xl bg-[#070B14]/80 border border-[#D4AF37]/20 flex items-center gap-3">
              <Info className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                تصميم وهندسة رقمية مخصصة: <strong className="text-white">بدرواي BADRA</strong> — نموذج إبداعي للعرض الاستثماري على قيادات الأعمال في الخليج العربي.
              </p>
            </div>

          </div>

          {/* Column 2: Executive Direct Inquiry Composer (7 Cols) */}
          <div className="lg:col-span-7 card-luxury p-6 sm:p-10 text-right relative border-t-2 border-t-[#D4AF37]">
            <div className="pb-6 border-b border-white/10 mb-6">
              <span className="text-xs uppercase font-en tracking-wider text-[#D4AF37] font-bold block mb-1">
                EXECUTIVE INQUIRY COMPOSER
              </span>
              <h3 className="text-2xl font-extrabold text-white">صياغة وتوجيه الاستفسار التجاري</h3>
              <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1 leading-relaxed">
                أدخل بياناتك ومتطلبات الشراكة أو التوريد ليتم تجهيز رسالة مهنية مفصلة وإرسالها مباشرة إلى الإدارة عبر واتساب أو البريد.
              </p>
            </div>

            <form onSubmit={handleSendViaWhatsApp} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="full-name" className="text-xs font-semibold text-[#CBD5E1] block mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>الاسم الكامل والمنصب</span>
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="مثال: سعادة / م. فيصل الشمري"
                    className="w-full px-4 py-3 rounded-xl bg-[#05070D] border border-white/15 focus:border-[#D4AF37] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  />
                </div>

                {/* Company / Entity */}
                <div>
                  <label htmlFor="company-name" className="text-xs font-semibold text-[#CBD5E1] block mb-2 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>اسم المؤسسة أو الشركة</span>
                  </label>
                  <input
                    id="company-name"
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="مثال: مجموعة أوراسيا القابضة"
                    className="w-full px-4 py-3 rounded-xl bg-[#05070D] border border-white/15 focus:border-[#D4AF37] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  />
                </div>
              </div>

              {/* Sector / Domain of Interest */}
              <div>
                <label htmlFor="sector-select" className="text-xs font-semibold text-[#CBD5E1] block mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>القطاع أو مجال التعاون المستهدف</span>
                </label>
                <select
                  id="sector-select"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#05070D] border border-white/15 focus:border-[#D4AF37] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
                >
                  {SITE_CONFIG.sectors.map((s) => (
                    <option key={s.id} value={s.title} className="bg-[#070B14] text-white">
                      {s.title} ({s.englishTitle})
                    </option>
                  ))}
                  <option value="استفسار استثماري وشراكة عامة" className="bg-[#070B14] text-white">
                    استفسار استثماري وشراكة عامة
                  </option>
                  <option value="طلب دراسة جدوى توريد مخصص" className="bg-[#070B14] text-white">
                    طلب دراسة جدوى توريد مخصص
                  </option>
                </select>
              </div>

              {/* Message Details */}
              <div>
                <label htmlFor="inquiry-details" className="text-xs font-semibold text-[#CBD5E1] block mb-2 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>تفاصيل المتطلب الاستثماري أو اللوجستي</span>
                </label>
                <textarea
                  id="inquiry-details"
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="يرجى توضيح حجم التوريد المطلوب، الوجهات المستهدفة، أو الإطار الزمني المقترح للشراكة..."
                  className="w-full px-4 py-3 rounded-xl bg-[#05070D] border border-white/15 focus:border-[#D4AF37] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-4 px-6 rounded-2xl text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-[#070B14] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all flex items-center justify-center gap-2.5 shadow-lg cursor-pointer font-sans"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال الاستفسار عبر واتساب المعتمد</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendViaEmail}
                  className="w-full sm:w-auto py-4 px-6 rounded-2xl text-sm font-semibold bg-[#0B1528] hover:bg-[#121E36] text-white border border-white/15 hover:border-[#D4AF37]/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span>مراسلة بريدية</span>
                </button>
              </div>

              {/* Confirmation / Info Feedback */}
              {formSentNotice && (
                <div className="p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/40 flex items-center gap-3 text-xs text-emerald-300">
                  <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                  <span>
                    تم فتح تطبيق واتساب بنجاح مع صياغة الرسالة المهنية بالكامل. تفضل بمراجعة النص وإرساله فورًا.
                  </span>
                </div>
              )}

              {/* Clear System Disclaimer */}
              <p className="text-[11px] text-[#A8B0BE] pt-3 border-t border-white/5 leading-relaxed">
                <strong>سياسة الخصوصية والتواصل:</strong> لا يتم تسجيل أو مشاركة بيانات الاتصال مع أي طرف خارجي. يتم توجيه الاستفسارات المشفرة مباشرة إلى هاتف المسؤول التنفيذي لضمان سرية الصفقات وسرعة الاستجابة.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
