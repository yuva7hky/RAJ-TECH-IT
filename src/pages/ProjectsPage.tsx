import React from 'react';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from '../router/Router';
import { Button } from '../components/UI/Button';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      
      {/* Featured Projects Showcase Component */}
      <FeaturedProjects />

      {/* Reassurance & Call To Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card p-8 sm:p-12 bg-white border border-[#DCE7F1] text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878F9] font-mono text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Live Production Verified</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#102A43]">
            Want a Custom Platform Engineered for Your Brand?
          </h2>

          <p className="text-[#526477] text-sm sm:text-base max-w-xl mx-auto">
            From e-commerce ecosystems to AI-assisted educational platforms, Raj Tech IT delivers bespoke digital architecture.
          </p>

          <div className="pt-2">
            <Link to="/contact">
              <Button size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Submit Your Project Details
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
