import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/katta-shivani-reddy/', icon: FaLinkedin, iconClassName: 'text-[#0A66C2]' },
  { label: 'GitHub', href: 'https://github.com/shivani1064', icon: FaGithub, iconClassName: 'text-[#24292F] dark:text-white' },
  { label: 'Email', href: 'mailto:shivanireddyk1604@gmail.com', icon: Mail, iconClassName: 'text-[#EA4335]' },
];

const Footer = () => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>{showTop && <motion.button initial={{ opacity: 0, scale: .7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .7 }} whileHover={{ y: -4 }} onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })} className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-foreground text-background shadow-md" aria-label="Back to top"><ArrowUp className="h-4 w-4" /></motion.button>}</AnimatePresence>
      <footer className="site-container py-12 sm:py-16">
        <div className="px-2 sm:px-4">
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon, iconClassName }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors hover:bg-surface focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon className={`h-5 w-5 ${iconClassName}`} />
              </a>
            ))}
          </div>
          <div className="mt-3 border-t border-border pt-6 text-center text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Shivani Reddy Katta</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
