import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => (
  <section id="projects">
    <div className="container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {portfolioData.projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -8 }}
          >
            <img
              className="project-image"
              src={p.image}
              alt={p.title}
            />
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tech">
                {p.technologies.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
                <a href={p.githubUrl} target="_blank" rel="noreferrer">
                  <Github size={16} /> GitHub
                </a>
              </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;