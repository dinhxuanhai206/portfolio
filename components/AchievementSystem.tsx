'use client';

import { useState, useEffect } from 'react';

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
    title: 'Curious Mind',
    description: 'Clicked on 5 projects',
    icon: '🔍',
    unlocked: false,
    trigger: 'project-click',
  },
  {
    id: 'gamer',
    title: 'Skill Hunter',
    description: 'Played the mini game',
    icon: '🎮',
    unlocked: false,
    trigger: 'game-played',
  },
  {
    id: 'theme-master',
    title: 'Theme Master',
    description: 'Changed theme 3 times',
    icon: '🎨',
    unlocked: false,
    trigger: 'theme-change',
  },
  {
    id: 'contact',
    title: 'Let\'s Connect',
    description: 'Opened contact form',
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
        // Check if already unlocked
        if (prev.includes(achievementId)) {
          return prev;
        }

        // Add new achievement
        const newUnlocked = [...prev, achievementId];
        localStorage.setItem('portfolio-achievements', JSON.stringify(newUnlocked));

        // Show notification
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
      {/* Achievement Button - Moved to left side, above game button */}
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed bottom-24 left-6 z-50 glass-card-theme rounded-full p-3 hover-lift group relative"
        title="View Achievements"
      >
        <span className="text-2xl group-hover:scale-110 transition-transform block">🏆</span>
        {unlockedAchievements.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {unlockedAchievements.length}
          </span>
        )}
      </button>

      {/* Achievement Panel - Moved to left side */}
      {showPanel && (
        <div className="fixed bottom-40 left-6 z-50 glass-card-theme rounded-xl p-4 w-80 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-white">Achievements</h3>
            <button
              onClick={() => setShowPanel(false)}
              className="text-white/60 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Progress</span>
              <span>{unlockedAchievements.length}/{achievements.length}</span>
            </div>
            <div className="h-2 bg-black/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Achievement List */}
          <div className="space-y-2">
            {achievements.map(achievement => {
              const isUnlocked = unlockedAchievements.includes(achievement.id);
              return (
                <div
                  key={achievement.id}
                  className={`glass-theme rounded-lg p-3 transition-all ${
                    isUnlocked ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-white">
                        {achievement.title}
                      </div>
                      <div className="text-xs text-gray-400">
                        {achievement.description}
                      </div>
                    </div>
                    {isUnlocked && (
                      <span className="text-green-400 text-lg">✓</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Achievement Notification - Moved to top left */}
      {showNotification && (
        <div className="fixed top-6 left-6 z-[200] glass-card-theme rounded-xl p-4 w-80 animate-slide-in-right glow-theme">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{showNotification.icon}</span>
            <div className="flex-1">
              <div className="text-yellow-400 text-xs font-bold mb-1">
                🎉 Achievement Unlocked!
              </div>
              <div className="text-white font-bold">
                {showNotification.title}
              </div>
              <div className="text-gray-400 text-xs">
                {showNotification.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
