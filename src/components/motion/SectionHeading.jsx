import { motion } from 'framer-motion';
import { EASE } from '@/lib/motion';
import TextReveal from './TextReveal';
import Reveal from './Reveal';

const SectionHeading = ({ eyebrow, title, description, align = 'left', light = false, number }) => {
  const centered = align === 'center';
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-4xl mb-12 sm:mb-16 lg:mb-20`}>
      {(number || eyebrow) && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: .55, ease: EASE }}
          className={`mb-5 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}
        >
          {number && <span className={`font-display text-xs font-bold ${light ? 'text-[#8f7cff]' : 'text-accent'}`}>{number}</span>}
          {eyebrow && (
            <span className={`inline-flex items-center text-caption font-semibold uppercase tracking-[.16em] ${light ? 'text-white/58' : 'text-muted-foreground'}`}>
              {eyebrow}
            </span>
          )}
        </motion.div>
      )}
      <TextReveal text={title} className={`text-headline text-balance ${light ? 'text-white' : 'text-foreground'}`} delay={.04} />
      <Reveal delay={.16} y={14}>
        <p className={`mt-6 max-w-2xl text-subtitle text-pretty ${centered ? 'mx-auto' : ''} ${light ? 'text-white/62' : 'text-muted-foreground'}`}>
          {description}
        </p>
      </Reveal>
    </div>
  );
};

export default SectionHeading;
