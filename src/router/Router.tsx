import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type RoutePath =
  | '/'
  | '/about'
  | '/services'
  | '/projects'
  | '/process'
  | '/tech-stack'
  | '/founder'
  | '/pricing'
  | '/contact';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string, options?: { replace?: boolean }) => void;
  isActive: (path: string) => boolean;
}

const RouterContext = createContext<RouterContextType | null>(null);

function getPathFromLocation(): string {
  if (typeof window === 'undefined') return '/';
  
  // Support hash routing fallback if loaded via hash (e.g. /#/projects)
  const hash = window.location.hash;
  if (hash && hash.startsWith('#/')) {
    const hashPath = hash.slice(1).split('?')[0].split('#')[0];
    return normalizePath(hashPath);
  }

  const pathname = window.location.pathname || '/';
  return normalizePath(pathname);
}

function normalizePath(path: string): string {
  if (!path || path === '') return '/';
  const clean = path.replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
}

export const Router: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => getPathFromLocation());

  useEffect(() => {
    const handlePopState = () => {
      const nextPath = getPathFromLocation();
      setCurrentPath(nextPath);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = useCallback((to: string, options?: { replace?: boolean }) => {
    const targetPath = normalizePath(to);

    // If already on the route, simply scroll to top
    if (targetPath === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    try {
      if (options?.replace) {
        window.history.replaceState({}, '', targetPath);
      } else {
        window.history.pushState({}, '', targetPath);
      }
    } catch {
      // In restricted environments where pushState fails, fall back to hash
      window.location.hash = `#${targetPath}`;
    }

    setCurrentPath(targetPath);
    window.scrollTo(0, 0);
  }, [currentPath]);

  const isActive = useCallback(
    (path: string) => {
      const normalized = normalizePath(path);
      return currentPath === normalized;
    },
    [currentPath]
  );

  return (
    <RouterContext.Provider value={{ currentPath, navigate, isActive }}>
      {children}
    </RouterContext.Provider>
  );
};

export function useRouter(): RouterContextType {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a <Router> provider');
  }
  return context;
}

export function useNavigate() {
  const { navigate } = useRouter();
  return navigate;
}

export function useLocation() {
  const { currentPath } = useRouter();
  return { pathname: currentPath };
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  replace?: boolean;
  activeClassName?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  to,
  replace = false,
  className = '',
  activeClassName = '',
  children,
  onClick,
  ...rest
}) => {
  const { currentPath, navigate } = useRouter();
  const targetPath = normalizePath(to);
  const isCurrent = currentPath === targetPath;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let browser handle special clicks (Cmd, Ctrl, Shift, middle click, etc.)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    e.preventDefault();
    onClick?.(e);
    navigate(to, { replace });
  };

  const combinedClass = [className, isCurrent ? activeClassName : '']
    .filter(Boolean)
    .join(' ');

  return (
    <a
      href={to}
      onClick={handleClick}
      className={combinedClass}
      aria-current={isCurrent ? 'page' : undefined}
      {...rest}
    >
      {children}
    </a>
  );
};
