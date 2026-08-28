import React from 'react';
import { BUSINESS_INFO } from '../data/content';
import { Page } from '../types';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  onNavigate: (page: Page) => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onNavigate }) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-40 flex items-center justify-between sm:justify-end gap-2 bg-[#0B0B0E]/95 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none p-2 sm:p-0 border border-white/10 sm:border-none shadow-2xl">
      {/* WhatsApp Button */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 sm:flex-initial bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold px-4 py-3 text-xs uppercase tracking-wider font-mono-luxury flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span className="inline">WhatsApp</span>
      </a>

      {/* Direct Call Button */}
      <a
        href={BUSINESS_INFO.phoneTel}
        className="flex-1 sm:flex-initial bg-zinc-900 hover:bg-zinc-800 text-white border border-white/20 px-4 py-3 text-xs uppercase tracking-wider font-mono-luxury flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
        title="Call Directly"
      >
        <Phone className="w-4 h-4 text-[#C5A059]" />
        <span className="hidden sm:inline">Call (213) 956-2029</span>
        <span className="sm:hidden">Call</span>
      </a>

      {/* Book Button */}
      <button
        onClick={() => onNavigate('book')}
        className="flex-1 sm:flex-initial bg-[#C5A059] hover:bg-white text-black font-bold px-4 sm:px-6 py-3 text-xs uppercase tracking-wider font-mono-luxury flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
      >
        <Calendar className="w-4 h-4" />
        <span className="inline">Book</span>
      </button>
    </div>
  );
};
