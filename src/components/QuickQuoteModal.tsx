import React, { useState } from 'react';
import { PRICING_PACKAGES, ADDONS, BUSINESS_INFO } from '../data/content';
import { VehicleType } from '../types';
import { X, Send, Sparkles, Check } from 'lucide-react';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToFullBooking: () => void;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  onGoToFullBooking,
}) => {
  const [vehicleType, setVehicleType] = useState<VehicleType>('coupe_sedan');
  const [packageId, setPackageId] = useState<string>('gold-detail');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  if (!isOpen) return null;

  const pkg = PRICING_PACKAGES.find(p => p.id === packageId) || PRICING_PACKAGES[1];
  const basePrice =
    vehicleType === 'suv_crossover'
      ? pkg.suvPrice
      : vehicleType === 'truck_van'
      ? pkg.truckPrice
      : pkg.sedanPrice;

  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const a = ADDONS.find(item => item.id === id);
    return sum + (a ? a.price : 0);
  }, 0);

  const total = basePrice + addonsTotal;

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Banto Auto Detailing! Quick Quote Request:\n` +
      `👤 Name: ${clientName || 'Client'}\n` +
      `📞 Phone: ${clientPhone || 'N/A'}\n` +
      `🚗 Vehicle: ${vehicleType.replace('_', ' ').toUpperCase()}\n` +
      `✨ Package: ${pkg.name} ($${basePrice})\n` +
      `💰 Est. Total: $${total}`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0E0E12] border border-[#C5A059] max-w-xl w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start border-b border-white/10 pb-4">
          <div>
            <span className="text-[#C5A059] text-xs font-mono-luxury uppercase tracking-widest font-bold">
              Fast Estimate Calculator
            </span>
            <h3 className="text-2xl font-editorial font-bold text-white mt-1">
              30-Second Instant Detailing Quote
            </h3>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white text-xl p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Vehicle Type */}
        <div>
          <label className="block text-xs uppercase font-mono-luxury text-zinc-300 mb-2">
            1. Select Vehicle Size
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'coupe_sedan', label: 'Coupe / Sedan' },
              { id: 'suv_crossover', label: 'Mid SUV' },
              { id: 'truck_van', label: 'Truck / 3-Row' },
            ].map(v => (
              <button
                key={v.id}
                type="button"
                onClick={() => setVehicleType(v.id as VehicleType)}
                className={`py-2 text-xs font-mono-luxury border uppercase ${
                  vehicleType === v.id
                    ? 'bg-[#C5A059] border-[#C5A059] text-black font-bold'
                    : 'border-white/10 text-zinc-400 hover:border-white/30'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        {/* Package Select */}
        <div>
          <label className="block text-xs uppercase font-mono-luxury text-zinc-300 mb-2">
            2. Choose Package Tier
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {PRICING_PACKAGES.map(p => (
              <div
                key={p.id}
                onClick={() => setPackageId(p.id)}
                className={`p-3 border cursor-pointer text-center ${
                  packageId === p.id
                    ? 'border-[#C5A059] bg-[#C5A059]/10'
                    : 'border-white/10 bg-[#14141A]'
                }`}
              >
                <div className="text-xs font-bold text-white font-editorial">{p.name}</div>
                <div className="text-sm text-[#C5A059] font-mono-luxury font-bold mt-1">
                  ${vehicleType === 'suv_crossover' ? p.suvPrice : vehicleType === 'truck_van' ? p.truckPrice : p.sedanPrice}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add-ons checkbox */}
        <div>
          <label className="block text-xs uppercase font-mono-luxury text-zinc-300 mb-2">
            3. Optional Add-ons
          </label>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {ADDONS.slice(0, 4).map(a => {
              const isChecked = selectedAddons.includes(a.id);
              return (
                <div
                  key={a.id}
                  onClick={() => toggleAddon(a.id)}
                  className={`p-2 border cursor-pointer flex justify-between items-center ${
                    isChecked ? 'border-[#C5A059] bg-[#C5A059]/10 text-white' : 'border-white/10 text-zinc-400'
                  }`}
                >
                  <span className="truncate pr-1">{a.name}</span>
                  <span className="text-[#C5A059] font-mono-luxury font-bold">+${a.price}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Total Price Banner */}
        <div className="bg-[#14141A] border border-[#C5A059]/40 p-4 flex justify-between items-center">
          <div>
            <span className="text-xs uppercase font-mono-luxury text-zinc-400 block">Estimated Price</span>
            <span className="text-2xl font-editorial font-bold text-white">${total}</span>
          </div>
          <button
            onClick={handleSendWhatsApp}
            className="bg-[#25D366] text-black font-bold px-4 py-2.5 text-xs font-mono-luxury uppercase tracking-wider flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" /> Quote on WhatsApp
          </button>
        </div>

        <div className="flex justify-between items-center pt-2">
          <button
            onClick={onClose}
            className="text-xs uppercase font-mono-luxury text-zinc-400 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onClose();
              onGoToFullBooking();
            }}
            className="text-xs uppercase font-mono-luxury text-[#C5A059] hover:underline font-bold"
          >
            Go to Full Booking Wizard →
          </button>
        </div>
      </div>
    </div>
  );
};
