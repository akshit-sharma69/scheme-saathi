import React from "react";
import Logo from "./Logo";
import { ShieldCheck, Award, Landmark, PhoneCall, ExternalLink, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071325] text-white pt-16 pb-12 px-4 sm:px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Logo size="small" />
            <p className="text-xs text-white/70 leading-relaxed font-medium">
              Scheme Saathi is an AI-powered national companion developed for Smart India Hackathon, matching aspiring entrepreneurs, artisans, and students with verified Central Government schemes and capital subsidies.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-[11px] text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Aligned with Viksit Bharat @ 2047</span>
            </div>
          </div>

          {/* Quick Schemes Portal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FF9933]">
              Official Government Portals
            </h4>
            <ul className="space-y-2 text-xs text-white/75 font-medium">
              <li>
                <a
                  href="https://www.kviconline.gov.in/pmegpeportal/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF9933] transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3 text-white/40" />
                  <span>KVIC PMEGP e-Portal</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.financialservices.gov.in/pradhan-mantri-mudra-yojana-pmmy"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF9933] transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3 text-white/40" />
                  <span>PM Mudra Yojana Portal</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.standupmitra.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF9933] transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3 text-white/40" />
                  <span>Stand-Up India Mitra</span>
                </a>
              </li>
              <li>
                <a
                  href="https://pmvishwakarma.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF9933] transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3 text-white/40" />
                  <span>PM Vishwakarma Official</span>
                </a>
              </li>
              <li>
                <a
                  href="https://scholarships.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF9933] transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3 text-white/40" />
                  <span>National Scholarship Portal (NSP)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* National Helplines */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FF9933]">
              Toll-Free National Helplines
            </h4>
            <div className="space-y-2 text-xs text-white/75 font-medium">
              <div>
                <span className="text-white/50 block text-[10px] uppercase">KVIC PMEGP Helpline:</span>
                <span className="font-bold text-white">1800-3000-0034</span>
              </div>
              <div>
                <span className="text-white/50 block text-[10px] uppercase">MUDRA National Desk:</span>
                <span className="font-bold text-white">1800-180-1111</span>
              </div>
              <div>
                <span className="text-white/50 block text-[10px] uppercase">NSP Helpdesk:</span>
                <span className="font-bold text-white">0120-6619540</span>
              </div>
              <div>
                <span className="text-white/50 block text-[10px] uppercase">PM Vishwakarma Support:</span>
                <span className="font-bold text-white">1800-267-7777</span>
              </div>
            </div>
          </div>

          {/* Hackathon Credentials & Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FF9933]">
              Smart India Hackathon 2024
            </h4>
            <p className="text-xs text-white/70 leading-relaxed font-medium">
              Problem Statement: Modernizing citizen access to Central Government welfare and credit schemes with automated eligibility scoring and localized bank linkage.
            </p>
            <div className="text-[10px] text-white/50 space-y-1 pt-1">
              <div>• Real-time Client-side Eligibility Scoring Engine</div>
              <div>• Weighted Document Readiness Compliance Index</div>
              <div>• Multilingual Localization (EN, HI, MR, GU)</div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} Scheme Saathi. Built with passion for Smart India Hackathon & Viksit Bharat @ 2047.
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Open Data Portal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
