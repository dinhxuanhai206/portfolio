'use client';

import { useState, useEffect } from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import NatureIcon from '@mui/icons-material/Nature';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

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
    { name: 'gold', icon: AutoAwesomeIcon, label: 'Gold', color: 'from-yellow-400 to-amber-500' },
    { name: 'green', icon: NatureIcon, label: 'Green', color: 'from-green-400 to-emerald-500' },
    { name: 'blue', icon: WaterDropIcon, label: 'Blue', color: 'from-blue-400 to-cyan-500' },
    { name: 'red', icon: LocalFireDepartmentIcon, label: 'Red', color: 'from-red-400 to-rose-500' },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50">
      <div className="glass-card-theme rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-white/10">
        <div className="flex sm:flex-col gap-2 sm:gap-3">
          {themes.map((t) => {
            const IconComponent = t.icon;
            return (
              <button
                key={t.name}
                onClick={() => changeTheme(t.name as Theme)}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center ${
                  theme === t.name
                    ? `bg-gradient-to-br ${t.color} scale-110 shadow-lg`
                    : 'bg-white/10 hover:scale-105'
                }`}
                title={t.label}
              >
                <IconComponent 
                  className={`text-xl sm:text-2xl ${theme === t.name ? 'text-white' : 'text-gray-400'}`}
                  sx={{ fontSize: { xs: 20, sm: 24 } }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
