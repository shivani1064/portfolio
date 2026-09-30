import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { EASE } from '@/lib/motion';

// Masked word-by-word reveal: each word slides up out of an overflow-hidden
// clip, the way titles land in the Claude Code launch videos.
const container = (delay) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: delay } },
});

const word = {
  hidden: { y: '115%' },
  show: { y: 0, transition: { duration: 0.75, ease: EASE } },
};

const TextReveal = ({
  text,
  as: Tag = 'h2',
  className = '',
  delay = 0,
  once = true,
  margin = '-60px',
}) => {
  const words = text.split(' ');

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        initial="hidden"
        whileInView="show"
        viewport={{ once, margin }}
        variants={container(delay)}
      >
        {words.map((w, i) => (
          <Fragment key={i}>
            <span className="inline-block overflow-hidden align-bottom pb-[0.1em] -mb-[0.1em]">
              <motion.span className="inline-block will-change-transform" variants={word}>
                {w}
              </motion.span>
            </span>
            {/* The space must sit between the clip spans as its own text node:
                a trailing space inside an inline-block gets collapsed away,
                and a bare text-node space preserves line wrapping. */}
            {i < words.length - 1 ? ' ' : null}
          </Fragment>
        ))}
      </motion.span>
    </Tag>
  );
};

export default TextReveal;
