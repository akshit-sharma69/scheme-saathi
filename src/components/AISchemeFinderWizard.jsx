import React, { useState } from "react";
import { X, Sparkles, ArrowRight, ArrowLeft, Check, Zap, Award } from "lucide-react";

export default function AISchemeFinderWizard({
  isOpen,
  onClose,
  onApplyProfile
}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "SC",
    gender: "Female",
    age: 26,
    occupation: "Micro-Entrepreneur / Self-Employed",
    income: "₹1.5L - ₹3.0 Lakh",
    disabilityStatus: "None",
    minorityStatus: "No"
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Complete and apply
      if (onApplyProfile) {
        onApplyProfile(formData);
      }
      onClose();
      // Scroll to schemes
      const el = document.querySelector("#schemes");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Wizard Top Gradient Bar */}
        <div className="h-2 bg-gradient-to-r from-[#FF9933] via-[#2563EB] to-emerald-500" />

        {/* Wizard Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-blue-50 text-[#2563EB]">
              <Sparkles className="w-5 h-5 text-[#FF9933]" />
            </div>
            <div>
              <h3 className="text-base font-black text-[#0B1F3A]">
                AI Scheme Finder Wizard
              </h3>
              <p className="text-xs text-slate-500 font-medium">Step {step} of 3</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard Step Body */}
        <div className="p-6 space-y-5">
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-sm font-black text-[#0B1F3A]">
                1. Select your Category & Demographic Details
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1">
                  Social Category
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {["SC", "ST", "OBC", "General"].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setFormData({ ...formData, category: cat })}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                        formData.category === cat
                          ? "bg-[#0B1F3A] text-white border-transparent"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#2563EB]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1">Gender</label>
                <div className="grid grid-cols-3 gap-2">
                  {["Female", "Male", "Other"].map((gen) => (
                    <button
                      key={gen}
                      type="button"
                      onClick={() => setFormData({ ...formData, gender: gen })}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                        formData.gender === gen
                          ? "bg-[#2563EB] text-white border-transparent"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#2563EB]"
                      }`}
                    >
                      {gen}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                  <span>Age</span>
                  <span className="text-[#2563EB]">{formData.age} Years</span>
                </div>
                <input
                  type="range"
                  min="18"
                  max="65"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                  className="w-full accent-[#2563EB]"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="text-sm font-black text-[#0B1F3A]">
                2. What is your Occupation or Primary Activity?
              </div>

              <div className="space-y-2">
                {[
                  "Micro-Entrepreneur / Self-Employed",
                  "Student",
                  "Artisan / Craftsperson",
                  "Food Processing",
                  "Farmer / Allied"
                ].map((occ) => (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => setFormData({ ...formData, occupation: occ })}
                    className={`w-full p-3 text-left rounded-2xl border text-xs font-bold flex items-center justify-between transition-all ${
                      formData.occupation === occ
                        ? "bg-blue-50 border-[#2563EB] text-[#1E3A8A]"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    <span>{occ}</span>
                    {formData.occupation === occ && <Check className="w-4 h-4 text-[#2563EB]" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="text-sm font-black text-[#0B1F3A]">
                3. Financial Background & Affirmative Status
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1">
                  Annual Family Income
                </label>
                <select
                  value={formData.income}
                  onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                  className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5"
                >
                  <option value="< ₹1.5 Lakh">&lt; ₹1.5 Lakh (BPL / High Subsidy Priority)</option>
                  <option value="₹1.5L - ₹3.0 Lakh">₹1.5L - ₹3.0 Lakh (EBC / NSFDC Limit)</option>
                  <option value="₹3.0L - ₹5.0 Lakh">₹3.0L - ₹5.0 Lakh (CSSS Merit Limit)</option>
                  <option value="₹5.0L - ₹8.0 Lakh">₹5.0L - ₹8.0 Lakh (AICTE Limit)</option>
                  <option value="> ₹8.0 Lakh">&gt; ₹8.0 Lakh (General / Unrestricted)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">
                    Disability (PwD ≥ 40%)
                  </label>
                  <select
                    value={formData.disabilityStatus}
                    onChange={(e) =>
                      setFormData({ ...formData, disabilityStatus: e.target.value })
                    }
                    className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2"
                  >
                    <option value="None">None</option>
                    <option value="PwD (>= 40%)">Yes (PwD ≥ 40%)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">
                    Minority Community
                  </label>
                  <select
                    value={formData.minorityStatus}
                    onChange={(e) =>
                      setFormData({ ...formData, minorityStatus: e.target.value })
                    }
                    className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2"
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium">
                ⚡ Ready to calculate: All 20 government schemes will be evaluated and ranked according to your exact responses!
              </div>
            </div>
          )}
        </div>

        {/* Wizard Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className={`flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl transition-colors ${
              step === 1 ? "text-slate-300 cursor-not-allowed" : "text-slate-700 hover:bg-slate-200"
            }`}
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>

          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-[#0B1F3A] to-[#2563EB] px-6 py-2.5 rounded-xl shadow hover:opacity-95 transition-all"
          >
            <span>{step === 3 ? "Compute Top Schemes" : "Next Step"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
