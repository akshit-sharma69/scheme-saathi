import React from "react";

export default function Logo({ size = "default", showTagline = true, className = "" }) {
  const isSmall = size === "small";

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Gen-Z Inspired AI Minimalist Emblem */}
      <div className="relative">
        {/* Ambient Glow Aura */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#2563EB] via-[#FF9933] to-[#10B981] opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Core Emblem Container */}
        <div className={`relative ${isSmall ? "w-9 h-9" : "w-11 h-11"} rounded-xl bg-[#071325] border border-white/20 p-2 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105`}>
          {/* Custom Modern AI Neural Nexus & Growth Arrow SVG */}
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="saffronGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF9933" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
              <linearGradient id="azureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
              <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>

            {/* Futuristic Interlocking AI Loop (Chakra/Infinity Hybrid) */}
            <path
              d="M20 50 C20 32, 35 20, 50 20 C65 20, 80 32, 80 50 C80 68, 65 80, 50 80 C35 80, 20 68, 20 50 Z"
              stroke="url(#azureGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="90 30"
              className="group-hover:rotate-180 transition-transform duration-1000 origin-center"
            />
            
            {/* Dynamic Growth Arrow / Neural Spur */}
            <path
              d="M34 66 L50 36 L66 66 L50 56 Z"
              fill="url(#saffronGradient)"
              className="drop-shadow-[0_2px_8px_rgba(255,153,51,0.5)]"
            />

            {/* Intelligent AI Core Node */}
            <circle
              cx="50"
              cy="48"
              r="4.5"
              fill="#FFFFFF"
              className="animate-pulse"
            />

            {/* Futuristic Orbit Dot */}
            <circle
              cx="75"
              cy="28"
              r="3.5"
              fill="url(#emeraldGradient)"
            />
          </svg>

          {/* Micro status beacon */}
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#071325]" />
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`${isSmall ? "text-base" : "text-xl"} font-black tracking-tight text-[#0B1F3A] group-hover:text-[#2563EB] transition-colors`}>
            Scheme <span className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#FF9933] bg-clip-text text-transparent">Saathi</span>
          </span>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#FF9933]/15 text-[#D97706] border border-[#FF9933]/30 tracking-wider">
            AI MATCHER
          </span>
        </div>
        {showTagline && (
          <span className="text-[9px] text-[#1E3A8A]/75 font-semibold tracking-widest uppercase -mt-0.5">
            Viksit Bharat @ 2047
          </span>
        )}
      </div>
    </div>
  );
}
