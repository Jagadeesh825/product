import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css'

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-950 text-center">
      <div className="bg-zinc-950 bg-opacity-50 p-10 rounded-lg flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <motion.img
            src="https://m.media-amazon.com/images/I/61Famx7xQwL._AC_UF1000,1000_QL80_.jpg"
            alt="Smartwatch"
            className="w-full max-w-xs mb-6 rounded-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <h1 className="text-4xl text-white mb-4">Smartwatch Pro</h1>
          <p className="text-white mb-6">Experience the future of fitness with Smartwatch Pro. Designed to keep up with your active lifestyle.</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-800 text-white py-2 px-4 rounded"
          >
            Buy Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
