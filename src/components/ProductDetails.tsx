import React from 'react';
import { motion } from 'framer-motion';

const ProductDetails: React.FC = () => {
  return (
    <section id="product" className="bg-gray-950 text-white h-screen flex items-center justify-center">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center bg-gray-950 rounded-lg shadow-lg p-6 space-y-6 md:space-y-0 md:space-x-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 300 }}
      >
        <motion.img
          src="https://m.media-amazon.com/images/I/61Famx7xQwL._AC_UF1000,1000_QL80_.jpg"
          alt="Smartwatch"
          className="w-80 h-80 object-cover rounded-lg shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 300 }}
        />
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 300 }}
        >
          <h2 className="text-3xl font-bold mb-4">Product Details</h2>
          <p className="mb-4 text-gray-300">
            Discover the amazing features of our product designed to enhance your life.
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-300">
            <li>Monitors your heart rate continuously.</li>
            <li>Tracks your sleep patterns and quality.</li>
            <li>Measures blood oxygen levels.</li>
            <li>Includes built-in GPS for accurate tracking.</li>
            <li>Offers various fitness and sport modes.</li>
            <li>Receives notifications for calls and messages.</li>
            <li>Controls music playback from your wrist.</li>
            <li>Features a customizable watch face.</li>
            <li>Water-resistant up to 50 meters.</li>
            <li>Lasts up to 7 days on a single charge.</li>
          </ul>
          <p className="font-bold text-xl">
            Price: $99.99
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductDetails;
