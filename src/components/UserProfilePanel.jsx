import React, { useState } from "react";
import { SlidersHorizontal, RotateCcw, Check, Sparkles, Filter, Users, User, HeartHandshake } from "lucide-react";

export const defaultProfile = {
  category: "SC", // Defaults to SC to demonstrate the SC recommendation highlight!
  gender: "Female",
  age: 24,
  income: "₹1.5L - ₹3.0 Lakh",
  occupation: "Micro-Entrepreneur / Self-Employed",
  disabilityStatus: "None",
  minorityStatus: "No",
  state: "Maharashtra",
  educationLevel: "12th Pass"
};

const quickPresets = [
  {
    name: "SC Woman Entrepreneur",
    profile: {
      category: "SC",
      gender: "Female",
      age: 28,
      income: "₹1.5L - ₹3.0 Lakh",
      occupation: "Micro-Entrepreneur / Self-Employed",
      disabilityStatus: "None",
      minorityStatus: "No",
      state: "Maharashtra",
      educationLevel: "12th Pass"
    }
  },
  {
    name: "Engineering Girl Student",
    profile: {
      category: "General",
      gender: "Female",
      age: 20,
      income: "< ₹1.5 Lakh",
      occupation: "Student",
      disabilityStatus: "None",
      minorityStatus: "No",
      state: "Delhi",
      educationLevel: "Enrolled in Technical Degree (B.Tech/BE)"
    }
  },
  {
    name: "OBC Top-College Student",
    profile: {
      category: "OBC",
      gender: "Male",
      age: 21,
      income: "< ₹1.5 Lakh",
      occupation: "Student",
      disabilityStatus: "None",
      minorityStatus: "No",
      state: "Uttar Pradesh",
      educationLevel: "Graduate"
    }
  },
  {
    name: "Traditional Artisan / Weaver",
    profile: {
      category: "OBC",
      gender: "Male",
      age: 38,
      income: "₹1.5L - ₹3.0 Lakh",
      occupation: "Artisan / Craftsperson",
      disabilityStatus: "None",
      minorityStatus: "No",
      state: "Gujarat",
      educationLevel: "10th Pass"
    }
  },
  {
    name: "Minority Food Processor",
    profile: {
      category: "General",
      gender: "Female",
      age: 34,
      income: "₹1.5L - ₹3.0 Lakh",
      occupation: "Food Processing",
      disabilityStatus: "None",
      minorityStatus: "Yes",
      state: "Karnataka",
      educationLevel: "12th Pass"
    }
  },
  {
    name: "ST Micro-Credit Beneficiary",
    profile: {
      category: "ST",
      gender: "Female",
      age: 31,
      income: "< ₹1.5 Lakh",
      occupation: "Micro-Entrepreneur / Self-Employed",
      disabilityStatus: "None",
      minorityStatus: "No",
      state: "Odisha",
      educationLevel: "10th Pass"
    }
  }
];

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi (UT)", "Jammu & Kashmir (UT)"
];

export default function UserProfilePanel({
  profile,
  setProfile,
  strictFilter,
  setStrictFilter,
  matchingCount = 20,
  currentLang
}) {
  const [isOpen, setIsOpen] = useState(true);

  const updateField = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setProfile(defaultProfile);
  };

  return (
    <div className="bg-white rounded-3xl border border-[#2563EB]/15 shadow-lg p-5 sm:p-7 relative overflow-hidden">
      {/* Decorative gradient strip */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-[#2563EB] to-[#10B981]" />

      {/* Header with Quick Presets */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-blue-50 text-[#2563EB]">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B1F3A] tracking-tight">
                User Profile & Eligibility Engine
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Real-time AI matching recalculates across all 20 Central Government schemes
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Strict Filter Toggle */}
          <button
            onClick={() => setStrictFilter(!strictFilter)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all flex items-center gap-1.5 ${
              strictFilter
                ? "bg-[#0B1F3A] text-white border-[#0B1F3A]"
                : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#2563EB]"
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${strictFilter ? "bg-emerald-400" : "bg-slate-400"}`} />
            Strict Category Only: {strictFilter ? "ON" : "OFF"}
          </button>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-[#2563EB] px-3 py-1.5 rounded-full border border-slate-200 hover:border-[#2563EB] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Quick Test Persona Presets */}
      <div className="pt-4 pb-2">
        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#FF9933]" />
          <span>Quick Personas for SIH Evaluation:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {quickPresets.map((preset) => {
            const isActive =
              profile.category === preset.profile.category &&
              profile.occupation === preset.profile.occupation &&
              profile.gender === preset.profile.gender;
            return (
              <button
                key={preset.name}
                onClick={() => setProfile(preset.profile)}
                className={`text-xs px-3 py-1.5 rounded-xl font-semibold transition-all ${
                  isActive
                    ? "bg-[#1E3A8A] text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
                }`}
              >
                {preset.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Form Fields Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
        
        {/* 1. Category */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#0B1F3A] flex items-center justify-between">
            <span>Social Category</span>
            <span className="text-[10px] text-[#FF9933] font-extrabold uppercase">Key Determinant</span>
          </label>
          <div className="grid grid-cols-4 gap-1.5">
            {["SC", "ST", "OBC", "General"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => updateField("category", cat)}
                className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                  profile.category === cat
                    ? "bg-gradient-to-r from-[#0B1F3A] to-[#1E3A8A] text-white border-transparent shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#2563EB]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Gender */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#0B1F3A]">Gender</label>
          <div className="grid grid-cols-3 gap-1.5">
            {["Female", "Male", "Other"].map((gen) => (
              <button
                key={gen}
                type="button"
                onClick={() => updateField("gender", gen)}
                className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                  profile.gender === gen
                    ? "bg-[#2563EB] text-white border-transparent shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#2563EB]"
                }`}
              >
                {gen}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Age */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs font-bold text-[#0B1F3A]">
            <span>Applicant Age</span>
            <span className="text-[#2563EB] font-black">{profile.age} Years</span>
          </div>
          <input
            type="range"
            min="17"
            max="65"
            value={profile.age}
            onChange={(e) => updateField("age", Number(e.target.value))}
            className="w-full accent-[#2563EB] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-medium">
            <span>17 yrs (Student)</span>
            <span>35 yrs (Youth)</span>
            <span>65 yrs</span>
          </div>
        </div>

        {/* 4. Annual Family Income */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#0B1F3A]">Annual Family Income</label>
          <select
            value={profile.income}
            onChange={(e) => updateField("income", e.target.value)}
            className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 cursor-pointer"
          >
            <option value="< ₹1.5 Lakh">&lt; ₹1.5 Lakh (BPL / Antyodaya)</option>
            <option value="₹1.5L - ₹3.0 Lakh">₹1.5L - ₹3.0 Lakh (EBC & Low Income)</option>
            <option value="₹3.0L - ₹5.0 Lakh">₹3.0L - ₹5.0 Lakh (CSSS Eligible)</option>
            <option value="₹5.0L - ₹8.0 Lakh">₹5.0L - ₹8.0 Lakh (OBC Non-Creamy / AICTE)</option>
            <option value="> ₹8.0 Lakh">&gt; ₹8.0 Lakh (General / Unrestricted)</option>
          </select>
        </div>

        {/* 5. Occupation */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#0B1F3A]">Occupation / Sector</label>
          <select
            value={profile.occupation}
            onChange={(e) => updateField("occupation", e.target.value)}
            className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 cursor-pointer"
          >
            <option value="Micro-Entrepreneur / Self-Employed">Micro-Entrepreneur / Self-Employed</option>
            <option value="Student">Student (College / Technical Degree)</option>
            <option value="Artisan / Craftsperson">Artisan / Craftsperson (18 Trades)</option>
            <option value="Food Processing">Food Processing / Agro-Micro Unit</option>
            <option value="Farmer / Allied">Farmer / Allied Agriculture</option>
            <option value="Unemployed / Seeking">Unemployed / Seeking Self-Employment</option>
          </select>
        </div>

        {/* 6. Education Level */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#0B1F3A]">Education Level</label>
          <select
            value={profile.educationLevel}
            onChange={(e) => updateField("educationLevel", e.target.value)}
            className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 cursor-pointer"
          >
            <option value="Below 10th">Below 10th Standard</option>
            <option value="10th Pass">10th Standard Pass</option>
            <option value="12th Pass">12th Standard Pass</option>
            <option value="Enrolled in Technical Degree (B.Tech/BE)">Enrolled in Technical Degree (B.Tech/BE)</option>
            <option value="Graduate">Graduate (BA / B.Sc / B.Com / etc.)</option>
            <option value="Postgraduate">Postgraduate / Professional</option>
          </select>
        </div>

        {/* 7. Disability Status */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#0B1F3A]">Disability Status (PwD)</label>
          <div className="grid grid-cols-2 gap-1.5">
            {["None", "PwD (>= 40%)"].map((dis) => (
              <button
                key={dis}
                type="button"
                onClick={() => updateField("disabilityStatus", dis)}
                className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                  profile.disabilityStatus === dis
                    ? "bg-[#0B1F3A] text-white border-transparent shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#2563EB]"
                }`}
              >
                {dis === "None" ? "Not Applicable" : "PwD (≥ 40%)"}
              </button>
            ))}
          </div>
        </div>

        {/* 8. Minority Status */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#0B1F3A]">Minority Community Status</label>
          <div className="grid grid-cols-2 gap-1.5">
            {["No", "Yes"].map((min) => (
              <button
                key={min}
                type="button"
                onClick={() => updateField("minorityStatus", min)}
                className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                  profile.minorityStatus === min
                    ? "bg-[#2563EB] text-white border-transparent shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#2563EB]"
                }`}
              >
                {min === "Yes" ? "Yes (Notified Minority)" : "No"}
              </button>
            ))}
          </div>
        </div>

        {/* 9. State / UT */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#0B1F3A]">State / Union Territory</label>
          <select
            value={profile.state}
            onChange={(e) => updateField("state", e.target.value)}
            className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 cursor-pointer"
          >
            {indianStates.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Real-time Match Indicator Footer */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-600">
          <span className="font-bold text-[#0B1F3A]">Active Match Profile:</span>
          <span className="bg-blue-50 text-[#1E3A8A] font-bold px-2 py-0.5 rounded-md border border-blue-200">
            {profile.category} • {profile.gender} • {profile.occupation} • {profile.income}
          </span>
        </div>
        <div className="flex items-center gap-2 text-emerald-700 font-extrabold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{matchingCount} Government Schemes Evaluated & Ranked</span>
        </div>
      </div>
    </div>
  );
}
