import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { MessageSquare, Zap, Menu, X, Sparkles, SlidersHorizontal, CheckSquare, Calculator, MapPin } from "lucide-react";

export default function Navbar({ onOpenWizard, onOpenChat, onScrollToSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Modi Ji's Vision", href: "#vision" },
    { label: "Top 20 Schemes", href: "#schemes" },
    { label: "Checklist", href: "#checklist" },
    { label: "Affordability EMI", href: "#calculator" },
    { label: "Partner Locator", href: "#locator" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#2563EB]/15 shadow-sm py-2.5"
          : "bg-white/85 backdrop-blur-sm border-b border-[#2563EB]/10 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 rounded-xl">
          <Logo />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-semibold text-[#0B1F3A]/75 hover:text-[#2563EB] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#2563EB] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenChat}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] px-3.5 py-2 rounded-full border border-[#0B1F3A]/20 hover:border-[#2563EB] hover:bg-blue-50/50 hover:text-[#2563EB] transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Saathi AI Copilot</span>
          </button>

          <button
            onClick={onOpenWizard}
            className="group relative inline-flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-[#0B1F3A] via-[#1E3A8A] to-[#2563EB] px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Zap className="w-3.5 h-3.5 text-[#FF9933] group-hover:rotate-12 transition-transform" />
            <span>AI Scheme Wizard</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#0B1F3A] hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-[#2563EB]/15 px-6 py-5 space-y-4 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-semibold text-[#0B1F3A]/80 hover:text-[#2563EB] p-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-200/60 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWizard();
              }}
              className="w-full text-xs font-bold text-white bg-gradient-to-r from-[#0B1F3A] to-[#2563EB] py-2.5 rounded-xl shadow flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-[#FF9933]" /> Launch AI Scheme Wizard
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full text-xs font-semibold text-[#0B1F3A] border border-[#0B1F3A]/20 py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50"
            >
              <MessageSquare className="w-4 h-4 text-[#2563EB]" /> Chat with Saathi AI
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
