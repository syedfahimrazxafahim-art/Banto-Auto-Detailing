import React from 'react';
import { Page } from '../types';
import { BUSINESS_INFO, SERVICES, PRICING_PACKAGES, TESTIMONIALS } from '../data/content';
import { DetailingImage } from '../components/DetailingImage';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Shield, Sparkles, Droplets, CheckCircle, ArrowRight, Star, MapPin, PhoneCall, ChevronRight } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: Page) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* 1. EDITORIAL SPLIT HERO SECTION */}
      <section className="border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 min-h-[640px] bg-[#0A0A0C]">
        {/* Left Editorial Text Column */}
        <div className="lg:col-span-7 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 sm:py-16 space-y-8 border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-mono-luxury font-bold">
                Los Angeles, California
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-editorial font-black uppercase leading-[0.9] tracking-tighter text-white">
              The <br />
              <span className="text-transparent text-stroke-gold">
                Gold
              </span> <br />
              Standard
            </h1>
          </div>

          <p className="max-w-xl text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
            Premium automotive care for those who demand perfection. Experience Los Angeles’ finest mobile detailing, multi-stage paint correction, and certified 9H ceramic coating services.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => onNavigate('book')}
              className="bg-[#C5A059] text-black px-8 py-4 uppercase text-xs font-bold font-mono-luxury tracking-widest hover:bg-white transition-all shadow-lg shadow-amber-950/30"
            >
              Book An Appointment
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="border border-[#C5A059] text-white px-8 py-4 uppercase text-xs font-bold font-mono-luxury tracking-widest hover:bg-[#C5A059] hover:text-black transition-all"
            >
              Explore Packages
            </button>
            <button
              onClick={() => onNavigate('gallery')}
              className="flex items-center gap-3 group text-xs uppercase tracking-widest font-mono-luxury font-bold text-zinc-300 hover:text-white px-2 py-4"
            >
              <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C5A059] group-hover:text-[#C5A059] transition-all">
                <ArrowRight className="w-4 h-4" />
              </span>
              <span>View Results</span>
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs font-mono-luxury">
            <div>
              <div className="text-2xl font-editorial font-bold text-[#C5A059]">5.0 ★</div>
              <div className="text-zinc-500 uppercase text-[10px] tracking-wider mt-0.5">Top-Rated LA Detailing</div>
            </div>
            <div>
              <div className="text-2xl font-editorial font-bold text-white">100%</div>
              <div className="text-zinc-500 uppercase text-[10px] tracking-wider mt-0.5">Spot-Free Deionized Water</div>
            </div>
            <div>
              <div className="text-2xl font-editorial font-bold text-white">7 Days</div>
              <div className="text-zinc-500 uppercase text-[10px] tracking-wider mt-0.5">Mobile Van Concierge</div>
            </div>
          </div>
        </div>

        {/* Right Editorial Price & Hero Image Column */}
        <div className="lg:col-span-5 flex flex-col bg-gradient-to-br from-[#141418] via-[#0D0D10] to-[#08080A]">
          {/* Top Hero Photo Preview with Ferrari */}
          <div className="h-56 sm:h-64 relative border-b border-white/10">
            <DetailingImage imageKey="ferrari_finish" className="h-full w-full border-none" />
          </div>

          {/* Fast Service Pricing List (Editorial Pattern) */}
          <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs uppercase font-mono-luxury text-zinc-500 tracking-[0.2em] pb-1">
                Direct Pricing Overview
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold font-mono-luxury">
                  01. Mobile Foam Wash
                </span>
                <span className="text-2xl font-light text-white font-mono-luxury">$149+</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold font-mono-luxury">
                  02. Interior Deep Steam
                </span>
                <span className="text-2xl font-light text-white font-mono-luxury">$199+</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold font-mono-luxury">
                  03. Signature Full Detail
                </span>
                <span className="text-2xl font-light text-white font-mono-luxury">$349+</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold font-mono-luxury">
                  04. 9H Ceramic Coating
                </span>
                <span className="text-2xl font-light text-white font-mono-luxury">$899+</span>
              </div>
            </div>

            {/* Editorial Client Quote Card */}
            <div className="bg-[#C5A059]/5 border border-[#C5A059]/30 p-6">
              <div className="text-[11px] uppercase tracking-wider text-[#C5A059] mb-2 font-mono-luxury font-bold flex items-center justify-between">
                <span>Verified Client Review</span>
                <span className="text-[#C5A059]">★★★★★</span>
              </div>
              <p className="italic font-light text-zinc-300 text-sm leading-relaxed">
                &ldquo;Banto transformed my GT3 RS. It looks better than the day I drove it off the showroom floor. Absolute attention to detail.&rdquo;
              </p>
              <div className="mt-3 flex items-center justify-between text-[10px] uppercase font-mono-luxury tracking-widest text-zinc-500">
                <span>David S. • Beverly Hills, CA</span>
                <span className="text-[#C5A059]">Porsche 911 GT3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REAL WORK PHOTOGRAPHY GRID */}
      <section className="py-16 px-6 sm:px-12 bg-[#0D0D10] border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-[#C5A059] text-xs uppercase tracking-[0.25em] font-mono-luxury font-bold block mb-1">
                Authentic Craftsmanship
              </span>
              <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-white tracking-wide">
                Real Detailing in Action Across Los Angeles
              </h2>
            </div>
            <button
              onClick={() => onNavigate('gallery')}
              className="text-xs uppercase tracking-widest font-mono-luxury text-[#C5A059] hover:text-white flex items-center gap-1 self-start md:self-auto"
            >
              Browse Full Portfolio <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1: Ferrari hand finish */}
            <div className="space-y-3 bg-[#0E0E12] p-4 border border-white/10 hover:border-[#C5A059]/50 transition-all">
              <DetailingImage imageKey="ferrari_finish" allowZoom={true} className="h-64 w-full" />
              <div className="space-y-1">
                <span className="text-[10px] font-mono-luxury uppercase tracking-widest text-[#C5A059]">01. Hand Finish</span>
                <h4 className="text-base font-editorial font-bold text-white">Ferrari 488 Hand Polish</h4>
                <p className="text-xs text-zinc-400">Microfiber inspection buffing in Beverly Hills estate driveway.</p>
              </div>
            </div>

            {/* Item 2: Mobile foam wash */}
            <div className="space-y-3 bg-[#0E0E12] p-4 border border-white/10 hover:border-[#C5A059]/50 transition-all">
              <DetailingImage imageKey="mobile_wash" allowZoom={true} className="h-64 w-full" />
              <div className="space-y-1">
                <span className="text-[10px] font-mono-luxury uppercase tracking-widest text-cyan-400">02. Mobile Concierge</span>
                <h4 className="text-base font-editorial font-bold text-white">Active Snow Foam Wash</h4>
                <p className="text-xs text-zinc-400">High-density foam cannon pre-wash on client vehicle in Downtown LA.</p>
              </div>
            </div>

            {/* Item 3: Foam bath */}
            <div className="space-y-3 bg-[#0E0E12] p-4 border border-white/10 hover:border-[#C5A059]/50 transition-all">
              <DetailingImage imageKey="foam_bath" allowZoom={true} className="h-64 w-full" />
              <div className="space-y-1">
                <span className="text-[10px] font-mono-luxury uppercase tracking-widest text-red-400">03. Paint Decon</span>
                <h4 className="text-base font-editorial font-bold text-white">Power Foam Pre-Soak</h4>
                <p className="text-xs text-zinc-400">Contactless dirt encapsulation and brake dust decontamination.</p>
              </div>
            </div>

            {/* Item 4: Lift Studio */}
            <div className="space-y-3 bg-[#0E0E12] p-4 border border-white/10 hover:border-[#C5A059]/50 transition-all">
              <DetailingImage imageKey="lift_studio" allowZoom={true} className="h-64 w-full" />
              <div className="space-y-1">
                <span className="text-[10px] font-mono-luxury uppercase tracking-widest text-[#C5A059]">04. Studio Bay</span>
                <h4 className="text-base font-editorial font-bold text-white">Ferrari F430 Hydraulic Lift</h4>
                <p className="text-xs text-zinc-400">Multi-stage paint correction under high-CRI inspection LEDs.</p>
              </div>
            </div>

            {/* Item 5: Paint Correction */}
            <div className="space-y-3 bg-[#0E0E12] p-4 border border-white/10 hover:border-[#C5A059]/50 transition-all">
              <DetailingImage imageKey="paint_correction" allowZoom={true} className="h-64 w-full" />
              <div className="space-y-1">
                <span className="text-[10px] font-mono-luxury uppercase tracking-widest text-amber-400">05. Swirl Removal</span>
                <h4 className="text-base font-editorial font-bold text-white">Rotary Paint Correction</h4>
                <p className="text-xs text-zinc-400">Precision clear-coat leveling eliminating 95%+ swirl marks and scratches.</p>
              </div>
            </div>

            {/* Item 6: Showroom Finish */}
            <div className="space-y-3 bg-[#0E0E12] p-4 border border-white/10 hover:border-[#C5A059]/50 transition-all">
              <DetailingImage imageKey="luxury_detail" allowZoom={true} className="h-64 w-full" />
              <div className="space-y-1">
                <span className="text-[10px] font-mono-luxury uppercase tracking-widest text-emerald-400">06. Showroom Gloss</span>
                <h4 className="text-base font-editorial font-bold text-white">Exotic Ceramic Delivery</h4>
                <p className="text-xs text-zinc-400">Ultra-hydrophobic ceramic glass coating and mirror gloss finish.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE BEFORE & AFTER TRANSFORMATION SLIDER */}
      <section className="py-16 px-6 sm:px-12 bg-[#08080A] border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* 4. CORE SERVICES MATRIX */}
      <section className="py-20 px-6 sm:px-12 bg-[#0A0A0C] border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-[#C5A059] text-xs uppercase tracking-[0.25em] font-mono-luxury font-bold block mb-1">
                Unrivaled Detailing Disciplines
              </span>
              <h2 className="text-3xl sm:text-5xl font-editorial font-bold text-white tracking-wide">
                Specialized Automotive Treatments
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="bg-[#18181D] hover:bg-[#C5A059] hover:text-black border border-white/10 text-white px-6 py-3 text-xs uppercase font-mono-luxury tracking-widest transition-all self-start md:self-auto"
            >
              View All 8 Services
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <div
                key={service.id}
                className="bg-[#0F0F13] border border-white/10 p-8 flex flex-col justify-between hover:border-[#C5A059]/60 transition-all group"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs uppercase font-mono-luxury text-[#C5A059] font-bold">
                      0{idx + 1}. {service.category}
                    </span>
                    <span className="text-xl font-mono-luxury font-light text-white">
                      ${service.startingPrice}+
                    </span>
                  </div>

                  <h3 className="text-2xl font-editorial font-bold text-white mb-3 group-hover:text-[#C5A059] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6 text-xs text-zinc-300 font-mono-luxury">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-zinc-500 text-[11px] font-mono-luxury">⏱ {service.duration}</span>
                  <button
                    onClick={() => onNavigate('book')}
                    className="text-xs uppercase font-mono-luxury font-bold text-[#C5A059] hover:text-white flex items-center gap-1"
                  >
                    Book Service <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY BANTO AUTO DETAILING (THE 4 PILLARS) */}
      <section className="py-20 px-6 sm:px-12 bg-[#060608] border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-mono-luxury font-bold">
              The Banto Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-white">
              Why Discerning LA Drivers Choose Us
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
              We reject high-volume shortcuts in favor of bespoke chemistry, certified paint safety, and spotless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0C0C0F] border border-white/10 p-8 space-y-4">
              <div className="w-12 h-12 bg-[#C5A059]/10 border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center">
                <Droplets className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-editorial font-bold text-white">0-PPM Spot-Free Water</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Our mobile units utilize deionized filtration systems delivering pure zero-TDS water that guarantees zero mineral water-spot etching even under hot California sun.
              </p>
            </div>

            <div className="bg-[#0C0C0F] border border-white/10 p-8 space-y-4">
              <div className="w-12 h-12 bg-[#C5A059]/10 border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-editorial font-bold text-white">Paint Depth Gauge Scans</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Before machine polishing any panel, we measure clear coat thickness in microns to safely jewel paintwork without risking clear coat strike-through.
              </p>
            </div>

            <div className="bg-[#0C0C0F] border border-white/10 p-8 space-y-4">
              <div className="w-12 h-12 bg-[#C5A059]/10 border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-editorial font-bold text-white">Steam Sanitization</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                220°F commercial dry vapor steam penetrates seat fabric, AC channels, and leather crevices to destroy bacteria, allergens, and odors without harsh residues.
              </p>
            </div>

            <div className="bg-[#0C0C0F] border border-white/10 p-8 space-y-4">
              <div className="w-12 h-12 bg-[#C5A059]/10 border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-editorial font-bold text-white">Mobile Van Concierge</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Zero hassle. We arrive at your residential driveway, gated estate, or corporate parking stall anywhere in Los Angeles with our own power and water.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PACKAGES & PRICING PREVIEW */}
      <section className="py-20 px-6 sm:px-12 bg-[#0A0A0C] border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-[#C5A059] text-xs uppercase tracking-[0.25em] font-mono-luxury font-bold block mb-1">
                Transparent Pricing
              </span>
              <h2 className="text-3xl sm:text-5xl font-editorial font-bold text-white tracking-wide">
                Signature Detailing Packages
              </h2>
            </div>
            <button
              onClick={() => onNavigate('pricing')}
              className="text-xs uppercase tracking-widest font-mono-luxury text-[#C5A059] hover:text-white flex items-center gap-1"
            >
              Compare All Vehicle Sizes & Add-ons <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRICING_PACKAGES.map(pkg => (
              <div
                key={pkg.id}
                className={`p-8 sm:p-10 flex flex-col justify-between border transition-all ${
                  pkg.popular
                    ? 'border-[#C5A059] bg-[#C5A059]/5 shadow-[0_0_30px_rgba(197,160,89,0.1)] relative'
                    : 'border-white/10 bg-[#0E0E12]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-8 bg-[#C5A059] text-black font-bold text-[10px] uppercase font-mono-luxury tracking-widest px-3 py-0.5">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs uppercase tracking-widest font-mono-luxury text-[#C5A059] font-bold">
                      {pkg.tier}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono-luxury">⏱ {pkg.duration}</span>
                  </div>

                  <h3 className="text-2xl font-editorial font-bold text-white">{pkg.name}</h3>
                  
                  <div className="my-6 pb-6 border-b border-white/10">
                    <span className="text-4xl font-editorial font-bold text-white">${pkg.sedanPrice}</span>
                    <span className="text-xs text-zinc-400 font-mono-luxury ml-2">/ Coupe & Sedan</span>
                    <div className="text-[11px] text-zinc-500 font-mono-luxury mt-1">
                      SUV: ${pkg.suvPrice} • Truck/Van: ${pkg.truckPrice}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 mb-6">{pkg.tagline}</p>

                  <ul className="space-y-3 mb-8 text-xs text-zinc-300">
                    {pkg.features.slice(0, 6).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onNavigate('book')}
                  className={`w-full py-4 text-xs uppercase font-mono-luxury tracking-widest font-bold transition-all text-center ${
                    pkg.popular
                      ? 'bg-[#C5A059] hover:bg-white text-black'
                      : 'border border-white/20 hover:border-[#C5A059] text-white hover:text-[#C5A059]'
                  }`}
                >
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VERIFIED CLIENT REVIEWS */}
      <section className="py-20 px-6 sm:px-12 bg-[#060608] border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-mono-luxury font-bold">
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-white">
              Trusted by Los Angeles Vehicle Enthusiasts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map(t => (
              <div
                key={t.id}
                className="bg-[#0C0C0F] border border-white/10 p-6 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex text-[#C5A059] mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-zinc-300 italic leading-relaxed mb-4">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 font-mono-luxury">
                  <div className="text-xs font-bold text-white">{t.name}</div>
                  <div className="text-[10px] text-zinc-500">{t.location}</div>
                  <div className="text-[10px] text-[#C5A059] mt-1">{t.vehicle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LOS ANGELES COVERAGE & FINAL CTA */}
      <section className="py-20 px-6 sm:px-12 bg-[#0D0D10]">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#18181E] to-[#0A0A0D] border border-[#C5A059]/40 p-8 sm:p-16 text-center space-y-6">
          <span className="text-[#C5A059] uppercase tracking-[0.3em] text-xs font-mono-luxury font-bold">
            Direct Booking & Fast Quotes
          </span>
          <h2 className="text-3xl sm:text-5xl font-editorial font-bold text-white tracking-wide">
            Reserve Your Los Angeles Detailing Slot
          </h2>
          <p className="text-zinc-300 max-w-xl mx-auto text-sm leading-relaxed">
            Call, text, or book online in 60 seconds. We service residences, private garages, and commercial towers across Beverly Hills, Santa Monica, Downtown LA, and all surrounding communities.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <button
              onClick={() => onNavigate('book')}
              className="bg-[#C5A059] hover:bg-white text-black font-bold px-10 py-4 text-xs uppercase tracking-widest font-mono-luxury transition-all shadow-xl"
            >
              Start Online Booking
            </button>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="border border-white/20 hover:border-white text-white px-8 py-4 text-xs uppercase tracking-widest font-mono-luxury flex items-center gap-2 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#C5A059]" />
              Call {BUSINESS_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
