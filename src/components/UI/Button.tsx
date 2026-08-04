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
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 cursor-pointer overflow-hidden group';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(0,210,255,0.7)] hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'bg-slate-900/90 text-slate-100 border border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(0,210,255,0.3)]',
    outline:
      'bg-transparent text-slate-200 border border-slate-700 hover:border-slate-400 hover:text-white hover:bg-white/5',
    glass:
      'bg-slate-900/40 backdrop-blur-md text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:text-white',
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}
      {...props}
    >
      {/* Light sheen animation sweep */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      
      {icon && iconPosition === 'left' && <span className="transition-transform duration-300 group-hover:-translate-x-1">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};
