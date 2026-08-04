import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLenisScroll } from './hooks/useLenisScroll';
import { ParticleCanvas } from './components/UI/ParticleCanvas';
import { LaptopScrollCanvas } from './components/UI/LaptopScrollCanvas';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingContact } from './components/layout/FloatingContact';
import { LoadingScreen } from './components/sections/LoadingScreen';
import { Hero } from './components/sections/Hero';
import { ScrollStory } from './components/sections/ScrollStory';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { Process } from './components/sections/Process';
import { TechStack } from './components/sections/TechStack';
import { Founder } from './components/sections/Founder';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Pricing } from './components/sections/Pricing';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';

export function App() {
  const [loading, setLoading] = useState(true);
  useLenisScroll();

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* 1. Futuristic Loading Screen */}
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Layer 1: Current website background */}
      <ParticleCanvas />

      {/* Layer 2 & 3: Laptop frame scroll canvas + soft dark overlay */}
      <LaptopScrollCanvas />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Homepage Storytelling Flow */}
      <main className="relative z-10">
        {/* 2. 3D Hero Section */}
        <Hero />

        {/* 3. Interactive Scroll Compilation Storytelling */}
        <ScrollStory />

        {/* 4. About Section */}
        <About />

        {/* 5. Enterprise Services Engine */}
        <Services />

        {/* 6. Featured Digital Solutions (Real Projects Showcase) */}
        <FeaturedProjects />

        {/* 7. Development Process Timeline */}
        <Process />

        {/* 8. Tech Stack Radar */}
        <TechStack />

        {/* 9. Founder Section (YUVARAJ.M) */}
        <Founder />

        {/* 10. Why Choose Us (6 Pillars & Stats) */}
        <WhyChooseUs />

        {/* 11. Pricing Section (INR Currency) */}
        <Pricing />

        {/* 12. Client Testimonials */}
        <Testimonials />

        {/* 13. Frequently Asked Questions */}
        <FAQ />

        {/* 14. Contact Section (7 Fields, Direct Tel/Email) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Contact Widget */}
      <FloatingContact />

    </div>
  );
}

export default App;
