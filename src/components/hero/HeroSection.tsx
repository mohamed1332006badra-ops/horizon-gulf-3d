import { useState, lazy, Suspense } from 'react';
import { ArrowLeft, Compass, Play, Pause, ChevronDown, Anchor, Globe2, ShieldCheck, Sparkles, Navigation } from 'lucide-react';

const Globe3DCanvas = lazy(() =>
  import('./Globe3DCanvas').then((module) => ({ default: module.Globe3DCanvas }))
);

export const HeroSection = () => {
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [focusTrigger, setFocusTrigger] = useState(0);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const handleTriggerFocusGulf = () => {
    setFocusTrigger((prev) => prev + 1);
  };

  return (
    <section id="hero" className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#05070D]">
      {/* 3D WebGL Canvas Layer with Suspense Fallback */}
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center bg-radial from-[#0B1528]/50 via-[#05070D] to-[#05070D]">
              <div className="w-64 h-64 rounded-full border border-[#D4AF37]/20 flex items-center justify-center animate-pulse">
                <span className="text-xs uppercase font-en tracking-widest text-[#D4AF37]">Initializing 3D Core...</span>
              </div>
            </div>
          }
        >
          <Globe3DCanvas isAutoRotate={isAutoRotate} onFocusGulfTrigger={focusTrigger} />
        </Suspense>
      </div>

      {/* Cinematic Ambient Atmosphere Overlays */}
      {/* 1. Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#05070D] via-[#05070D]/60 to-transparent pointer-events-none z-10" />

      {/* 2. Top fade under header */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#05070D]/90 to-transparent pointer-events-none z-10" />

      {/* 3. Soft deep vignette on RTL text area for high text contrast */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_80%_48%,rgba(5,7,13,0.88)_0%,rgba(5,7,13,0.48)_55%,transparent_85%)] z-10" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2 lg:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Editorial Copy (Right in RTL) */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            
            {/* Concept Demo Pill & Executive Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#070B14]/85 border border-[#D4AF37]/35 backdrop-blur-md mb-6 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#F3C969] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-[#F3C969] uppercase tracking-wider font-en">
                HORIZON GULF • EXECUTIVE PRESENTATION
              </span>
              <span className="text-white/20">|</span>
              <span className="text-[11px] sm:text-xs text-[#A8B0BE] font-medium">رؤية استثمارية مقترحة</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black text-[#F5F4EF] leading-[1.16] tracking-tight mb-6">
              نربط الأسواق العالمية، <br />
              <span className="text-gold-gradient font-black">
                ونصنع آفاقًا جديدة للأعمال.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-[#CBD5E1] font-normal leading-relaxed max-w-2xl mb-8 drop-shadow-sm">
              منظومة متكاملة لحلول التجارة الدولية والتوريد متعدد الوسائط والتحالفات المؤسسية، تنطلق من موانئ الخليج العربي وممراته اللوجستية نحو شرايين الاقتصاد العالمي.
            </p>

            {/* Mobile-Only Telemetry Controller Strip */}
            <div className="lg:hidden flex items-center justify-between gap-3 p-3 rounded-xl bg-[#070B14]/80 border border-[#D4AF37]/30 backdrop-blur-md w-full mb-6 text-xs text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-en font-bold text-white text-[11px]">3D TELEMETRY</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleTriggerFocusGulf}
                  className="px-2.5 py-1 rounded-lg bg-[#121B30] text-[#F3C969] text-[11px] font-semibold border border-white/10"
                >
                  الخليج العربي
                </button>
                <button
                  onClick={() => setIsAutoRotate(!isAutoRotate)}
                  className="px-2.5 py-1 rounded-lg bg-[#121B30] text-[#D4AF37] text-[11px] font-semibold border border-white/10 flex items-center gap-1"
                >
                  {isAutoRotate ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span>{isAutoRotate ? 'إيقاف' : 'دوران'}</span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo('sectors')}
                className="px-8 py-4 rounded-full text-sm sm:text-base font-bold bg-gradient-to-r from-[#D4AF37] via-[#F3C969] to-[#D4AF37] text-[#070B14] hover:shadow-[0_0_40px_rgba(212,175,55,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 w-full sm:w-auto cursor-pointer shadow-lg"
              >
                <span>استكشف قطاعات الأعمال</span>
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="px-8 py-4 rounded-full text-sm sm:text-base font-semibold bg-[#0A101E]/90 hover:bg-[#121B30] text-[#F5F4EF] border border-[#D4AF37]/40 hover:border-[#F3C969] transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2.5 w-full sm:w-auto cursor-pointer shadow-md"
              >
                <span>ناقش فرصة شراكة</span>
                <Compass className="w-5 h-5 text-[#D4AF37]" />
              </button>
            </div>

            {/* Live Operational Metrics Ribbon (Responsive Grid: 1 col on mobile, 3 on tablet/desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-8 mt-8 border-t border-white/10 w-full max-w-2xl">
              <div className="bg-[#070B14]/60 p-3.5 rounded-xl border border-white/5 backdrop-blur-sm">
                <span className="text-[11px] text-[#7890AA] flex items-center gap-1.5 mb-1">
                  <Anchor className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>الممرات الملاحية</span>
                </span>
                <span className="text-sm sm:text-base font-bold text-white font-en block">MARITIME ARCS</span>
                <span className="text-[11px] text-[#A8B0BE] block">موانئ الخليج، آسيا، وأوروبا</span>
              </div>
              <div className="bg-[#070B14]/60 p-3.5 rounded-xl border border-white/5 backdrop-blur-sm">
                <span className="text-[11px] text-[#7890AA] flex items-center gap-1.5 mb-1">
                  <Globe2 className="w-3.5 h-3.5 text-[#F3C969]" />
                  <span>التوريد المتعدد</span>
                </span>
                <span className="text-sm sm:text-base font-bold text-[#F3C969] font-en block">MULTIMODAL</span>
                <span className="text-[11px] text-[#A8B0BE] block">تكامل بحري وجوي متقدم</span>
              </div>
              <div className="bg-[#070B14]/60 p-3.5 rounded-xl border border-white/5 backdrop-blur-sm">
                <span className="text-[11px] text-[#7890AA] flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>الحوكمة المؤسسية</span>
                </span>
                <span className="text-sm sm:text-base font-bold text-white font-en block">GOVERNANCE</span>
                <span className="text-[11px] text-[#A8B0BE] block">حوكمة وأطر امتثال مؤسسية</span>
              </div>
            </div>
          </div>

          {/* Desktop-Only Interactive Globe Executive HUD Controls (Left in RTL) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-start pointer-events-none">
            {/* Sleek Floating Glass Badge */}
            <div className="pointer-events-auto bg-[#070B14]/80 backdrop-blur-xl border border-[#D4AF37]/35 p-5 rounded-2xl shadow-2xl max-w-sm w-full transition-all duration-300 hover:border-[#D4AF37]/60">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white font-en tracking-wider">3D EARTH TELEMETRY</span>
                </div>
                <button
                  onClick={() => setIsAutoRotate(!isAutoRotate)}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#121B30] hover:bg-[#1A2642] text-[#F3C969] border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="التحكم في دوران الكرة الأرضية"
                >
                  {isAutoRotate ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span>{isAutoRotate ? 'إيقاف الدوران' : 'تشغيل الدوران'}</span>
                </button>
              </div>

              <div className="pt-3 text-right space-y-2.5">
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  تجسيد ثلاثي الأبعاد تفاعلي يبرز أضواء المدن ليلاً، الممرات البحرية المحورية، وتدفقات الشحن التجاري عبر كوكب الأرض.
                </p>
                <div className="flex items-center justify-between text-[11px] text-[#7890AA] pt-1 border-t border-white/5">
                  <span className="font-mono text-[#D4AF37] flex items-center gap-1">
                    <Navigation className="w-3 h-3" />
                    <span>24.7°N | 46.7°E</span>
                  </span>
                  <button
                    onClick={handleTriggerFocusGulf}
                    className="text-[#F3C969] hover:underline cursor-pointer flex items-center gap-1 font-semibold"
                  >
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                    <span>إعادة توجيه للخليج العربي</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 pointer-events-none opacity-80">
        <span className="text-[10px] uppercase font-en tracking-widest text-[#7890AA]">
          EXPLORE NETWORK
        </span>
        <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
      </div>
    </section>
  );
};
