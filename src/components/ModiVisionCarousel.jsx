import React, { useState, useEffect } from "react";
import { Quote, Flame, ChevronLeft, ChevronRight, Award, ShieldCheck } from "lucide-react";
import modiPortraitImg from "../assets/modi-portrait.jpg";

const modiQuotes = [
  {
    quote: "Today's youth are not merely looking for jobs; they want to create jobs for others. India's startup ecosystem is the backbone of our Atmanirbhar Bharat vision.",
    context: "National Startup Day Address",
    theme: "Job Creators vs Job Seekers",
    badge: "Atmanirbhar Bharat",
    speechYear: "New Delhi"
  },
  {
    quote: "When a small entrepreneur prospers, the entire village and city prospers. PM Mudra Yojana and PMEGP have given dignity and credit access to crores of unbanked citizens.",
    context: "PMEGP & Financial Inclusion Summit",
    theme: "Empowering Micro-Entrepreneurs",
    badge: "Mudra & PMEGP Vision",
    speechYear: "Vigyan Bhawan"
  },
  {
    quote: "Democracy, Demography, and Diversity together with Technology can solve any challenge facing our nation. Scheme Saathi brings technology to every doorstep.",
    context: "Digital India National Address",
    theme: "Tech-Driven Equality",
    badge: "Viksit Bharat @ 2047",
    speechYear: "National Initiative"
  },
  {
    quote: "Stand-Up India and PM Vishwakarma are ensuring that women, artisans, and underprivileged communities become pioneers of industrial growth across every state.",
    context: "National Conclave on MSME & Handicrafts",
    theme: "Inclusive Grassroots Growth",
    badge: "Stand-Up & Vishwakarma",
    speechYear: "Bharat Mandapam"
  }
];

export default function ModiVisionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % modiQuotes.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = modiQuotes[currentIndex];

  return (
    <section id="vision" className="py-20 px-4 sm:px-6 bg-[#071325] text-white relative overflow-hidden select-none">
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF9933]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-64 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FF9933]/15 text-[#FF9933] border border-[#FF9933]/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
            <Flame className="w-3.5 h-3.5" /> PM Narendra Modi's Vision
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transforming Job Seekers into Job Creators
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-white/60 max-w-xl mx-auto leading-relaxed">
            Hon'ble Prime Minister's vision driving Atmanirbhar Bharat, youth innovation, and grassroots micro-entrepreneurship.
          </p>
        </div>

        {/* Vision Card Container with Modi Ji Portrait & Speech Quotes */}
        <div
          className="bg-white/5 border border-white/15 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-300 hover:border-white/25"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Official Professional Portrait of Prime Minister Narendra Modi */}
            <div className="md:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#FF9933]/50 shadow-2xl group bg-gradient-to-b from-[#0B1F3A] to-[#071325]">
                <img
                  src={modiPortraitImg}
                  alt="Shri Narendra Modi, Hon'ble Prime Minister of India"
                  className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to Wikipedia direct URL if needed
                    e.target.src = "https://upload.wikimedia.org/wikipedia/commons/c/c6/Official_portrait_of_Narendra_Modi%2C_2022.jpg";
                  }}
                />
                
                {/* Gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071325] via-transparent to-black/20 opacity-80" />
                
                {/* Official Title Plaque on Portrait */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#071325]/85 backdrop-blur-md border border-white/20 p-3 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-black text-sm tracking-wide flex items-center gap-1.5">
                        <span>Shri Narendra Modi</span>
                        <ShieldCheck className="w-4 h-4 text-[#FF9933]" />
                      </div>
                      <div className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">
                        Hon'ble Prime Minister of India
                      </div>
                    </div>
                    <span className="bg-[#FF9933] text-[#071325] text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                      GOI
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Quote Emblem */}
              <div className="absolute -top-3 -left-3 w-11 h-11 bg-[#FF9933] text-[#071325] rounded-xl flex items-center justify-center shadow-lg border-2 border-white/20">
                <Quote className="w-5 h-5 fill-current" />
              </div>
            </div>

            {/* Right Column: Quotes Statement and Carousel Controls */}
            <div className="md:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  National Vision Address ({currentIndex + 1} of {modiQuotes.length})
                </div>
                <span className="bg-[#FF9933]/20 text-[#FF9933] border border-[#FF9933]/30 px-3 py-0.5 rounded-full text-[11px] font-bold">
                  {current.badge}
                </span>
              </div>

              <blockquote className="text-lg sm:text-2xl font-medium text-white/95 leading-relaxed italic border-l-4 border-[#FF9933] pl-5 py-1">
                "{current.quote}"
              </blockquote>

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <div className="font-extrabold text-white text-base tracking-wide flex items-center gap-2">
                    <span>{current.theme}</span>
                  </div>
                  <div className="text-xs text-[#FF9933]/90 mt-0.5 font-medium">
                    {current.context} • <span className="text-white/50">{current.speechYear}</span>
                  </div>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-white/40">
                  <Award className="w-4 h-4 text-[#FF9933]" />
                  <span>Viksit Bharat @ 2047</span>
                </div>
              </div>

              {/* Linear Progress Bar */}
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#FF9933] h-full transition-all duration-500 rounded-full"
                  style={{ width: `${((currentIndex + 1) / modiQuotes.length) * 100}%` }}
                />
              </div>

              {/* Navigation Indicators & Carousel Buttons */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  {modiQuotes.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? "bg-[#FF9933] w-7"
                          : "bg-white/30 w-2.5 hover:bg-white/60"
                      }`}
                      aria-label={`Go to quote ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setCurrentIndex((prev) => (prev === 0 ? modiQuotes.length - 1 : prev - 1))
                    }
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Previous quote"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentIndex((prev) => (prev + 1) % modiQuotes.length)
                    }
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Next quote"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
