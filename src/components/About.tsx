import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Orange Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff7b00] to-transparent"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Section Heading */}
          <div className="mb-12">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-[#ff7b00] mb-6"
            ></motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-[#ff7b00]">VyomGarud</span>
            </h2>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              VyomGarud specializes in the development and deployment of <span className="text-white font-semibold">military-grade autonomous UAV systems</span> designed for the most demanding operational environments. Our platforms combine cutting-edge artificial intelligence with precision engineering to deliver unmatched performance in mission-critical scenarios.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              From advanced reconnaissance and surveillance to autonomous payload delivery, our systems are built to exceed the rigorous standards of modern defense operations. We leverage <span className="text-[#ff7b00] font-semibold">state-of-the-art technology</span> and decades of aerospace expertise to ensure every mission succeeds with precision and reliability.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              At VyomGarud, we don't just build drones—we engineer <span className="text-white font-semibold">intelligent aerial systems</span> that redefine what's possible in autonomous flight operations.
            </p>
          </motion.div>

          {/* Stats or Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-800"
          >
            <div className="text-center sm:text-left">
              <div className="text-4xl md:text-5xl font-bold text-[#ff7b00] mb-2">99.9%</div>
              <div className="text-gray-400 font-medium">Mission Success Rate</div>
            </div>
            
            <div className="text-center sm:text-left">
              <div className="text-4xl md:text-5xl font-bold text-[#ff7b00] mb-2">24/7</div>
              <div className="text-gray-400 font-medium">Operational Capability</div>
            </div>
            
            <div className="text-center sm:text-left">
              <div className="text-4xl md:text-5xl font-bold text-[#ff7b00] mb-2">AI-First</div>
              <div className="text-gray-400 font-medium">Autonomous Systems</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
