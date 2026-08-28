import React, { useState } from 'react';
import { Page, VehicleType } from '../types';
import { PRICING_PACKAGES, ADDONS, FAQS, BUSINESS_INFO } from '../data/content';
import { Check, Sparkles, HelpCircle, Shield, ArrowRight } from 'lucide-react';

interface PricingViewProps {
  onNavigate: (page: Page) => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ onNavigate }) => {
  const [vehicleType, setVehicleType] = useState<VehicleType>('coupe_sedan');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const getPackagePrice = (pkg: typeof PRICING_PACKAGES[0]) => {
    switch (vehicleType) {
      case 'suv_crossover':
        return pkg.suvPrice;
      case 'truck_van':
        return pkg.truckPrice;
      case 'coupe_sedan':
      default:
        return pkg.sedanPrice;
    }
  };

  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = ADDONS.find(a => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  return (
    <div className="bg-[#0A0A0C] min-h-screen">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 border-b border-white/10 bg-gradient-to-b from-[#141418] to-[#0A0A0C] text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-mono-luxury font-bold block">
            Transparent Investment
          </span>
          <h1 className="text-4xl sm:text-6xl font-editorial font-black uppercase text-white tracking-tight">
            Detailing Packages & Pricing
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed">
            No surprise surcharges. Transparent flat-rate tiers calibrated to vehicle dimension, clear coat severity, and desired longevity.
          </p>

          {/* Interactive Vehicle Size Switcher */}
          <div className="pt-8">
            <span className="text-[11px] uppercase tracking-widest font-mono-luxury text-zinc-400 block mb-3">
              Step 1: Select Your Vehicle Profile
            </span>
            <div className="inline-flex flex-wrap p-1.5 bg-[#121216] border border-white/15 rounded-none gap-2">
              {[
                { id: 'coupe_sedan', label: 'Coupe / Sedan / Sports' },
                { id: 'suv_crossover', label: 'Mid-Size SUV / Crossover' },
                { id: 'truck_van', label: 'Full-Size Truck / Van / 3-Row' },
              ].map(btn => (
                <button
                  key={btn.id}
                  onClick={() => setVehicleType(btn.id as VehicleType)}
                  className={`px-5 py-3 text-xs uppercase font-mono-luxury tracking-wider transition-all ${
                    vehicleType === btn.id
                      ? 'bg-[#C5A059] text-black font-bold shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Package Comparison Cards */}
      <section className="py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRICING_PACKAGES.map(pkg => {
              const price = getPackagePrice(pkg);
              return (
                <div
                  key={pkg.id}
                  className={`p-8 sm:p-10 flex flex-col justify-between border transition-all ${
                    pkg.popular
                      ? 'border-[#C5A059] bg-[#C5A059]/5 shadow-[0_0_35px_rgba(197,160,89,0.15)] relative'
                      : 'border-white/10 bg-[#0E0E12]'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-8 bg-[#C5A059] text-black font-bold text-[10px] uppercase font-mono-luxury tracking-widest px-3 py-0.5">
                      Client Favorite
                    </div>
                  )}

                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs uppercase tracking-widest font-mono-luxury text-[#C5A059] font-bold">
                        {pkg.tier}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono-luxury">⏱ {pkg.duration}</span>
                    </div>

                    <h3 className="text-3xl font-editorial font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-xs text-zinc-400 mb-6">{pkg.tagline}</p>

                    <div className="pb-6 mb-6 border-b border-white/10">
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-editorial font-bold text-white">${price}</span>
                        <span className="text-xs text-zinc-400 font-mono-luxury">/ flat rate</span>
                      </div>
                      <span className="text-[11px] text-[#C5A059] font-mono-luxury mt-1 block">
                        Calculated for {vehicleType.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="text-xs uppercase font-mono-luxury font-bold text-white tracking-wider">
                        Package Inclusions:
                      </div>
                      <ul className="space-y-3 text-xs text-zinc-300">
                        {pkg.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('book')}
                    className={`w-full py-4 text-xs uppercase font-mono-luxury tracking-widest font-bold transition-all text-center ${
                      pkg.popular
                        ? 'bg-[#C5A059] hover:bg-white text-black'
                        : 'border border-white/20 hover:border-[#C5A059] text-white hover:text-[#C5A059]'
                    }`}
                  >
                    Select {pkg.name}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Add-ons Section */}
          <div className="bg-[#0E0E12] border border-white/10 p-8 sm:p-12 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-[#C5A059] text-xs uppercase tracking-[0.25em] font-mono-luxury font-bold block mb-1">
                  Custom Upgrades
                </span>
                <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-white">
                  Add-on Treatments & Protection Upgrades
                </h3>
              </div>
              {selectedAddons.length > 0 && (
                <div className="bg-[#C5A059]/10 border border-[#C5A059] px-4 py-2 text-xs font-mono-luxury text-[#C5A059]">
                  {selectedAddons.length} Add-on(s) Selected (+${addonsTotal})
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ADDONS.map(addon => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-5 border cursor-pointer flex flex-col justify-between transition-all ${
                      isSelected
                        ? 'border-[#C5A059] bg-[#C5A059]/10'
                        : 'border-white/10 bg-[#121216] hover:border-white/25'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] uppercase font-mono-luxury text-zinc-400">
                          {addon.category}
                        </span>
                        <span className="text-sm font-bold font-mono-luxury text-[#C5A059]">
                          +${addon.price}
                        </span>
                      </div>
                      <h4 className="text-base font-editorial font-bold text-white mb-1.5">{addon.name}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">{addon.description}</p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-luxury">
                      <span className={isSelected ? 'text-[#C5A059] font-bold' : 'text-zinc-500'}>
                        {isSelected ? '✓ Added to Custom Quote' : '+ Click to Add'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => onNavigate('book')}
                className="bg-[#C5A059] text-black font-bold px-8 py-4 text-xs uppercase font-mono-luxury tracking-widest hover:bg-white transition-all flex items-center gap-2"
              >
                Proceed to Booking Wizard <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-16 px-6 sm:px-12 bg-[#060608] border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-mono-luxury font-bold">
              Clarity & Transparency
            </span>
            <h2 className="text-3xl font-editorial font-bold text-white">Pricing & Booking FAQs</h2>
          </div>

          <div className="space-y-4">
            {FAQS.slice(0, 4).map((faq, i) => (
              <div key={i} className="bg-[#0D0D10] border border-white/10 p-6 space-y-2">
                <h4 className="text-base font-editorial font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
