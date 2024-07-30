import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Header.css'; // Import the CSS file

const Header: React.FC = () => {
  return (
    <header className="bg-gray-950 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1 initial={{ x: -400 }} animate={{ x: 0 }} className="text-2xl font-bold">
          MyProductSite
        </motion.h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#product" className="hover:underline">Product</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
