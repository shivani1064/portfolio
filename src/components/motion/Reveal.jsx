import { motion } from 'framer-motion';
import { EASE } from '@/lib/motion';

// Generic scroll-in reveal: rise + settle, with an optional blur that makes
// content feel like it's being pulled into focus.
const Reveal = ({
  children,
  delay = 0,
  y = 20,
  blur = false,
  duration = 0.7,
  once = true,
  margin = '-60px',
  className = '',
}) => {
  const hidden = { opacity: 0, y };
  const visible = { opacity: 1, y: 0 };
  if (blur) {
    hidden.filter = 'blur(8px)';
    visible.filter = 'blur(0px)';
  }

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once, margin }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
