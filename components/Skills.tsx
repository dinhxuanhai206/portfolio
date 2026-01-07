'use client';

import { useState } from 'react';

// Core technical skills with detailed info
const coreSkills = [
  {
    name: 'React & Next.js',
    level: 95,
    icon: '⚛️',
    description: 'Building scalable web applications',
    keywords: 'React, Next.js, React.js, NextJS, Frontend Framework',
    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    projects: '15+ projects'
  },
  {
    name: 'TypeScript',
    level: 92,
    icon: '📘',
    description: 'Type-safe development',
    keywords: 'TypeScript, TS, JavaScript, Type Safety',
    gradient: 'from-blue-400 via-indigo-500 to-purple-600',
    projects: '20+ projects'
  },
  {
    name: 'State Management',
    level: 90,
    icon: '�',
    description: 'Redux, Zustand, Context API',
    keywords: 'Redux, Zustand, State Management, React State',
    gradient: 'from-purple-400 via-pink-500 to-rose-600',
    projects: '12+ projects'
  },
  {
    name: 'Tailwind CSS',
    level: 95,
    icon: '🎨',
    description: 'Modern UI/UX design',
    keywords: 'Tailwind CSS, TailwindCSS, CSS Framework, Styling',
    gradient: 'from-teal-400 via-cyan-500 to-blue-600',
    projects: '18+ projects'
  },
  {
    name: 'React Query',
    level: 88,
    icon: '🔥',
    description: 'Data fetching & caching',
    keywords: 'React Query, TanStack Query, Data Fetching, API',
    gradient: 'from-orange-400 via-red-500 to-pink-600',
    projects: '10+ projects'
  },
  {
    name: 'WebSocket',
    level: 85,
    icon: '⚡',
    description: 'Real-time communication',
    keywords: 'WebSocket, Real-time, Socket.io, Live Communication',
    gradient: 'from-yellow-400 via-orange-500 to-red-600',
    projects: '8+ projects'
  },
];

const techStack = {
  frontend: {
    title: 'Frontend Development',
    icon: '🎯',
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 95 },
      { name: 'SASS/SCSS', level: 90 },
      { name: 'Material-UI', level: 88 },
      { name: 'Ant Design', level: 85 },
      { name: 'Emotion', level: 82 },
      { name: 'Styled Components', level: 88 },
      { name: 'Framer Motion', level: 80 },
    ]
  },
  backend: {
    title: 'Backend & Database',
    icon: '🗄️',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'NestJS', level: 80 },
      { name: 'MySQL', level: 82 },
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'Redis', level: 75 },
      { name: 'REST API', level: 90 },
      { name: 'GraphQL', level: 70 },
    ]
  },
  tools: {
    title: 'Tools & DevOps',
    icon: '🛠️',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Vite', level: 88 },
      { name: 'Webpack', level: 85 },
      { name: 'GitHub Actions', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Vercel', level: 90 },
      { name: 'Jest', level: 82 },
    ]
  },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'tools'>('frontend');

  return (
    <section
      id="skills"
      className="py-20 px-4 relative overflow-hidden"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="Technical Skills" />
      <meta itemProp="description" content="Professional technical skills and expertise in web development" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Ultra Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[rgb(var(--primary))] to-transparent"></div>
            <span className="text-gray-400 text-xs tracking-[0.5em] uppercase font-semibold">
              Technical Arsenal
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[rgb(var(--primary))] to-transparent"></div>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block">
              <span className="text-gradient-theme">Skills</span>
              <span className="text-white"> & </span>
            </span>
            <br />
            <span className="text-gradient-theme">Expertise</span>
          </h2>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with cutting-edge technologies
            <br />
            <span className="text-sm text-gray-500 mt-2 inline-block">Constantly learning and evolving</span>
          </p>
        </div>

        {/* Core Skills - Hexagon Grid Style */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-2">Core Competencies</h3>
            <p className="text-gray-400">Technologies I work with daily</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative scroll-reveal stagger-${index + 1}`}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="name" content={skill.name} />
                <meta itemProp="description" content={skill.keywords} />
                <meta itemProp="position" content={String(index + 1)} />

                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>

                {/* Card */}
                <div className="relative h-full glass-card-theme rounded-2xl p-6 border border-white/10 hover-card-lift overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-br ${skill.gradient} rounded-full blur-2xl`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon & Title */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center text-3xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        {skill.icon}
                      </div>
                      <div className="text-right">
                        <div className={`text-4xl font-black bg-gradient-to-br ${skill.gradient} bg-clip-text text-transparent`}>
                          {skill.level}
                        </div>
                        <div className="text-xs text-gray-500 font-medium">%</div>
                      </div>
                    </div>

                    {/* Info */}
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gradient-theme transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">{skill.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">
                        {skill.projects}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 relative h-1.5 bg-black/40 rounded-full overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="absolute inset-0 bg-white/30 shimmer"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack - Tabbed Interface */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-2">Complete Tech Stack</h3>
            <p className="text-gray-400">Explore my full technology arsenal</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {Object.entries(techStack).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${activeTab === key
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                {activeTab === key && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-xl opacity-20`}></div>
                )}
                <div className={`absolute inset-0 border-2 rounded-xl transition-all ${activeTab === key
                  ? `border-transparent bg-gradient-to-r ${category.gradient} opacity-100`
                  : 'border-white/10 opacity-0 group-hover:opacity-100'
                  }`}></div>
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="relative">
            {Object.entries(techStack).map(([key, category]) => (
              <div
                key={key}
                className={`transition-all duration-500 ${activeTab === key
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                  }`}
              >
                <div className="glass-card-theme rounded-3xl p-8 border border-white/10">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-3xl shadow-2xl`}>
                      {category.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">{category.title}</h4>
                      <p className="text-gray-400 text-sm">{category.skills.length} technologies</p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.skills.map((tech, idx) => (
                      <div
                        key={tech.name}
                        className="group/skill relative p-4 rounded-xl bg-black/20 border border-white/5 hover:border-white/20 hover:bg-black/30 transition-all duration-300"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white font-semibold">{tech.name}</span>
                          <span className={`text-sm font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                            {tech.level}%
                          </span>
                        </div>

                        {/* Mini Progress Bar */}
                        <div className="relative h-1 bg-black/40 rounded-full overflow-hidden">
                          <div
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: `${tech.level}%`,
                              transitionDelay: `${idx * 50}ms`
                            }}
                          >
                            <div className="absolute inset-0 bg-white/30 shimmer"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { label: 'Years Experience', value: '3+', icon: '📅' },
            { label: 'Projects Completed', value: '25+', icon: '🚀' },
            { label: 'Technologies', value: '30+', icon: '⚡' },
            { label: 'Happy Clients', value: '15+', icon: '😊' },
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className="glass-card-theme rounded-2xl p-6 text-center border border-white/10 hover-card-lift"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gradient-theme mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
