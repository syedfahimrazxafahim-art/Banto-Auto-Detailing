import React, { useState } from 'react';
import { Page } from '../types';
import { BUSINESS_INFO, FAQS } from '../data/content';
import { Phone, MessageSquare, MapPin, Clock, Instagram, Facebook, Send, CheckCircle, ChevronDown } from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: Page) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: 'Signature Full Detail',
    location: 'Beverly Hills / West LA',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Banto Auto Detailing! My name is ${contactData.name || 'Client'}. I am inquiring about ${contactData.serviceInterest} in ${contactData.location}. Message: ${contactData.message || 'Please provide information.'}`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#0A0A0C] min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 border-b border-white/10 bg-gradient-to-b from-[#141418] to-[#0A0A0C]">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-mono-luxury font-bold block">
            Direct Concierge Contact
          </span>
          <h1 className="text-4xl sm:text-6xl font-editorial font-black uppercase text-white tracking-tight">
            Contact & Service Areas
          </h1>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Reach our master detailing concierge directly by phone, WhatsApp, or contact form for quick quotes, fleet inquiries, or custom studio appointments.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 px-6 sm:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase font-mono-luxury text-[#C5A059] font-bold tracking-widest block mb-1">
                Direct Communication
              </span>
              <h2 className="text-3xl font-editorial font-bold text-white">
                Get In Touch
              </h2>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4 font-mono-luxury text-xs">
              <div className="bg-[#0E0E12] border border-white/10 p-6 space-y-2">
                <span className="text-zinc-500 uppercase text-[10px] block">Telephone & SMS</span>
                <a href={BUSINESS_INFO.phoneTel} className="text-white hover:text-[#C5A059] text-xl font-bold block">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
                <p className="text-zinc-400 text-[11px]">Direct dispatch line for Los Angeles bookings.</p>
              </div>

              <div className="bg-[#0E0E12] border border-[#25D366]/30 p-6 space-y-2">
                <span className="text-[#25D366] uppercase text-[10px] block font-bold">WhatsApp Direct Message</span>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] text-xl font-bold block hover:underline"
                >
                  (213) 956-2029
                </a>
                <p className="text-zinc-400 text-[11px]">Send photos of your vehicle paint for immediate quote assessment.</p>
              </div>

              <div className="bg-[#0E0E12] border border-white/10 p-6 space-y-2">
                <span className="text-zinc-500 uppercase text-[10px] block">Location & Radius</span>
                <span className="text-white text-base font-bold block">{BUSINESS_INFO.city}</span>
                <p className="text-zinc-400 text-[11px]">Mobile service coverage spanning a 40-mile radius across LA County.</p>
              </div>

              <div className="bg-[#0E0E12] border border-white/10 p-6 space-y-2">
                <span className="text-zinc-500 uppercase text-[10px] block">Operating Hours</span>
                <span className="text-white text-sm font-bold block">{BUSINESS_INFO.hours}</span>
                <p className="text-zinc-400 text-[11px]">Available 7 days a week by appointment.</p>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-2">
              <span className="text-xs uppercase font-mono-luxury text-zinc-500 tracking-wider block mb-3">
                Official Social Profiles
              </span>
              <div className="flex gap-4">
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#121216] border border-white/10 hover:border-[#C5A059] p-4 flex items-center gap-3 transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-[#C5A059]" />
                  <div>
                    <span className="text-xs font-bold text-white block group-hover:text-[#C5A059]">Instagram</span>
                    <span className="text-[10px] text-zinc-500 font-mono-luxury">{BUSINESS_INFO.instagramHandle}</span>
                  </div>
                </a>

                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#121216] border border-white/10 hover:border-[#C5A059] p-4 flex items-center gap-3 transition-colors group"
                >
                  <Facebook className="w-5 h-5 text-[#C5A059]" />
                  <div>
                    <span className="text-xs font-bold text-white block group-hover:text-[#C5A059]">Facebook</span>
                    <span className="text-[10px] text-zinc-500 font-mono-luxury">Banto Detailing</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0E0E12] border border-white/10 p-8 sm:p-12">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#C5A059]/10 border border-[#C5A059] text-[#C5A059] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-editorial font-bold text-white">Message Dispatched</h3>
                <p className="text-zinc-400 text-xs max-w-md mx-auto">
                  Thank you, <strong className="text-white">{contactData.name}</strong>. Our detailing team will get back to you at <strong className="text-[#C5A059]">{contactData.phone}</strong> shortly.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="bg-[#25D366] text-black font-bold px-6 py-3 text-xs uppercase font-mono-luxury tracking-widest"
                  >
                    Open in WhatsApp
                  </button>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="border border-white/20 text-white px-6 py-3 text-xs uppercase font-mono-luxury tracking-widest"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs uppercase font-mono-luxury text-[#C5A059] tracking-widest font-bold block mb-1">
                    Inquiry Form
                  </span>
                  <h3 className="text-2xl font-editorial font-bold text-white">Send Us A Message</h3>
                  <p className="text-xs text-zinc-400 mt-1">We respond to all requests within 1 hour during business hours.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono-luxury text-zinc-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactData.name}
                      onChange={e => setContactData({ ...contactData, name: e.target.value })}
                      placeholder="e.g. Robert Thorne"
                      className="w-full bg-[#14141A] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono-luxury text-zinc-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactData.phone}
                      onChange={e => setContactData({ ...contactData, phone: e.target.value })}
                      placeholder="e.g. (213) 956-2029"
                      className="w-full bg-[#14141A] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono-luxury text-zinc-300 mb-2">
                      Service of Interest
                    </label>
                    <select
                      value={contactData.serviceInterest}
                      onChange={e => setContactData({ ...contactData, serviceInterest: e.target.value })}
                      className="w-full bg-[#14141A] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Signature Full Detail">Signature Full Detail ($349+)</option>
                      <option value="9H Ceramic Coating & Correction">9H Ceramic Coating & Correction ($899+)</option>
                      <option value="Mobile Detailing Concierge">Mobile Detailing Concierge ($199+)</option>
                      <option value="Interior Deep Steam Sanitization">Interior Deep Steam Sanitization ($199+)</option>
                      <option value="Paint Correction & Polish">Paint Correction & Multi-Stage Polish ($499+)</option>
                      <option value="Fleet / Corporate Maintenance">Fleet / Corporate Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono-luxury text-zinc-300 mb-2">
                      Your Neighborhood / City
                    </label>
                    <input
                      type="text"
                      value={contactData.location}
                      onChange={e => setContactData({ ...contactData, location: e.target.value })}
                      placeholder="e.g. Beverly Hills, Santa Monica, DTLA"
                      className="w-full bg-[#14141A] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono-luxury text-zinc-300 mb-2">
                    Message / Vehicle Details
                  </label>
                  <textarea
                    rows={4}
                    value={contactData.message}
                    onChange={e => setContactData({ ...contactData, message: e.target.value })}
                    placeholder="Tell us about your vehicle model, paint condition, or any specific stains/scratches..."
                    className="w-full bg-[#14141A] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-[#C5A059] hover:bg-white text-black font-bold py-4 px-6 text-xs uppercase font-mono-luxury tracking-widest transition-all"
                  >
                    Submit Request
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold py-4 px-6 text-xs uppercase font-mono-luxury tracking-widest flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Quick WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Los Angeles Service Areas Grid */}
      <section className="py-16 px-6 sm:px-12 bg-[#08080A] border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-mono-luxury font-bold">
              Coverage Network
            </span>
            <h2 className="text-3xl font-editorial font-bold text-white">
              Areas We Service Daily in Greater Los Angeles
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Our mobile units arrive fully stocked with spot-free water and generator power at any location.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {BUSINESS_INFO.areasServed.map((area, i) => (
              <div
                key={i}
                className="bg-[#0E0E12] border border-white/10 p-4 flex items-center gap-2.5 font-mono-luxury text-xs text-zinc-300"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 bg-[#0A0A0C]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-mono-luxury font-bold">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0E0E12] border border-white/10 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 text-white hover:text-[#C5A059]"
                  >
                    <span className="font-editorial font-bold text-base sm:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#C5A059] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-in fade-in duration-150">
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
