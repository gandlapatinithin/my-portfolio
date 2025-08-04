import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Typewriter from 'typewriter-effect';   // ✅ FIXED
import { portfolioData } from '../data/portfolio';
import HeroBubbles from './HeroBubbles';

const Hero = () => {
  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      <HeroBubbles />
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>{portfolioData.title}</h1>
          <div className="subtitle">
            <Typewriter
              options={{
                strings: portfolioData.subtitle,
                autoStart: true,
                loop: true,
                deleteSpeed: 50
              }}
            />
          </div>

          <motion.div
            className="cta-buttons"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
            >
              <span>View My Work</span>
              <ArrowRight size={18} />
            </motion.button>

            <motion.a
              className="btn btn-outline"
              href="Nithin-Reddy-Gandlapati-resume.pdf"
              download="Nithin-Reddy-Gandlapati-Resume.pdf"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(102,126,234,0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;