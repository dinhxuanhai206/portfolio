'use client';

import { useState } from 'react';

const experiences = [
  {
    company: 'DISION TECH',
    role: 'Developer Engineer',
    period: 'Apr 2024 - Present',
    project: 'Sentinel 360 – Enterprise Security Monitoring Platform',
    description: 'A large-scale cybersecurity platform for managing and monitoring endpoint security across organizations.',
    responsibilities: [
      'Collaborated with UI/UX designers to convert wireframes into responsive interfaces using HTML, CSS, ReactJS, and TypeScript',
      'Participated in full application lifecycle: requirements, design, development, testing, deployment, and maintenance',
      'Wrote clean, maintainable, and optimized code following best practices',
      'Debugged issues and optimized application performance',
      'Worked closely with Product team to plan and deliver new features',
      'Ensured quality and performance standards for new and existing features',
      'Researched and evaluated new web technologies to improve product quality'
    ],
    tech: ['React', 'TypeScript', 'HTML/CSS', 'REST API'],
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    icon: '🛡️',
  },
  {
    company: 'TITAN Technology Corporation',
    role: 'Frontend Developer',
    period: 'Feb 2022 - Apr 2024',
    project: 'Levvia – Audit & Data Inventory System for Deloitte',
    description: 'A data-centric internal tool used by Deloitte\'s audit staff to manage and review large data sets.',
    responsibilities: [
      'Built high-performance data tables with virtualization, pagination, sorting, and filtering for large datasets',
      'Worked closely with backend engineers to integrate REST APIs and ensure data consistency',
      'Refactored legacy code into modular, reusable components, improving maintainability',
      'Applied clean code principles and design patterns in enterprise-scale applications',
      'Delivered features under tight deadlines in a large cross-functional team (40+ engineers)'
    ],
    tech: ['React', 'TypeScript', 'Redux', 'REST API'],
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    icon: '📊',
  },
];

const otherProjects = [
  {
    title: 'Multi-Vendor E-Commerce Platform',
    description: 'Role-based authentication, real-time chat, cart & checkout flow',
    tech: ['React', 'TypeScript', 'Next.js', 'Redux Toolkit', 'WebSocket'],
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    icon: '🛒',
  },
  {
    title: 'CMS – Job Bidding & Service Management',
    description: 'Multi-role access, bidding workflows, messaging & notifications',
    tech: ['Next.js', 'Redux Toolkit', 'Styled Components'],
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    icon: '💼',
  },
];

export default function Projects() {
  const [clickedProjects, setClickedProjects] = useState<Set<number>>(new Set());

  const handleProjectClick = (index: number) => {
    const newClicked = new Set(clickedProjects);
    newClicked.add(index);
    setClickedProjects(newClicked);

    // Trigger achievement after 5 clicks
    if (newClicked.size >= 5) {
      window.dispatchEvent(new CustomEvent('unlock-achievement', { 
        detail: { id: 'curious' } 
      }));
    }
  };
  return (
    <section id="projects" className="min-h-screen flex items-center py-32 px-4 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-white/40 text-sm tracking-[0.3em] uppercase mb-4 block">
            Professional Journey
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-gradient-premium mb-6">
            Work Experience
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Real-world projects and professional experience
          </p>
        </div>
        
        {/* Main Experiences */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(index)}
              className="glass-card rounded-3xl p-10 hover-card-lift transition-all duration-500 spotlight animate-slide-in-up cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-3xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                    <p className="text-gradient-premium font-semibold">{exp.role}</p>
                  </div>
                </div>
                <span className="text-white/50 text-sm whitespace-nowrap">{exp.period}</span>
              </div>
              
              {/* Project */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-white mb-2">{exp.project}</h4>
                <p className="text-white/60 leading-relaxed">{exp.description}</p>
              </div>
              
              {/* Responsibilities */}
              <div className="mb-6">
                <p className="text-white/80 font-semibold mb-3">Key Responsibilities:</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/60 text-sm">
                      <span className="text-gradient-premium mt-1 flex-shrink-0">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="glass-premium px-4 py-2 rounded-xl text-xs text-white/70 hover:text-white hover:scale-105 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Other Selected Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => handleProjectClick(index + 100)}
                className="glass-card rounded-3xl p-8 hover-card-lift transition-all duration-500 spotlight cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-white/60 text-sm mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="glass-premium px-3 py-1.5 rounded-lg text-xs text-white/70 hover:text-white hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
