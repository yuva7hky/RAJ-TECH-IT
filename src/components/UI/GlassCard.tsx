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
          'relative rounded-2xl p-6 transition-all duration-300',
          'bg-white border border-[#DCE7F1] text-[#102A43]',
          'shadow-[0_10px_25px_-5px_rgba(8,120,249,0.07),0_8px_10px_-6px_rgba(16,42,67,0.04),inset_0_1px_1px_0_rgba(255,255,255,0.95)]',
          interactive && 'hover:-translate-y-1 hover:border-[#BFDBFE]',
          glowOnHover && 'hover:shadow-[0_20px_35px_-8px_rgba(8,120,249,0.12),0_10px_15px_-4px_rgba(16,42,67,0.06)]',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
