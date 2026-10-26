import { useState } from 'react';
import { Globe, Ship, Handshake, TrendingUp, ArrowLeft, Info, Sparkles, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG, type SectorItem } from '../../config/siteContent';
import { SectorModal } from './SectorModal';

export const SectorsSection = () => {
  const [selectedSector, setSelectedSector] = useState<SectorItem | null>(null);

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    }
  };

  const sector1 = SITE_CONFIG.sectors[0]; // التجارة الدولية والتوريد
  const sector2 = SITE_CONFIG.sectors[1]; // الخدمات اللوجستية وسلاسل الإمداد
  const sector3 = SITE_CONFIG.sectors[2]; // الشراكات التجارية والاستراتيجية
  const sector4 = SITE_CONFIG.sectors[3]; // تطوير الأعمال والتوسع في الأسواق

  return (
    <section id="sectors" className="relative py-28 sm:py-36 bg-[#070B14] border-t border-white/5 overflow-hidden">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[#38bdf8]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-right mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1528] border border-[#D4AF37]/30 text-xs font-semibold text-[#F3C969] mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="uppercase tracking-wider font-en">STRATEGIC BUSINESS VERTICALS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F4EF] tracking-tight">
            قطاعات الأعمال <span className="text-gold-gradient">الاستراتيجية</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#CBD5E1] max-w-3xl leading-relaxed">
            منظومة متكاملة تغطي حركية التبادل التجاري عبر المحيطات والمطارات، وصولاً إلى التحالفات المؤسسية وتطوير الأعمال في دول الخليج العربي والأسواق الدولية.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#94a3b8] bg-[#05070D]/90 px-4 py-2 rounded-xl border border-white/10 shadow-sm">
            <Info className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span>تصنيف مفاهيمي مقترح للعرض والنقاش الاستثماري — خاضع لتعديل واعتماد العميل النهائي</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="space-y-10 sm:space-y-12">
          
          {/* ============================================================== */}
          {/* ROW 1: Large Visual Feature (Vertical 02: Logistics) + Vertical 01 */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Sector 2 Feature with Air-Cargo Hub Photography (7 Cols) */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-white/15 group min-h-[460px] sm:min-h-[500px] shadow-2xl flex flex-col justify-end p-6 sm:p-10">
              <img
                src="/images/air-cargo.jpg"
                alt="مركز الشحن الجوي واللوجستيات متعددة الوسائط"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-[#05070D]/65 to-transparent" />
              <div className="absolute inset-0 bg-[#070B14]/25" />

              <div className="relative z-10 text-right">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold font-en text-[#F3C969] uppercase tracking-wider bg-[#070B14]/80 px-3 py-1 rounded-full border border-[#D4AF37]/30 backdrop-blur-sm">
                    VERTICAL 02 • MULTIMODAL LOGISTICS
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-[#070B14]/90 border border-[#D4AF37]/40 flex items-center justify-center shadow-lg">
                    <Ship className="w-5 h-5 text-[#F3C969]" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
                  {sector2.title}
                </h3>
                <p className="text-sm sm:text-base text-[#D0D7DE] leading-relaxed mb-6 max-w-xl">
                  {sector2.shortDesc}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSelectedSector(sector2)}
                    className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#D4AF37] hover:bg-[#F3C969] text-[#070B14] transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>تفاصيل المنظومة اللوجستية</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-[#CBD5E1] bg-[#070B14]/60 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                    ربط جوي وبحري عالي السرعة
                  </span>
                </div>
              </div>
            </div>

            {/* Sector 1: Cross-Border Trade & Sourcing (5 Cols) */}
            <div className="lg:col-span-5 card-luxury p-6 sm:p-8 flex flex-col justify-between text-right relative overflow-hidden border-t-2 border-t-[#D4AF37]">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-[#7890AA] font-en tracking-widest">
                    VERTICAL 01
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1528] border border-[#D4AF37]/35 flex items-center justify-center shadow-inner">
                    <Globe className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                </div>

                <span className="text-xs font-bold text-[#D4AF37] font-en uppercase tracking-wider block mb-1">
                  {sector1.englishTitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {sector1.title}
                </h3>
                <p className="text-xs text-[#94a3b8] font-medium mb-4">
                  {sector1.subtitle}
                </p>
                <p className="text-sm text-[#A8B0BE] leading-relaxed mb-6">
                  {sector1.shortDesc}
                </p>

                <div className="space-y-2.5 mb-6">
                  {sector1.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-[#F5F4EF]">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedSector(sector1)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-[#0B1528] hover:bg-[#121E36] text-[#F5F4EF] hover:text-[#F3C969] border border-white/10 hover:border-[#D4AF37]/40 transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>استعراض القدرات المقترحة</span>
                  <ArrowLeft className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* ROW 2: Sector 4 (Market Expansion) + Visual Feature (Vertical 03: Alliances) */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Sector 4: Market Expansion & Advisory (5 Cols) */}
            <div className="lg:col-span-5 card-luxury p-6 sm:p-8 flex flex-col justify-between text-right relative overflow-hidden order-2 lg:order-1 border-t-2 border-t-[#7890AA]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-[#7890AA] font-en tracking-widest">
                    VERTICAL 04
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1528] border border-[#7890AA]/40 flex items-center justify-center shadow-inner">
                    <TrendingUp className="w-6 h-6 text-[#7890AA]" />
                  </div>
                </div>

                <span className="text-xs font-bold text-[#7890AA] font-en uppercase tracking-wider block mb-1">
                  {sector4.englishTitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {sector4.title}
                </h3>
                <p className="text-xs text-[#94a3b8] font-medium mb-4">
                  {sector4.subtitle}
                </p>
                <p className="text-sm text-[#A8B0BE] leading-relaxed mb-6">
                  {sector4.shortDesc}
                </p>

                <div className="space-y-2.5 mb-6">
                  {sector4.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-[#F5F4EF]">
                      <CheckCircle2 className="w-4 h-4 text-[#7890AA] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedSector(sector4)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-[#0B1528] hover:bg-[#121E36] text-[#F5F4EF] hover:text-[#F3C969] border border-white/10 hover:border-[#D4AF37]/40 transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>استعراض خطط التوسع الإقليمي</span>
                  <ArrowLeft className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>
            </div>

            {/* Sector 3 Feature with UAE Corporate HQ Photography (7 Cols) */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-white/15 group min-h-[460px] sm:min-h-[500px] shadow-2xl flex flex-col justify-end p-6 sm:p-10 order-1 lg:order-2">
              <img
                src="/images/uae-hq.jpg"
                alt="برج ومقر الأعمال والاستثمار في دولة الإمارات"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-[#05070D]/70 to-transparent" />
              <div className="absolute inset-0 bg-[#070B14]/25" />

              <div className="relative z-10 text-right">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold font-en text-[#F3C969] uppercase tracking-wider bg-[#070B14]/80 px-3 py-1 rounded-full border border-[#D4AF37]/30 backdrop-blur-sm">
                    VERTICAL 03 • STRATEGIC ALLIANCES & JV
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-[#070B14]/90 border border-[#D4AF37]/40 flex items-center justify-center shadow-lg">
                    <Handshake className="w-5 h-5 text-[#F3C969]" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
                  {sector3.title}
                </h3>
                <p className="text-sm sm:text-base text-[#D0D7DE] leading-relaxed mb-6 max-w-xl">
                  {sector3.shortDesc}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSelectedSector(sector3)}
                    className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#D4AF37] hover:bg-[#F3C969] text-[#070B14] transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>نماذج التحالفات الاستثمارية</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-[#CBD5E1] bg-[#070B14]/60 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                    بيئة أعمال استثمارية متطورة في الخليج
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Sector Detailed Modal */}
      <SectorModal
        sector={selectedSector}
        onClose={() => setSelectedSector(null)}
        onContactClick={scrollToContact}
      />
    </section>
  );
};
