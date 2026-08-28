import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const getDimensions = () => {
    switch (size) {
      case 'sm':
        return { imgHeight: 'h-9 sm:h-10', textMain: 'text-sm', textSub: 'text-[9px]' };
      case 'lg':
        return { imgHeight: 'h-16 sm:h-20', textMain: 'text-2xl', textSub: 'text-xs' };
      case 'xl':
        return { imgHeight: 'h-24 sm:h-28', textMain: 'text-3xl sm:text-4xl', textSub: 'text-sm' };
      case 'md':
      default:
        return { imgHeight: 'h-12 sm:h-14', textMain: 'text-lg sm:text-xl', textSub: 'text-[10px]' };
    }
  };

  const dim = getDimensions();

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Banto Auto Detailing Uploaded Logo Image */}
      <img
        src="https://res.cloudinary.com/fzobzdco/image/upload/v1787949558/LOGO.jpg"
        alt="Banto Auto Detailing Official Logo"
        referrerPolicy="no-referrer"
        className={`${dim.imgHeight} w-auto object-contain rounded-sm transition-transform duration-300 hover:scale-105`}
      />

      {/* Brand Subtitle Tag */}
      {showSubtitle && (
        <div className="hidden sm:flex flex-col border-l border-white/15 pl-3">
          <span className="font-bold text-white tracking-widest font-editorial text-xs sm:text-sm uppercase leading-tight">
            Los Angeles
          </span>
          <span className="text-[#C5A059] uppercase tracking-[0.25em] font-mono-luxury text-[9px] sm:text-[10px]">
            Mobile & Studio
          </span>
        </div>
      )}
    </div>
  );
};

