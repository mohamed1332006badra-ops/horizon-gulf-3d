import { useState } from 'react';
import { ArrowLeft, Anchor, ShieldCheck, Compass, BarChart3, Ship, CheckCircle2 } from 'lucide-react';

export const TradeShowcaseSection = () => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    }
  };

  const hotspots = [
    {
      id: 1,
      title: 'أرصفة الموانئ المحورية ذات الأعماق الكبرى',
      desc: 'بنية تحتية مهيأة للتعامل مع سفن الحاويات الكبرى وفق معايير النقل البحري الحديث.',
      position: 'top-1/3 right-1/4',
    },
    {
      id: 2,
      title: 'أنظمة المناولة والرافعات الجسرية الحديثة',
      desc: 'حلول تشغيلية مقترحة تستهدف رفع سرعة التفريغ والتحميل وتقليص زمن الانتظار.',
      position: 'top-1/2 right-2/3',
    },
    {
      id: 3,
      title: 'مناطق التنسيق والتخليص اللوجستي المتقدم',
      desc: 'مسارات إجراءات مسبقة تهدف لتسريع وتيرة تدفق البضائع نحو شبكات التوزيع الإقليمية.',
      position: 'bottom-1/4 right-1/2',
    },
  ];

  return (
    <section id="showcase" className="relative py-28 sm:py-36 bg-[#05070D] overflow-hidden border-t border-white/5">
      {/* Background Ambient Glow & Grid Accents */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#38bdf8]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-right mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1528] border border-[#D4AF37]/35 text-xs font-semibold text-[#F3C969] mb-4 shadow-lg">
            <Anchor className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="uppercase tracking-wider font-en">EDITORIAL MARITIME EXPERIENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F4EF] tracking-tight max-w-4xl leading-tight">
            حركة التجارة العالمية: <br />
            <span className="text-gold-gradient">من موانئ الخليج الاستراتيجية إلى عمق الأسواق الدولية</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#CBD5E1] max-w-3xl leading-relaxed">
            توفر البنى التحتية للموانئ الخليجية شريان اتصال حيوي يربط مسارات الملاحة الشرقية بالأسواق الغربية، متيحة تأسيس ممرات توريد عالية الكفاءة وتقليص دورات رأس المال العامل.
          </p>
        </div>

        {/* ============================================================== */}
        {/* PHOTOGRAPHIC COMPOSITION 1: Panoramic Deep-Water Port Terminal */}
        {/* ============================================================== */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl mb-16 group">
          {/* Main Panoramic Image */}
          <div className="relative h-[480px] sm:h-[580px] lg:h-[640px] w-full overflow-hidden">
            <img
              src="/images/port-sunset.jpg"
              alt="ميناء حاويات دولي عميق عند الغروب يربط خطوط التجارة العالمية"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="lazy"
            />

            {/* Cinematic Gradient Overlays: Deep Midnight Vignette + Golden Horizon Sheen */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-[#05070D]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#05070D]/30 to-[#05070D]/80" />
            
            {/* Top Telemetry Header Bar */}
            <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 z-20">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#070B14]/85 border border-[#D4AF37]/35 backdrop-blur-md text-xs text-[#F3C969] font-en font-bold shadow-xl">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>TERMINAL INFRASTRUCTURE • BERTH 04</span>
                <span className="text-white/30 hidden sm:inline">|</span>
                <span className="text-[#A8B0BE] hidden sm:inline">LAT 25.0°N • LONG 55.1°E</span>
              </div>

              <div className="bg-[#070B14]/75 px-3.5 py-1.5 rounded-full border border-white/10 text-[11px] text-[#A8B0BE] backdrop-blur-md font-medium">
                محاكاة تشغيلية لمعايير الموانئ المحورية المستهدفة
              </div>
            </div>

            {/* Interactive Telemetry Hotspots on Port Landscape */}
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className={`absolute ${spot.position} z-20 hidden md:block`}
              >
                <div className="relative">
                  <button
                    onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                    className="w-7 h-7 rounded-full bg-[#D4AF37] hover:bg-[#F3C969] text-[#070B14] font-bold text-xs flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.7)] transition-all transform hover:scale-110 cursor-pointer"
                    title={spot.title}
                  >
                    <span>{spot.id}</span>
                  </button>

                  {/* Hotspot Tooltip */}
                  {activeHotspot === spot.id && (
                    <div className="absolute bottom-9 right-0 w-64 p-3.5 rounded-xl bg-[#070B14]/95 border border-[#D4AF37]/40 shadow-2xl backdrop-blur-lg text-right z-30 transition-all">
                      <h4 className="text-xs font-bold text-white mb-1">{spot.title}</h4>
                      <p className="text-[11px] text-[#CBD5E1] leading-relaxed">{spot.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Overlaid Editorial Content at Bottom of Panoramic Canvas */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12 z-20 flex flex-col lg:flex-row items-end justify-between gap-8">
              <div className="max-w-2xl text-right">
                <span className="text-xs uppercase font-en tracking-widest text-[#D4AF37] font-bold block mb-2">
                  STRATEGIC DEEP-WATER LOGISTICS HUB
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">
                  منظومة مناولة موانئ متكاملة تدعم مرونة سلاسل الإمداد
                </h3>
                <p className="text-sm sm:text-base text-[#D0D7DE] leading-relaxed mb-6 max-w-xl">
                  تكامل العمليات بين أرصفة الشحن ومحطات التخزين الجمركي، مدعومة بشبكات تتبع رقمية تقلص دورة التوريد وتعزز الشفافية التشغيلية للشركاء التجاريين.
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={scrollToContact}
                    className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-[#D4AF37] to-[#F3C969] text-[#070B14] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>طلب استشارة توريد بحري</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-[#A8B0BE] font-medium hidden sm:inline">
                    انقر على الأرقام لاستعراض مواصفات المحطة
                  </span>
                </div>
              </div>

              {/* Inset Frosted Glass Telemetry Metrics Card */}
              <div className="bg-[#070B14]/85 border border-[#D4AF37]/30 p-5 rounded-2xl backdrop-blur-xl shadow-2xl max-w-xs w-full text-right hidden sm:block">
                <span className="text-[11px] font-bold text-[#F3C969] uppercase font-en tracking-wider block mb-2">
                  PORT CRITERIA (CONCEPTUAL)
                </span>
                <div className="space-y-3">
                  <div>
                    <span className="text-[11px] text-[#7890AA] block">معايير الغاطس الملاحي المستهدف</span>
                    <span className="text-base font-bold text-white font-en">DEEP-WATER SPECIFICATION</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#7890AA] block">استيعاب السفن الكبيرة</span>
                    <span className="text-sm font-semibold text-[#F3C969]">High-Capacity Capable</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#7890AA] block">كفاءة الرسو والمناولة</span>
                    <span className="text-xs text-[#A8B0BE]">استهداف أعلى معايير سرعة دوران البضائع</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* PHOTOGRAPHIC COMPOSITION 2: Ocean Freight Expedition Split     */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Visual Anchor: Giant Angled Cargo Vessel Photograph (7 Cols) */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group min-h-[460px] flex flex-col justify-end p-6 sm:p-10">
            <img
              src="/images/cargo-ship.jpg"
              alt="سفينة شحن حاويات عملاقة في عرض البحر تعبر مضيق هرمز"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="lazy"
            />
            {/* Dark Dramatic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-[#05070D]/60 to-transparent" />
            <div className="absolute inset-0 bg-[#070B14]/25" />

            {/* Inset Top Badge */}
            <div className="absolute top-6 right-6 z-10">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#070B14]/85 text-[#F3C969] border border-[#D4AF37]/35 backdrop-blur-md flex items-center gap-2 shadow-lg">
                <Ship className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-en uppercase">GLOBAL CARGO FLEET SPECIFICATION</span>
              </span>
            </div>

            {/* Content Overlaid on Vessel */}
            <div className="relative z-10 text-right max-w-xl">
              <span className="text-xs font-bold font-en uppercase text-[#D4AF37] block mb-1">
                COMPOSITION 02 • OCEAN FREIGHT
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
                أسطول النقل السلعي العابر للمحيطات
              </h3>
              <p className="text-sm text-[#CBD5E1] leading-relaxed mb-6">
                تأمين سعات شحن بحري مجدولة تربط موانئ الخليج العربي والمحيط الهندي بمراكز الاستهلاك الأوروبية والآسيوية، مع إدارة مخاطر التسعير وتقلبات نولون الشحن.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/15">
                <div>
                  <span className="text-[11px] text-[#7890AA] block">ممرات العبور الرئيسية</span>
                  <span className="text-sm font-bold text-white font-en">HORMUZ • BAB EL-MANDEB</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#7890AA] block">أنظمة التتبع الفوري</span>
                  <span className="text-sm font-bold text-[#F3C969] font-en">IOT SATELLITE TELEMETRY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Analysis & Integrated Editorial Pillars (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Editorial Thesis Card */}
            <div className="card-luxury p-6 sm:p-8 flex flex-col justify-between text-right border-l-4 border-l-[#D4AF37] relative overflow-hidden flex-1">
              <div className="absolute -top-6 -left-6 text-8xl font-black text-white/[0.03] select-none font-en pointer-events-none">
                MARITIME
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold font-en text-[#D4AF37] uppercase tracking-wider">
                    OPERATIONAL ADVANTAGE
                  </span>
                  <BarChart3 className="w-5 h-5 text-[#F3C969]" />
                </div>

                <h4 className="text-xl font-bold text-white mb-3">
                  هندسة تكلفة الشحن وحماية سلاسل التوريد
                </h4>
                <p className="text-sm text-[#A8B0BE] leading-relaxed mb-6">
                  الاعتماد على شبكة علاقات ملاحية موثوقة يسمح بتأمين عقود نقل مرنة، وتوفير خيارات بديلة عند اضطراب الممرات البحرية لضمان استمرارية تدفق السلع الحيوية.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-[#F5F4EF]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>تأمين سعات شحن مسبقة بأسعار تحوطية مستقرة</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#F5F4EF]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>مراقبة مستمرة للمسارات الملاحية وتفادي مناطق الاختناق</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#F5F4EF]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>مراعاة أفضل الممارسات الملاحية الدولية ومعايير الاستدامة البيئية</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#7890AA]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>معايير السلامة والجودة التشغيلية المعتمدة</span>
                </span>
                <Compass className="w-4 h-4 text-[#D4AF37]" />
              </div>
            </div>

            {/* Quick Consultation Trigger */}
            <div className="bg-[#0B1528] p-5 rounded-2xl border border-white/10 flex items-center justify-between text-right">
              <div>
                <span className="text-xs font-bold text-white block">هل تحتاج حلول شحن بحري مخصصة؟</span>
                <span className="text-[11px] text-[#A8B0BE]">فريق العمل جاهز لمراجعة المتطلبات اللوجستية</span>
              </div>
              <button
                onClick={scrollToContact}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#D4AF37] hover:bg-[#F3C969] text-[#070B14] transition-all flex items-center gap-1.5 cursor-pointer shadow"
              >
                <span>تواصل معنا</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
