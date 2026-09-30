import { cn } from '@/lib/utils';

const tones = {
  plain: 'border border-border/70 bg-surface-2',
  soft: 'bg-surface',
  dark: 'dark-stage',
  gradient: 'bg-[linear-gradient(135deg,#6a39f3_0%,#5267f5_52%,#24bfe5_120%)] text-white',
};

const SectionFrame = ({ id, tone = 'plain', className, innerClassName, children }) => (
  <section id={id} className="site-container py-4 sm:py-6">
    <div className={cn('stage-radius relative overflow-hidden px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16', tones[tone], className)}>
      <div className={cn('relative z-10', innerClassName)}>{children}</div>
    </div>
  </section>
);

export default SectionFrame;
