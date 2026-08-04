import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('BOOTING SYSTEM...');

  useEffect(() => {
    const statuses = [
      'BOOTING QUANTUM SYSTEM...',
      'LOADING GRAPHICS ENGINE...',
      'INITIALISING 3D ENVIRONMENT...',
      'COMPILING REACT PIPELINE...',
      'TRANSFORMING IDEAS INTO DIGITAL REALITY...',
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }

        const idx = Math.min(
          statuses.length - 1,
          Math.floor((next / 100) * statuses.length)
        );
        setStatusText(statuses[idx]);
        return next;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background Radial Neon Blue Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] animate-pulse-glow pointer-events-none" />

      <div className="relative z-10 max-w-md w-full flex flex-col items-center text-center">
        {/* Brand Logo Symbol */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 flex items-center justify-center shadow-[0_0_50px_rgba(0,210,255,0.6)]"
        >
          <span className="font-display font-black text-4xl text-white">R</span>
          <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/50 animate-ping opacity-30" />
        </motion.div>

        {/* Company Title & Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display font-black text-2xl text-white tracking-wider mb-1"
        >
          RAJ TECH SOLUTIONS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs text-cyan-400 font-mono tracking-widest uppercase mb-8"
        >
          Transforming Ideas Into Digital Reality
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-900/90 rounded-full h-2 p-0.5 border border-slate-800 relative overflow-hidden mb-4 shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 rounded-full shadow-[0_0_15px_rgba(0,210,255,0.8)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Percentage Counter and Status text */}
        <div className="w-full flex items-center justify-between font-mono text-xs text-slate-400">
          <span className="text-cyan-400 animate-pulse">{statusText}</span>
          <span className="font-bold text-white text-sm">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};
