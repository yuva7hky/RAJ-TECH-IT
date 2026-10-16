import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Monitor, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA, type ProjectItem } from '../../data/projects';
import { GlassCard } from '../UI/GlassCard';
import { Button } from '../UI/Button';

export const FeaturedProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', ...Array.from(new Set(PROJECTS_DATA.map((p) => p.category)))];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878F9] font-mono text-xs font-semibold">
            <Monitor className="w-3.5 h-3.5" />
            <span>Featured Digital Solutions</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102A43]">
            Handcrafted Enterprise <span className="text-gradient-blue">Showcase</span>
          </h2>
          <p className="text-[#526477] text-sm sm:text-base leading-relaxed">
            Explore live production software platforms built by Raj Tech IT for real-world clients.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? 'clay-btn-primary'
                  : 'bg-white text-[#526477] border border-[#DCE7F1] hover:text-[#0878F9] hover:bg-[#F8FAFD]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Real Projects Cards Stack */}
        <div className="space-y-10 sm:space-y-12">
          {filteredProjects.map((project: ProjectItem, idx: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <GlassCard className="p-6 sm:p-8 lg:p-10 border-[#DCE7F1] group shadow-[0_4px_20px_rgba(16,42,67,0.04)] hover:shadow-[0_12px_32px_rgba(8,120,249,0.08)] transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  
                  {/* Left Column: Project Info & Badges (6 Cols) */}
                  <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
                    
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-xs font-mono text-[#0878F9] bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full uppercase tracking-wider font-bold">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-700 flex items-center gap-1.5 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        LIVE PRODUCTION
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#102A43] mb-1 group-hover:text-[#0878F9] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#06B6D4] font-mono font-semibold">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-[#526477] text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono text-[#102A43] bg-[#F4F8FC] px-3 py-1 rounded-lg border border-[#DCE7F1] shadow-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-[#F8FAFD] border border-[#DCE7F1] text-center">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-display font-black text-base sm:text-lg text-[#0878F9]">{m.value}</div>
                          <div className="text-[10px] text-[#526477] uppercase tracking-wider font-semibold">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Primary Button: Visit Live Website */}
                    <div className="pt-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button size="md" icon={<ExternalLink className="w-4 h-4" />}>
                          Visit Live Website ↗
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Screenshot Preview OR Interactive Code Snippet (6 Cols) */}
                  <div className="lg:col-span-6 relative order-1 lg:order-2">
                    <div className="rounded-2xl bg-[#F8FAFD] border border-[#DCE7F1] p-2.5 sm:p-3.5 shadow-md overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
                      
                      {/* Browser Top Navigation Header */}
                      <div className="px-3.5 py-2.5 bg-white rounded-xl border border-[#E2EBF4] flex items-center justify-between shadow-xs mb-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-mono text-[#0878F9] font-semibold truncate max-w-[190px] sm:max-w-[240px] hover:underline flex items-center gap-1"
                          title="Open live website in new tab"
                        >
                          <span>{project.liveUrl.replace('https://', '')}</span>
                          <ExternalLink className="w-3 h-3 shrink-0" />
                        </a>
                        <Sparkles className="w-3.5 h-3.5 text-[#0878F9]" />
                      </div>

                      {/* Display Mode: Screenshot vs Code Snippet */}
                      {project.previewImage ? (
                        /* Responsive Website Screenshot Display */
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block relative rounded-xl overflow-hidden bg-slate-900/5 border border-[#E2EBF4] group/img cursor-pointer p-2 sm:p-3"
                          title={`Open ${project.title} live website`}
                        >
                          <img
                            src={project.previewImage}
                            alt={project.imageAlt || project.title}
                            loading="lazy"
                            className="w-auto h-auto max-h-[380px] sm:max-h-[460px] max-w-full rounded-lg shadow-sm object-contain mx-auto transition-transform duration-300 group-hover/img:scale-[1.02]"
                          />
                          {/* Hover action badge */}
                          <div className="absolute inset-0 bg-[#0878F9]/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-xl">
                            <span className="bg-white/95 text-[#0878F9] font-mono text-xs font-bold px-3.5 py-2 rounded-full shadow-lg border border-blue-100 flex items-center gap-2">
                              <span>Visit Live Website</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </a>
                      ) : (
                        /* Mockup Preview Visual Body with Code Snippet */
                        <div className="p-4 sm:p-5 font-mono text-xs text-[#102A43] bg-gradient-to-br from-blue-50/40 via-white to-cyan-50/30 rounded-xl border border-[#E2EBF4] flex flex-col justify-between gap-4">
                          <div className="p-4 rounded-xl bg-white border border-[#DCE7F1] shadow-xs">
                            <div className="text-[10px] text-[#0878F9] font-bold mb-1.5 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Verified Production Architecture</span>
                            </div>
                            <pre className="text-[11px] text-[#102A43] overflow-x-auto leading-relaxed">
                              {project.codeSnippet}
                            </pre>
                          </div>

                          <div className="p-3 rounded-xl bg-white border border-[#DCE7F1] flex items-center justify-between">
                            <span className="text-[11px] text-[#526477] flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              Active Netlify / Vercel Edge Cluster
                            </span>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] text-[#0878F9] font-bold hover:underline flex items-center gap-1"
                            >
                              <span>Open Site</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
