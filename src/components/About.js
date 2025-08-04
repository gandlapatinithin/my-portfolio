import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const About = () => (
  <section id="about">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <motion.div
          className="profile-img"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          👨‍💻
        </motion.div>

        <div className="about-text">
          <h3>Hello, I'm {portfolioData.name}</h3>
          {portfolioData.about.description.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              {p}
            </motion.p>
          ))}

          <div className="skills-grid">
            {portfolioData.about.skills.map((skill, i) => (
              <motion.div
                key={i}
                className="skill-item"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 200 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;