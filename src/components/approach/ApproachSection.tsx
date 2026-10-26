import { CheckCircle2, Calendar, GitFork, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteContent';

export const ApproachSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    }
  };

  return (
    <section id="approach" className="relative py-28 sm:py-36 bg-[#070B14] border-t border-white/5 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-right mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1528] border border-[#D4AF37]/30 text-xs font-semibold text-[#F3C969] mb-4 shadow-md">
            <GitFork className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="uppercase tracking-wider font-en">STRUCTURED PARTNERSHIP METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F4EF] tracking-tight">
            منهج بناء <span className="text-gold-gradient">الشراكات والصفقات الاستثمارية</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#CBD5E1] max-w-3xl leading-relaxed">
            آلية عمل منهجية مكونة من ٤ مراحل واضحة المعالم، تبدأ من التقييم الاستراتيجي لمتطلبات التوريد وتنتهي ببناء تحالف تجاري مستدام يحقق قيمة مضافة للشركاء.
          </p>
        </div>

        {/* ============================================================== */}
        {/* Progressive Milestone Roadmap Architecture                     */}
        {/* ============================================================== */}
        <div className="relative">
          {/* Connecting Golden Conduit Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {SITE_CONFIG.workflowSteps.map((step) => (
              <div
                key={step.number}
                className="card-luxury p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden border-t-2 border-t-[#D4AF37] hover:border-t-[#F3C969]"
              >
                {/* Big Step Watermark Number in background */}
                <div className="absolute -top-4 -left-2 text-7xl font-black text-white/[0.04] select-none font-en pointer-events-none group-hover:text-[#D4AF37]/[0.08] transition-colors">
                  0{step.number}
                </div>

                <div>
                  {/* Phase & Duration Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold text-[#F3C969] bg-[#070B14] px-3 py-1.5 rounded-lg border border-[#D4AF37]/30 font-en shadow-sm">
                      PHASE 0{step.number}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[#CBD5E1] bg-[#070B14]/60 px-2.5 py-1 rounded-md border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{step.duration}</span>
                    </div>
                  </div>

                  {/* Step Title */}
                  <span className="text-[11px] font-bold text-[#D4AF37] font-en uppercase tracking-wider block mb-1">
                    {step.englishTitle}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#F3C969] transition-colors mb-3 leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverables & Sign-Off Outputs */}
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <span className="text-[11px] font-bold text-[#7890AA] uppercase tracking-wider block mb-1">
                    المخرجات التنفيذية للمرحلة:
                  </span>
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#F5F4EF]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Executive Partnership Callout Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#070B14] via-[#0B1528] to-[#070B14] border border-[#D4AF37]/35 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-right max-w-2xl relative z-10">
            <span className="text-xs font-bold text-[#F3C969] font-en uppercase tracking-wider block mb-1">
              STRATEGIC ENGAGEMENT GATEWAY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
              هل تبحث عن صياغة شراكة استراتيجية أو متطلب توريد نوعي؟
            </h3>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              نرحب بمناقشة آفاق التعاون وإعداد دراسات الجدوى التقديرية بالتعاون مع فريق العمل المختص لخدمة تطلعات مؤسستكم.
            </p>
          </div>

          <button
            onClick={scrollToContact}
            className="px-8 py-4 rounded-full text-sm sm:text-base font-bold bg-gradient-to-r from-[#D4AF37] to-[#F3C969] text-[#070B14] hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] transition-all flex items-center gap-3 shrink-0 shadow-lg cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>بدء المحادثة الاستكشافية</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
