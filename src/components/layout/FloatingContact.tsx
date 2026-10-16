import React, { useState } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {open ? (
        <div className="p-4 rounded-2xl bg-white border border-[#DCE7F1] shadow-[0_12px_36px_rgba(8,120,249,0.18)] space-y-3 w-72 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between pb-2 border-b border-[#E2EBF4]">
            <span className="text-xs font-mono font-bold text-[#102A43]">Direct Client Support</span>
            <button
              onClick={() => setOpen(false)}
              className="text-[#526477] hover:text-[#102A43] p-1 rounded-md hover:bg-[#F4F8FC] cursor-pointer"
              aria-label="Close contact options"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2 text-xs font-mono">
            {/* WhatsApp Direct Option */}
            <a
              href="https://wa.me/919442812481"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-all font-semibold"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>WhatsApp: 9442812481</span>
            </a>

            {/* Direct Phone Option */}
            <a
              href="tel:+919442812481"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-[#F8FAFD] border border-[#DCE7F1] text-[#102A43] hover:border-[#BFDBFE] hover:text-[#0878F9] hover:bg-blue-50/50 transition-all font-semibold"
            >
              <Phone className="w-4 h-4 text-[#0878F9] shrink-0" />
              <span>+91 9442812481</span>
            </a>
          </div>

          <p className="text-[10px] text-[#526477] text-center">
            Founder: YUVARAJ.M • Response SLA: &lt; 2h
          </p>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="clay-btn-primary p-3.5 rounded-2xl flex items-center justify-center cursor-pointer shadow-[0_8px_25px_rgba(8,120,249,0.35)] hover:scale-105 transition-transform"
          aria-label="Open direct contact menu"
          title="Direct Contact via WhatsApp or Phone"
        >
          <div className="relative">
            <MessageSquare className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
          </div>
        </button>
      )}
    </div>
  );
};
