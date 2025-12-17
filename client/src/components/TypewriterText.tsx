import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  delay?: number;
  className?: string;
}

export const TypewriterText = ({ texts, speed = 50, delay = 2000, className = "" }: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(speed);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < currentText.length) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setTypingSpeed(speed);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypingSpeed(speed / 2);
      } else if (!isDeleting && displayText.length === currentText.length) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, texts, delay, speed, typingSpeed]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        key={displayText}
      >
        {displayText}
      </motion.span>
      <motion.span
        animate={{ 
          opacity: isVisible ? [0.3, 1, 0.3] : 0,
          scale: isVisible ? [0.9, 1.1, 0.9] : 0
        }}
        transition={{ 
          duration: 1.2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="inline-block ml-1"
        style={{
          textShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
          filter: "blur(0.5px)"
        }}
      >
        ▌
      </motion.span>
    </motion.span>
  );
};