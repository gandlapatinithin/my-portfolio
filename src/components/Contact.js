import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      setError(true);
      setTimeout(() => setError(false), 600);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'service_gd8obcp',     // Replace with your EmailJS service ID
        'template_i0hcz9i',    // Replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: 'Nithin Reddy Gandlapati', // Replace with your name
        },
        'bPZKNu_yX-je2yb7U'      // Replace with your EmailJS public key
      );
      
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000); // Clear message after 5 seconds
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Let&apos;s Connect!</h3>
            <p>Always open to new opportunities or tech chats.</p>
            <div className="contact-item">
              <Mail size={25} />
              <span>{portfolioData.contact.email}</span>
            </div>
            <div className="contact-item">
              <Phone size={25} />
              <span>{portfolioData.contact.phone}</span>
            </div>
            <div className="contact-item">
              <Linkedin size={25} />
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="contact-item">
              <Github size={25} />
              <a href={portfolioData.contact.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text"
                required 
                value={form.name} 
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                required 
                value={form.email} 
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea 
                rows="5" 
                required 
                value={form.message} 
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                disabled={isSubmitting}
              />
            </div>
            
            {submitMessage && (
              <motion.div 
                className={`submit-message ${submitMessage.includes('error') ? 'error' : 'success'}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {submitMessage}
              </motion.div>
            )}

            <motion.button 
              type="submit" 
              className="btn btn-primary" 
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;