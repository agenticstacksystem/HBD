import { useEffect, useRef, useState } from 'react';

interface Dua {
  arabic: string;
  transliteration: string;
  translation: string;
  reference?: string;
}

const duas: Dua[] = [
  {
    arabic: "اللَّهُمَّ بَارِكْ لَهُ فِي عُمْرِهِ",
    transliteration: "Allahumma barik lahu fi 'umrihi",
    translation: "O Allah, bless him in his life",
  },
  // {
  //   arabic: "أَعَاذَكَ اللَّهُ مِنْ عَذَابِ الْقَبْرِ",
  //   transliteration: "A'adhaka Allahu min 'adhabil-qabr",
  //   translation: "May Allah protect you from the torment of the grave",
  // },
  {
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan waqina 'adhaban-nar",
    translation: "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire",
    reference: "Quran 2:201",
  },
  {
    arabic: "اللَّهُمَّ اجْعَلْهُ مِنَ الصَّالِحِينَ",
    transliteration: "Allahumma ij'alhu minas-salihin",
    translation: "O Allah, make him among the righteous",
  },
  {
    arabic: "بَارَكَ اللَّهُ لَكَ فِي يَوْمِكَ وَفِي عَامِكَ الْجَدِيدِ",
    transliteration: "Barakallahu laka fi yawmika wa fi 'amika al-jadid",
    translation: "May Allah bless you on this day and in your new year",
  },
];

const DuaCard = ({ dua, index }: { dua: Dua; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative bg-card/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 md:p-12 
                  transition-all duration-1000 transform shadow-gold-glow
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold/40 rounded-tl-lg" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gold/40 rounded-tr-lg" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gold/40 rounded-bl-lg" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold/40 rounded-br-lg" />

      <div className="space-y-6 text-center">
        {/* Arabic text */}
        <p className="arabic-text text-3xl md:text-4xl text-gold glow-gold leading-loose">
          {dua.arabic}
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald" />
          <div className="w-2 h-2 rounded-full bg-emerald animate-glow-pulse" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald" />
        </div>

        {/* Transliteration */}
        <p className="text-lg md:text-xl text-emerald-light italic font-body">
          {dua.transliteration}
        </p>

        {/* Translation */}
        <p className="text-foreground/90 text-lg md:text-xl font-body max-w-2xl mx-auto">
          "{dua.translation}"
        </p>

        {/* Reference if available */}
        {dua.reference && (
          <p className="text-muted-foreground text-sm tracking-wider">
            — {dua.reference}
          </p>
        )}
      </div>
    </div>
  );
};

export const DuaSection = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Section header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-gold glow-gold">
          Islamic Birthday Duas
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Blessed prayers and supplications for a wonderful year ahead
        </p>
      </div>

      {/* Dua cards */}
      <div className="max-w-4xl mx-auto space-y-8">
        {duas.map((dua, index) => (
          <DuaCard key={index} dua={dua} index={index} />
        ))}
      </div>
    </section>
  );
};
