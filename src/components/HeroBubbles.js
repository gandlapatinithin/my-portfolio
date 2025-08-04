import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const random = (min, max) => Math.random() * (max - min) + min;
const bubbleCount = 15;

export default function HeroBubbles() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handle = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <div className="hero-bubbles">
      {Array.from({ length: bubbleCount }).map((_, i) => (
        <motion.div
          key={i}
          className="bubble"
          initial={{
            x: random(0, window.innerWidth),
            y: window.innerHeight + 100,
            scale: random(0.4, 1.2),
            opacity: random(0.2, 0.6),
          }}
          animate={{
            x: random(-50, window.innerWidth + 50),
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: random(15, 30),
            repeat: Infinity,
            delay: random(0, 15),
            ease: 'linear',
          }}
        />
      ))}
      <motion.div
        className="cursor-bubble"
        animate={{ x: mousePos.x - 6, y: mousePos.y - 6 }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
      />
    </div>
  );
}