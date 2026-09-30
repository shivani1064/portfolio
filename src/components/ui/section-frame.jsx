import { cn } from '@/lib/utils';

const tones = {
  plain: 'border border-border/70 bg-surface-2',
  soft: 'bg-surface',
  dark: 'dark-stage',
  gradient: 'bg-[linear-gradient(135deg,#6a39f3_0%,#5267f5_52%,#24bfe5_120%)] text-white',
};

const SectionFrame = ({ id, tone = 'plain', className, innerClassName, children }) => (
  <section id={id} className="site-container py-4 sm:py-6">
    <div className={cn('stage-radius relative overflow-hidden px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36 xl:px-20', tones[tone], className)}>
      <div className={cn('relative z-10', innerClassName)}>{children}</div>
    </div>
  </section>
);

export default SectionFrame;
