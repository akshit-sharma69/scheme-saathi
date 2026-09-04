import React, { useState } from "react";
import { Calculator, Sparkles, TrendingUp, Landmark, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export default function EmiSubsidyCalculator() {
  const [projectCost, setProjectCost] = useState(1500000); // 15 Lakh default
  const [subsidyRate, setSubsidyRate] = useState(35); // 35% PMEGP rural subsidy default
  const [ownContributionRate, setOwnContributionRate] = useState(5); // 5% for SC/ST/Women
  const [tenureYears, setTenureYears] = useState(5); // 5 years
  const [interestRate, setInterestRate] = useState(9.0); // 9% per annum

  // Quick Presets
  const applyPreset = (preset) => {
    if (preset === "pmegp-rural") {
      setSubsidyRate(35);
      setOwnContributionRate(5);
    } else if (preset === "pmegp-urban") {
      setSubsidyRate(25);
      setOwnContributionRate(5);
    } else if (preset === "sclcss") {
      setSubsidyRate(25);
      setOwnContributionRate(10);
    } else if (preset === "mudra") {
      setSubsidyRate(0);
      setOwnContributionRate(10);
    }
  };

  // Math Calculations
  const ownContribution = Math.round(projectCost * (ownContributionRate / 100));
  const capitalSubsidy = Math.round(projectCost * (subsidyRate / 100));
  const principalLoan = Math.max(projectCost - ownContribution - capitalSubsidy, 0);

  // Monthly EMI Formula
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const monthlyEmi =
    principalLoan > 0
      ? Math.round(
          (principalLoan * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        )
      : 0;

  const totalPayment = monthlyEmi * totalMonths;
  const totalInterest = Math.max(totalPayment - principalLoan, 0);

  return (
    <section id="calculator" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F1F5F9]">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 text-[#1E3A8A] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Affordability Simulator</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight">
            Capital Subsidy & Monthly EMI Estimator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            See how government capital subsidies slash your borrowing needs and lower your monthly installment.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-bold text-slate-500 mr-2">Quick Subsidies:</span>
          <button
            onClick={() => applyPreset("pmegp-rural")}
            className={`text-xs font-bold px-3.5 py-1.5 rounded-full border transition-all ${
              subsidyRate === 35
                ? "bg-[#0B1F3A] text-white border-[#0B1F3A]"
                : "bg-white text-slate-700 border-slate-300 hover:border-[#2563EB]"
            }`}
          >
            PMEGP Rural Special (35% Subsidy)
          </button>
          <button
            onClick={() => applyPreset("pmegp-urban")}
            className={`text-xs font-bold px-3.5 py-1.5 rounded-full border transition-all ${
              subsidyRate === 25 && ownContributionRate === 5
                ? "bg-[#0B1F3A] text-white border-[#0B1F3A]"
                : "bg-white text-slate-700 border-slate-300 hover:border-[#2563EB]"
            }`}
          >
            PMEGP Urban Special (25% Subsidy)
          </button>
          <button
            onClick={() => applyPreset("sclcss")}
            className={`text-xs font-bold px-3.5 py-1.5 rounded-full border transition-all ${
              subsidyRate === 25 && ownContributionRate === 10
                ? "bg-[#0B1F3A] text-white border-[#0B1F3A]"
                : "bg-white text-slate-700 border-slate-300 hover:border-[#2563EB]"
            }`}
          >
            SCLCSS Technology (25% Subsidy)
          </button>
          <button
            onClick={() => applyPreset("mudra")}
            className={`text-xs font-bold px-3.5 py-1.5 rounded-full border transition-all ${
              subsidyRate === 0
                ? "bg-[#0B1F3A] text-white border-[#0B1F3A]"
                : "bg-white text-slate-700 border-slate-300 hover:border-[#2563EB]"
            }`}
          >
            MUDRA (0% Subsidy, Collateral-Free)
          </button>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sliders Input Panel (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
            
            {/* Slider 1: Total Project Cost */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-[#0B1F3A]">Total Project / Equipment Cost</span>
                <span className="text-base font-black text-[#2563EB]">
                  ₹{(projectCost / 100000).toFixed(1)} Lakh
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="5000000"
                step="50000"
                value={projectCost}
                onChange={(e) => setProjectCost(Number(e.target.value))}
                className="w-full accent-[#2563EB] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>₹1 Lakh (Micro)</span>
                <span>₹25 Lakh</span>
                <span>₹50 Lakh (PMEGP Max)</span>
              </div>
            </div>

            {/* Slider 2: Government Capital Subsidy % */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-[#0B1F3A]">Capital Subsidy Percentage</span>
                <span className="text-base font-black text-emerald-600">
                  {subsidyRate}% (₹{(capitalSubsidy / 100000).toFixed(2)} Lakh Grant)
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="35"
                step="5"
                value={subsidyRate}
                onChange={(e) => setSubsidyRate(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>0% (Standard Loan)</span>
                <span>15% (General Urban)</span>
                <span>25% (Special Urban)</span>
                <span>35% (Special Rural)</span>
              </div>
            </div>

            {/* Slider 3: Own Equity Contribution % */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-[#0B1F3A]">Applicant's Own Contribution (Margin Money)</span>
                <span className="text-sm font-black text-amber-600">
                  {ownContributionRate}% (₹{ownContribution.toLocaleString("en-IN")})
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                step="5"
                value={ownContributionRate}
                onChange={(e) => setOwnContributionRate(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>5% (SC/ST/Women/OBC)</span>
                <span>10% (General Category)</span>
                <span>25% (Commercial)</span>
              </div>
            </div>

            {/* Sliders 4 & 5: Tenure & Interest Rate */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-[#0B1F3A]">
                  <span>Repayment Tenure</span>
                  <span className="text-[#2563EB]">{tenureYears} Years</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-[#2563EB] cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-[#0B1F3A]">
                  <span>Interest Rate (p.a.)</span>
                  <span className="text-[#2563EB]">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="14"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-[#2563EB] cursor-pointer"
                />
              </div>
            </div>

          </div>

          {/* Result Output Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0B1F3A] to-[#071325] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10 space-y-6">
            
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest text-[#FF9933]">
                Estimated Monthly Installment
              </span>
              <div className="mt-2 text-4xl sm:text-5xl font-black text-white tracking-tight">
                ₹{monthlyEmi.toLocaleString("en-IN")}
                <span className="text-xs font-normal text-white/60 ml-2">/ month</span>
              </div>
              <p className="text-xs text-white/70 mt-1">
                For a net bank loan of ₹{principalLoan.toLocaleString("en-IN")} over {tenureYears} years.
              </p>
            </div>

            {/* Visual Breakdown Strip */}
            <div className="space-y-2">
              <div className="flex justify-between text-[11px] font-bold text-white/80">
                <span>Capital Distribution</span>
                <span>₹{projectCost.toLocaleString("en-IN")}</span>
              </div>
              <div className="h-3.5 w-full bg-white/10 rounded-full overflow-hidden flex">
                <div
                  style={{ width: `${(ownContribution / projectCost) * 100}%` }}
                  className="bg-amber-400 h-full transition-all"
                  title="Own Margin"
                />
                <div
                  style={{ width: `${(capitalSubsidy / projectCost) * 100}%` }}
                  className="bg-emerald-400 h-full transition-all"
                  title="Government Subsidy"
                />
                <div
                  style={{ width: `${(principalLoan / projectCost) * 100}%` }}
                  className="bg-[#2563EB] h-full transition-all"
                  title="Bank Loan"
                />
              </div>
            </div>

            {/* Detailed Financial Components */}
            <div className="space-y-3 border-t border-white/10 pt-4 text-xs">
              <div className="flex justify-between items-center text-white/80">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  Applicant Margin Money ({ownContributionRate}%):
                </span>
                <span className="font-mono font-bold text-white">
                  ₹{ownContribution.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between items-center text-white/80">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  Direct Govt Capital Grant ({subsidyRate}%):
                </span>
                <span className="font-mono font-bold text-emerald-400">
                  - ₹{capitalSubsidy.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between items-center text-white/80">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                  Net Bank Loan Sanction:
                </span>
                <span className="font-mono font-bold text-white">
                  ₹{principalLoan.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between items-center text-white/60 pt-1 border-t border-white/10">
                <span>Total Interest Payable ({tenureYears} yrs):</span>
                <span className="font-mono">₹{totalInterest.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Quick Action */}
            <a
              href="#schemes"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#FF9933] hover:bg-[#F59E0B] text-[#071325] text-xs font-black py-3 rounded-xl shadow transition-all"
            >
              <span>Explore Schemes with Subsidies</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
