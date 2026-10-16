import React, { useState, useEffect, useRef } from 'react';
import introVideoUrl from '../../assets/Raj_Tech_Intro.mp4';

interface IntroVideoProps {
  onComplete: () => void;
}

const STORAGE_KEY = 'raj_tech_intro_played_session';

export const IntroVideo: React.FC<IntroVideoProps> = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerRef = useRef<number | null>(null);

  const handleFinish = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);

    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Ignore sessionStorage exceptions
    }

    // Wait for the fade out animation to finish before unmounting
    setTimeout(() => {
      setShouldRender(false);
      onComplete();
    }, 600);
  };

  useEffect(() => {
    // Check if user already saw intro this session
    try {
      const alreadyPlayed = sessionStorage.getItem(STORAGE_KEY);
      if (alreadyPlayed === 'true') {
        setShouldRender(false);
        onComplete();
        return;
      }
    } catch {
      // Continue if storage is restricted
    }

    // Check prefers-reduced-motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShouldRender(false);
      onComplete();
      return;
    }

    // Fallback safety timer: in case video stalls or fails to trigger ended/error
    timerRef.current = window.setTimeout(() => {
      handleFinish();
    }, 7000);

    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Intro video autoplay prevented or interrupted:', err);
          // Graceful fallback: complete immediately if autoplay fails
          handleFinish();
        });
      }
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[100] w-screen h-[100dvh] max-w-[100vw] overflow-hidden bg-white flex items-center justify-center transition-opacity duration-700 ease-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Raj Tech IT Intro Video"
    >
      <video
        ref={videoRef}
        src={introVideoUrl}
        muted
        autoPlay
        playsInline
        onEnded={handleFinish}
        onError={() => {
          console.warn('Video failed to load, falling back to website');
          handleFinish();
        }}
        className="w-full max-w-[min(85vw,650px)] sm:max-w-[min(92vw,960px)] h-auto max-h-[85dvh] object-contain object-center bg-white"
      />
    </div>
  );
};
