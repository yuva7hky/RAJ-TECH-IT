import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { Link, useRouter } from '../../router/Router';
import logoImg from '../../assets/Raj_Tech_Logo.png';

export const Navbar: React.FC = () => {
  const { currentPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Process', path: '/process' },
    { name: 'Tech Stack', path: '/tech-stack' },
    { name: 'Founder', path: '/founder' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 inset-x-0 z-40 transition-all duration-300 bg-[#EAF6FF] border-b border-[#BFDBFE] ${
        isScrolled
          ? 'shadow-[0_4px_20px_rgba(8,120,249,0.08)]'
          : 'shadow-[0_2px_10px_rgba(8,120,249,0.04)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 min-[380px]:px-3 sm:px-6 lg:px-8 h-16 sm:h-18 lg:h-22">
        
        {/* DESKTOP NAVBAR (lg and up) */}
        <div className="hidden lg:flex items-center justify-between gap-4 xl:gap-8 h-full">
          
          {/* Logo on Left: Fits the navbar completely flush from top to bottom */}
          <Link
            to="/"
            className="h-full px-3 xl:px-4 bg-white flex items-center shrink-0 focus:outline-none"
            aria-label="Raj Tech IT Home"
          >
            <img
              src={logoImg}
              alt="Raj Tech IT"
              className="h-full w-auto object-contain block"
            />
          </Link>

          {/* Navigation Links in Center */}
          <nav className="flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-[#0878F9] font-bold border border-[#BFDBFE] shadow-xs'
                      : 'text-[#102A43] hover:text-[#0878F9] hover:bg-white/80'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Side: Phone Hotline & Start Project Button */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:9442812481"
              className="flex items-center gap-2 text-xs font-mono font-medium text-[#102A43] hover:text-[#0878F9] bg-white hover:bg-white/90 px-3.5 py-2.5 rounded-xl border border-[#BFDBFE] shadow-xs transition-all"
              title="Call Raj Tech IT directly: 9442812481"
            >
              <Phone className="w-3.5 h-3.5 text-[#0878F9]" />
              <span>+91 9442812481</span>
            </a>

            <Link
              to="/contact"
              className="clay-btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 shadow-md"
            >
              <span>Start Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* MOBILE NAVBAR (< lg) */}
        {/* Four essential elements: Left Hamburger, Exact Centre Logo (fits top to bottom), Right Phone Icon, Right Start Project Button */}
        <div className="lg:hidden relative flex items-center justify-between w-full h-full">
          
          {/* Element 1: Left Corner Hamburger Menu Icon */}
          <div className="flex items-center justify-start z-20 shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#BFDBFE] text-[#102A43] hover:text-[#0878F9] hover:bg-white/90 focus:outline-none transition-colors cursor-pointer shadow-xs"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Element 2: Exact Centre Complete Logo (Fits the navbar from top to bottom like user image 1) */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full z-10 flex items-center justify-center pointer-events-auto">
            <Link
              to="/"
              className="h-full px-2 min-[380px]:px-3 bg-white flex items-center justify-center focus:outline-none"
              aria-label="Raj Tech IT Home"
            >
              <img
                src={logoImg}
                alt="Raj Tech IT"
                className="h-full w-auto max-w-[160px] min-[390px]:max-w-[185px] sm:max-w-[220px] object-contain block"
              />
            </Link>
          </div>

          {/* Elements 3 & 4: Right Side Phone Icon + Start Project Button */}
          <div className="flex items-center justify-end gap-1.5 sm:gap-2 z-20 shrink-0">
            {/* Element 3: Phone Icon Only (Opens dialler directly to 9442812481) */}
            <a
              href="tel:9442812481"
              aria-label="Call Raj Tech IT at 9442812481"
              className="p-2 sm:p-2.5 rounded-xl bg-white hover:bg-white/90 text-[#0878F9] border border-[#BFDBFE] transition-colors shadow-xs shrink-0 flex items-center justify-center"
              title="Call Raj Tech IT: 9442812481"
            >
              <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#0878F9]" />
            </a>

            {/* Element 4: Blue Start Project Button (Always visible and functional, links to /contact) */}
            <Link
              to="/contact"
              className="clay-btn-primary flex items-center justify-center px-2.5 min-[380px]:px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-[11px] min-[380px]:text-xs font-bold tracking-wide shrink-0 shadow-xs whitespace-nowrap"
            >
              <span>Start Project</span>
            </Link>
          </div>

        </div>

      </div>

      {/* Mobile Drawer Navigation (Consistent Sky-Blue Surface) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#EAF6FF] border-b border-[#BFDBFE] px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          
          {/* Prominent Start Project button exposed in mobile drawer */}
          <div className="mb-3.5">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="clay-btn-primary flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-center w-full shadow-md"
            >
              <span>Start Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-white text-[#0878F9] border border-[#BFDBFE] shadow-xs font-bold'
                      : 'text-[#102A43] hover:bg-white/80 hover:text-[#0878F9]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 mt-3 border-t border-[#BFDBFE] flex flex-col gap-2.5">
            <a
              href="tel:9442812481"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-[#BFDBFE] text-xs font-mono font-medium text-[#102A43] hover:bg-white/90 transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#0878F9]" />
              <span>Call: 9442812481</span>
            </a>

            <a
              href="https://wa.me/919442812481"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono font-semibold text-emerald-800 hover:bg-emerald-100/60 transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: 9442812481</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
