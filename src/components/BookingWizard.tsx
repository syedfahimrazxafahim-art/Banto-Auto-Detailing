import React, { useState } from 'react';
import { PRICING_PACKAGES, ADDONS, BUSINESS_INFO } from '../data/content';
import { VehicleType, BookingFormData } from '../types';
import { Check, ShieldCheck, Calendar, Clock, MapPin, Sparkles, Send, PhoneCall, ChevronRight, ChevronLeft } from 'lucide-react';

interface BookingWizardProps {
  initialPackageId?: string;
  onSuccess?: () => void;
}

export const BookingWizard: React.FC<BookingWizardProps> = ({
  initialPackageId = 'gold-detail',
  onSuccess,
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<BookingFormData>({
    vehicleType: 'coupe_sedan',
    yearMakeModel: '',
    packageId: initialPackageId,
    selectedAddons: [],
    serviceLocation: 'mobile',
    address: '',
    city: 'Los Angeles',
    date: '',
    timeSlot: 'Morning (8:00 AM - 12:00 PM)',
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });

  // Calculate pricing
  const currentPackage = PRICING_PACKAGES.find(p => p.id === formData.packageId) || PRICING_PACKAGES[1];
  
  const getBasePrice = () => {
    switch (formData.vehicleType) {
      case 'suv_crossover':
        return currentPackage.suvPrice;
      case 'truck_van':
        return currentPackage.truckPrice;
      case 'coupe_sedan':
      default:
        return currentPackage.sedanPrice;
    }
  };

  const getAddonsTotal = () => {
    return formData.selectedAddons.reduce((sum, addonId) => {
      const addon = ADDONS.find(a => a.id === addonId);
      return sum + (addon ? addon.price : 0);
    }, 0);
  };

  const totalPrice = getBasePrice() + getAddonsTotal();

  const toggleAddon = (addonId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedAddons: prev.selectedAddons.includes(addonId)
        ? prev.selectedAddons.filter(id => id !== addonId)
        : [...prev.selectedAddons, addonId],
    }));
  };

  const handleWhatsAppBooking = () => {
    const addonsList = formData.selectedAddons
      .map(id => ADDONS.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const message = encodeURIComponent(
      `Hello Banto Auto Detailing! I would like to book a service:\n\n` +
      `🚗 Vehicle: ${formData.yearMakeModel || 'Not specified'} (${formData.vehicleType.replace('_', ' ')})\n` +
      `✨ Package: ${currentPackage.name} ($${getBasePrice()})\n` +
      `➕ Add-ons: ${addonsList || 'None'}\n` +
      `📍 Location: ${formData.serviceLocation === 'mobile' ? `Mobile (${formData.address || 'LA Area'})` : 'Studio Drop-off'}\n` +
      `📅 Date: ${formData.date || 'Earliest Available'} - ${formData.timeSlot}\n` +
      `👤 Name: ${formData.fullName || 'Client'}\n` +
      `📞 Phone: ${formData.phone || 'N/A'}\n` +
      `💰 Est. Total: $${totalPrice}\n` +
      `📝 Notes: ${formData.notes || 'None'}`
    );

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  if (submitted) {
    return (
      <div className="bg-[#0D0D10] border border-[#C5A059]/40 p-8 sm:p-12 text-center">
        <div className="w-16 h-16 bg-[#C5A059]/10 border border-[#C5A059] text-[#C5A059] mx-auto rounded-full flex items-center justify-center mb-6">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <span className="text-[#C5A059] uppercase tracking-[0.3em] text-xs font-mono-luxury font-bold">
          Appointment Requested
        </span>
        <h3 className="text-3xl font-editorial font-bold text-white mt-2 mb-4">
          Thank You, {formData.fullName || 'Valued Client'}
        </h3>
        <p className="text-zinc-300 max-w-md mx-auto mb-8 text-sm leading-relaxed">
          Your request for the <strong className="text-white">{currentPackage.name}</strong> has been received. Our team will contact you at <strong className="text-[#C5A059]">{formData.phone || formData.email}</strong> within 1 hour to confirm your time slot and address.
        </p>

        <div className="bg-[#141418] border border-white/10 p-6 max-w-md mx-auto text-left mb-8 space-y-2 text-xs font-mono-luxury">
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-zinc-400">Selected Package</span>
            <span className="text-white font-bold">{currentPackage.name}</span>
          </div>
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-zinc-400">Vehicle</span>
            <span className="text-white">{formData.yearMakeModel || 'Custom Vehicle'}</span>
          </div>
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-zinc-400">Service Type</span>
            <span className="text-[#C5A059] uppercase">{formData.serviceLocation} in Los Angeles</span>
          </div>
          <div className="flex justify-between pt-2 text-sm font-bold">
            <span className="text-white">Estimated Total</span>
            <span className="text-[#C5A059] text-base">${totalPrice}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleWhatsAppBooking}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold px-8 py-3.5 text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
          >
            <Send className="w-4 h-4" />
            Send Instantly via WhatsApp
          </button>
          <button
            onClick={() => { setSubmitted(false); setStep(1); }}
            className="border border-white/20 hover:border-[#C5A059] text-white px-6 py-3.5 text-xs uppercase tracking-widest transition-all"
          >
            Book Another Vehicle
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0D0D10] border border-white/10 overflow-hidden">
      {/* Progress Steps Header */}
      <div className="border-b border-white/10 bg-[#08080A] p-4 sm:p-6">
        <div className="flex justify-between items-center max-w-2xl mx-auto">
          {[
            { num: 1, title: 'Vehicle' },
            { num: 2, title: 'Package' },
            { num: 3, title: 'Location' },
            { num: 4, title: 'Schedule' },
            { num: 5, title: 'Details' },
          ].map(s => (
            <div
              key={s.num}
              onClick={() => s.num < step && setStep(s.num)}
              className={`flex items-center gap-2 ${s.num < step ? 'cursor-pointer' : ''}`}
            >
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-none border flex items-center justify-center text-xs font-mono-luxury font-bold transition-all ${
                  step === s.num
                    ? 'bg-[#C5A059] border-[#C5A059] text-black shadow-[0_0_10px_rgba(197,160,89,0.5)]'
                    : step > s.num
                    ? 'bg-zinc-800 border-zinc-700 text-[#C5A059]'
                    : 'border-white/10 text-zinc-600'
                }`}
              >
                {step > s.num ? <Check className="w-4 h-4" /> : s.num}
              </div>
              <span
                className={`hidden md:inline text-xs uppercase tracking-wider font-mono-luxury ${
                  step === s.num ? 'text-white font-bold' : 'text-zinc-500'
                }`}
              >
                {s.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-10">
        {/* STEP 1: VEHICLE TYPE */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <span className="text-[#C5A059] text-xs uppercase tracking-[0.25em] font-mono-luxury font-bold block mb-1">
                Step 01 / 05
              </span>
              <h3 className="text-2xl font-editorial font-bold text-white">Select Vehicle Type & Details</h3>
              <p className="text-zinc-400 text-xs mt-1">Vehicle size affects the time and specialized formulas required.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  id: 'coupe_sedan',
                  title: 'Coupe / Sedan',
                  subtitle: 'Compact, 2-Door, 4-Door, Sports Cars',
                  icon: '🚗',
                },
                {
                  id: 'suv_crossover',
                  title: 'SUV / Crossover',
                  subtitle: 'Mid-Size SUV, Wagon, Small Trucks',
                  icon: '🚙',
                },
                {
                  id: 'truck_van',
                  title: 'Truck / Large SUV',
                  subtitle: 'Full-Size Trucks, 3-Row SUVs, Vans',
                  icon: '🛻',
                },
              ].map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, vehicleType: item.id as VehicleType })}
                  className={`p-6 text-left border transition-all ${
                    formData.vehicleType === item.id
                      ? 'border-[#C5A059] bg-[#C5A059]/10 shadow-[0_0_15px_rgba(197,160,89,0.15)]'
                      : 'border-white/10 bg-[#121215] hover:border-white/30'
                  }`}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="font-editorial text-lg font-bold text-white">{item.title}</div>
                  <div className="text-xs text-zinc-400 mt-1">{item.subtitle}</div>
                </button>
              ))}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-mono-luxury text-zinc-300 mb-2">
                Vehicle Year, Make & Model
              </label>
              <input
                type="text"
                value={formData.yearMakeModel}
                onChange={e => setFormData({ ...formData, yearMakeModel: e.target.value })}
                placeholder="e.g. 2023 Porsche 911 GT3 or Tesla Model Y (Black Paint)"
                className="w-full bg-[#121215] border border-white/15 px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#C5A059]"
              />
            </div>
          </div>
        )}

        {/* STEP 2: PACKAGE & ADDONS */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <span className="text-[#C5A059] text-xs uppercase tracking-[0.25em] font-mono-luxury font-bold block mb-1">
                Step 02 / 05
              </span>
              <h3 className="text-2xl font-editorial font-bold text-white">Choose Detailing Package & Add-ons</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PRICING_PACKAGES.map(pkg => {
                const isSelected = formData.packageId === pkg.id;
                const price =
                  formData.vehicleType === 'suv_crossover'
                    ? pkg.suvPrice
                    : formData.vehicleType === 'truck_van'
                    ? pkg.truckPrice
                    : pkg.sedanPrice;

                return (
                  <div
                    key={pkg.id}
                    onClick={() => setFormData({ ...formData, packageId: pkg.id })}
                    className={`p-6 border cursor-pointer flex flex-col justify-between transition-all ${
                      isSelected
                        ? 'border-[#C5A059] bg-[#C5A059]/10 ring-1 ring-[#C5A059]'
                        : 'border-white/10 bg-[#121215] hover:border-white/30'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs uppercase tracking-widest font-mono-luxury text-[#C5A059] font-bold">
                          {pkg.tier}
                        </span>
                        {pkg.popular && (
                          <span className="bg-[#C5A059] text-black text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="text-xl font-editorial font-bold text-white">{pkg.name}</div>
                      <div className="text-2xl font-light text-white my-3">
                        ${price} <span className="text-xs text-zinc-400">/ estimated</span>
                      </div>
                      <p className="text-xs text-zinc-400 mb-4">{pkg.tagline}</p>
                    </div>

                    <div className="pt-4 border-t border-white/10 text-xs text-zinc-300 font-mono-luxury flex items-center justify-between">
                      <span>⏱ {pkg.duration}</span>
                      <span className={`font-bold ${isSelected ? 'text-[#C5A059]' : 'text-zinc-500'}`}>
                        {isSelected ? '✓ Selected' : 'Click to Select'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Optional Addons */}
            <div>
              <h4 className="text-sm font-editorial font-bold uppercase tracking-wider text-[#C5A059] mb-3">
                Recommended Add-ons & Specialty Treatments
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {ADDONS.map(addon => {
                  const isChecked = formData.selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 border cursor-pointer flex items-start gap-3 transition-all ${
                        isChecked
                          ? 'border-[#C5A059] bg-[#C5A059]/10'
                          : 'border-white/10 bg-[#121215] hover:border-white/20'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 mt-0.5 border flex items-center justify-center text-[10px] ${
                          isChecked ? 'bg-[#C5A059] border-[#C5A059] text-black font-bold' : 'border-white/30'
                        }`}
                      >
                        {isChecked && '✓'}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-white">{addon.name}</span>
                          <span className="text-xs text-[#C5A059] font-mono-luxury">+${addon.price}</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-0.5">{addon.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: LOCATION */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <span className="text-[#C5A059] text-xs uppercase tracking-[0.25em] font-mono-luxury font-bold block mb-1">
                Step 03 / 05
              </span>
              <h3 className="text-2xl font-editorial font-bold text-white">Service Location in Los Angeles</h3>
              <p className="text-zinc-400 text-xs mt-1">We can come to your location or you can drop off at our studio.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, serviceLocation: 'mobile' })}
                className={`p-6 text-left border transition-all ${
                  formData.serviceLocation === 'mobile'
                    ? 'border-[#C5A059] bg-[#C5A059]/10'
                    : 'border-white/10 bg-[#121215]'
                }`}
              >
                <div className="text-2xl text-[#C5A059] mb-2 font-mono-luxury">🚐 Mobile Concierge (We Come To You)</div>
                <p className="text-xs text-zinc-400">
                  Our fully equipped mobile van brings spot-free deionized water and power directly to your home, office, or garage anywhere in Greater Los Angeles.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, serviceLocation: 'studio' })}
                className={`p-6 text-left border transition-all ${
                  formData.serviceLocation === 'studio'
                    ? 'border-[#C5A059] bg-[#C5A059]/10'
                    : 'border-white/10 bg-[#121215]'
                }`}
              >
                <div className="text-2xl text-[#C5A059] mb-2 font-mono-luxury">🏢 Studio Drop-off (Los Angeles)</div>
                <p className="text-xs text-zinc-400">
                  Bring your vehicle to our climate-controlled detailing bay with specialized inspection lighting and hydraulic scissor lifts for multi-day ceramic coatings.
                </p>
              </button>
            </div>

            {formData.serviceLocation === 'mobile' && (
              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono-luxury text-zinc-300 mb-2">
                    Service Address / Zip Code (Greater Los Angeles)
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g. 1240 Wilshire Blvd, Beverly Hills, CA 90212"
                    className="w-full bg-[#121215] border border-white/15 px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div className="bg-[#141418] border border-white/10 p-4 text-xs text-zinc-400 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#C5A059] shrink-0" />
                  <span>
                    Covering all of Los Angeles including Downtown, Beverly Hills, Santa Monica, Pasadena, Glendale, Burbank, and San Fernando Valley.
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP 4: SCHEDULE */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <span className="text-[#C5A059] text-xs uppercase tracking-[0.25em] font-mono-luxury font-bold block mb-1">
                Step 04 / 05
              </span>
              <h3 className="text-2xl font-editorial font-bold text-white">Preferred Date & Time Window</h3>
              <p className="text-zinc-400 text-xs mt-1">We operate 7 days a week from 7:00 AM to 8:00 PM.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-mono-luxury text-zinc-300 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#C5A059]" /> Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={e => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#121215] border border-white/15 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-mono-luxury text-zinc-300 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C5A059]" /> Preferred Time Window
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={e => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full bg-[#121215] border border-white/15 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                >
                  <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                  <option value="Early Afternoon (12:00 PM - 3:00 PM)">Early Afternoon (12:00 PM - 3:00 PM)</option>
                  <option value="Late Afternoon (3:00 PM - 6:00 PM)">Late Afternoon (3:00 PM - 6:00 PM)</option>
                  <option value="Flexible / As soon as possible">Flexible / As soon as possible</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: CONTACT & CONFIRMATION */}
        {step === 5 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-[#C5A059] text-xs uppercase tracking-[0.25em] font-mono-luxury font-bold block mb-1">
                Step 05 / 05
              </span>
              <h3 className="text-2xl font-editorial font-bold text-white">Contact Information & Review</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-mono-luxury text-zinc-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Marcus Vance"
                  className="w-full bg-[#121215] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-mono-luxury text-zinc-300 mb-2">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. (213) 956-2029"
                  className="w-full bg-[#121215] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-mono-luxury text-zinc-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. client@domain.com"
                  className="w-full bg-[#121215] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-mono-luxury text-zinc-300 mb-2">
                  Special Notes or Paint Concerns
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Swirl marks on hood, pet hair in backseat"
                  className="w-full bg-[#121215] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>
            </div>

            {/* Price Summary Card */}
            <div className="bg-[#141418] border border-[#C5A059]/30 p-6 space-y-3">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <div>
                  <div className="font-editorial font-bold text-white text-lg">{currentPackage.name}</div>
                  <div className="text-xs text-zinc-400 font-mono-luxury">
                    {formData.vehicleType.replace('_', ' ').toUpperCase()} • {formData.serviceLocation.toUpperCase()}
                  </div>
                </div>
                <div className="text-xl font-light text-white">${getBasePrice()}</div>
              </div>

              {formData.selectedAddons.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <div className="text-xs font-mono-luxury text-[#C5A059] uppercase">Selected Add-ons:</div>
                  {formData.selectedAddons.map(id => {
                    const addon = ADDONS.find(a => a.id === id);
                    if (!addon) return null;
                    return (
                      <div key={id} className="flex justify-between text-xs text-zinc-300">
                        <span>+ {addon.name}</span>
                        <span>${addon.price}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="flex justify-between items-baseline pt-4 border-t border-white/10">
                <span className="text-sm font-editorial font-bold text-white">Estimated Investment</span>
                <span className="text-3xl font-editorial font-bold text-[#C5A059]">${totalPrice}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                type="submit"
                className="flex-1 bg-[#C5A059] hover:bg-white text-black font-bold py-4 px-6 text-xs uppercase tracking-widest transition-all text-center"
              >
                Confirm & Request Booking
              </button>
              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold py-4 px-6 text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                Book via WhatsApp
              </button>
            </div>
          </form>
        )}

        {/* Wizard Footer Controls */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono-luxury text-zinc-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
          ) : (
            <div />
          )}

          {step < 5 && (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="bg-[#C5A059] text-black font-bold px-8 py-3 text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2"
            >
              Continue <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
