'use client';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-32 px-4 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-white/40 text-sm tracking-[0.3em] uppercase mb-4 block">
            Get to know me
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-gradient-premium mb-6">
            About Me
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Frontend Engineer passionate about creating exceptional user experiences
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Contact Info */}
          <div className="relative group">
            <div className="glass-card rounded-[3rem] p-12 hover:scale-[1.02] transition-all duration-700 spotlight">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 animate-float-medium">
                  <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Đinh Xuân Hải</h3>
                <p className="text-white/60">Frontend Developer</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">dinhxuanhai206@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">0353432512</span>
                </div>
                <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <a href="https://www.linkedin.com/in/hai20062000" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gradient-premium">
                    linkedin.com/in/hai20062000
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">Born: June 20, 2000</span>
                </div>
              </div>
            </div>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700 -z-10"></div>
          </div>
          
          {/* Right - Professional Summary */}
          <div className="space-y-8">
            {/* Summary Card */}
            <div className="glass-card rounded-3xl p-10 hover:scale-[1.02] transition-all duration-500 spotlight border-gradient">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl flex-shrink-0">
                  🚀
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Professional Summary
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Frontend Engineer with <span className="text-gradient-premium font-semibold">3.5+ years of experience</span> building and maintaining modern web applications using ReactJS, Next.js, TypeScript, HTML, and CSS.
                  </p>
                  <p className="text-white/70 leading-relaxed mt-3">
                    Strong experience collaborating with UI/UX designers to transform wireframes and visual designs into high-quality, user-friendly interfaces.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Expertise */}
            <div className="glass-card rounded-3xl p-10 hover:scale-[1.02] transition-all duration-500 spotlight">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl flex-shrink-0">
                  💡
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Core Expertise
                  </h3>
                  <ul className="text-white/70 leading-relaxed space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-gradient-premium mt-1">▸</span>
                      <span>Full application lifecycle: requirements, design, development, testing, deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gradient-premium mt-1">▸</span>
                      <span>Performance optimization and code quality standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gradient-premium mt-1">▸</span>
                      <span>Cross-functional collaboration with Product, Design, Backend, and QA teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gradient-premium mt-1">▸</span>
                      <span>Agile/Scrum methodology</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
