import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedCounter = ({ end, duration = 2, suffix = '', prefix = '', className = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60); // 60 FPS
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        scale: { type: "spring", stiffness: 100, damping: 15 }
      }}
      className={className}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <motion.span
        animate={isInView ? { opacity: [0.7, 1, 0.7] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block"
      >
        {prefix}{count}{suffix}
      </motion.span>
    </motion.div>
  );
};