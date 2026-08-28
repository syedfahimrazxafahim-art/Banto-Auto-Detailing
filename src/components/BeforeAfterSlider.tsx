import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ArrowLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeLabel = 'Before: Swirl Marks & Oxidation',
  afterLabel = 'After: 2-Stage Correction & 9H Ceramic',
  title = 'Real Swirl Removal & Paint Correction',
  subtitle = 'Drag the slider to inspect the optical clarity and mirror depth transformation',
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full bg-[#0D0D10] border border-white/10 p-4 sm:p-6 rounded-none">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 pb-3 border-b border-white/10 gap-2">
        <div>
          <span className="text-[#C5A059] text-[11px] font-mono-luxury uppercase tracking-[0.25em] block mb-1">
            Optical Transformation
          </span>
          <h3 className="text-xl sm:text-2xl font-editorial font-bold text-white tracking-wide">
            {title}
          </h3>
        </div>
        <p className="text-xs text-zinc-400 max-w-sm">
          {subtitle}
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-72 sm:h-96 overflow-hidden select-none cursor-ew-resize border border-white/15"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER IMAGE (Bottom Layer - Deep Mirror Finish) */}
        <div className="absolute inset-0 bg-[#0A0A0C] flex items-center justify-center overflow-hidden">
          <img
            src="https://res.cloudinary.com/fzobzdco/image/upload/v1787949533/1000s.jpg"
            alt="After Paint Correction and 9H Ceramic Shield"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          <div className="absolute top-4 right-4 bg-black/85 border border-[#C5A059] px-3 py-1.5 text-xs font-mono-luxury text-[#C5A059] uppercase tracking-wider flex items-center gap-1.5 shadow-lg backdrop-blur-md z-10">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            {afterLabel}
          </div>
        </div>

        {/* BEFORE IMAGE (Top Layer - Clipped with Swirls & Oxidation) */}
        <div
          className="absolute inset-0 bg-[#121216] overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ width: containerRef.current?.clientWidth || '100%', height: '100%' }}
          >
            <img
              src="https://res.cloudinary.com/fzobzdco/image/upload/v1787949536/5719609153de4065a38c49c3cb15acfc.avif"
              alt="Before Paint Correction with Swirls"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain filter contrast-125 brightness-90 saturate-50"
            />
            {/* Subtle Swirl Inspection Overlay Simulation on Before side */}
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          </div>

          <div className="absolute top-4 left-4 bg-black/85 border border-red-500/60 px-3 py-1.5 text-xs font-mono-luxury text-red-400 uppercase tracking-wider shadow-lg backdrop-blur-md z-10">
            {beforeLabel}
          </div>
        </div>

        {/* DRAG HANDLE BAR */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#C5A059] shadow-[0_0_12px_#C5A059] z-20 cursor-ew-resize"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-black border-2 border-[#C5A059] rounded-full flex items-center justify-center text-[#C5A059] shadow-xl hover:scale-110 transition-transform">
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 text-[11px] font-mono-luxury text-zinc-400">
        <span>← Slide Left for Before</span>
        <span className="text-[#C5A059] font-bold">95%+ Defect Removal Guarantee</span>
        <span>Slide Right for After →</span>
      </div>
    </div>
  );
};
