import { motion } from 'framer-motion';
import { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <footer className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 123, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 123, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In <span className="text-[#ff7b00]">Touch</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Contact our team to discuss how VyomGarud's autonomous UAV systems can meet your operational requirements.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff7b00] focus:ring-1 focus:ring-[#ff7b00] transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff7b00] focus:ring-1 focus:ring-[#ff7b00] transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff7b00] focus:ring-1 focus:ring-[#ff7b00] transition-colors duration-200 resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full px-8 py-4 bg-[#ff7b00] text-white font-semibold rounded-lg hover:bg-[#ff9500] focus:outline-none focus:ring-2 focus:ring-[#ff7b00] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,123,0,0.3)]"
              >
                {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-sm text-center"
                >
                  Thank you! We'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Right Column: Company Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8"
          >
            <div className="space-y-8">
              {/* Company Info */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  <span className="text-white">Vyom</span><span className="text-[#ff7b00]">Garud</span>
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Leading the future of autonomous UAV systems with military-grade precision and advanced AI-driven technology.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#ff7b00]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#ff7b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:contact@vyomgarud.com" className="text-white hover:text-[#ff7b00] transition-colors duration-200">
                      contact@vyomgarud.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#ff7b00]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#ff7b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-[#ff7b00] transition-colors duration-200">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#ff7b00]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#ff7b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">Bangalore, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="w-10 h-10 bg-[#1a1a1a] border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#ff7b00] hover:border-[#ff7b00] transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="w-10 h-10 bg-[#1a1a1a] border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#ff7b00] hover:border-[#ff7b00] transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="GitHub"
                    className="w-10 h-10 bg-[#1a1a1a] border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#ff7b00] hover:border-[#ff7b00] transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 VyomGarud. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-[#ff7b00] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#ff7b00] transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#ff7b00] transition-colors duration-200">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
