import React from 'react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { DetailingImage } from '../components/DetailingImage';
import { Shield, Sparkles, Droplets, Award, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: Page) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0A0A0C] min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 border-b border-white/10 bg-gradient-to-b from-[#141418] to-[#0A0A0C]">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-mono-luxury font-bold block">
            Craftsmanship & Standards
          </span>
          <h1 className="text-4xl sm:text-6xl font-editorial font-black uppercase text-white tracking-tight">
            The Banto Detailing Standard
          </h1>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Founded in Los Angeles with a single mission: to provide uncompromising, surgical-grade automotive care for exotic, luxury, and enthusiast vehicles.
          </p>
        </div>
      </section>

      {/* Story & Philosophy Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-mono-luxury text-[#C5A059] tracking-widest font-bold">
              01. Perfectionist Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-white leading-tight">
              We Don&apos;t Wash Cars. <br />
              We Restore Optical Clarity.
            </h2>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Standard automated car washes and rushed mobile operators inflict thousands of microscopic scratches into clear coats each year. At Banto Auto Detailing, we treat automotive paint as fine art.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Every vehicle entrusted to us undergoes a multi-stage contactless decontamination process, digital paint depth readings, and bespoke chemical leveling tailored to the vehicle&apos;s clear coat hardness (from soft Japanese finishes to ultra-hard German ceramic clears).
            </p>

            <div className="space-y-3 pt-2 font-mono-luxury text-xs text-zinc-300">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                <span>Certified Master Paint Correction Specialists</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                <span>100% Deionized 0-PPM Spot-Free Water Filtration</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                <span>Fully Licensed, Insured, and Bonded in California</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <DetailingImage imageKey="lift_studio" className="h-96 w-full" showCaption />
          </div>
        </div>
      </section>

      {/* Equipment & Chemical Rigor */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 bg-[#060608] border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-mono-luxury font-bold">
              The Arsenal
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-white">
              Professional Grade Technology & Products
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
              We never cut corners with cheap bulk chemicals. We exclusively deploy European and American detailing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0D0D10] border border-white/10 p-8 space-y-4">
              <div className="text-2xl text-[#C5A059] font-mono-luxury">01. Dual-Action Polishers</div>
              <h4 className="text-lg font-editorial font-bold text-white">Rupes & Flex Machine Systems</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Random orbital dual-action technology prevents friction burn-through and eliminates holograms, producing a true level mirror finish without swirls.
              </p>
            </div>

            <div className="bg-[#0D0D10] border border-white/10 p-8 space-y-4">
              <div className="text-2xl text-[#C5A059] font-mono-luxury">02. 9H Nano-Ceramics</div>
              <h4 className="text-lg font-editorial font-bold text-white">Covalent Bonding Chemistry</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Pro-grade ceramic coatings with high silica (SiO2) concentration that create an impenetrable hydrophobic armor lasting years against California UV rays and fallout.
              </p>
            </div>

            <div className="bg-[#0D0D10] border border-white/10 p-8 space-y-4">
              <div className="text-2xl text-[#C5A059] font-mono-luxury">03. 220°F Dry Vapor Steam</div>
              <h4 className="text-lg font-editorial font-bold text-white">Hospital-Grade Sanitization</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Thermal disinfection without oversaturating foam cushions. Kills bacteria and dust mites in air vents and restores leather to a natural OEM matte texture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 px-6 sm:px-12 bg-[#0A0A0C]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-white">
            Experience White-Glove Detailing in Los Angeles
          </h2>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto">
            Book our mobile van to your driveway or arrange a studio appointment for comprehensive ceramic shielding.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('book')}
              className="bg-[#C5A059] hover:bg-white text-black font-bold px-10 py-4 text-xs uppercase font-mono-luxury tracking-widest transition-all"
            >
              Book An Appointment
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="border border-white/20 text-white px-8 py-4 text-xs uppercase font-mono-luxury tracking-widest hover:border-[#C5A059]"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
