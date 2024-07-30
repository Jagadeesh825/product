import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Testimonials.css'

const testimonials = [
  { name: "John Doe", text: "This product is amazing!" },
  { name: "Jane Smith", text: "Changed my life for the better!" },
  { name: "Alice Johnson", text: "Highly recommend to everyone." },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials">
      <div className="container mx-auto">
        <h2>Customer Testimonials</h2>
        <div className="flex md:flex-row justify-around flex-row">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.3 }} 
              className="testimonial"
            >
              <p className="italic">"{testimonial.text}"</p>
              <p className="font-bold">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
