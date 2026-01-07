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
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Ultra Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[rgb(var(--primary))] to-transparent"></div>
            <span className="text-gray-400 text-xs tracking-[0.5em] uppercase font-semibold">
              Let's Connect
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[rgb(var(--primary))] to-transparent"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient-theme">Start Your</span>
            <br />
            <span className="text-white">Next </span>
            <span className="text-gradient-theme">Project</span>
          </h2>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can work together
            <br />
            <span className="text-sm text-gray-500 mt-2 inline-block">I typically respond within 24 hours</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form - Ultra Premium Design */}
          <div className="relative group/form">
            {/* Animated Gradient Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl opacity-20 group-hover/form:opacity-30 blur-xl transition duration-500 animate-pulse"></div>
            
            <div className="relative glass-card-theme rounded-3xl p-10 border border-white/10 backdrop-blur-xl">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Send Message</h3>
                    <p className="text-gray-400 text-sm">I'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input - Enhanced */}
                <div className="group/input relative">
                  <label className="block text-white/90 mb-3 text-sm font-semibold flex items-center gap-2">
                    <span className="text-lg">👤</span>
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={handleInputFocus}
                      className="w-full px-6 py-4 bg-black/30 border-2 border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-black/40 transition-all duration-300 font-medium"
                      placeholder="John Doe"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 via-pink-600/0 to-blue-600/0 group-focus-within/input:from-purple-600/5 group-focus-within/input:via-pink-600/5 group-focus-within/input:to-blue-600/5 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>

                {/* Email Input - Enhanced */}
                <div className="group/input relative">
                  <label className="block text-white/90 mb-3 text-sm font-semibold flex items-center gap-2">
                    <span className="text-lg">📧</span>
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 bg-black/30 border-2 border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-black/40 transition-all duration-300 font-medium"
                      placeholder="john@example.com"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 via-pink-600/0 to-blue-600/0 group-focus-within/input:from-purple-600/5 group-focus-within/input:via-pink-600/5 group-focus-within/input:to-blue-600/5 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>

                {/* Message Input - Enhanced */}
                <div className="group/input relative">
                  <label className="block text-white/90 mb-3 text-sm font-semibold flex items-center gap-2">
                    <span className="text-lg">💬</span>
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-6 py-4 bg-black/30 border-2 border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-black/40 transition-all duration-300 resize-none font-medium"
                      placeholder="Tell me about your project, goals, and timeline..."
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 via-pink-600/0 to-blue-600/0 group-focus-within/input:from-purple-600/5 group-focus-within/input:via-pink-600/5 group-focus-within/input:to-blue-600/5 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>

                {/* Ultra Premium Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group/btn relative w-full px-8 py-5 rounded-2xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 blur-2xl transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center justify-center gap-3 text-white font-bold text-lg">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Methods - Ultra Premium Cards */}
          <div className="space-y-6">
            {/* Main Contact Card */}
            <div className="glass-card-theme rounded-3xl p-8 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl">
                  📞
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Contact Info</h3>
                  <p className="text-gray-400 text-sm">Choose your preferred method</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {contactMethods.map((method, idx) => (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group/card flex items-center gap-4 p-5 rounded-2xl bg-black/20 border border-white/5 hover:border-white/20 hover:bg-black/30 transition-all duration-300 hover-card-lift"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center text-2xl shadow-lg group-hover/card:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wider">{method.title}</div>
                      <div className="text-white font-semibold group-hover/card:text-gradient-theme transition-colors">
                        {method.value}
                      </div>
                    </div>
                    <svg className="w-6 h-6 text-gray-400 group-hover/card:text-white group-hover/card:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Quick Info Card */}
            <div className="glass-card-theme rounded-3xl p-8 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xl">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-white">Quick Info</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-black/20">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <div className="text-white font-medium mb-1">Response Time</div>
                    <div className="text-sm text-gray-400">Within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-black/20">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <div className="text-white font-medium mb-1">Location</div>
                    <div className="text-sm text-gray-400">Vietnam (GMT+7)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-black/20">
                  <span className="text-2xl">💼</span>
                  <div>
                    <div className="text-white font-medium mb-1">Availability</div>
                    <div className="text-sm text-green-400 font-semibold">Open for opportunities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Footer */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-3 glass-card-theme rounded-2xl px-8 py-6 border border-white/10">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Crafted with</span>
              <span className="text-red-500 text-xl animate-pulse">❤️</span>
              <span>using</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="px-3 py-1 rounded-lg bg-black/30 text-white font-medium">Next.js</span>
              <span className="text-gray-500">+</span>
              <span className="px-3 py-1 rounded-lg bg-black/30 text-white font-medium">Tailwind CSS</span>
              <span className="text-gray-500">+</span>
              <span className="px-3 py-1 rounded-lg bg-black/30 text-white font-medium">TypeScript</span>
            </div>
            <p className="text-gray-500 text-xs mt-2">
              © 2026 Dinh Xuan Hai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
