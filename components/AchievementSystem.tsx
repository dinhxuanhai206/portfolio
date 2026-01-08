'use client';

import { useState, useEffect } from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  trigger: string;
}

const achievements: Achievement[] = [
  {
    id: 'explorer',
    title: 'Explorer',
    description: 'Visited all sections',
    icon: '🗺️',
    unlocked: false,
    trigger: 'scroll',
  },
  {
    id: 'curious',
    title: 'Curious',
    description: 'Clicked 5 projects',
    icon: '🔍',
    unlocked: false,
    trigger: 'project-click',
  },
  {
    id: 'gamer',
    title: 'Gamer',
    description: 'Played mini game',
    icon: '🎮',
    unlocked: false,
    trigger: 'game-played',
  },
  {
    id: 'theme-master',
    title: 'Stylist',
    description: 'Changed theme 3x',
    icon: '🎨',
    unlocked: false,
    trigger: 'theme-change',
  },
  {
    id: 'contact',
    title: 'Social',
    description: 'Opened contact',
    icon: '📧',
    unlocked: false,
    trigger: 'contact-open',
  },
];

export default function AchievementSystem() {
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState<Achievement | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load saved achievements on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('portfolio-achievements');
    if (saved) {
      try {
        setUnlockedAchievements(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load achievements:', e);
      }
    }
  }, []);

  // Listen for achievement events
  useEffect(() => {
    if (!mounted) return;

    const handleAchievement = (e: CustomEvent) => {
      const achievementId = e.detail.id;
      
      setUnlockedAchievements(prev => {
        if (prev.includes(achievementId)) {
          return prev;
        }

        const newUnlocked = [...prev, achievementId];
        localStorage.setItem('portfolio-achievements', JSON.stringify(newUnlocked));

        const achievement = achievements.find(a => a.id === achievementId);
        if (achievement) {
          setShowNotification(achievement);
          setTimeout(() => setShowNotification(null), 4000);
        }

        return newUnlocked;
      });
    };

    window.addEventListener('unlock-achievement' as any, handleAchievement);
    return () => window.removeEventListener('unlock-achievement' as any, handleAchievement);
  }, [mounted]);

  const progress = (unlockedAchievements.length / achievements.length) * 100;

  if (!mounted) return null;

  return (
    <>
      {/* Achievement Button - Compact & Responsive */}
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed bottom-20 sm:bottom-24 left-4 sm:left-6 z-50 glass-card-theme rounded-full p-2 sm:p-3 hover-lift group relative shadow-lg"
        title="Achievements"
      >
        <EmojiEventsIcon 
          className="text-yellow-400 group-hover:scale-110 transition-transform" 
          sx={{ fontSize: { xs: 24, sm: 28 } }}
        />
        {unlockedAchievements.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-[10px] sm:text-xs">
            {unlockedAchievements.length}
          </span>
        )}
      </button>

      {/* Achievement Panel - Compact & Mobile Optimized */}
      {showPanel && (
        <div className="fixed bottom-32 sm:bottom-40 left-4 sm:left-6 z-50 glass-card-theme rounded-xl p-3 sm:p-4 w-[calc(100vw-2rem)] sm:w-72 md:w-80 max-h-[60vh] sm:max-h-96 overflow-y-auto shadow-2xl border border-white/10">
          {/* Header - Compact */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <EmojiEventsIcon className="text-yellow-400" sx={{ fontSize: 20 }} />
              <h3 className="text-base sm:text-lg font-bold text-white">Achievements</h3>
            </div>
            <button
              onClick={() => setShowPanel(false)}
              className="text-white/60 hover:text-white p-1 hover:bg-white/10 rounded-lg transition-all"
            >
              <CloseIcon sx={{ fontSize: 18 }} />
            </button>
          </div>

          {/* Progress Bar - Compact */}
          <div className="mb-3">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Progress</span>
              <span className="font-semibold">{unlockedAchievements.length}/{achievements.length}</span>
            </div>
            <div className="h-1.5 bg-black/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Achievement List - Compact */}
          <div className="space-y-1.5">
            {achievements.map(achievement => {
              const isUnlocked = unlockedAchievements.includes(achievement.id);
              return (
                <div
                  key={achievement.id}
                  className={`glass-theme rounded-lg p-2 sm:p-2.5 transition-all ${
                    isUnlocked ? 'opacity-100 border border-yellow-400/20' : 'opacity-40'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl flex-shrink-0">{achievement.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-white truncate">
                        {achievement.title}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-400 truncate">
                        {achievement.description}
                      </div>
                    </div>
                    {isUnlocked && (
                      <CheckCircleIcon className="text-green-400 flex-shrink-0" sx={{ fontSize: 18 }} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Achievement Notification - Compact & Mobile Optimized */}
      {showNotification && (
        <div className="fixed top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-auto z-[200] glass-card-theme rounded-xl p-3 sm:p-4 sm:w-72 md:w-80 animate-slide-in-right shadow-2xl border border-yellow-400/30">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-3xl sm:text-4xl flex-shrink-0">{showNotification.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="text-yellow-400 text-[10px] sm:text-xs font-bold mb-0.5 sm:mb-1">
                🎉 Achievement!
              </div>
              <div className="text-white font-bold text-sm sm:text-base truncate">
                {showNotification.title}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm truncate">
                {showNotification.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
