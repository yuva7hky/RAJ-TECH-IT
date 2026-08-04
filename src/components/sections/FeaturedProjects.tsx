import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Monitor, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA, type ProjectItem } from '../../data/projects';
import { GlassCard } from '../UI/GlassCard';
import { Button } from '../UI/Button';

export const FeaturedProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'EdTech', 'E-Commerce', 'Portfolio'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-28 bg-transparent overflow-hidden">
      {/* Volumetric ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Monitor className="w-3.5 h-3.5" />
            <span>Featured Digital Solutions</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Handcrafted Enterprise <span className="text-gradient-cyan">Showcase</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore live production software platforms built by RAJ TECH SOLUTIONS for real-world clients.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-[0_0_25px_rgba(0,210,255,0.4)] border border-cyan-300/40 scale-105'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Real Projects Cards Stack */}
        <div className="space-y-12">
          {filteredProjects.map((project: ProjectItem, idx: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              <GlassCard className="p-8 sm:p-10 border-slate-800/90 hover:border-cyan-400/50 hover:shadow-[0_0_50px_rgba(0,210,255,0.25)] transition-all duration-500 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Project Info & Badges (6 Cols) */}
                  <div className="lg:col-span-6 space-y-6">
                    
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        LIVE PRODUCTION
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-cyan-400 font-mono">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono text-slate-300 bg-slate-950/80 px-3 py-1 rounded-lg border border-slate-800 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-center">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-display font-bold text-base text-cyan-300">{m.value}</div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-wider">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Primary Button: Visit Website */}
                    <div className="pt-2">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        <Button size="lg" icon={<ExternalLink className="w-4 h-4" />}>
                          Visit Website
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Interactive Browser Frame & Code Snippet (6 Cols) */}
                  <div className="lg:col-span-6 relative">
                    <div className="rounded-2xl bg-slate-950 border border-slate-800 p-2 shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                      
                      {/* Browser Top Navigation Header */}
                      <div className="px-3.5 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        </div>
                        <div className="text-[11px] font-mono text-cyan-300 truncate max-w-[240px] bg-slate-950 px-3 py-0.5 rounded border border-slate-800">
                          {project.liveUrl}
                        </div>
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      </div>

                      {/* Mockup Preview Visual Body */}
                      <div className="relative h-64 sm:h-72 bg-slate-950 p-5 font-mono text-xs text-slate-300 flex flex-col justify-between overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} pointer-events-none`} />
                        
                        <div className="relative z-10 p-4 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
                          <div className="text-[10px] text-cyan-400 mb-1.5 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Verified Production Architecture</span>
                          </div>
                          <pre className="text-[11px] text-slate-200 overflow-x-auto">
                            {project.codeSnippet}
                          </pre>
                        </div>

                        <div className="relative z-10 p-3 rounded-xl bg-slate-900/90 border border-cyan-500/40 flex items-center justify-between">
                          <span className="text-[11px] text-slate-300 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            Active Netlify/Vercel Edge Cluster
                          </span>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[11px] text-cyan-400 font-bold hover:underline flex items-center gap-1"
                          >
                            <span>Open Site</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

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
