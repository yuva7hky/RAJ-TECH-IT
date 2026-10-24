import { useState } from 'react';
import { Router, useRouter } from './router/Router';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingContact } from './components/layout/FloatingContact';
import { IntroVideo } from './components/layout/IntroVideo';
import { MobileBottomNav } from './components/layout/MobileBottomNav';

// Separate Page Components
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProcessPage } from './pages/ProcessPage';
import { TechStackPage } from './pages/TechStackPage';
import { FounderPage } from './pages/FounderPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const { currentPath } = useRouter();
  const [introCompleted, setIntroCompleted] = useState(() => {
    try {
      return sessionStorage.getItem('raj_tech_intro_played_session') === 'true';
    } catch {
      return true;
    }
  });

  const renderActiveRoute = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/services':
        return <ServicesPage />;
      case '/projects':
        return <ProjectsPage />;
      case '/process':
        return <ProcessPage />;
      case '/tech-stack':
        return <TechStackPage />;
      case '/founder':
        return <FounderPage />;
      case '/pricing':
        return <PricingPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#F4F8FC] text-[#102A43] overflow-x-hidden pb-16 md:pb-0">
      
      {/* 1. Intro Video Experience (Plays on first visit of browser session) */}
      {!introCompleted && (
        <IntroVideo onComplete={() => setIntroCompleted(true)} />
      )}

      {/* 2. Main Navigation Bar */}
      <Navbar />

      {/* 3. Active Page Route Container */}
      <main className="flex-1 flex flex-col">
        {renderActiveRoute()}
      </main>

      {/* 4. Shared Footer */}
      <Footer />

      {/* 5. Floating Quick Contact Shortcut */}
      <FloatingContact />

      {/* 6. Mobile Bottom Navigation Bar (Mobile only) */}
      <MobileBottomNav />

    </div>
  );
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
