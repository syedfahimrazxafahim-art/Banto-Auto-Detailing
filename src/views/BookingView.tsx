import React from 'react';
import { Page } from '../types';
import { BookingWizard } from '../components/BookingWizard';
import { BUSINESS_INFO } from '../data/content';
import { Phone, MessageSquare, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

interface BookingViewProps {
  onNavigate: (page: Page) => void;
}

export const BookingView: React.FC<BookingViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0A0A0C] min-h-screen py-12 sm:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Page Title */}
        <div className="text-center space-y-3">
          <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-mono-luxury font-bold">
            Online Reservation & Custom Estimate
          </span>
          <h1 className="text-4xl sm:text-6xl font-editorial font-black uppercase text-white tracking-tight">
            Book Your Detailing Service
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed">
            Customize your vehicle package, calculate your estimated investment in real-time, and schedule mobile or studio detailing across Los Angeles.
          </p>
        </div>

        {/* Quick Contact Helpline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono-luxury text-xs">
          <div className="bg-[#0E0E12] border border-white/10 p-4 flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#C5A059] shrink-0" />
            <div>
              <span className="text-zinc-500 uppercase text-[10px] block">Prefer Phone Booking?</span>
              <a href={BUSINESS_INFO.phoneTel} className="text-white hover:text-[#C5A059] font-bold">
                {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>
          </div>

          <div className="bg-[#0E0E12] border border-white/10 p-4 flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-[#25D366] shrink-0" />
            <div>
              <span className="text-zinc-500 uppercase text-[10px] block">WhatsApp Instant Desk</span>
              <a href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold">
                Chat 213-956-2029
              </a>
            </div>
          </div>

          <div className="bg-[#0E0E12] border border-white/10 p-4 flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#C5A059] shrink-0" />
            <div>
              <span className="text-zinc-500 uppercase text-[10px] block">Operating Hours</span>
              <span className="text-white font-bold">Mon-Sun 7AM – 8PM</span>
            </div>
          </div>
        </div>

        {/* The Interactive Booking Wizard */}
        <BookingWizard />

        {/* Trust Badges Bar */}
        <div className="border-t border-white/10 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-zinc-400 font-mono-luxury">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0" />
            <span>100% Satisfaction Guarantee on all paint correction and ceramic packages.</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#C5A059] shrink-0" />
            <span>Free cancellation up to 24 hours prior to appointment.</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0" />
            <span>Fully licensed and insured in the state of California.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
