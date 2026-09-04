import React, { useState } from "react";
import {
  CheckCircle2, Circle, FileText, ExternalLink, ShieldCheck,
  AlertCircle, Sparkles, ArrowRight, Download, Upload, Check, Landmark
} from "lucide-react";

export const initialDocumentWeights = [
  {
    id: "aadhaar",
    name: "Aadhaar Card (UIDAI)",
    weight: 17,
    category: "Identity & KYC",
    hint: "Biometrically verified Aadhaar with active mobile linking for OTP/DBT.",
    checked: true,
    importance: "Critical (17%)"
  },
  {
    id: "caste",
    name: "Caste Certificate (SC/ST/OBC)",
    weight: 15,
    category: "Affirmative Verification",
    hint: "Issued by Tehsildar / Competent Revenue Authority / SDO.",
    checked: true,
    importance: "High (15%)"
  },
  {
    id: "residence",
    name: "Residence / Domicile Certificate",
    weight: 12,
    category: "Address Proof",
    hint: "State Domicile, Electricity Bill, or Municipal Voter Registration.",
    checked: true,
    importance: "Substantial (12%)"
  },
  {
    id: "income",
    name: "Income Certificate",
    weight: 10,
    category: "Financial Eligibility",
    hint: "Issued for current financial year by authorized revenue officer.",
    checked: false,
    importance: "Important (10%)"
  },
  {
    id: "bank",
    name: "Bank Passbook / Statements",
    weight: 10,
    category: "Banking & DBT",
    hint: "First page showing IFSC, Account No, & Aadhaar seeding status.",
    checked: true,
    importance: "Important (10%)"
  },
  {
    id: "mobile",
    name: "Mobile Number Verification",
    weight: 10,
    category: "Digital OTP Auth",
    hint: "Aadhaar-linked active SIM card capable of instant OTP authentication.",
    checked: true,
    importance: "Important (10%)"
  },
  {
    id: "pan",
    name: "PAN Card",
    weight: 8,
    category: "Tax & Banking",
    hint: "Permanent Account Number issued by Income Tax Department.",
    checked: true,
    importance: "Standard (8%)"
  },
  {
    id: "photo",
    name: "Passport Size Photograph",
    weight: 8,
    category: "Visual Identity",
    hint: "Recent color photograph with white background (< 50 KB).",
    checked: true,
    importance: "Standard (8%)"
  },
  {
    id: "other",
    name: "Other Supporting Documents",
    weight: 10,
    category: "Scheme Specific",
    hint: "Detailed Project Report (DPR), College Marksheet, or Trade License.",
    checked: false,
    importance: "Specific (10%)"
  }
];

export default function DocumentChecklist({
  activeScheme,
  allSchemes,
  onSelectActiveScheme
}) {
  const [documents, setDocuments] = useState(initialDocumentWeights);

  const toggleDoc = (id) => {
    setDocuments((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, checked: !doc.checked } : doc))
    );
  };

  const handleSelectAll = (checkStatus) => {
    setDocuments((prev) => prev.map((doc) => ({ ...doc, checked: checkStatus })));
  };

  // Compute total completion score from weighted percentages
  const currentTotal = documents.reduce((acc, doc) => (doc.checked ? acc + doc.weight : acc), 0);
  const remainingTotal = 100 - currentTotal;

  // SVG Circular Meter Calculations
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (currentTotal / 100) * circumference;

  // Visual status feedback
  const isFullyReady = currentTotal === 100;
  const isAlmostReady = currentTotal >= 80;

  const currentScheme =
    activeScheme || (allSchemes && allSchemes.length > 0 ? allSchemes[0] : null);

  return (
    <section id="checklist" className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Title & Scheme Targeter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>National Readiness Metric</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight">
              Weighted Document Readiness Checklist
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl font-medium">
              Every document carries a verified national importance weight summing to 100%. Check off your prepared papers to ensure seamless institutional bank approval without delays.
            </p>
          </div>

          {/* Active Target Scheme Picker */}
          {allSchemes && allSchemes.length > 0 && (
            <div className="w-full md:w-80">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Currently Preparing For Scheme:
              </label>
              <select
                value={currentScheme ? currentScheme.id : ""}
                onChange={(e) => {
                  const found = allSchemes.find((s) => s.id === e.target.value);
                  if (found && onSelectActiveScheme) onSelectActiveScheme(found);
                }}
                className="w-full text-xs font-bold bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 cursor-pointer"
              >
                {allSchemes.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.shortName || s.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Core Layout: Circular Meter on Left + Document Grid on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Animated SVG Circular Progress Meter (4 Cols) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#F8FAFC] to-[#EFF4FF] border border-[#2563EB]/15 rounded-3xl p-6 text-center space-y-5 shadow-sm sticky top-24">
            <div className="text-xs font-black uppercase tracking-wider text-[#1E3A8A]">
              Application Readiness Score
            </div>

            {/* Circular Gauge */}
            <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                {/* Background Ring */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  stroke="#E2E8F0"
                  strokeWidth="14"
                  fill="transparent"
                />
                {/* Animated Value Ring */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  stroke={isFullyReady ? "#10B981" : isAlmostReady ? "#2563EB" : "#FF9933"}
                  strokeWidth="14"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                />
              </svg>

              {/* Center Counter */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-[#0B1F3A] tracking-tight">
                  {currentTotal}%
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                  Weight Achieved
                </span>
              </div>
            </div>

            {/* Dynamic Status Text */}
            <div className="space-y-1">
              <div
                className={`text-xs font-black uppercase tracking-wider ${
                  isFullyReady
                    ? "text-emerald-700"
                    : isAlmostReady
                    ? "text-[#1E3A8A]"
                    : "text-amber-700"
                }`}
              >
                {isFullyReady
                  ? "✓ 100% Prepared & Ready!"
                  : isAlmostReady
                  ? "Nearly Ready (80%+ Complete)"
                  : `Incomplete (${remainingTotal}% Weight Pending)`}
              </div>
              <p className="text-[11px] text-slate-600 font-medium">
                {isFullyReady
                  ? "All weighted compliance documents verified. Fast-track approval predicted."
                  : "Check off all items you possess to see real-time portal submission confidence."}
              </p>
            </div>

            {/* Bulk Actions */}
            <div className="flex items-center justify-center gap-2 pt-2 border-t border-slate-200/80">
              <button
                onClick={() => handleSelectAll(true)}
                className="text-[11px] font-bold text-[#2563EB] hover:underline"
              >
                Check All (100%)
              </button>
              <span className="text-slate-300">|</span>
              <button
                onClick={() => handleSelectAll(false)}
                className="text-[11px] font-bold text-slate-500 hover:underline"
              >
                Clear All
              </button>
            </div>
          </div>

          {/* Right Column: Weighted Checklist Items (8 Cols) */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 pb-1">
              <span>Required Document Title & National Metric</span>
              <span>Weight Assigned</span>
            </div>

            <div className="space-y-2.5">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => toggleDoc(doc.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer select-none flex items-start justify-between gap-4 ${
                    doc.checked
                      ? "bg-blue-50/40 border-[#2563EB]/40 shadow-xs"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    {/* Checkbox Icon */}
                    <div
                      className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        doc.checked
                          ? "bg-[#2563EB] text-white"
                          : "border-2 border-slate-300 bg-white"
                      }`}
                    >
                      {doc.checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>

                    {/* Document Details */}
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs sm:text-sm font-extrabold ${
                            doc.checked ? "text-[#0B1F3A]" : "text-slate-700"
                          }`}
                        >
                          {doc.name}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                          {doc.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
                        {doc.hint}
                      </p>
                    </div>
                  </div>

                  {/* Weight Badge */}
                  <div className="shrink-0 text-right">
                    <span
                      className={`text-xs font-black px-2.5 py-1 rounded-xl uppercase tracking-wider inline-block ${
                        doc.checked
                          ? "bg-blue-100 text-[#1E3A8A]"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {doc.weight}% Weight
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* PROMINENT "APPLY FOR THIS SCHEME" ACTION BUTTON CONTAINER */}
        {currentScheme && (
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B1F3A] via-[#1E3A8A] to-[#2563EB] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#FF9933]/20 text-[#FF9933] border border-[#FF9933]/30 px-3 py-0.5 rounded-full text-xs font-black uppercase tracking-wider">
                <Landmark className="w-3.5 h-3.5" /> Official Government Action
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                Apply for {currentScheme.shortName || currentScheme.name}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl font-medium">
                Your application readiness is calculated at <strong className="text-emerald-300 font-extrabold">{currentTotal}%</strong>. Click below to proceed directly to the verified Government of India portal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <a
                href={currentScheme.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF9933] hover:bg-[#F59E0B] text-[#071325] text-sm font-black px-8 py-3.5 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span>Apply for this Scheme</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
