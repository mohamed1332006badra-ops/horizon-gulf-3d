import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { TradeShowcaseSection } from './components/showcase/TradeShowcaseSection';
import { SectorsSection } from './components/sectors/SectorsSection';
import { TradeNetworkSection } from './components/network/TradeNetworkSection';
import { ApproachSection } from './components/approach/ApproachSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsAppButton } from './components/layout/FloatingWhatsAppButton';
import { ShieldCheck, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class GlobalErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Recovered from component error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#05070D] text-[#F5F4EF] flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 rounded-2xl bg-[#070B14] border border-[#D4AF37]/30 shadow-2xl">
            <ShieldCheck className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">HORIZON GULF — وضع الأمان</h2>
            <p className="text-sm text-[#A8B0BE] mb-6 leading-relaxed">
              تم رصد استثناء رسومي غير متوقع. يرجى الضغط لإعادة التحميل الفوري.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#D4AF37] text-[#070B14] hover:bg-[#F3C969] transition-all flex items-center gap-2 mx-auto cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>إعادة تحميل الموقع</span>
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export function App() {
  return (
    <GlobalErrorBoundary>
      <div className="min-h-screen bg-[#05070D] text-[#F5F4EF] flex flex-col selection:bg-[#D4AF37]/30 selection:text-[#F3C969]">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Scene A: Realistic 3D Earth Hero with Night Lights & Beacons */}
          <HeroSection />

          {/* Scene B: International Trade in Motion (Ports, Vessels, Maritime) */}
          <TradeShowcaseSection />

          {/* Scene C: Business Verticals (Editorial Asymmetric Layout) */}
          <SectorsSection />

          {/* Scene D: Global Trade Corridors & Nodal Topology */}
          <TradeNetworkSection />

          {/* Scene E: Structured 4-Step Partnership Methodology */}
          <ApproachSection />

          {/* Scene F: Commercial Inquiries & Executive Contact */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Executive Floating WhatsApp Trigger */}
        <FloatingWhatsAppButton />
      </div>
    </GlobalErrorBoundary>
  );
}

export default App;
