import React, { useEffect } from "react";
import {
  X, ExternalLink, ShieldCheck, CheckCircle2, Clock, Landmark,
  Award, FileText, ArrowRight, Zap, Check, AlertCircle, Share2
} from "lucide-react";

export default function SchemeDetailModal({
  scheme,
  isOpen,
  onClose,
  onOpenChecklist
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !scheme) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Modal Card */}
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Color Bar */}
        <div className="h-2 bg-gradient-to-r from-[#FF9933] via-[#2563EB] to-emerald-500 shrink-0" />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 border-b border-slate-100 flex items-start justify-between gap-4 bg-slate-50/70 shrink-0">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#1E3A8A] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {scheme.schemeType}
              </span>
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <Clock className="w-3 h-3" /> Processing: {scheme.processingTime}
              </span>
              <span className="bg-blue-50 text-[#1E3A8A] border border-blue-200 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <Landmark className="w-3 h-3" /> {scheme.nodalAgency}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-[#0B1F3A] tracking-tight">
              {scheme.name}
            </h2>
            <p className="text-xs font-semibold text-[#1E3A8A]">
              {scheme.ministry}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 divide-y divide-slate-100">
          
          {/* Overview & Financial Range */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-[#0B1F3A] flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#FF9933]" />
              <span>Scheme Summary & Financial Support</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {scheme.shortDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-4">
                <div className="text-[11px] font-bold text-[#1E3A8A] uppercase">Total Funding / Loan Range</div>
                <div className="text-base font-extrabold text-[#0B1F3A] mt-1">{scheme.fundingRange}</div>
              </div>

              <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-4">
                <div className="text-[11px] font-bold text-emerald-800 uppercase">Capital Subsidy / Grant</div>
                <div className="text-base font-extrabold text-emerald-700 mt-1">
                  {scheme.subsidyPct > 0 ? `${scheme.subsidyPct}% Capital Subsidy` : "100% Scholarship / 0% Collateral"}
                </div>
              </div>

              <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4">
                <div className="text-[11px] font-bold text-slate-600 uppercase">Applicable Interest Rate</div>
                <div className="text-base font-extrabold text-slate-800 mt-1">{scheme.interestRate}</div>
              </div>
            </div>
          </div>

          {/* 1. Complete Eligibility Criteria */}
          <div className="pt-6 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-[#0B1F3A] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Complete Eligibility Criteria</span>
            </h3>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
              <ul className="space-y-2.5">
                {scheme.eligibilityCriteria.map((criterion, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                    <span>{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Key Benefits Breakdown */}
          <div className="pt-6 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-[#0B1F3A] flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#2563EB]" />
              <span>Key Benefits & Entitlements</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {scheme.keyBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-3 shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800 leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Required Documents */}
          <div className="pt-6 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#0B1F3A] flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#FF9933]" />
                <span>Prescribed Application Documents (with National Weights)</span>
              </h3>
              <span className="text-[11px] font-bold text-slate-500">100% Total Metric</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {scheme.requiredDocuments.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    <span className="text-xs font-bold text-slate-800">{doc.name}</span>
                  </div>
                  <span className="text-[10px] font-black bg-[#2563EB]/10 text-[#1E3A8A] px-2 py-0.5 rounded-md">
                    {doc.weight}% Weight
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Step-by-Step Application Workflow */}
          <div className="pt-6 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-[#0B1F3A] flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Step-by-Step Application Process</span>
            </h3>

            <div className="space-y-3">
              {scheme.applicationSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200">
                  <div className="w-7 h-7 rounded-xl bg-[#0B1F3A] text-white font-black text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="text-xs font-black text-[#0B1F3A]">Step {idx + 1}</div>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-medium">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Direct Official Link */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Verified Official Link:</span>
            <span className="font-mono text-[11px] text-[#1E3A8A] font-bold underline truncate max-w-xs">
              {scheme.officialLink}
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenChecklist(scheme);
              }}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 hover:border-[#2563EB] hover:bg-blue-50/50 text-xs font-bold text-[#0B1F3A] transition-colors"
            >
              Verify Checklist
            </button>

            <a
              href={scheme.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0B1F3A] via-[#1E3A8A] to-[#2563EB] hover:opacity-95 text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-md transition-all"
            >
              <span>Apply on Official Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
