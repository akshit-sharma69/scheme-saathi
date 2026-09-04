import React, { useState } from "react";
import GovernmentTopBanner from "./components/GovernmentTopBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ModiVisionCarousel from "./components/ModiVisionCarousel";
import UserProfilePanel, { defaultProfile } from "./components/UserProfilePanel";
import SchemesSection from "./components/SchemesSection";
import SchemeDetailModal from "./components/SchemeDetailModal";
import DocumentChecklist from "./components/DocumentChecklist";
import EmiSubsidyCalculator from "./components/EmiSubsidyCalculator";
import PartnerLocator from "./components/PartnerLocator";
import SaathiChatDrawer from "./components/SaathiChatDrawer";
import AISchemeFinderWizard from "./components/AISchemeFinderWizard";
import Footer from "./components/Footer";

import { schemesData } from "./data/schemesData";
import { MessageSquare, Sparkles } from "lucide-react";

export default function SchemeSaathi() {
  const [currentLang, setLang] = useState("en");
  const [profile, setProfile] = useState(defaultProfile);
  const [strictFilter, setStrictFilter] = useState(false);

  // Modal & Drawer states
  const [selectedSchemeForModal, setSelectedSchemeForModal] = useState(null);
  const [activeSchemeForChecklist, setActiveSchemeForChecklist] = useState(schemesData[0]);
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Handlers
  const handleOpenDetailModal = (scheme) => {
    setSelectedSchemeForModal(scheme);
  };

  const handleCloseDetailModal = () => {
    setSelectedSchemeForModal(null);
  };

  const handleOpenChecklistForScheme = (scheme) => {
    setActiveSchemeForChecklist(scheme);
    const element = document.querySelector("#checklist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleApplyProfileFromWizard = (newProfile) => {
    setProfile((prev) => ({ ...prev, ...newProfile }));
  };

  const handleSelectPopularTag = (tagName) => {
    // Scroll to schemes section
    const el = document.querySelector("#schemes");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0B1F3A] flex flex-col font-sans selection:bg-[#FF9933]/20 selection:text-[#0B1F3A]">
      {/* 1. Official Government Top Banner */}
      <GovernmentTopBanner currentLang={currentLang} setLang={setLang} />

      {/* 2. Modern Sticky Navigation with Gen-Z Logo */}
      <Navbar
        onOpenWizard={() => setIsWizardOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* 3. Hero Section with Live Counters */}
      <Hero
        currentLang={currentLang}
        onOpenWizard={() => setIsWizardOpen(true)}
        onSelectTag={handleSelectPopularTag}
      />

      {/* 4. Hon'ble PM Modi Vision Section with Official Portrait */}
      <ModiVisionCarousel />

      {/* 5. User Profile & Real-Time Filters Panel */}
      <section className="pt-16 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <UserProfilePanel
          profile={profile}
          setProfile={setProfile}
          strictFilter={strictFilter}
          setStrictFilter={setStrictFilter}
          matchingCount={schemesData.length}
          currentLang={currentLang}
        />
      </section>

      {/* 6. Top 20 Ranked Eligible Government Schemes Section */}
      <SchemesSection
        schemes={schemesData}
        profile={profile}
        strictFilter={strictFilter}
        onSelectScheme={handleOpenDetailModal}
        onOpenChecklistForScheme={handleOpenChecklistForScheme}
      />

      {/* 7. Weighted Document Readiness Checklist & Prominent Apply Button */}
      <DocumentChecklist
        activeScheme={activeSchemeForChecklist}
        allSchemes={schemesData}
        onSelectActiveScheme={(scheme) => setActiveSchemeForChecklist(scheme)}
      />

      {/* 8. Interactive Capital Subsidy & Monthly EMI Estimator */}
      <EmiSubsidyCalculator />

      {/* 9. Authorized District Partner & Bank Locator */}
      <PartnerLocator />

      {/* 10. Comprehensive Official Footer */}
      <Footer />

      {/* Floating Saathi AI Trigger Button (Bottom Right) */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-gradient-to-r from-[#0B1F3A] via-[#1E3A8A] to-[#2563EB] hover:scale-105 active:scale-95 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 group border border-white/20"
          aria-label="Open Saathi AI Chat"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-[#FF9933]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0B1F3A]" />
          </div>
          <span className="text-xs font-bold tracking-wide pr-1">Saathi AI Copilot</span>
        </button>
      )}

      {/* Overlays and Modals */}
      <SchemeDetailModal
        scheme={selectedSchemeForModal}
        isOpen={Boolean(selectedSchemeForModal)}
        onClose={handleCloseDetailModal}
        onOpenChecklist={handleOpenChecklistForScheme}
      />

      <AISchemeFinderWizard
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        onApplyProfile={handleApplyProfileFromWizard}
      />

      <SaathiChatDrawer
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  );
}
