import React from 'react';
import { Phone, Mail, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from '../../router/Router';
import logoImg from '../../assets/Raj_Tech_Logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white border-t border-[#DCE7F1] pt-16 pb-12 overflow-hidden text-[#526477] text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#DCE7F1]">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={logoImg}
                alt="Raj Tech IT"
                className="h-11 sm:h-13 w-auto max-w-[240px] object-contain"
              />
            </Link>
            
            <p className="text-[#526477] text-xs sm:text-sm leading-relaxed max-w-sm">
              Handcrafted enterprise software engineering agency creating modern web applications, AI platforms, workflow automation, and custom UI/UX design.
            </p>

            <div className="text-xs font-mono text-[#102A43]">
              Founder & Chief Architect: <strong className="text-[#0878F9] font-bold">YUVARAJ.M</strong>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Production Systems Operational</span>
              </div>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-[#102A43] text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-[#0878F9] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#0878F9] transition-colors">
                  About Agency
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#0878F9] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#0878F9] transition-colors">
                  Projects Showcase
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-[#0878F9] transition-colors">
                  7-Step Process
                </Link>
              </li>
              <li>
                <Link to="/tech-stack" className="hover:text-[#0878F9] transition-colors">
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link to="/founder" className="hover:text-[#0878F9] transition-colors">
                  Meet the Founder
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#0878F9] transition-colors">
                  Pricing (INR)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0878F9] transition-colors font-semibold text-[#0878F9]">
                  Contact & Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-[#102A43] text-xs uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services" className="hover:text-[#0878F9] transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#0878F9] transition-colors">
                  Web Applications (SaaS)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#0878F9] transition-colors">
                  AI Solutions & RAG
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#0878F9] transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#0878F9] transition-colors">
                  UI/UX Design Systems
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#0878F9] transition-colors">
                  SLA Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-[#102A43] text-xs uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs font-mono">
              <a
                href="tel:+919442812481"
                className="flex items-center gap-2.5 text-[#102A43] hover:text-[#0878F9] hover:bg-blue-50/50 transition-colors p-2.5 rounded-xl bg-[#F8FAFD] border border-[#DCE7F1]"
              >
                <Phone className="w-4 h-4 text-[#0878F9] shrink-0" />
                <span>+91 9442812481</span>
              </a>

              <a
                href="mailto:ajayarun177@gmail.com"
                className="flex items-center gap-2.5 text-[#102A43] hover:text-[#0878F9] hover:bg-blue-50/50 transition-colors p-2.5 rounded-xl bg-[#F8FAFD] border border-[#DCE7F1] truncate"
              >
                <Mail className="w-4 h-4 text-[#0878F9] shrink-0" />
                <span className="truncate">ajayarun177@gmail.com</span>
              </a>

              <a
                href="https://wa.me/919442812481"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-700 hover:text-emerald-800 hover:bg-emerald-100/50 transition-colors p-2.5 rounded-xl bg-emerald-50 border border-emerald-200"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>WhatsApp: 9442812481</span>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#526477]">
              <ShieldCheck className="w-4 h-4 text-[#0878F9] shrink-0" />
              <span>Standard NDA & Confidentiality</span>
            </div>

            <div className="pt-1">
              <Link
                to="/contact"
                className="clay-btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold w-full justify-center"
              >
                <span>Initiate Project Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#526477]">
          <p>© {new Date().getFullYear()} Raj Tech IT. Founded by YUVARAJ.M. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#0878F9] transition-colors cursor-pointer">Confidentiality SLA</span>
            <span className="hover:text-[#0878F9] transition-colors cursor-pointer">Quality Guarantee</span>
            <span className="hover:text-[#0878F9] transition-colors cursor-pointer">Direct WhatsApp Hotline</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
