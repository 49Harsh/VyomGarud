import { motion } from 'framer-motion';

const capabilities = [
  {
    id: 1,
    title: 'Autonomous Flight Systems',
    description: 'AI-powered navigation and decision-making capabilities that enable fully autonomous operations in complex environments with real-time obstacle avoidance.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Surveillance & Reconnaissance',
    description: 'High-resolution multi-spectral sensors with advanced image processing deliver real-time intelligence and persistent monitoring capabilities.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Payload Integration',
    description: 'Modular payload systems designed for diverse mission requirements, from tactical equipment to specialized sensors and communication devices.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Mission Planning Software',
    description: 'Intuitive command and control interface for comprehensive mission planning, execution, and real-time tactical adjustment.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.04, 0.62, 0.23, 0.98] as const,
    },
  },
};

const Capabilities = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff7b00] rounded-full blur-[200px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff7b00] rounded-full blur-[200px] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-[#ff7b00] mb-6 mx-auto"
          ></motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Advanced <span className="text-[#ff7b00]">Capabilities</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge technology engineered for mission-critical operations
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {capabilities.map((capability) => (
            <motion.div
              key={capability.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-[#1a1a1a] rounded-xl p-8 border border-gray-800 hover:border-[#ff7b00] transition-all duration-300 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff7b00]/0 to-[#ff7b00]/0 group-hover:from-[#ff7b00]/5 group-hover:to-[#ff7b00]/10 transition-all duration-300 rounded-xl"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 text-[#ff7b00] transform group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ff7b00] transition-colors duration-300">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#ff7b00] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
