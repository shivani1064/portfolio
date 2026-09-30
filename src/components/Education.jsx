import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionHeading from '@/components/motion/SectionHeading';
import SectionFrame from '@/components/ui/section-frame';
import { EASE } from '@/lib/motion';
import educationData from '@/data/educationData';

const Education = () => (
  <SectionFrame id="education" tone="plain">
    <SectionHeading
      eyebrow="Academic Background"
      title="Education."
      description="The academic journey that built the foundation for my technical expertise."
    />

    <div className="grid gap-5 lg:grid-cols-2">
      {educationData.map((education, index) => (
        <motion.article
          key={education.degree}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: .7, delay: index * .08, ease: EASE }}
          className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(145deg,#eef0ff,#dbe9ff)] p-7 text-[#15151b] dark:bg-[linear-gradient(145deg,#26233a,#181b2d)] dark:text-white sm:p-10"
        >
          <h3 className="max-w-xl font-display text-title">{education.degree}</h3>
          <p className="mt-5 text-lg text-black/65 dark:text-white/65">{education.university}</p>
          <p className="mt-2 flex items-center gap-2 text-sm text-black/60 dark:text-white/65"><MapPin className="h-4 w-4" />{education.location}</p>
          <p className="mt-3 text-sm font-medium text-accent">{education.period}</p>
          <ul className="mt-8 space-y-3 border-t border-black/10 pt-7 dark:border-white/10">
            {education.description.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-black/65 dark:text-white/70"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7864ff]" />{item}</li>)}
          </ul>
        </motion.article>
      ))}
    </div>

  </SectionFrame>
);

export default Education;
