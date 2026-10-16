import React from 'react';
import { Process } from '../components/sections/Process';
import { ScrollStory } from '../components/sections/ScrollStory';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from '../router/Router';
import { Button } from '../components/UI/Button';

export const ProcessPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. 7-Step Process Pipeline */}
      <Process />

      {/* 2. Interactive Pipeline Stages */}
      <ScrollStory />

      {/* 3. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card p-8 sm:p-12 bg-white border border-[#DCE7F1] text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878F9] font-mono text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Structured Sprints & Clear Milestones</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#102A43]">
            Let's Map Out Your Project Milestones
          </h2>

          <p className="text-[#526477] text-sm sm:text-base max-w-xl mx-auto">
            From Day 1 architectural blueprint to production deployment, we keep you informed at every sprint.
          </p>

          <div className="pt-2">
            <Link to="/contact">
              <Button size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Initiate Project Discovery
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
