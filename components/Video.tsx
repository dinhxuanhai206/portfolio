'use client';

export default function Video() {
  return (
    <section id="video" className="min-h-screen flex items-center py-32 px-4 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-white/40 text-sm tracking-[0.3em] uppercase mb-4 block">
            Introduction
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-theme mb-6">
            Watch My Story
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Get to know me better through this video introduction
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Video Container */}
          <div className="relative group">
            <div className="glass-card rounded-[3rem] overflow-hidden hover:scale-[1.02] transition-all duration-700">
              <div className="aspect-video relative bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-blue-900/30">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/video-poster.jpg"
                >
                  <source src="/intro-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Placeholder Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/90 via-pink-900/90 to-blue-900/90 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-8 rounded-full glass-premium flex items-center justify-center group-hover:scale-110 transition-all duration-500 cursor-pointer">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-white text-2xl font-bold mb-3">Add Your Video</p>
                    <p className="text-white/60 text-sm max-w-md mx-auto">
                      Place your video at <span className="text-gradient-premium font-semibold">/public/intro-video.mp4</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700 -z-10"></div>
          </div>
          
          {/* Platform Links */}
          <div className="mt-16 text-center">
            <p className="text-white/40 text-sm tracking-wider mb-8">ALSO AVAILABLE ON</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://youtube.com/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 glass-card px-8 py-5 rounded-2xl hover:scale-105 transition-all duration-500 spotlight"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">YouTube</div>
                  <div className="text-white/50 text-sm">Watch on YouTube</div>
                </div>
                <svg className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a
                href="https://vimeo.com/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 glass-card px-8 py-5 rounded-2xl hover:scale-105 transition-all duration-500 spotlight"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">Vimeo</div>
                  <div className="text-white/50 text-sm">Watch on Vimeo</div>
                </div>
                <svg className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
