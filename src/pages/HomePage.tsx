import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Layers, Cpu, Globe } from 'lucide-react';
import { Hero } from '../components/sections/Hero';
import { Link } from '../router/Router';
import { SERVICES_DATA } from '../data/services';
import { PROJECTS_DATA } from '../data/projects';
import { GlassCard } from '../components/UI/GlassCard';
import { Button } from '../components/UI/Button';

export const HomePage: React.FC = () => {
  // Show key 3 services preview on Home
  const previewServices = SERVICES_DATA.slice(0, 3);
  // Show top 3 projects preview on Home
  const previewProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. Clean Hero Section */}
      <Hero />

      {/* 2. Company Introduction & Capabilities Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="p-8 sm:p-12 border-[#DCE7F1]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878F9] text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Enterprise Agency Standards</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#102A43]">
                Engineering Handcrafted Software For Ambitious Brands
              </h2>
              <p className="text-[#526477] text-sm sm:text-base leading-relaxed">
                At <strong className="text-[#102A43]">Raj Tech IT</strong>, we combine boutique engineering care with enterprise-level discipline. Under the leadership of founder <strong className="text-[#0878F9]">YUVARAJ.M</strong>, every project is built custom from the ground up without bloated templates or unnecessary dependencies.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#DCE7F1] flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-[#0878F9] shrink-0" />
                  <span className="text-xs font-bold text-[#102A43]">Modern React & AI</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#DCE7F1] flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-[#102A43]">SOC2 Standard</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#DCE7F1] flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#06B6D4] shrink-0" />
                  <span className="text-xs font-bold text-[#102A43]">Global Scalability</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-4">
              <Link to="/about">
                <Button size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                  Learn More About Us
                </Button>
              </Link>
              <Link to="/founder" className="text-xs font-bold text-[#0878F9] hover:underline">
                Read Founder Statement →
              </Link>
            </div>

          </div>
        </GlassCard>
      </section>

      {/* 3. Key Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-[#0878F9] uppercase tracking-wider block mb-1">
              What We Build
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#102A43]">
              Core Software Services
            </h2>
          </div>
          <Link
            to="/services"
            className="clay-btn-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold self-start md:self-auto"
          >
            <span>View All 6 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewServices.map((service) => (
            <GlassCard key={service.id} className="p-7 flex flex-col justify-between border-[#DCE7F1] group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-mono font-bold text-[#0878F9] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase">
                    {service.badgeText}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-[#102A43] mb-2 group-hover:text-[#0878F9] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#526477] text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <Link
                to="/services"
                className="text-xs font-bold text-[#0878F9] hover:underline inline-flex items-center gap-1.5 pt-2"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 4. Selected Projects Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-[#0878F9] uppercase tracking-wider block mb-1">
              Proof of Quality
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#102A43]">
              Featured Client Solutions
            </h2>
          </div>
          <Link
            to="/projects"
            className="clay-btn-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold self-start md:self-auto"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {previewProjects.map((project) => (
            <GlassCard key={project.id} className="p-6 border-[#DCE7F1] flex flex-col justify-between group shadow-sm hover:shadow-md transition-all">
              <div className="space-y-4">
                
                {/* Screenshot Preview */}
                {project.previewImage && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl overflow-hidden bg-slate-900/5 border border-[#E2EBF4] p-2 hover:border-[#0878F9]/40 transition-colors"
                    title={`Open ${project.title} live website`}
                  >
                    <img
                      src={project.previewImage}
                      alt={project.imageAlt || project.title}
                      loading="lazy"
                      className="w-auto h-48 max-w-full object-contain mx-auto rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#0878F9] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-bold">
                    LIVE
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-xl text-[#102A43] group-hover:text-[#0878F9] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#06B6D4] font-mono font-semibold mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-[#526477] text-xs leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-[#102A43] bg-[#F4F8FC] px-2.5 py-1 rounded-lg border border-[#DCE7F1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-[#E2EBF4] mt-5">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0878F9] hover:underline flex items-center gap-1"
                >
                  <span>Visit Live Site</span>
                  <span>↗</span>
                </a>
                <Link
                  to="/projects"
                  className="text-xs font-semibold text-[#526477] hover:text-[#0878F9]"
                >
                  View Details
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 5. Clear Project Enquiry Call To Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card p-8 sm:p-14 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/60 border border-[#BFDBFE] text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-[#0878F9] font-mono text-xs font-bold shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Ready for Immediate Deployment</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102A43] max-w-2xl mx-auto tracking-tight">
            Have a Project in Mind? Let's Build Something Exceptional.
          </h2>

          <p className="text-[#526477] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Fill out our WhatsApp-integrated project enquiry form or connect directly with our founder. We respond within 12–24 hours with architecture recommendations and budget estimations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/contact">
              <Button size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Start Your Project Inquiry
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="secondary" size="lg" icon={<Layers className="w-4 h-4 text-[#0878F9]" />}>
                View Transparent Pricing (INR)
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
