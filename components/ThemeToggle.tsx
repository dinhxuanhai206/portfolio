'use client';

import { useState, useEffect } from 'react';

type Theme = 'gold' | 'green' | 'blue' | 'red';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('gold');
  const [mounted, setMounted] = useState(false);
  const [themeChanges, setThemeChanges] = useState(0);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Track theme changes for achievement
    const newCount = themeChanges + 1;
    setThemeChanges(newCount);
    if (newCount >= 3) {
      window.dispatchEvent(new CustomEvent('unlock-achievement', { 
        detail: { id: 'theme-master' } 
      }));
    }
  };

  if (!mounted) return null;

  const themes = [
    { name: 'gold', icon: '✨', label: 'Gold', color: 'from-yellow-400 to-amber-500' },
    { name: 'green', icon: '💚', label: 'Green', color: 'from-green-400 to-emerald-500' },
    { name: 'blue', icon: '💙', label: 'Blue', color: 'from-blue-400 to-cyan-500' },
    { name: 'red', icon: '❤️', label: 'Red', color: 'from-red-400 to-rose-500' },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="glass-ultra rounded-2xl p-3 border-luxury">
        <div className="flex flex-col gap-3">
          {themes.map((t) => (
            <button
              key={t.name}
              onClick={() => changeTheme(t.name as Theme)}
              className={`w-12 h-12 rounded-xl transition-all duration-300 flex items-center justify-center text-2xl ${
                theme === t.name
                  ? `bg-gradient-to-br ${t.color} scale-110 shadow-lg`
                  : 'bg-white/10 hover:scale-105'
              }`}
              title={t.label}
            >
              {t.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
