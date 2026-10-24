import React, { useState, useEffect } from 'react';
import { Home, Briefcase, User, Tag } from 'lucide-react';
import { useRouter } from '../../router/Router';

interface NavItem {
  name: string;
  path: string;
  sectionId: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  {
    name: 'Home',
    path: '/',
    sectionId: 'hero',
    icon: Home,
  },
  {
    name: 'Projects',
    path: '/projects',
    sectionId: 'projects',
    icon: Briefcase,
  },
  {
    name: 'Founder',
    path: '/founder',
    sectionId: 'founder',
    icon: User,
  },
  {
    name: 'Pricing',
    path: '/pricing',
    sectionId: 'pricing',
    icon: Tag,
  },
];

export const MobileBottomNav: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  // Monitor visible sections via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['hero', 'projects', 'founder', 'pricing'];
    const observedElements: HTMLElement[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observedElements.push(el);
    });

    if (observedElements.length === 0) {
      setActiveSectionId(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSectionId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-70px 0px -40% 0px',
        threshold: [0.15, 0.4, 0.7],
      }
    );

    observedElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [currentPath]);

  // Determine active status for each nav item
  const isItemActive = (item: NavItem): boolean => {
    // 1. If an observed section matching this item is intersecting
    if (activeSectionId && item.sectionId === activeSectionId) {
      return true;
    }
    // 2. If no matching section is intersecting, match route
    if (!activeSectionId && currentPath === item.path) {
      return true;
    }
    // 3. Fallback: on this item's route and no other target section is active
    if (currentPath === item.path) {
      const otherSectionIsActive = NAV_ITEMS.some(
        (other) => other.sectionId !== item.sectionId && other.sectionId === activeSectionId
      );
      if (!otherSectionIsActive) {
        return true;
      }
    }
    return false;
  };

  const handleNavClick = (item: NavItem) => {
    // 1. If already on the item's page, scroll smoothly to section or top
    if (currentPath === item.path) {
      const el = document.getElementById(item.sectionId);
      if (el) {
        const navbarOffset = 72; // Account for fixed/sticky mobile navbar height
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = Math.max(0, elementPosition - navbarOffset);
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // 2. If target section exists on current DOM, scroll to it
    const el = document.getElementById(item.sectionId);
    if (el && currentPath === '/') {
      const navbarOffset = 72;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - navbarOffset);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      return;
    }

    // 3. Otherwise navigate to the route
    navigate(item.path);
  };

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-[#BFDBFE] rounded-t-2xl shadow-[0_-4px_20px_rgba(8,120,249,0.08),0_-1px_3px_rgba(16,42,67,0.04)]"
      style={{
        paddingBottom: 'max(6px, env(safe-area-inset-bottom, 6px))',
      }}
    >
      <div className="grid grid-cols-4 items-center justify-items-stretch w-full max-w-md mx-auto px-1 sm:px-2 pt-1.5 pb-1">
        {NAV_ITEMS.map((item) => {
          const active = isItemActive(item);
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => handleNavClick(item)}
              className="relative flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all duration-200 active:scale-95 group focus:outline-none cursor-pointer"
              aria-label={item.name}
              aria-current={active ? 'page' : undefined}
            >
              {/* Icon with active soft background pill */}
              <div
                className={`flex items-center justify-center w-10 h-7 rounded-full transition-all duration-200 ${
                  active
                    ? 'bg-blue-100/70 text-[#0878F9] shadow-xs'
                    : 'text-[#526477] group-hover:text-[#0878F9] group-hover:bg-blue-50/50'
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    active ? 'scale-105' : ''
                  }`}
                />
              </div>

              {/* Text label underneath */}
              <span
                className={`text-[10px] min-[360px]:text-[11px] font-sans tracking-tight transition-colors duration-200 mt-0.5 leading-tight ${
                  active
                    ? 'text-[#0878F9] font-bold'
                    : 'text-[#526477] font-semibold group-hover:text-[#0878F9]'
                }`}
              >
                {item.name}
              </span>

              {/* Active dot indicator */}
              {active && (
                <span
                  className="absolute -top-0.5 w-1 h-1 rounded-full bg-[#0878F9] animate-pulse"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
