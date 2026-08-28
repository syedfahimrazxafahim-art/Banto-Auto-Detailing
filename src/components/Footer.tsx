import React from 'react';
import { Page } from '../types';
import { BUSINESS_INFO, SERVICES } from '../data/content';
import { BrandLogo } from './BrandLogo';
import { Phone, MapPin, Clock, MessageSquare, Instagram, Facebook, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#060608] border-t border-white/10 text-zinc-400">
      {/* Top Pre-Footer Callout */}
      <div className="border-b border-white/10 py-12 px-6 sm:px-12 bg-gradient-to-b from-[#0D0D10] to-[#060608]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[#C5A059] uppercase tracking-[0.3em] text-xs font-mono-luxury font-bold">
              Uncompromising Quality in Los Angeles
            </span>
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-white tracking-wide">
              Ready to Experience The Gold Standard in Detailing?
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl">
              We bring mobile precision detailing directly to your residence or office, or welcome you to our Los Angeles studio bay.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate('book')}
              className="bg-[#C5A059] hover:bg-white text-black font-bold px-8 py-4 text-xs uppercase tracking-widest font-mono-luxury transition-all shadow-lg"
            >
              Get Instant Quote / Book
            </button>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#25D366]/40 hover:border-[#25D366] bg-[#25D366]/10 text-[#25D366] px-6 py-4 text-xs uppercase tracking-widest font-mono-luxury flex items-center gap-2 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-xs">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-6">
          <BrandLogo size="lg" />
          <p className="text-zinc-400 leading-relaxed max-w-sm">
            Los Angeles’ premier mobile and studio automotive detailing firm. Specializing in multi-stage paint correction, 9H ceramic coatings, interior steam sanitization, and luxury vehicle care.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-white/10 hover:border-[#C5A059] flex items-center justify-center text-zinc-300 hover:text-[#C5A059] transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-white/10 hover:border-[#C5A059] flex items-center justify-center text-zinc-300 hover:text-[#C5A059] transition-colors"
              aria-label="Facebook Profile"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-white/10 hover:border-[#25D366] flex items-center justify-center text-zinc-300 hover:text-[#25D366] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 text-[11px] font-mono-luxury text-zinc-300">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            Fully Insured & Certified Master Detailers
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-mono-luxury font-bold block">
            Navigation
          </span>
          <ul className="space-y-2.5 font-mono-luxury text-zinc-400">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'All Services' },
              { id: 'pricing', label: 'Pricing & Packages' },
              { id: 'gallery', label: 'Before & After Results' },
              { id: 'about', label: 'Our Philosophy' },
              { id: 'book', label: 'Online Booking' },
              { id: 'contact', label: 'Contact & Service Areas' },
            ].map(item => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id as Page)}
                  className="hover:text-[#C5A059] transition-colors text-left"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services List */}
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-mono-luxury font-bold block">
            Core Treatments
          </span>
          <ul className="space-y-2.5 text-zinc-400">
            {SERVICES.slice(0, 6).map(service => (
              <li key={service.id}>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  {service.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Hours */}
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-mono-luxury font-bold block">
            Direct Contact
          </span>
          <div className="space-y-3 font-mono-luxury">
            <div>
              <span className="text-zinc-500 uppercase text-[10px] block">Telephone & WhatsApp</span>
              <a href={BUSINESS_INFO.phoneTel} className="text-white hover:text-[#C5A059] font-bold text-sm block">
                {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>

            <div>
              <span className="text-zinc-500 uppercase text-[10px] block">Location</span>
              <span className="text-white block">{BUSINESS_INFO.city}</span>
            </div>

            <div>
              <span className="text-zinc-500 uppercase text-[10px] block">Operating Hours</span>
              <span className="text-zinc-300 block">{BUSINESS_INFO.hours}</span>
            </div>

            <div>
              <span className="text-zinc-500 uppercase text-[10px] block">Instagram</span>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A059] hover:underline flex items-center gap-1"
              >
                {BUSINESS_INFO.instagramHandle} <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Los Angeles Service Areas Bar */}
      <div className="border-t border-white/5 py-6 px-6 sm:px-12 bg-[#050507]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono-luxury text-zinc-500">
          <div>
            <span className="text-zinc-400 font-bold uppercase tracking-wider mr-2">Service Radius:</span>
            {BUSINESS_INFO.areasServed.join(' • ')}
          </div>
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
