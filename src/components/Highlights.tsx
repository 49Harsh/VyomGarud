import { motion } from 'framer-motion';

const highlights = [
  {
    id: 1,
    title: 'Unmatched Reliability',
    description: 'Military-grade durability engineered for mission-critical operations in the harshest environments',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Advanced Autonomy',
    description: 'AI-driven systems with intelligent decision-making capabilities for fully autonomous operations',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Precision Engineering',
    description: 'Designed for accuracy and performance in the most demanding operational environments',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
];

const Highlights = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] overflow-hidden">
      {/* Background Gradient Orb */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-[#ff7b00] rounded-full blur-[250px] opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-[#ff7b00] mb-6 mx-auto"
          ></motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="text-[#ff7b00]">VyomGarud</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Engineering excellence that sets the standard for autonomous UAV systems
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: 'easeOut'
              }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative bg-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-[#ff7b00]/50 transition-all duration-300">
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#ff7b00]/20 to-[#ff7b00]/5 text-[#ff7b00] group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ff7b00] transition-colors duration-300">
                  {highlight.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>

                {/* Decorative Corner Element */}
                <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-[#ff7b00]/0 group-hover:border-[#ff7b00] transition-colors duration-300 rounded-tr-2xl"></div>
                <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-[#ff7b00]/0 group-hover:border-[#ff7b00] transition-colors duration-300 rounded-bl-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to deploy excellence?</h3>
              <p className="text-gray-400">Experience the future of autonomous UAV systems</p>
            </div>
            <button className="px-8 py-4 bg-[#ff7b00] text-white font-semibold rounded-lg hover:bg-[#ff9500] hover:shadow-[0_0_30px_rgba(255,123,0,0.4)] transition-all duration-300 whitespace-nowrap">
              Contact Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
