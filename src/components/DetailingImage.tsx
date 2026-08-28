import React, { useState } from 'react';
import { ImageKey } from '../types';
import { BRAND_ASSETS } from '../data/content';
import { Maximize2, Sparkles } from 'lucide-react';

interface DetailingImageProps {
  imageKey: ImageKey;
  className?: string;
  showCaption?: boolean;
  priority?: boolean;
  allowZoom?: boolean;
}

export const DetailingImage: React.FC<DetailingImageProps> = ({
  imageKey,
  className = '',
  showCaption = false,
  allowZoom = false,
}) => {
  const asset = BRAND_ASSETS[imageKey] || BRAND_ASSETS.ferrari_finish;
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <div
        className={`relative overflow-hidden bg-[#070709] border border-white/10 flex items-center justify-center group select-none ${className}`}
      >
        {/* Subtle Ambient Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-950/80 to-[#121216] pointer-events-none" />

        {/* Real Authentic Uploaded Image (Fixed with object-contain to prevent cropping) */}
        <img
          src={asset.src}
          alt={asset.alt || asset.title}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-contain relative z-10 transition-all duration-500 group-hover:scale-[1.02] ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#09090C] z-0">
            <div className="flex flex-col items-center gap-2 text-zinc-600">
              <Sparkles className="w-5 h-5 text-[#C5A059] animate-pulse" />
              <span className="text-[10px] font-mono-luxury uppercase tracking-widest text-zinc-500">
                Loading Banto Asset...
              </span>
            </div>
          </div>
        )}

        {/* Optional Zoom / Inspect Button */}
        {allowZoom && (
          <button
            onClick={() => setIsZoomed(true)}
            className="absolute bottom-3 right-3 z-20 bg-black/80 hover:bg-[#C5A059] text-white hover:text-black p-2 border border-white/20 transition-all opacity-0 group-hover:opacity-100"
            title="Inspect Full Image"
            aria-label="Inspect Full Image"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Caption Bar */}
        {showCaption && (
          <div className="absolute bottom-0 inset-x-0 p-3 bg-black/90 backdrop-blur-md border-t border-white/10 text-xs flex justify-between items-center z-20">
            <span className="text-zinc-200 font-medium truncate max-w-[70%]">
              {asset.title}
            </span>
            <span className="text-[#C5A059] uppercase tracking-wider text-[10px] font-mono-luxury shrink-0">
              {asset.category}
            </span>
          </div>
        )}
      </div>

      {/* Lightbox Zoom Modal if clicked */}
      {isZoomed && (
        <div
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center justify-center">
            <img
              src={asset.src}
              alt={asset.alt || asset.title}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[80vh] object-contain border border-[#C5A059]/40 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h4 className="text-white font-editorial text-lg font-bold">{asset.title}</h4>
              <p className="text-zinc-400 text-xs mt-1 font-mono-luxury">{asset.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

