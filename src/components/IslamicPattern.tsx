export const IslamicPattern = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="islamicPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Eight-pointed star */}
            <polygon 
              points="50,0 61,39 100,50 61,61 50,100 39,61 0,50 39,39" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5"
              className="text-gold"
            />
            {/* Inner star */}
            <polygon 
              points="50,15 56,44 85,50 56,56 50,85 44,56 15,50 44,44" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.3"
              className="text-gold"
            />
            {/* Circle accents */}
            <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-gold" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-emerald" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamicPattern)" />
      </svg>
    </div>
  );
};

export const GeometricBorder = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 400 50" className="w-full h-auto text-gold opacity-60">
        <defs>
          <pattern id="borderPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <polygon 
              points="25,0 50,25 25,50 0,25" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
            />
            <circle cx="25" cy="25" r="5" fill="currentColor" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="50" fill="url(#borderPattern)" />
      </svg>
    </div>
  );
};
