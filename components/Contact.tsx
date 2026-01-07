'use client';

import { useState } from 'react';

const contactMethods = [
  {
    icon: '📧',
    title: 'Email',
    value: 'dinhxuanhai206@gmail.com',
    href: 'mailto:dinhxuanhai206@gmail.com',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: '📱',
    title: 'Phone',
    value: '0353432512',
    href: 'tel:0353432512',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    value: 'hai20062000',
    href: 'https://www.linkedin.com/in/hai20062000',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '💻',
    title: 'GitHub',
    value: 'dinhxuanhai',
    href: 'https://github.com/dinhxuanhai',
    gradient: 'from-gray-600 to-gray-800',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formOpened, setFormOpened] = useState(false);

  const handleInputFocus = () => {
    if (!formOpened) {
      setFormOpened(true);
      window.dispatchEvent(new CustomEvent('unlock-achievement', { 
        detail: { id: 'contact' } 
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('Thank you! I will get back to you soon. 🎉');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Ultra Premium Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 px-2">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-[rgb(var(--primary))] to-transparent"></div>
            <span className="text-gray-400 text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase font-semibold">
              Let's Connect
            </span>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-[rgb(var(--primary))] to-transparent"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            <span className="text-gradient-theme">Start Your</span>
            <br />
            <span className="text-white">Next </span>
            <span className="text-gradient-theme">Project</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Ready to bring your ideas to life? Let's discuss how we can work together
            <br />
            <span className="text-xs sm:text-sm text-gray-500 mt-2 inline-block">I typically respond within 24 hours</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Contact Form - Mobile Optimized */}
          <div className="relative group/form w-full overflow-hidden">
            {/* Animated Gradient Border */}
            <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl sm:rounded-3xl opacity-20 group-hover/form:opacity-30 blur-xl transition duration-500 animate-pulse"></div>
            
            <div className="relative glass-card-theme rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border border-white/10 backdrop-blur-xl w-full overflow-hidden">
              <div className="mb-6 sm:mb-8 md:mb-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                    ✉️
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white truncate">Send Message</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">I'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name Input - Mobile Optimized */}
                <div className="group/input relative">
                  <label className="block text-white/90 mb-2 sm:mb-3 text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2">
                    <span className="text-base sm:text-lg">👤</span>
                    <span>Your Name</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={handleInputFocus}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black/30 border-2 border-white/10 rounded-xl sm:rounded-2xl text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-black/40 transition-all duration-300 font-medium"
                      placeholder="John Doe"
                    />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-600/0 via-pink-600/0 to-blue-600/0 group-focus-within/input:from-purple-600/5 group-focus-within/input:via-pink-600/5 group-focus-within/input:to-blue-600/5 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>

                {/* Email Input - Mobile Optimized */}
                <div className="group/input relative">
                  <label className="block text-white/90 mb-2 sm:mb-3 text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2">
                    <span className="text-base sm:text-lg">📧</span>
                    <span>Your Email</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black/30 border-2 border-white/10 rounded-xl sm:rounded-2xl text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-black/40 transition-all duration-300 font-medium"
                      placeholder="john@example.com"
                    />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-600/0 via-pink-600/0 to-blue-600/0 group-focus-within/input:from-purple-600/5 group-focus-within/input:via-pink-600/5 group-focus-within/input:to-blue-600/5 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>

                {/* Message Input - Mobile Optimized */}
                <div className="group/input relative">
                  <label className="block text-white/90 mb-2 sm:mb-3 text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2">
                    <span className="text-base sm:text-lg">💬</span>
                    <span>Your Message</span>
                  </label>
                  <div className="relative">
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black/30 border-2 border-white/10 rounded-xl sm:rounded-2xl text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-black/40 transition-all duration-300 resize-none font-medium"
                      placeholder="Tell me about your project..."
                    />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-600/0 via-pink-600/0 to-blue-600/0 group-focus-within/input:from-purple-600/5 group-focus-within/input:via-pink-600/5 group-focus-within/input:to-blue-600/5 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>

                {/* Submit Button - Mobile Optimized */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group/btn relative w-full px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 blur-2xl transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-white font-bold text-base sm:text-lg">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="hidden sm:inline">Sending Message...</span>
                        <span className="sm:hidden">Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Methods - Mobile Optimized */}
          <div className="space-y-4 sm:space-y-6">
            {/* Main Contact Card - Mobile Optimized */}
            <div className="glass-card-theme rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                  📞
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate">Contact Info</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Choose your preferred method</p>
                </div>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                {contactMethods.map((method, idx) => (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group/card flex items-center gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-white/5 hover:border-white/20 hover:bg-black/30 transition-all duration-300 hover-card-lift"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center text-xl sm:text-2xl shadow-lg group-hover/card:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-400 mb-0.5 sm:mb-1 font-medium uppercase tracking-wider">{method.title}</div>
                      <div className="text-sm sm:text-base text-white font-semibold group-hover/card:text-gradient-theme transition-colors truncate">
                        {method.value}
                      </div>
                    </div>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover/card:text-white group-hover/card:translate-x-2 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info Card - Mobile Optimized */}
            <div className="glass-card-theme rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                  ⚡
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Quick Info</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-black/20">
                  <span className="text-xl sm:text-2xl flex-shrink-0">⏰</span>
                  <div className="min-w-0">
                    <div className="text-sm sm:text-base text-white font-medium mb-0.5 sm:mb-1">Response Time</div>
                    <div className="text-xs sm:text-sm text-gray-400">Within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-black/20">
                  <span className="text-xl sm:text-2xl flex-shrink-0">🌍</span>
                  <div className="min-w-0">
                    <div className="text-sm sm:text-base text-white font-medium mb-0.5 sm:mb-1">Location</div>
                    <div className="text-xs sm:text-sm text-gray-400">Vietnam (GMT+7)</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-black/20">
                  <span className="text-xl sm:text-2xl flex-shrink-0">💼</span>
                  <div className="min-w-0">
                    <div className="text-sm sm:text-base text-white font-medium mb-0.5 sm:mb-1">Availability</div>
                    <div className="text-xs sm:text-sm text-green-400 font-semibold">Open for opportunities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Footer - Mobile Optimized */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center px-2">
          <div className="inline-flex flex-col items-center gap-2 sm:gap-3 glass-card-theme rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border border-white/10 max-w-full">
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-gray-400 text-xs sm:text-sm">
              <span>Crafted with</span>
              <span className="text-red-500 text-base sm:text-xl animate-pulse">❤️</span>
              <span>using</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
              <span className="px-2 sm:px-3 py-1 rounded-lg bg-black/30 text-white font-medium whitespace-nowrap">Next.js</span>
              <span className="text-gray-500">+</span>
              <span className="px-2 sm:px-3 py-1 rounded-lg bg-black/30 text-white font-medium whitespace-nowrap">Tailwind</span>
              <span className="text-gray-500">+</span>
              <span className="px-2 sm:px-3 py-1 rounded-lg bg-black/30 text-white font-medium whitespace-nowrap">TypeScript</span>
            </div>
            <p className="text-gray-500 text-xs mt-1 sm:mt-2">
              © 2026 Dinh Xuan Hai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
