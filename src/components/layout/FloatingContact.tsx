import React, { useState } from 'react';
import { Phone, Mail, X } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {open ? (
        <div className="p-4 rounded-2xl bg-slate-950/95 border border-cyan-500/40 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,210,255,0.3)] space-y-3 w-72 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-mono font-bold text-white">Direct Lead Engineering</span>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <a
              href="tel:+919442812481"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-cyan-300 transition-all"
            >
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>+91 9442812481</span>
            </a>

            <a
              href="mailto:ajayarun177@gmail.com"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-cyan-300 transition-all truncate"
            >
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="truncate">ajayarun177@gmail.com</span>
            </a>
          </div>

          <p className="text-[10px] text-slate-400 text-center">
            Response SLA: &lt; 2 Hours
          </p>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="relative group p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-[0_0_30px_rgba(0,210,255,0.6)] hover:scale-110 transition-transform duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Open contact widget"
        >
          <Phone className="w-6 h-6 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950 animate-ping" />
        </button>
      )}
    </div>
  );
};
