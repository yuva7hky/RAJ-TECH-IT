import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  interactive?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glowOnHover = true,
  interactive = true,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'relative rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 overflow-hidden',
          'bg-slate-900/60 border border-slate-800/80',
          interactive && 'hover:-translate-y-1 hover:bg-slate-900/80 hover:border-cyan-500/40',
          glowOnHover && 'hover:shadow-[0_0_35px_rgba(0,210,255,0.18)]',
          className
        )
      )}
      {...props}
    >
      {/* Top subtle light reflection streak */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-60" />
      {children}
    </div>
  );
};
