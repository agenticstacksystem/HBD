import { useEffect, useState } from 'react';
import { GeometricBorder } from './IslamicPattern';

export const HeroSection = () => {
  const [showName, setShowName] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const nameTimer = setTimeout(() => setShowName(true), 1000);
    const messageTimer = setTimeout(() => setShowMessage(true), 2500);
    return () => {
      clearTimeout(nameTimer);
      clearTimeout(messageTimer);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0">
        <GeometricBorder />
      </div>

      {/* Main content */}
      <div className="text-center max-w-4xl mx-auto space-y-8">
        {/* Pre-title */}
        <p 
          className="text-muted-foreground text-lg md:text-xl tracking-[0.3em] uppercase opacity-0 animate-fade-up"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          A Special Celebration
        </p>

        {/* Bismillah */}
        <div 
          className="arabic-text text-3xl md:text-4xl text-gold glow-gold opacity-0 animate-scale-in"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </div>

        {/* Main title */}
        <h1 className="space-y-4">
          <span 
            className="block text-2xl md:text-3xl text-muted-foreground font-body opacity-0 animate-fade-up"
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
          >
            Happy Birthday
          </span>
          
          {showName && (
            <span className="block text-6xl md:text-8xl lg:text-9xl font-display font-bold text-gradient-gold glow-gold animate-reveal-text">
              Dear Brother Abdul Rehman
            </span>
          )}
        </h1>

        {/* Subtitle message */}
        {showMessage && (
          <p 
            className="text-xl md:text-2xl text-foreground/90 font-body max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            May Allah bless you with another year of happiness, 
            good health, and endless blessings
          </p>
        )}

        {/* Decorative divider */}
        <div 
          className="flex items-center justify-center gap-4 pt-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '3s', animationFillMode: 'forwards' }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
          <svg className="w-6 h-6 text-gold animate-glow-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
        </div>
      </div>

      {/* Scroll indicator
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up"
        style={{ animationDelay: '4s', animationFillMode: 'forwards' }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm tracking-wider">Scroll for Duas</span>
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-bounce" />
          </div>
        </div>
      </div> */}
    </section>
  );
};
