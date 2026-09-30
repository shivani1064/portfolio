import { motion, useScroll, useSpring } from 'framer-motion';

// Hairline reading-progress bar pinned above the header.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 30, mass: 0.4 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 h-[2px] origin-left bg-accent z-[60] pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
