import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Video from '@/components/Video';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import InteractiveGame from '@/components/InteractiveGame';
import AchievementSystem from '@/components/AchievementSystem';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* ULTRA LUXURY BACKGROUND */}
      <div className="fixed inset-0 bg-gradient-to-br from-[rgb(var(--bg-start))] to-[rgb(var(--bg-end))] transition-colors duration-700">
        {/* Animated Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[rgb(var(--primary))]/10 rounded-full blur-[150px] float-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[rgb(var(--accent))]/10 rounded-full blur-[150px] float-slow" style={{ animationDelay: '5s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary),0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Video />
        <Contact />
      </div>
      
      <ThemeToggle />
      <InteractiveGame />
      <AchievementSystem />
    </main>
  );
}
