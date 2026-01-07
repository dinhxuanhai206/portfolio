'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'skills', 'projects', 'video', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled ? 'py-3' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`${isScrolled ? 'glass-theme' : 'glass-card-theme'} rounded-xl px-8 py-3 transition-all duration-700 border-theme`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-black text-gradient-theme tracking-tight hover:scale-105 transition-transform"
            >
              DXH
            </button>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-black scale-105'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Hire Button */}
            <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] rounded-lg text-black text-sm font-black hover:scale-105 transition-all duration-300 glow-theme">
              HIRE ME
            </button>
            
            {/* Mobile Menu */}
            <button className="md:hidden text-gray-300 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
