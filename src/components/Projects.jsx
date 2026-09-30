import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, ExternalLink, Github, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SectionFrame from '@/components/ui/section-frame';
import SectionHeading from '@/components/motion/SectionHeading';
import { EASE, MORPH } from '@/lib/motion';
import projects from '@/data/projects.json';
const ProjectMedia = ({ project, className }) => (
  <div className={`${className} flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-accent/20 via-surface to-accent/5 p-8 text-center`}>
    <span className="text-xs font-semibold uppercase tracking-[.18em] text-accent">{project.tags.slice(0, 3).join(' / ')}</span>
    <span className="font-display text-3xl font-semibold text-foreground sm:text-4xl">{project.title}</span>
    <span className="max-w-sm text-sm leading-relaxed text-muted-foreground">{project.description}</span>
  </div>
);

const ProjectCard = ({ project, index, onOpen, active }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: .7, delay: (index % 2) * .08, ease: EASE }}
    >
      <motion.button
        type="button"
        onClick={() => onOpen(project)}
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        className="group h-full w-full rounded-[30px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <motion.div
          layoutId={`project-card-${project.title}`}
          transition={MORPH}
          className="h-full overflow-hidden rounded-[30px] border border-border/70 bg-surface-2 shadow-sm lg:grid lg:grid-cols-[1.35fr_.65fr]"
        >
          <motion.div layoutId={`project-image-${project.title}`} transition={MORPH} className="relative aspect-[16/10] overflow-hidden bg-surface lg:aspect-auto lg:min-h-[520px]">
            <ProjectMedia project={project} active={active} className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40" />
          </motion.div>
          <div className="flex flex-col p-6 sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-5">
              <h3 className="font-display text-3xl font-semibold tracking-tight lg:text-4xl">{project.title}</h3>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">{project.tags.slice(0, 6).map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)}</div>
          </div>
        </motion.div>
      </motion.button>
    </motion.article>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!selectedProject) return undefined;
    const trigger = document.activeElement;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusableElements = () => [...dialog.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]')];
    focusableElements()[0]?.focus({ preventScroll: true });
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
      if (event.key !== 'Tab') return;
      const elements = focusableElements();
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const onFocusIn = (event) => {
      if (!dialog.contains(event.target)) focusableElements()[0]?.focus({ preventScroll: true });
    };
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('focusin', onFocusIn);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('focusin', onFocusIn);
      if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus({ preventScroll: true });
    };
  }, [selectedProject]);

  return (
    <>
      <SectionFrame id="projects" tone="plain" className="!rounded-none !border-0 !bg-transparent">
        <SectionHeading title="Projects." description="Academic projects in cybersecurity, machine learning, and web development." />
        <div className="grid gap-14 lg:gap-20">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} onOpen={setSelectedProject} active={!selectedProject} />)}
        </div>
      </SectionFrame>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end justify-center bg-[#0d0d12]/72 p-0 backdrop-blur-md sm:items-center sm:p-5"
            onClick={() => setSelectedProject(null)}
            role="presentation"
          >
            <motion.div
              ref={dialogRef}
              layoutId={`project-card-${selectedProject.title}`}
              transition={MORPH}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-[30px] border border-border bg-background shadow-2xl sm:rounded-[32px]"
            >
              <button onClick={() => setSelectedProject(null)} className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-black/65 text-white backdrop-blur-lg transition-transform hover:rotate-90" aria-label="Close project details"><X className="h-4 w-4" /></button>
              <div className="overflow-y-auto">
                <motion.div layoutId={`project-image-${selectedProject.title}`} transition={MORPH} className="aspect-[16/8] overflow-hidden bg-surface"><ProjectMedia project={selectedProject} className="h-full w-full object-cover object-top" /></motion.div>
                <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.15fr_.85fr] lg:p-12">
                  <div>
                    <p className="text-caption font-semibold uppercase tracking-[.16em] text-accent">Project overview</p>
                    <h2 id="project-dialog-title" className="mt-4 font-display text-4xl font-semibold tracking-[-.045em] sm:text-5xl">{selectedProject.title}</h2>
                    <p className="mt-6 text-body text-muted-foreground">{selectedProject.detailedDescription}</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {selectedProject.liveUrl && <Button asChild><a href={selectedProject.liveUrl} target="_blank" rel="noreferrer"><ExternalLink />View live</a></Button>}
                      {selectedProject.repoUrl && <Button variant="outline" asChild><a href={selectedProject.repoUrl} target="_blank" rel="noreferrer"><Github />View code</a></Button>}
                    </div>
                  </div>
                  <div className="rounded-[24px] bg-surface p-6 sm:p-8">
                    <p className="text-caption font-semibold uppercase tracking-[.16em] text-muted-foreground">Key features</p>
                    <ul className="mt-6 space-y-4">{selectedProject.features?.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/12 text-accent"><Check className="h-3 w-3" /></span>{feature}</li>)}</ul>
                    <div className="mt-8 flex flex-wrap gap-2">{selectedProject.tags.map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
