import { motion } from 'framer-motion';
import { Braces, Cloud, Database, Layers3, ShieldCheck, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/motion/SectionHeading';
import SectionFrame from '@/components/ui/section-frame';
import { EASE } from '@/lib/motion';

const skills = [
  { title: 'Programming', icon: Braces, accent: 'from-blue-500 to-cyan-400', technologies: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'Frameworks & Libraries', icon: Layers3, accent: 'from-fuchsia-500 to-orange-400', technologies: ['React.js', 'Django', 'Node.js', 'Scikit-learn', 'Streamlit'] },
  { title: 'Databases', icon: Database, accent: 'from-emerald-400 to-cyan-500', technologies: ['MySQL', 'SQLite', 'MongoDB'] },
  { title: 'DevOps', icon: Cloud, accent: 'from-sky-500 to-violet-500', technologies: ['Git / GitHub', 'Docker', 'Jenkins', 'CI/CD Pipelines', 'Linux Fundamentals'] },
  { title: 'Systems & Cloud Foundations', icon: ShieldCheck, accent: 'from-amber-400 to-rose-500', technologies: ['AWS / Cloud Concepts', 'Networking', 'System Troubleshooting', 'Secure Application Environments'] },
  { title: 'Academic Coursework', icon: Sparkles, accent: 'from-violet-500 to-fuchsia-500', technologies: ['Data Structures', 'Operating Systems (Windows, Unix/Linux)', 'OOP', 'DBMS'] },
];

const Skills = () => (
  <SectionFrame id="skills" tone="soft">
    <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
    <SectionHeading
      eyebrow="Tech Stack"
      title="Technical skills."
      description="Programming, development tools, and computing foundations from my coursework and projects."
    />

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-70px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: .07 } } }}
      className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
    >
      {skills.map(({ title, icon: Icon, accent, technologies }, index) => (
        <motion.article
          key={title}
          variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: .65, ease: EASE } } }}
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 280, damping: 24 }}
          className={`group relative min-h-[300px] overflow-hidden rounded-[28px] border border-border/70 bg-surface-2 p-6 shadow-sm sm:p-8 ${index === 0 || index === 5 ? 'xl:col-span-1' : ''}`}
        >
          <div className={`mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-display text-2xl font-semibold tracking-tight">{title}</h3>
          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2.5">
            {technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-border/80 bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:border-accent/20 group-hover:text-foreground">
                {tech}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </motion.div>
  </SectionFrame>
);

export default Skills;
