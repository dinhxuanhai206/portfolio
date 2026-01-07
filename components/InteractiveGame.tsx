'use client';

import { useState, useEffect, useCallback } from 'react';

interface Target {
  id: number;
  x: number;
  y: number;
  skill: string;
  icon: string;
  hit: boolean;
}

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Git', icon: '🔀' },
];

export default function InteractiveGame() {
  const [isOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [targets, setTargets] = useState<Target[]>([]);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [highScore, setHighScore] = useState(0);

  // Generate random targets
  const generateTarget = useCallback(() => {
    const randomSkill = skills[Math.floor(Math.random() * skills.length)];
    return {
      id: Date.now() + Math.random(),
      x: Math.random() * 80 + 10,
      y: Math.random() * 70 + 10,
      skill: randomSkill.name,
      icon: randomSkill.icon,
      hit: false,
    };
  }, []);

  // Start game
  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setTimeLeft(30);
    setTargets([generateTarget()]);
    
    // Trigger achievement on first play
    window.dispatchEvent(new CustomEvent('unlock-achievement', { 
      detail: { id: 'gamer' } 
    }));
  };

  // Hit target
  const hitTarget = (id: number) => {
    setTargets(prev => prev.map(t => t.id === id ? { ...t, hit: true } : t));
    setScore(prev => prev + 10);
    
    setTimeout(() => {
      setTargets(prev => prev.filter(t => t.id !== id));
    }, 300);
  };

  // Game timer
  useEffect(() => {
    if (!gameActive) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameActive(false);
          if (score > highScore) setHighScore(score);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameActive, score, highScore]);

  // Spawn targets
  useEffect(() => {
    if (!gameActive) return;

    const spawner = setInterval(() => {
      if (targets.length < 5) {
        setTargets(prev => [...prev, generateTarget()]);
      }
    }, 1500);

    return () => clearInterval(spawner);
  }, [gameActive, targets.length, generateTarget]);

  return (
    <>
      {/* Floating Game Button - Moved to left side */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 glass-card-theme rounded-full p-4 hover-lift glow-theme group"
        title="Play Mini Game!"
      >
        <span className="text-3xl group-hover:scale-110 transition-transform block">🎮</span>
      </button>

      {/* Game Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-card-theme rounded-2xl p-6 max-w-2xl w-full relative overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => {
                setIsOpen(false);
                setGameActive(false);
              }}
              className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl z-10"
            >
              ✕
            </button>

            {/* Game Header */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gradient-theme mb-2">
                🎯 Skill Hunter Game
              </h2>
              <p className="text-gray-400 text-sm">
                Click on the skills to catch them! Test your reflexes!
              </p>
            </div>

            {/* Score Board */}
            <div className="flex justify-between items-center mb-4 glass-theme rounded-lg p-3">
              <div className="text-center flex-1">
                <div className="text-xs text-gray-400 mb-1">Score</div>
                <div className="text-2xl font-bold text-gradient-theme">{score}</div>
              </div>
              <div className="text-center flex-1">
                <div className="text-xs text-gray-400 mb-1">Time</div>
                <div className="text-2xl font-bold text-white">{timeLeft}s</div>
              </div>
              <div className="text-center flex-1">
                <div className="text-xs text-gray-400 mb-1">High Score</div>
                <div className="text-2xl font-bold text-yellow-400">{highScore}</div>
              </div>
            </div>

            {/* Game Area */}
            <div className="relative bg-black/40 rounded-xl h-80 overflow-hidden border border-white/10">
              {!gameActive && timeLeft === 30 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={startGame}
                    className="glass-card-theme px-8 py-4 rounded-xl hover-lift glow-theme"
                  >
                    <span className="text-2xl font-bold text-gradient-theme">
                      🚀 Start Game
                    </span>
                  </button>
                </div>
              )}

              {!gameActive && timeLeft === 0 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏆</div>
                    <div className="text-3xl font-bold text-gradient-theme mb-2">
                      Game Over!
                    </div>
                    <div className="text-xl text-white mb-1">
                      Final Score: {score}
                    </div>
                    {score === highScore && score > 0 && (
                      <div className="text-yellow-400 text-sm animate-pulse">
                        🎉 New High Score!
                      </div>
                    )}
                  </div>
                  <button
                    onClick={startGame}
                    className="glass-card-theme px-6 py-3 rounded-xl hover-lift"
                  >
                    <span className="text-lg font-bold text-gradient-theme">
                      Play Again
                    </span>
                  </button>
                </div>
              )}

              {/* Targets */}
              {gameActive && targets.map(target => (
                <button
                  key={target.id}
                  onClick={() => hitTarget(target.id)}
                  className={`absolute transition-all duration-300 ${
                    target.hit ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
                  }`}
                  style={{
                    left: `${target.x}%`,
                    top: `${target.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="glass-card-theme rounded-full p-3 hover:scale-110 transition-transform cursor-pointer glow-theme">
                    <span className="text-3xl block">{target.icon}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Instructions */}
            <div className="mt-4 text-center text-xs text-gray-400">
              💡 Tip: Click quickly to catch more skills! Each skill = 10 points
            </div>
          </div>
        </div>
      )}
    </>
  );
}
