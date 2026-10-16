import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  className,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0878F9]/40 cursor-pointer overflow-hidden group';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-sm sm:text-base gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#0878F9] to-[#0099FF] text-white shadow-[0_8px_20px_-4px_rgba(8,120,249,0.38),inset_0_1px_1px_0_rgba(255,255,255,0.35)] hover:shadow-[0_12px_26px_-4px_rgba(8,120,249,0.48),inset_0_1px_1px_0_rgba(255,255,255,0.45)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_4px_12px_-2px_rgba(8,120,249,0.3)] border border-white/20',
    secondary:
      'bg-white text-[#102A43] border border-[#DCE7F1] shadow-[0_4px_14px_-2px_rgba(16,42,67,0.06),inset_0_1px_1px_0_rgba(255,255,255,0.9)] hover:bg-[#F8FAFD] hover:border-[#BFDBFE] hover:text-[#0878F9] hover:-translate-y-0.5',
    outline:
      'bg-transparent text-[#0878F9] border-2 border-[#0878F9] hover:bg-blue-50/70',
    glass:
      'bg-blue-50/80 text-[#0878F9] border border-blue-200/80 hover:bg-blue-100/80 shadow-sm',
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5 shrink-0">
          {icon}
        </span>
      )}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5 shrink-0">
          {icon}
        </span>
      )}
    </button>
  );
};
