import React, { useState } from "react";
import { MapPin, Phone, ShieldCheck, Search, Building2, Navigation, Landmark } from "lucide-react";
import { partnersData } from "../data/partnersData";

export default function PartnerLocator() {
  const [search, setSearch] = useState("");

  const filteredPartners = partnersData.filter((p) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.state.toLowerCase().includes(q) ||
      p.district.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q)
    );
  });

  return (
    <section id="locator" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1E3A8A] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Grassroots Institutional Connectivity</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight">
              Authorized District Partner Locator
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl font-medium">
              Connect directly with official Lead Bank branches, District Industries Centres (DIC), and KVIC facilitation cells to submit sanctioned documents.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search district, bank, or state..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40"
            />
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-200 hover:border-[#2563EB]/30 transition-all hover:shadow-lg flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[#1E3A8A] text-white px-2.5 py-0.5 rounded-full">
                    {partner.type}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> {partner.badge}
                  </span>
                </div>

                <h3 className="text-base font-black text-[#0B1F3A] tracking-tight leading-snug">
                  {partner.name}
                </h3>

                <div className="mt-2 text-xs text-slate-600 space-y-1">
                  <div className="flex items-start gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>
                      {partner.address}, {partner.district} ({partner.state})
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-slate-700 pt-1">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Nodal Contact: {partner.officer}</span>
                  </div>
                </div>

                {/* Services list */}
                <div className="mt-4 pt-3 border-t border-slate-200/80">
                  <div className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1.5">
                    Assistance Available:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {partner.services.map((srv, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-2 border-t border-slate-200/60">
                <a
                  href={`tel:${partner.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#0B1F3A] bg-white border border-slate-300 hover:border-[#2563EB] py-2 px-3 rounded-xl transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Call: {partner.phone}</span>
                </a>
                <button
                  onClick={() =>
                    alert(`Routing directions to ${partner.name} (${partner.district}). Distance approx: ${partner.distance}`)
                  }
                  className="p-2 rounded-xl bg-blue-50 text-[#2563EB] hover:bg-blue-100 transition-colors"
                  title="Get Directions"
                >
                  <Navigation className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
