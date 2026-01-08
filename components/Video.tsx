'use client';

import { useState, useEffect } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

export default function Video() {
  const [hasVideo, setHasVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // YouTube video ID (nếu có) - Thay YOUR_VIDEO_ID bằng ID thật
  const youtubeVideoId = ''; // Ví dụ: 'dQw4w9WgXcQ'
  
  useEffect(() => {
    // Check if local video exists
    fetch('/intro-video.mp4', { method: 'HEAD' })
      .then(res => {
        if (res.ok) {
          setHasVideo(true);
        }
      })
      .catch(() => {
        setHasVideo(false);
      });
  }, []);

  return (
    <section id="video" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[rgb(var(--primary))] to-transparent"></div>
            <span className="text-gray-400 text-xs tracking-[0.5em] uppercase font-semibold">
              Introduction
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[rgb(var(--primary))] to-transparent"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-theme mb-6">
            Watch My Story
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know me better through this video introduction
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Video Container */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700 -z-10"></div>
            
            <div className="glass-card-theme rounded-3xl overflow-hidden border border-white/10 hover-card-lift">
              <div className="aspect-video relative bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-blue-900/30">
                {/* YouTube Video */}
                {youtubeVideoId && (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                    title="Introduction Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}

                {/* Local Video */}
                {!youtubeVideoId && hasVideo && !videoError && (
                  <video
                    controls
                    className="w-full h-full object-cover"
                    poster="/video-poster.jpg"
                    onError={() => setVideoError(true)}
                  >
                    <source src="/intro-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                
                {/* Placeholder - Show when no video */}
                {!youtubeVideoId && (!hasVideo || videoError) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/90 via-pink-900/90 to-blue-900/90 backdrop-blur-sm">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full glass-card-theme flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-white/20">
                        <PlayCircleIcon className="text-white" sx={{ fontSize: { xs: 48, sm: 64 } }} />
                      </div>
                      <p className="text-white text-xl sm:text-2xl font-bold mb-3">Add Your Video</p>
                      <div className="space-y-2 text-white/60 text-xs sm:text-sm max-w-md mx-auto">
                        <p>
                          <span className="font-semibold text-white">Option 1:</span> Place video at{' '}
                          <code className="text-gradient-theme font-semibold px-2 py-1 bg-black/30 rounded">
                            /public/intro-video.mp4
                          </code>
                        </p>
                        <p>
                          <span className="font-semibold text-white">Option 2:</span> Add YouTube ID in{' '}
                          <code className="text-gradient-theme font-semibold px-2 py-1 bg-black/30 rounded">
                            components/Video.tsx
                          </code>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Platform Links */}
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-white/40 text-xs sm:text-sm tracking-wider mb-6 sm:mb-8">ALSO AVAILABLE ON</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a
                href="https://youtube.com/@your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 sm:gap-4 glass-card-theme px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl hover-card-lift border border-white/10"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <YouTubeIcon className="text-white" sx={{ fontSize: { xs: 24, sm: 28 } }} />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-white font-semibold text-sm sm:text-base">YouTube</div>
                  <div className="text-white/50 text-xs sm:text-sm">Watch on YouTube</div>
                </div>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a
                href="https://vimeo.com/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 sm:gap-4 glass-card-theme px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl hover-card-lift border border-white/10"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0">
                  <VideoLibraryIcon className="text-white" sx={{ fontSize: { xs: 24, sm: 28 } }} />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-white font-semibold text-sm sm:text-base">Vimeo</div>
                  <div className="text-white/50 text-xs sm:text-sm">Watch on Vimeo</div>
                </div>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
