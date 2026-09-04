import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, Bot, User, ArrowRight, ShieldCheck } from "lucide-react";

const initialMessages = [
  {
    sender: "bot",
    text: "Namaste! I am Saathi AI, your national scheme advisor. Ask me anything about subsidies, category benefits (SC/ST/OBC/Women), eligibility rules, or required documents."
  }
];

const faqPrompts = [
  "How to get 35% subsidy on PMEGP?",
  "What are the best schemes for SC/ST?",
  "Tell me about PM Vishwakarma ₹15,000 grant",
  "How can girl students get AICTE Pragati?"
];

export default function SaathiChatDrawer({ isOpen, onClose }) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");

    setIsTyping(true);

    setTimeout(() => {
      let botReply = "";
      const q = query.toLowerCase();

      if (q.includes("pmegp") || q.includes("35%")) {
        botReply =
          "Under PMEGP, beneficiaries in Special Categories (SC, ST, OBC, Women, Minorities, PwD, Ex-Servicemen) located in Rural areas receive a 35% margin money capital subsidy! For Urban areas, it is 25%. Own contribution is only 5%. Maximum project cost is ₹50 Lakh for manufacturing and ₹20 Lakh for services.";
      } else if (q.includes("sc") || q.includes("st") || q.includes("dalit") || q.includes("tribal")) {
        botReply =
          "For SC and ST entrepreneurs, Scheme Saathi highlights 8 exclusive schemes:\n1. National SC-ST Hub (NSSH) — 100% tender fee reimbursement & 80% exhibition subsidies.\n2. SCLCSS — 25% upfront capital subsidy up to ₹25 Lakh on machinery.\n3. Stand-Up India — Loans from ₹10 Lakh to ₹1 Crore.\n4. NSFDC / NSTFDC Term Loans — Concessional loans at 6%–8% p.a.\n5. NSFDC Mahila Adhikarita — 4% ultra-low interest loans for SC women!\n6. Top Class SC Scholarship — Full college tuition + laptop grant.";
      } else if (q.includes("vishwakarma") || q.includes("toolkit") || q.includes("artisan")) {
        botReply =
          "PM Vishwakarma covers 18 traditional crafts (carpenters, potters, blacksmiths, cobblers, tailors, etc.). Key benefits include:\n• ₹15,000 Free e-Voucher for modern toolkits\n• 5–7 days skill training with ₹500/day stipend\n• Collateral-free loan: ₹1 Lakh (Tranche 1) + ₹2 Lakh (Tranche 2) at a fixed 5% interest rate!";
      } else if (q.includes("pragati") || q.includes("girl") || q.includes("aicte")) {
        botReply =
          "The AICTE Pragati Scholarship is awarded to meritorious girl students admitted to technical degree courses (B.Tech / B.E.). It provides ₹50,000 every year for all 4 years of study! Family annual income must be under ₹8.00 Lakh per annum. Applications open annually on scholarships.gov.in.";
      } else if (q.includes("mudra") || q.includes("collateral")) {
        botReply =
          "Pradhan Mantri MUDRA Yojana (PMMY) provides 100% collateral-free credit across 4 categories: Shishu (up to ₹50k), Kishor (₹50k to ₹5L), Tarun (₹5L to ₹10L), and the expanded Tarun Plus (up to ₹20L) for micro-enterprises with good repayment track records!";
      } else {
        botReply = `Based on your profile, our AI engine has matched you with top Central Government schemes. You can click on 'View Details' on any scheme card or verify your documents in the Weighted Checklist to ensure fast-track approval!`;
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      setIsTyping(false);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[560px] animate-fadeIn">
      {/* Top Banner */}
      <div className="p-4 bg-gradient-to-r from-[#0B1F3A] via-[#1E3A8A] to-[#2563EB] text-white flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
            <Bot className="w-5 h-5 text-[#FF9933]" />
          </div>
          <div>
            <div className="text-xs font-black tracking-wide flex items-center gap-1.5">
              <span>Saathi AI Copilot</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="text-[10px] text-white/70 font-medium">
              National Scheme & Subsidy Advisor
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close Chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2.5 ${
              m.sender === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${
                m.sender === "user"
                  ? "bg-[#2563EB] text-white"
                  : "bg-[#0B1F3A] text-[#FF9933]"
              }`}
            >
              {m.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
            </div>

            <div
              className={`text-xs p-3 rounded-2xl max-w-[80%] leading-relaxed whitespace-pre-line font-medium ${
                m.sender === "user"
                  ? "bg-[#2563EB] text-white rounded-tr-none"
                  : "bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-2xs"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-1.5 text-xs text-slate-400 pl-9">
            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Prompt Suggestions */}
      <div className="px-3 py-2 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto no-scrollbar">
        {faqPrompts.map((faq, fIdx) => (
          <button
            key={fIdx}
            onClick={() => handleSend(faq)}
            className="text-[11px] font-semibold text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-[#2563EB] px-2.5 py-1 rounded-full whitespace-nowrap transition-colors"
          >
            {faq}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask a question about schemes or subsidies..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 font-medium"
        />
        <button
          onClick={() => handleSend()}
          className="p-2.5 bg-[#0B1F3A] hover:bg-[#1E3A8A] text-white rounded-xl transition-colors shadow-xs"
          aria-label="Send"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
