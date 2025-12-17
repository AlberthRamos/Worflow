import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const ParallaxSection = ({ children, className = "", speed = 0.5, direction = "up" }: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  let transform;
  switch (direction) {
    case "up":
      transform = useTransform(scrollYProgress, [0, 1], ["0%", `${-50 * speed}%`]);
      break;
    case "down":
      transform = useTransform(scrollYProgress, [0, 1], ["0%", `${50 * speed}%`]);
      break;
    case "left":
      transform = useTransform(scrollYProgress, [0, 1], ["0%", `${-30 * speed}%`]);
      break;
    case "right":
      transform = useTransform(scrollYProgress, [0, 1], ["0%", `${30 * speed}%`]);
      break;
    default:
      transform = useTransform(scrollYProgress, [0, 1], ["0%", `${-50 * speed}%`]);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ transform }}
    >
      {children}
    </motion.div>
  );
};