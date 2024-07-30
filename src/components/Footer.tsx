import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer id="contact">
      <div className="container">
        <p>Contact us at <a href="mailto:info@myproductsite.com">info@myproductsite.com</a></p>
        <p>&copy; 2024 MyProductSite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
