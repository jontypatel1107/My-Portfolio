import React, { useEffect, useState } from 'react';
import './IntroSplash.css';

const IntroSplash = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (prefersReducedMotion) {
      setLoadingPercent(100);
      const timer = window.setTimeout(() => setIsVisible(false), 300);
      return () => window.clearTimeout(timer);
    }

    const totalDuration = isMobile ? 1500 : 2300;
    const progressStep = isMobile ? 7 : 4;
    const progressInterval = isMobile ? 45 : 70;

    const progressTimer = window.setInterval(() => {
      setLoadingPercent((current) => Math.min(100, current + progressStep));
    }, progressInterval);

    const timer = window.setTimeout(() => {
      window.clearInterval(progressTimer);
      setLoadingPercent(100);
      setIsVisible(false);
    }, totalDuration);

    return () => {
      window.clearTimeout(timer);
      window.clearInterval(progressTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="intro-splash" role="status" aria-live="polite" aria-label="Portfolio loading animation">
      <div className="intro-splash__scanlines" aria-hidden="true" />
      <div className="intro-splash__glow intro-splash__glow--one" />
      <div className="intro-splash__glow intro-splash__glow--two" />

      <div className="intro-splash__content">
        <div className="intro-splash__badge">System Boot</div>
        <div className="intro-splash__name-wrap" aria-label="Jonty Patel">
          <h1 className="intro-splash__name intro-splash__name--base">Jonty Patel</h1>
          <h1 className="intro-splash__name intro-splash__name--glitch intro-splash__name--glitch-one" aria-hidden="true">
            Jonty Patel
          </h1>
          <h1 className="intro-splash__name intro-splash__name--glitch intro-splash__name--glitch-two" aria-hidden="true">
            Jonty Patel
          </h1>
        </div>
        <p className="intro-splash__tagline">Initializing portfolio sequence</p>
        <p className="intro-splash__subline">React developer | UI builder | Full stack explorer</p>
        <div className="intro-splash__progress" aria-label={`Loading ${loadingPercent}%`}>
          <span>Loading</span>
          <span>{loadingPercent}%</span>
        </div>

        <div className="intro-splash__loader" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

export default IntroSplash;
