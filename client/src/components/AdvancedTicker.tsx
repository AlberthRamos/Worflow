import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AdvancedTickerProps {
  texts: string[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  intensity?: 'subtle' | 'normal' | 'strong';
}

const AdvancedTicker: React.FC<AdvancedTickerProps> = ({
  texts,
  speed = 50,
  direction = 'left',
  className = '',
  variant = 'primary',
  intensity = 'normal'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const { scrollY } = useScroll();
  const scrollVelocity = useSpring(0, { stiffness: 400, damping: 40 });
  
  // Configurações de cores baseadas na intensidade
  const colorConfig = useMemo(() => {
    const configs = {
      subtle: {
        primary: 'bg-blue-500/5 border-blue-500/10 text-blue-200/60 shadow-[0_0_20px_rgba(59,130,246,0.1)]',
        secondary: 'bg-blue-400/5 border-blue-400/10 text-blue-300/60 shadow-[0_0_20px_rgba(96,165,250,0.1)]',
        accent: 'bg-blue-300/5 border-blue-300/10 text-blue-400/60 shadow-[0_0_20px_rgba(147,197,253,0.1)]'
      },
      normal: {
        primary: 'bg-blue-500/10 border-blue-500/20 text-blue-200/80 shadow-[0_0_30px_rgba(59,130,246,0.2)]',
        secondary: 'bg-blue-400/10 border-blue-400/20 text-blue-300/80 shadow-[0_0_30px_rgba(96,165,250,0.2)]',
        accent: 'bg-blue-300/10 border-blue-300/20 text-blue-400/80 shadow-[0_0_30px_rgba(147,197,253,0.2)]'
      },
      strong: {
        primary: 'bg-blue-500/20 border-blue-500/30 text-blue-100/90 shadow-[0_0_40px_rgba(59,130,246,0.3)]',
        secondary: 'bg-blue-400/20 border-blue-400/30 text-blue-200/90 shadow-[0_0_40px_rgba(96,165,250,0.3)]',
        accent: 'bg-blue-300/20 border-blue-300/30 text-blue-300/90 shadow-[0_0_40px_rgba(147,197,253,0.3)]'
      }
    };
    return configs[intensity][variant];
  }, [variant, intensity]);

  // Intersection Observer para detectar visibilidade
  const intersectionCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      setIsVisible(entry.isIntersecting);
    });
  }, []);

  useIntersectionObserver(containerRef, intersectionCallback, { threshold: 0.1 });

  // Efeito de velocidade baseada no scroll
  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      const previous = scrollY.getPrevious() || 0;
      const velocity = latest - previous;
      scrollVelocity.set(velocity);
    });
    return () => unsubscribe();
  }, [scrollY, scrollVelocity]);

  // Calcula duração da animação baseada no conteúdo
  const animationDuration = useMemo(() => {
    if (!contentRef.current) return speed;
    const contentWidth = contentRef.current.scrollWidth;
    return (contentWidth / speed) * 0.1;
  }, [speed]);

  // Ajusta velocidade baseada no scroll
  const adjustedSpeed = useTransform(
    scrollVelocity,
    [-1000, 0, 1000],
    [0.5, 1, 1.5]
  );

  const animationVariants = {
    left: {
      x: ['0%', '-100%'],
    },
    right: {
      x: ['-100%', '0%'],
    },
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden py-4 ${colorConfig} ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        transform: `perspective(1000px) rotateX(${isVisible ? 0 : 10}deg)`,
        transition: 'transform 0.6s ease-out'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />
      
      <motion.div
        ref={contentRef}
        className="flex gap-16 whitespace-nowrap"
        animate={isVisible && !isPaused ? animationVariants[direction] : undefined}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: animationDuration,
            ease: 'linear',
          },
        }}
        style={{ scale: adjustedSpeed }}
      >
        {[...Array(3)].map((_, arrayIndex) => (
          <React.Fragment key={arrayIndex}>
            {texts.map((text, index) => (
              <motion.span
                key={`${arrayIndex}-${index}`}
                className="text-lg font-bold font-display uppercase tracking-widest inline-flex items-center gap-16"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: '0 0 20px currentColor',
                  transition: { duration: 0.2 }
                }}
              >
                <span className="text-blue-400/40">◆</span>
                {text}
                <span className="text-blue-400/40">◆</span>
              </motion.span>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
      
      {/* Efeito de brilho dinâmico */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 0% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default AdvancedTicker;