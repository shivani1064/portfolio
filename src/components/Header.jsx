import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '@/lib/useTheme';
import { EASE } from '@/lib/motion';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'Skills', id: 'skills' },
  { name: 'About', id: 'about' },
  { name: 'Education', id: 'education' },
  { name: 'Projects', id: 'projects' },
  { name: 'Activities', id: 'activities' },
  { name: 'Contact', id: 'contact' },
];

const Header = () => {
  const menuButton = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 12);
  const { isDark, toggle: toggleTheme } = useTheme();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 12));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-35% 0px -60% 0px' }
    );

    navLinks.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnResize);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnResize);
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    window.requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (!element) return;
      element.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    });
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-5 z-50 sm:top-6 lg:top-7">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <motion.div
          animate={{
            boxShadow: scrolled
              ? '0 18px 55px -30px rgba(17,17,28,.34)'
              : '0 10px 35px -28px rgba(17,17,28,.2)',
          }}
          transition={{ duration: .3, ease: EASE }}
          className={`pointer-events-auto overflow-hidden border border-border bg-background shadow-sm transition-[border-radius] duration-300 ${
            mobileMenuOpen ? 'rounded-[26px]' : 'rounded-full'
          }`}
        >
          <div className="flex h-12 justify-between items-center px-3 sm:h-14 sm:px-4">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="rounded-full px-2 py-2 text-sm font-semibold tracking-tight" aria-label="Shivani Reddy Katta, home">Shivani<span className="text-accent">.</span></a>

            <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Primary navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    key={link.id}
                    onClick={(event) => { event.preventDefault(); scrollToSection(link.id); }}
                    className={`relative rounded-full px-3 py-3 text-[0.8125rem] transition-colors ${
                      isActive
                        ? 'font-semibold text-[#0767df] dark:text-[#59a2ff]'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-full border border-[#b8d3ff] bg-[#eef5ff] shadow-[inset_0_0_0_1px_rgba(7,103,223,0.03)] dark:border-[#2f6fbf]/60 dark:bg-[#0d3768]/45"
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            <div className="col-start-3 flex items-center justify-end gap-1">
              <button
                onClick={toggleTheme}
                className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isDark ? 'sun' : 'moon'}
                    initial={{ rotate: -90, opacity: 0, scale: .5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: .5 }}
                    transition={{ duration: .25, ease: EASE }}
                    className="inline-flex"
                  >
                    {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </motion.span>
                </AnimatePresence>
              </button>

              <button
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-foreground lg:hidden"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                ref={menuButton}
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: .35, ease: EASE }}
                className="overflow-hidden border-t border-border/60 lg:hidden"
              >
                <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex max-h-[calc(100dvh-110px)] flex-col overflow-y-auto px-4 py-3">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.id;
                    return (
                      <motion.a
                        href={`#${link.id}`}
                        aria-current={isActive ? 'location' : undefined}
                        key={link.id}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .3, delay: .04 + index * .035, ease: EASE }}
                        onClick={(event) => { event.preventDefault(); scrollToSection(link.id); }}
                        className={`rounded-xl px-3 py-2.5 text-left text-[0.9375rem] transition-colors ${
                          isActive
                            ? 'bg-[#eef5ff] font-semibold text-[#0767df] dark:bg-[#0d3768]/45 dark:text-[#59a2ff]'
                            : 'text-foreground hover:bg-surface'
                        }`}
                      >
                        {link.name}
                      </motion.a>
                    );
                  })}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
