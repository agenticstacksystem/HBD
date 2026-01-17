import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

interface Lantern {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

export const FloatingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars: Star[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-gold animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            boxShadow: `0 0 ${star.size * 3}px hsl(var(--gold) / 0.6)`,
          }}
        />
      ))}
    </div>
  );
};

export const FloatingLanterns = () => {
  const [lanterns, setLanterns] = useState<Lantern[]>([]);

  useEffect(() => {
    const newLanterns: Lantern[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      delay: Math.random() * 10,
      duration: Math.random() * 5 + 12,
      size: Math.random() * 20 + 30,
    }));
    setLanterns(newLanterns);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {lanterns.map((lantern) => (
        <div
          key={lantern.id}
          className="absolute animate-rise"
          style={{
            left: `${lantern.x}%`,
            bottom: '-100px',
            animationDelay: `${lantern.delay}s`,
            animationDuration: `${lantern.duration}s`,
          }}
        >
          <div 
            className="relative animate-glow-pulse"
            style={{ 
              width: `${lantern.size}px`, 
              height: `${lantern.size * 1.3}px`,
            }}
          >
            {/* Lantern body */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gold to-gold-dark opacity-90" 
                 style={{ 
                   clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
                   filter: 'blur(1px)'
                 }} 
            />
            {/* Inner glow */}
            <div className="absolute inset-2 rounded-full bg-gold-light opacity-60 blur-sm" />
            {/* Top cap */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-2 bg-gold-dark rounded-t-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export const CrescentMoon = () => {
  return (
    <div className="fixed top-10 right-10 md:top-20 md:right-20 z-20 animate-crescent-glow">
      <svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        className="text-gold animate-float-slow"
        style={{ filter: 'drop-shadow(0 0 20px hsl(var(--gold) / 0.6))' }}
      >
        <path
          d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45c6.9 0 13.5-1.6 19.4-4.4C54.5 85.3 40 68.9 40 50s14.5-35.3 29.4-40.6C63.5 6.6 56.9 5 50 5z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export const Confetti = () => {
  const [pieces, setPieces] = useState<{ id: number; x: number; color: string; delay: number; size: number }[]>([]);

  useEffect(() => {
    const colors = [
      'hsl(var(--gold))',
      'hsl(var(--gold-light))',
      'hsl(var(--emerald))',
      'hsl(var(--emerald-light))',
      'hsl(var(--rose))',
    ];
    
    const newPieces = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 3,
      size: Math.random() * 10 + 5,
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.x}%`,
            top: '-20px',
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
};
