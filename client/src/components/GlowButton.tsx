import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const GlowButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  disabled = false 
}: GlowButtonProps) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_theme(colors.primary)] hover:shadow-[0_0_40px_theme(colors.primary)] border border-blue-400/30',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-[0_0_20px_theme(colors.secondary)] hover:shadow-[0_0_40px_theme(colors.secondary)] border border-blue-300/30',
    outline: 'border-2 border-blue-400/40 text-blue-100 hover:bg-blue-500/10 hover:border-blue-400/60 shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] backdrop-blur-sm'
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${sizeClasses[size]} ${variantClasses[variant]} ${className} rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {children}
    </motion.button>
  );
};