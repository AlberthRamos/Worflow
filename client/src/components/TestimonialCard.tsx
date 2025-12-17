import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  delay?: number;
}

export const TestimonialCard = ({ name, role, company, content, rating, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        scale: { type: "spring", stiffness: 100, damping: 15 }
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="glass-card rounded-xl p-6 relative group overflow-hidden"
    >
      {/* Efeito de brilho no hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.8 }}
      />
      
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-all duration-300 group-hover:scale-110">
        <Quote className="w-8 h-8 text-primary" />
      </div>
      
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: delay + (i * 0.1) }}
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Star 
              className={`w-4 h-4 ${i < rating ? 'text-primary fill-primary' : 'text-white/20'}`}
            />
          </motion.div>
        ))}
      </div>
      
      <motion.p 
        className="text-white/80 mb-6 leading-relaxed italic relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        "{content}"
      </motion.p>
      
      <motion.div 
        className="border-t border-white/10 pt-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        <motion.h4 
          className="font-bold text-white mb-1"
          whileHover={{ x: 5, transition: { duration: 0.2 } }}
        >
          {name}
        </motion.h4>
        <p className="text-sm text-white/60 mb-1">{role}</p>
        <motion.p 
          className="text-xs text-primary font-medium"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          {company}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};