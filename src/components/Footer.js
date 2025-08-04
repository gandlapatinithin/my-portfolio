import React from 'react';
import { portfolioData } from '../data/portfolio';

const Footer = () => (
  <footer>
    <div className="container">
      <p>&copy; 2025 {portfolioData.name}. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;