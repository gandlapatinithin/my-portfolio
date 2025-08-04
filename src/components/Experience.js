import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Experience = () => (
  <section id="experience">
    <div className="container">
      <h2 className="section-title">Experience</h2>
      <div>
        {portfolioData.experience.map((exp, i) => (
          <motion.div
            key={exp.id}
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <h3>{exp.title}</h3>
            <div className="company">{exp.company}</div>
            <div className="duration">{exp.duration}</div>
            <p>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;