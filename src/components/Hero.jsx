import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion';
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Magnetic from '@/components/motion/Magnetic';
import { EASE } from '@/lib/motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EASE },
  },
};

const maskedLine = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.9, ease: EASE } },
};

const socials = [
  {
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/katta-shivani-reddy/',
    label: 'LinkedIn',
    color: '#0A66C2',
    hoverBg: 'rgba(10, 102, 194, 0.10)',
  },
  {
    icon: FaGithub,
    url: 'https://github.com/shivani1064',
    label: 'GitHub',
    color: '#24292F',
    hoverBg: 'rgba(36, 41, 47, 0.10)',
    darkOverride: true,
  },
  {
    icon: Mail,
    url: 'mailto:shivanireddyk1604@gmail.com',
    label: 'Email',
    color: '#EA4335',
    hoverBg: 'rgba(234, 67, 53, 0.10)',
  },
];

// Hero: content stagger-reveals once the intro curtain lifts; a dot grid
// lights up around the cursor; primary CTA is magnetic.
const Hero = ({ start = true }) => {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();

  // Cursor spotlight over the dot grid
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const sx = useSpring(mx, { stiffness: 300, damping: 40, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 300, damping: 40, mass: 0.5 });
  const spotlightMask = useMotionTemplate`radial-gradient(280px at ${sx}px ${sy}px, black 0%, transparent 80%)`;

  const handleMouseMove = (e) => {
    if (reduced || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="legacy-hero relative min-h-[100svh] flex items-center justify-center bg-background pt-28 pb-24 sm:pt-32 sm:pb-28 overflow-hidden"
    >
      {/* Ambient glow + dot grid, with a cursor-following spotlight layer */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,hsl(var(--accent)/0.07),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.5] bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_65%_60%_at_50%_40%,black_30%,transparent_75%)]" />
        <motion.div
          style={{ WebkitMaskImage: spotlightMask, maskImage: spotlightMask }}
          className="absolute inset-0 bg-[radial-gradient(hsl(var(--accent)/0.65)_1px,transparent_1px)] [background-size:26px_26px]"
        />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-5 sm:px-6 w-full">
        <motion.div
          initial="hidden"
          animate={start ? 'show' : 'hidden'}
          variants={container}
          className="flex flex-col items-center text-center"
        >
          <motion.p
            variants={item}
            className="text-caption uppercase tracking-[0.14em] sm:tracking-[0.18em] text-muted-foreground mb-5 sm:mb-6"
          >
            Computer Science Graduate
          </motion.p>

          <h1 className="text-display text-foreground text-balance max-w-5xl">
            <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
              <motion.span variants={maskedLine} className="block will-change-transform">
                Hi, I&apos;m <span className="italic">Shivani Reddy Katta.</span>
              </motion.span>
            </span>
          </h1>

          <motion.p variants={item} className="mt-6 max-w-2xl text-body text-muted-foreground">
            Building applications with a foundation in software development, cloud concepts, and DevOps. Seeking an entry-level technology role to learn, contribute, and solve practical problems.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 sm:mt-12 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-x-8 gap-y-3 max-w-xs sm:max-w-none"
          >
            <Magnetic>
              <motion.button
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-7 rounded-full bg-primary text-primary-foreground text-[0.9375rem] font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View my work
              </motion.button>
            </Magnetic>

            <button
              onClick={() => scrollToSection('contact')}
              className="group inline-flex items-center justify-center gap-1.5 h-12 sm:h-auto text-[0.9375rem] font-medium text-accent hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full px-2"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-6 sm:mt-8 flex items-center gap-2">
            {socials.map(({ icon: Icon, url, label, color, hoverBg, darkOverride }) => (
              <Magnetic key={label} strength={0.35}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ color, '--hover-bg': hoverBg }}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full transition-colors hover:[background-color:var(--hover-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Icon className={`h-[1.125rem] w-[1.125rem] ${darkOverride ? 'dark:text-foreground' : ''}`} />
                </a>
              </Magnetic>
            ))}
          </motion.div>

          <motion.a variants={item} href={`${import.meta.env.BASE_URL}shivanikatta_Resume.pdf`} download className="mt-4 inline-flex min-h-11 items-center rounded px-2 text-sm font-medium text-accent underline underline-offset-4 transition-opacity hover:opacity-80">Download resume</motion.a>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, x: '-50%', y: -4 }}
        animate={start ? { opacity: 1, x: '-50%', y: 0 } : { opacity: 0, x: '-50%', y: -4 }}
        transition={{ duration: 0.6, delay: 1.25, ease: EASE }}
        onClick={() => scrollToSection('skills')}
        className="absolute bottom-5 left-1/2 z-10 hidden h-12 w-12 items-center justify-center text-muted-foreground transition-colors hover:text-accent sm:inline-flex"
        aria-label="Scroll to skills"
      >
        <motion.span
          animate={reduced ? {} : { y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.span>
      </motion.button>

    </section>
  );
};

export default Hero;
