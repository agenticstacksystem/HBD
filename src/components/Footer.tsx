import { GeometricBorder } from './IslamicPattern';

export const Footer = () => {
  return (
    <footer className="py-16 px-4 text-center relative">
      {/* Top border */}
      <div className="mb-12">
        <GeometricBorder />
      </div>

      <div className="space-y-8">
        {/* Final dua */}
        <div className="space-y-4">
          <p className="arabic-text text-2xl md:text-3xl text-gold glow-gold">
            جَزَاكَ اللَّهُ خَيْرًا
          </p>
          <p className="text-emerald-light italic text-lg">
            Jazakallahu Khairan
          </p>
          <p className="text-foreground/80 text-lg">
            May Allah reward you with goodness
          </p>
        </div>

        {/* Decorative element */}
        <div className="flex justify-center">
          <svg className="w-16 h-16 text-gold opacity-50" viewBox="0 0 100 100">
            <polygon 
              points="50,0 61,39 100,50 61,61 50,100 39,61 0,50 39,39" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
            />
            <polygon 
              points="50,20 55,45 80,50 55,55 50,80 45,55 20,50 45,45" 
              fill="currentColor" 
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground text-sm">
          Made with love and duas • {new Date().getFullYear()}
        </p>
        <p className="text-gold/70 text-sm mt-2 font-display">
          By Hammad Ur Rehman
        </p>
      </div>
    </footer>
  );
};
