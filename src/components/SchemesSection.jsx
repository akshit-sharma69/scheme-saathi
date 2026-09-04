import React, { useState, useMemo } from "react";
import {
  Sparkles, Search, Filter, ArrowUpRight, Award, ShieldCheck,
  CheckCircle2, Clock, ChevronRight, Zap, ExternalLink, Check, FileText
} from "lucide-react";
import { calculateSchemeEligibility } from "../data/schemesData";

export default function SchemesSection({
  schemes,
  profile,
  strictFilter,
  onSelectScheme,
  onOpenChecklistForScheme
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Dynamically calculate eligibility for all 20 schemes and sort by rank
  const rankedSchemes = useMemo(() => {
    return schemes
      .map((scheme) => {
        const eligibility = calculateSchemeEligibility(scheme, profile);
        return {
          ...scheme,
          eligibility
        };
      })
      .filter((scheme) => {
        // If strict filter is ON, only show schemes with eligibility >= 60%
        if (strictFilter && scheme.eligibility.percentage < 60) {
          return false;
        }

        // Search Query Filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = scheme.name.toLowerCase().includes(q);
          const matchDesc = scheme.shortDesc.toLowerCase().includes(q);
          const matchMin = scheme.ministry.toLowerCase().includes(q);
          const matchTag = scheme.tags.some((t) => t.toLowerCase().includes(q));
          if (!matchName && !matchDesc && !matchMin && !matchTag) {
            return false;
          }
        }

        // Tab Filter
        if (activeTab === "high-match") {
          return scheme.eligibility.percentage >= 80;
        }
        if (activeTab === "subsidies") {
          return scheme.subsidyPct > 0;
        }
        if (activeTab === "loans") {
          return scheme.schemeType.toLowerCase().includes("loan") || scheme.schemeType.toLowerCase().includes("credit");
        }
        if (activeTab === "scholarships") {
          return scheme.tags.includes("Merit Scholarship") || scheme.tags.includes("Technical Degree") || scheme.tags.includes("Higher Education");
        }

        return true;
      })
      .sort((a, b) => b.eligibility.percentage - a.eligibility.percentage);
  }, [schemes, profile, strictFilter, searchQuery, activeTab]);

  return (
    <section id="schemes" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 text-[#1E3A8A] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-[#FF9933]" />
              <span>National Scheme Matchmaker</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight">
              Top Ranked Eligible Schemes ({rankedSchemes.length})
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl font-medium">
              Ranked in descending order of your AI eligibility score. Showing verified Central Government schemes tailored to your active profile ({profile.category} • {profile.gender} • {profile.occupation}).
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search scheme name, subsidy, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs font-semibold bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          {[
            { id: "all", label: `All Ranked Schemes (${schemes.length})` },
            { id: "high-match", label: "High Confidence (≥ 80%)" },
            { id: "subsidies", label: "Capital Subsidies & Grants" },
            { id: "loans", label: "Concessional & Soft Loans" },
            { id: "scholarships", label: "Higher Education & Scholarships" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all ${
                activeTab === tab.id
                  ? "bg-[#0B1F3A] text-white shadow-xs"
                  : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Schemes Grid (Ranked Cards) */}
        {rankedSchemes.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-xl mx-auto space-y-4 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
              <Filter className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-[#0B1F3A]">No matching schemes for this strict filter</h3>
            <p className="text-xs text-slate-500">
              Try turning off "Strict Category Only" or changing your occupation/category in the User Profile panel above.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rankedSchemes.map((scheme, index) => {
              const rank = index + 1;
              const matchPct = scheme.eligibility.percentage;

              // Match Color theme
              const isTop = rank <= 3;
              const matchBadgeColor =
                matchPct >= 85
                  ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                  : matchPct >= 65
                  ? "bg-blue-50 text-blue-700 border-blue-300"
                  : "bg-slate-100 text-slate-700 border-slate-300";

              return (
                <div
                  key={scheme.id}
                  className={`relative flex flex-col justify-between bg-white rounded-3xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-6 ${
                    isTop
                      ? "border-[#2563EB]/40 ring-1 ring-[#2563EB]/20 shadow-md"
                      : "border-slate-200/90 shadow-sm"
                  }`}
                >
                  {/* Card Header: Rank Badge + Eligibility Percentage */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      {/* Rank Position Badge */}
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider ${
                          isTop
                            ? "bg-gradient-to-r from-[#FF9933] to-[#D97706] text-white shadow-xs"
                            : "bg-[#0B1F3A]/10 text-[#0B1F3A]"
                        }`}
                      >
                        {isTop && <Sparkles className="w-3 h-3 text-white fill-white" />}
                        Rank #{rank}
                      </span>

                      {/* AI Eligibility Percentage Score */}
                      <div
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-black ${matchBadgeColor}`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            matchPct >= 85 ? "bg-emerald-500 animate-pulse" : "bg-blue-500"
                          }`}
                        />
                        <span>{matchPct}% Match</span>
                      </div>
                    </div>

                    {/* Ministry / Nodal Agency Tag */}
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#1E3A8A] line-clamp-1 mb-1.5">
                      {scheme.ministry}
                    </div>

                    {/* Scheme Name */}
                    <h3 className="text-base sm:text-lg font-black text-[#0B1F3A] tracking-tight leading-snug hover:text-[#2563EB] transition-colors">
                      {scheme.name}
                    </h3>

                    {/* Reasons Pill (Why matched for user) */}
                    {scheme.eligibility.reasons && scheme.eligibility.reasons.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {scheme.eligibility.reasons.slice(0, 2).map((reason, rIdx) => (
                          <span
                            key={rIdx}
                            className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded-md"
                          >
                            ✓ {reason}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Short Description */}
                    <p className="mt-3 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {scheme.shortDesc}
                    </p>

                    {/* Key Benefits Highlight Cards */}
                    <div className="mt-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                      <div className="text-[11px] font-black uppercase tracking-wider text-[#0B1F3A] flex items-center gap-1">
                        <Zap className="w-3 h-3 text-[#FF9933]" />
                        <span>Key Benefits:</span>
                      </div>
                      <ul className="space-y-1">
                        {scheme.keyBenefits.slice(0, 3).map((benefit, bIdx) => (
                          <li
                            key={bIdx}
                            className="text-xs text-slate-700 flex items-start gap-1.5 font-medium"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Funding / Subsidy Badges */}
                    <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold">
                      <span className="bg-blue-50 text-[#1E3A8A] px-2.5 py-1 rounded-lg border border-blue-200">
                        {scheme.fundingRange}
                      </span>
                      {scheme.subsidyPct > 0 && (
                        <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg border border-emerald-200">
                          {scheme.subsidyPct}% Capital Subsidy
                        </span>
                      )}
                      <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {scheme.processingTime}
                      </span>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onSelectScheme(scheme)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#0B1F3A] hover:bg-[#1E3A8A] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs hover:shadow transition-all"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenChecklistForScheme(scheme)}
                      className="p-2.5 rounded-xl border border-slate-200 hover:border-[#2563EB] hover:bg-blue-50/50 text-[#0B1F3A] hover:text-[#2563EB] transition-colors"
                      title="Prepare Document Checklist for this Scheme"
                      aria-label="Document Checklist"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Banner with Verification Footnote */}
        <div className="bg-white/80 rounded-2xl border border-slate-200 p-4 text-center text-xs text-slate-500 font-medium flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1 text-[#0B1F3A] font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-500" /> All 20 Schemes Sourced from Official Gazette & National Portals
          </span>
          <span>•</span>
          <span>Direct Integration Ready with Jan Samarth & National Scholarship Portal</span>
        </div>

      </div>
    </section>
  );
}
