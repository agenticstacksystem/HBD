import { useEffect, useState } from 'react';
import { FloatingStars, FloatingLanterns, CrescentMoon, Confetti } from '@/components/FloatingElements';
import { IslamicPattern } from '@/components/IslamicPattern';
import { HeroSection } from '@/components/HeroSection';
import { DuaSection } from '@/components/DuaSection';
import { MessageSection } from '@/components/MessageSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti after animation completes
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-night relative overflow-x-hidden">
      {/* Background elements */}
      <IslamicPattern />
      <FloatingStars />
      <FloatingLanterns />
      <CrescentMoon />
      
      {/* Confetti on load */}
      {showConfetti && <Confetti />}

      {/* Main content */}
      <main className="relative z-20">
        <HeroSection />
        <DuaSection />
        <MessageSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
