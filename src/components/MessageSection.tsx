import { useEffect, useRef, useState } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

export const MessageSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="max-w-3xl mx-auto relative">
        {/* Decorative icons */}
        <div className="absolute -top-10 left-10 text-gold opacity-30 animate-float">
          <Sparkles size={40} />
        </div>
        <div className="absolute top-20 -right-5 text-emerald opacity-30 animate-float-slow">
          <Star size={30} />
        </div>
        <div className="absolute bottom-10 left-0 text-rose opacity-30 animate-float">
          <Heart size={35} />
        </div>

        {/* Main message card */}
        <div
          className={`relative bg-gradient-to-br from-card via-card/80 to-midnight-light 
                      border border-gold/30 rounded-3xl p-10 md:p-16 text-center
                      transition-all duration-1000 shadow-gold-glow
                      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          {/* Decorative top element */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="bg-background border border-gold/50 rounded-full p-4 shadow-gold-glow">
              <Heart className="w-8 h-8 text-gold fill-gold/20" />
            </div>
          </div>

          <div className="space-y-8 pt-6">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">
              A Heartfelt Message
            </h2>

            {/* Message content */}
            <div className="space-y-6 text-lg md:text-xl text-foreground/90 font-body leading-relaxed">
              <p
                className={`transition-all duration-700 delay-300
                           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                Dear Brother, on this blessed day of your birth, I want you to know how 
                much you mean to me. You are not just my Cousin, but my friend, my 
                confidant, and a constant source of inspiration.
              </p>

              <p
                className={`transition-all duration-700 delay-500
                           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                May Allah shower you with His infinite mercy and blessings. May He 
                grant you success in this life and the hereafter, guide your every 
                step, and fill your heart with peace and contentment.
              </p>

              <p
                className={`transition-all duration-700 delay-700
                           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                As you begin another year of life, may it be filled with joy, 
                laughter, good health, and countless moments of happiness. 
                I am grateful to Allah for blessing me with a brother like you.
              </p>
            </div>

            {/* Signature */}
            <div
              className={`pt-8 space-y-2 transition-all duration-700 delay-1000
                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold" />
                <Sparkles className="w-5 h-5 text-gold" />
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold" />
              </div>
              <p className="text-2xl font-display text-gold italic">
                With all my love & duas
              </p>
              <p className="text-muted-foreground">Your Cousin Brother</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
