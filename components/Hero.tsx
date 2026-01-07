'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'DinhXuanHai_CV.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className={`text-center transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Ultra Status Badge */}
          <div className="inline-flex items-center gap-2 glass-theme px-4 py-2 rounded-full mb-8 border-theme shimmer">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(var(--primary))] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[rgb(var(--primary))] shadow-lg"></span>
            </span>
            <span className="text-xs font-bold text-gradient-theme tracking-wide">AVAILABLE FOR OPPORTUNITIES</span>
          </div>
          
          {/* Ultra Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
            <span className="block text-gray-500 text-sm md:text-base font-light mb-3 tracking-[0.3em] uppercase">
              Frontend Developer
            </span>
            <span className="block text-gradient-theme">
              ĐINH XUÂN HẢI
            </span>
          </h1>
          
          {/* Ultra Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-3 font-light max-w-2xl mx-auto">
            Crafting <span className="text-gradient-theme font-bold">Exceptional</span> Digital Experiences
          </p>
          
          <p className="text-sm text-gray-500 mb-10 max-w-xl mx-auto">
            3.5+ years mastering React, Next.js & TypeScript
          </p>
          
          {/* Ultra CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
            <button
              onClick={handleDownloadCV}
              className="group px-8 py-3 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] rounded-xl text-black font-bold text-sm overflow-hidden transition-all duration-500 hover:scale-105 glow-theme shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                DOWNLOAD CV
              </span>
            </button>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-3 glass-theme rounded-xl text-white font-bold text-sm hover:scale-105 transition-all duration-500 border-theme shadow-lg"
            >
              <span className="flex items-center gap-2">
                LET'S TALK
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
          
          {/* Ultra Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { value: '3.5+', label: 'Years', icon: '⚡' },
              { value: '10+', label: 'Projects', icon: '🚀' },
              { value: '100%', label: 'Quality', icon: '⭐' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`glass-card-theme rounded-xl p-4 hover-lift scroll-reveal stagger-${index + 1}`}
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-black text-gradient-theme mb-0.5">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 font-bold tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Ultra Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-500 text-xs tracking-[0.2em] font-bold">SCROLL</span>
          <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center p-1.5">
            <div className="w-1 h-2 bg-gradient-to-b from-[rgb(var(--primary))] to-transparent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
