import { useState } from 'react';
import { Route, Navigation, Clock, ShieldCheck, ArrowRight, Anchor, Globe2, Activity, Zap, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG, type TradeNode } from '../../config/siteContent';

export const TradeNetworkSection = () => {
  const [activeCorridorId, setActiveCorridorId] = useState<string>(SITE_CONFIG.tradeCorridors[0].id);
  const [selectedNode, setSelectedNode] = useState<TradeNode>(SITE_CONFIG.tradeNodes[0]);

  const activeCorridor = SITE_CONFIG.tradeCorridors.find((c) => c.id === activeCorridorId) || SITE_CONFIG.tradeCorridors[0];

  return (
    <section id="network" className="relative py-28 sm:py-36 bg-[#05070D] border-t border-white/5 overflow-hidden">
      {/* Background High-Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#7890AA_1px,transparent_1px),linear-gradient(to_bottom,#7890AA_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-right mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1528] border border-[#D4AF37]/30 text-xs font-semibold text-[#F3C969] mb-4 shadow-md">
            <Route className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="uppercase tracking-wider font-en">GLOBAL TRADE TOPOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F4EF] tracking-tight">
            شبكة وممرات <span className="text-gold-gradient">التجارة الدولية</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#CBD5E1] max-w-3xl leading-relaxed">
            تصور تخطيطي تفاعلي لربط موانئ الخليج العربي والمشرق بالمراكز الصناعية واللوجستية في آسيا وأوروبا عبر ممرات تجارية مرنة ومحسوبة التكلفة والزمن.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#94a3b8] bg-[#070B14]/80 px-4 py-2 rounded-xl border border-white/10 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>محاكاة مسارات تخطيطية مقترحة لعرض التدفقات اللوجستية وتكامل الممرات البحرية والبرية</span>
          </div>
        </div>

        {/* Corridor Selection Pills */}
        <div className="flex flex-wrap gap-3 mb-10">
          {SITE_CONFIG.tradeCorridors.map((corridor) => {
            const isActive = corridor.id === activeCorridorId;
            return (
              <button
                key={corridor.id}
                onClick={() => setActiveCorridorId(corridor.id)}
                className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2.5 cursor-pointer shadow-md ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3C969] text-[#070B14] shadow-[0_0_25px_rgba(212,175,55,0.4)] scale-105'
                    : 'bg-[#0B1528] text-[#CBD5E1] hover:text-white hover:bg-[#121E36] border border-white/10'
                }`}
              >
                <Navigation className={`w-4 h-4 ${isActive ? 'text-[#070B14]' : 'text-[#D4AF37]'}`} />
                <span>{corridor.name}</span>
              </button>
            );
          })}
        </div>

        {/* Corridor Topology & Simulation View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Active Corridor Strategic Specification (7 Cols) */}
          <div className="lg:col-span-7 card-luxury p-6 sm:p-10 relative border-t-2 border-t-[#D4AF37]">
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="text-right">
                <span className="text-xs uppercase font-en tracking-wider text-[#D4AF37] font-bold block mb-1">
                  CORRIDOR TELEMETRY SPECIFICATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{activeCorridor.name}</h3>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#070B14] border border-[#D4AF37]/35 flex items-center justify-center shadow-lg">
                <Anchor className="w-7 h-7 text-[#F3C969]" />
              </div>
            </div>

            <div className="py-6 space-y-6 text-right">
              
              {/* Origin to Destination Vector Graphic */}
              <div className="p-5 rounded-2xl bg-[#05070D]/90 border border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-right">
                  <span className="text-[11px] text-[#7890AA] font-bold block mb-0.5">نقطة الانطلاق والارتكاز</span>
                  <span className="text-lg font-bold text-white">{activeCorridor.from}</span>
                </div>
                
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-bold text-[#F3C969]">
                  <Zap className="w-3.5 h-3.5 text-[#F3C969] animate-pulse" />
                  <span>تدفق بحري مستمر</span>
                  <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                </div>

                <div className="text-center sm:text-left">
                  <span className="text-[11px] text-[#7890AA] font-bold block mb-0.5">الوجهة والأسواق المستهدفة</span>
                  <span className="text-lg font-bold text-white">{activeCorridor.to}</span>
                </div>
              </div>

              {/* Corridor Description */}
              <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                {activeCorridor.description}
              </p>

              {/* Key Transit Time Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0B1528] border border-white/10 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="text-[11px] text-[#7890AA] block">زمن العبور التقديري</span>
                    <span className="text-sm font-bold text-[#F5F4EF]">{activeCorridor.estimatedTransit}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0B1528] border border-white/10 flex items-center gap-3">
                  <Activity className="w-6 h-6 text-[#38bdf8] shrink-0" />
                  <div>
                    <span className="text-[11px] text-[#7890AA] block">تصنيف مسار التدفق (نموذج تحليلي)</span>
                    <span className="text-sm font-bold text-emerald-400">مسار محوري رئيسي (Class A)</span>
                  </div>
                </div>
              </div>

              {/* Key Commodities */}
              <div className="pt-2">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-3">
                  السلع والمنتجات الاستراتيجية المستهدفة بالممر:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {activeCorridor.keyCommodities.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#0B1528] text-[#F3C969] border border-[#D4AF37]/25 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Global Node Hub Directory (5 Cols) */}
          <div className="lg:col-span-5 card-luxury p-6 sm:p-8 flex flex-col justify-between text-right border-t-2 border-t-[#38bdf8]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="text-right">
                  <span className="text-xs uppercase font-en tracking-wider text-[#38bdf8] font-bold block mb-1">
                    INTERACTIVE TRADE NODES
                  </span>
                  <h4 className="text-xl font-bold text-white">العقد والموانئ الدولية</h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#070B14] border border-[#38bdf8]/40 flex items-center justify-center">
                  <Globe2 className="w-5 h-5 text-[#38bdf8]" />
                </div>
              </div>

              {/* Node Selector Buttons */}
              <div className="space-y-2 mb-6">
                {SITE_CONFIG.tradeNodes.map((node) => {
                  const isSelected = selectedNode.id === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      className={`w-full p-3 rounded-xl text-right transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-[#D4AF37]/20 border border-[#D4AF37]/60 text-white shadow-md'
                          : 'bg-[#05070D]/70 hover:bg-[#0B1528] border border-white/5 text-[#A8B0BE]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#F3C969] animate-ping' : 'bg-[#7890AA]'}`} />
                        <span className="text-xs font-bold text-white">{node.name}</span>
                      </div>
                      <span className="text-[11px] font-en text-[#7890AA]">{node.region}</span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Node Profile */}
              <div className="p-4 rounded-xl bg-[#05070D] border border-white/10 text-right">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#F3C969] font-en uppercase">{selectedNode.type.toUpperCase()} CENTER</span>
                  <span className="text-[11px] font-mono text-[#7890AA]">{selectedNode.lat}°N • {selectedNode.lng}°E</span>
                </div>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  {selectedNode.description}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#7890AA]">
              <span>ربط آني مع شبكة الملاحة العالمية</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
