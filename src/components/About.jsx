import SectionFrame from '@/components/ui/section-frame';
import SectionHeading from '@/components/motion/SectionHeading';
const About = () => (
  <SectionFrame id="about" tone="soft">
    <SectionHeading eyebrow="Career Objective" title="About me." description="B.Tech graduate in Computer Science with a practical foundation in software development, cloud computing, and IT." />
    <div className="max-w-4xl space-y-5 text-body text-muted-foreground">
      <p>As a Computer Science graduate, I am seeking an entry-level role where I can apply my programming, database, and problem-solving skills to develop and support reliable applications. I aim to contribute to team projects while building practical experience in software development, cloud computing, and DevOps.</p>
    </div>
  </SectionFrame>
);
export default About;
