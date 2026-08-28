import React, { useState } from 'react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { BrandLogo } from './BrandLogo';
import { Phone, MessageSquare, Menu, X, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing & Packages' },
    { id: 'gallery', label: 'Results & Gallery' },
    { id: 'about', label: 'About & Standards' },
    { id: 'contact', label: 'Contact & Areas' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0C]/90 backdrop-blur-md border-b border-white/10 transition-all">
      {/* Top Notification / Hotline Bar */}
      <div className="bg-[#050507] border-b border-white/5 px-4 sm:px-12 py-1.5 flex justify-between items-center text-[10px] uppercase font-mono-luxury text-zinc-400">
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
            Greater Los Angeles Mobile & Studio Detailing
          </span>
          <span className="text-zinc-500 hidden md:inline">|</span>
          <span className="text-zinc-400">Hours: Mon-Sun 7AM – 8PM</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="text-white hover:text-[#C5A059] transition-colors flex items-center gap-1 font-bold"
          >
            <Phone className="w-3 h-3 text-[#C5A059]" />
            {BUSINESS_INFO.phoneFormatted}
          </a>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:text-white transition-colors flex items-center gap-1"
          >
            <MessageSquare className="w-3 h-3" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <div className="px-4 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="cursor-pointer"
        >
          <BrandLogo size="md" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-medium font-mono-luxury">
          {navLinks.map(link => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? 'text-[#C5A059] font-bold'
                    : 'text-zinc-300 hover:text-[#C5A059]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] shadow-[0_0_8px_#C5A059]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('book')}
            className="bg-[#C5A059] hover:bg-white text-black px-6 py-2.5 text-xs font-bold uppercase tracking-wider font-mono-luxury transition-all flex items-center gap-2 shadow-lg shadow-amber-950/20"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book Detailing
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-300 hover:text-white border border-white/10"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0E] border-b border-white/10 px-6 py-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-sm uppercase tracking-widest font-mono-luxury py-2 border-b border-white/5 flex items-center justify-between ${
                  currentPage === link.id ? 'text-[#C5A059] font-bold' : 'text-zinc-300'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-zinc-600">0{idx + 1}</span>
              </button>
            ))}
          </nav>

          <div className="pt-4 space-y-3">
            <button
              onClick={() => handleNavClick('book')}
              className="w-full bg-[#C5A059] text-black font-bold py-3.5 text-xs uppercase tracking-widest text-center block font-mono-luxury"
            >
              Book An Appointment
            </button>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-[#25D366] text-[#25D366] py-3 text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 font-mono-luxury"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp ({BUSINESS_INFO.phone})
            </a>
          </div>

          <div className="pt-2 text-[10px] text-zinc-500 uppercase tracking-widest font-mono-luxury text-center">
            Los Angeles, CA • Mon-Sun 7AM – 8PM
          </div>
        </div>
      )}
    </header>
  );
};
