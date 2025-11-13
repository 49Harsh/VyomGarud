import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff7b00] rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff7b00] rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 123, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 123, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Company Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="text-white">Vyom</span>
            <span className="text-[#ff7b00]">Garud</span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto font-medium"
          >
            Military-Grade Autonomous UAV Systems
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Precision engineering meets advanced autonomy for mission-critical operations
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group relative px-8 py-4 bg-[#ff7b00] text-white font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,123,0,0.5)] hover:scale-105">
              <span className="relative z-10">Explore Our Systems</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b00] to-[#ff9500] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 bg-transparent text-white font-semibold text-lg rounded-lg border-2 border-white/30 hover:border-[#ff7b00] hover:text-[#ff7b00] transition-all duration-300">
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-gray-400 text-sm mb-2 font-medium">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-[#ff7b00]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
