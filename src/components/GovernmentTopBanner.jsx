import React from "react";
import { ShieldCheck, Languages } from "lucide-react";

export default function GovernmentTopBanner({ currentLang, setLang }) {
  return (
    <div className="bg-[#071325] text-white text-xs py-1.5 px-4 border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {/* Ashoka Chakra / Tricolor Emblem representation */}
            <svg className="w-4 h-4 fill-[#FF9933]" viewBox="0 0 24 24">
              <path d="M12 2L15 8L21 9L16.5 13.5L18 20L12 16.5L6 20L7.5 13.5L3 9L9 8L12 2Z" />
            </svg>
            <span className="font-bold tracking-wider text-[#FF9933] uppercase text-[11px]">भारत सरकार</span>
            <span className="text-white/30">|</span>
            <span className="text-white/80 font-medium text-[11px] tracking-wide">GOVERNMENT OF INDIA</span>
          </div>
          <span className="hidden md:inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-300 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Viksit Bharat @ 2047 Initiative
          </span>
        </div>

        <div className="flex items-center gap-4 text-white/80">
          <div className="hidden sm:flex items-center gap-1.5 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Official National Portal</span>
          </div>

          {/* Multilingual Selector */}
          <div className="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 px-2.5 py-1 rounded-md border border-white/15 transition-colors">
            <Languages className="w-3.5 h-3.5 text-[#FF9933]" />
            <select
              value={currentLang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent text-[11px] text-white outline-none cursor-pointer font-medium"
              aria-label="Select Language"
            >
              <option value="en" className="bg-[#071325] text-white">English (EN)</option>
              <option value="hi" className="bg-[#071325] text-white">हिंदी (HI)</option>
              <option value="mr" className="bg-[#071325] text-white">मराठी (MR)</option>
              <option value="gu" className="bg-[#071325] text-white">ગુજરાતી (GU)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
