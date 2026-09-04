import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Calculator, ArrowRight, Award, ShieldCheck, CheckCircle2, TrendingUp } from "lucide-react";
import { translations } from "../data/translations";

function Counter({ end, suffix = "", prefix = "", label }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1500;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-[#2563EB]/15 shadow-sm hover:shadow-md hover:border-[#2563EB]/30 transition-all duration-300">
      <div className="text-2xl sm:text-3xl font-black text-[#0B1F3A] tracking-tight">
        {prefix}{value.toLocaleString("en-IN")}{suffix}
      </div>
      <div className="mt-1 text-[11px] font-bold text-[#1E3A8A]/80 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function Hero({ currentLang, onOpenWizard, onSelectTag }) {
  const t = translations[currentLang] || translations.en;

  const stats = [
    { end: 125, suffix: "+", prefix: "", label: "Authorized Bank Partners" },
    { end: 20, suffix: "+", prefix: "", label: "Central Schemes Covered" },
    { end: 35, suffix: "%", prefix: "Up to ", label: "Capital Subsidy Grant" },
    { end: 450, suffix: " Cr+", prefix: "₹", label: "Financial Aid Matched" },
  ];

  const popularTags = [
    "PMEGP Subsidy",
    "PM Mudra Yojana",
    "Stand-Up India",
    "PM Vishwakarma",
    "PMFME (Food Processing)",
    "AICTE Pragati",
    "Top Class SC Scholarship",
    "SCLCSS 25%"
  ];

  return (
    <section id="hero" className="relative pt-10 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#F0F5FF] via-white to-[#F8FAFC]">
      {/* Background Decorative Blur Spheres */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-[#2563EB]/10 via-[#FF9933]/15 to-emerald-500/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Hackathon Innovation Badge */}
        <div className="inline-flex items-center gap-2 bg-[#EFF4FF] border border-[#2563EB]/25 text-[#1E3A8A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-sm hover:scale-105 transition-transform duration-300">
          <Award className="w-4 h-4 text-[#FF9933]" />
          <span>{t.sihBadge}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </div>

        {/* Dynamic Main Tagline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0B1F3A] leading-[1.14]">
          {t.tagline.split(" ").slice(0, -3).join(" ")}{" "}
          <span className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#FF9933] bg-clip-text text-transparent underline decoration-[#FF9933]/40 decoration-wavy">
            {t.tagline.split(" ").slice(-3).join(" ")}
          </span>
        </h1>

        {/* Hero Narrative Description */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-[#0B1F3A]/75 max-w-3xl mx-auto leading-relaxed">
          {t.heroDesc}
        </p>

        {/* Primary CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#schemes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#0B1F3A] via-[#1E3A8A] to-[#2563EB] text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-[#FF9933]" />
            <span>{t.startJourney}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#calculator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-[#0B1F3A] bg-white border border-[#0B1F3A]/20 hover:border-[#2563EB] hover:bg-blue-50/40 transition-all duration-300 shadow-sm"
          >
            <Calculator className="w-4 h-4 text-[#2563EB]" />
            <span>{t.estimateEmi}</span>
          </a>
        </div>

        {/* Fast Popular Schemes Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="font-bold text-[#0B1F3A]/80 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-[#2563EB]" /> Popular:
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onSelectTag && onSelectTag(tag)}
              className="bg-white/80 hover:bg-white px-3 py-1 rounded-full border border-slate-200 hover:border-[#2563EB] text-[#0B1F3A] font-medium transition-all duration-200 shadow-2xs hover:shadow-xs"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Numerical Impact Counters */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((s) => (
          <Counter key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
