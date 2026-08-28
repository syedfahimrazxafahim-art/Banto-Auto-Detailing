import React, { useState } from 'react';
import { Page } from '../types';
import { SERVICES, BUSINESS_INFO } from '../data/content';
import { DetailingImage } from '../components/DetailingImage';
import { Check, Clock, Sparkles, Shield, ChevronRight, MessageSquare } from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (page: Page) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'exterior' | 'interior' | 'ceramic' | 'mobile'>('all');

  const filteredServices = filter === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === filter);

  return (
    <div className="bg-[#0A0A0C] min-h-screen">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 border-b border-white/10 bg-gradient-to-b from-[#141418] to-[#0A0A0C]">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-mono-luxury font-bold block">
            Craftsmanship & Detailing Catalog
          </span>
          <h1 className="text-4xl sm:text-6xl font-editorial font-black uppercase text-white tracking-tight">
            Specialized Automotive Services
          </h1>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            From contactless snow foam decontamination and interior hospital-grade steam sanitization to multi-stage optical paint correction and certified 9H ceramic glass shields.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-6 font-mono-luxury text-xs">
            {[
              { id: 'all', label: 'All Services (8)' },
              { id: 'exterior', label: 'Exterior & Polishing' },
              { id: 'ceramic', label: '9H Ceramic Coatings' },
              { id: 'interior', label: 'Interior & Leather' },
              { id: 'mobile', label: 'Mobile Detailing' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-5 py-2.5 uppercase tracking-wider transition-all border ${
                  filter === tab.id
                    ? 'bg-[#C5A059] border-[#C5A059] text-black font-bold'
                    : 'border-white/10 bg-[#101014] text-zinc-400 hover:text-white hover:border-white/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="bg-[#0E0E12] border border-white/10 grid grid-cols-1 lg:grid-cols-12 overflow-hidden hover:border-[#C5A059]/50 transition-all"
            >
              {/* Visual Photo Card */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-white/10">
                <DetailingImage imageKey={service.imageKey} className="h-full w-full border-none" />
              </div>

              {/* Service Details Column */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4">
                    <span className="text-xs uppercase tracking-widest font-mono-luxury text-[#C5A059] font-bold">
                      0{idx + 1}. {service.category.toUpperCase()} TREATMENT
                    </span>
                    <div className="flex items-center gap-4 text-xs font-mono-luxury">
                      <span className="text-zinc-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#C5A059]" /> {service.duration}
                      </span>
                      <span className="text-xl font-editorial font-bold text-white">
                        From ${service.startingPrice}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-white mb-2">
                    {service.title}
                  </h2>
                  <div className="text-xs text-[#C5A059] font-mono-luxury uppercase tracking-wider mb-4">
                    {service.tagline}
                  </div>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="bg-[#14141A] border border-white/5 p-4 mb-6 text-xs text-zinc-400">
                    <strong className="text-zinc-200 block mb-1 font-mono-luxury uppercase text-[11px]">
                      Recommended For:
                    </strong>
                    {service.recommendedFor}
                  </div>

                  <div>
                    <h4 className="text-xs uppercase font-mono-luxury font-bold text-[#C5A059] tracking-wider mb-3">
                      Complete Step-by-Step Inclusions:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                      {service.inclusions.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => onNavigate('book')}
                    className="bg-[#C5A059] hover:bg-white text-black font-bold px-8 py-3.5 text-xs uppercase tracking-widest font-mono-luxury transition-all"
                  >
                    Book This Service
                  </button>

                  <a
                    href={`${BUSINESS_INFO.whatsappUrl}&text=Hello%2C%20I%20have%20a%20question%20about%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono-luxury text-zinc-400 hover:text-[#25D366] flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4" /> Ask via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
