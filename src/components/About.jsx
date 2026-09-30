import SectionFrame from '@/components/ui/section-frame';
import SectionHeading from '@/components/motion/SectionHeading';
const About = () => (
  <SectionFrame id="about" tone="soft">
    <SectionHeading eyebrow="Career Objective" title="About me." description="B.Tech graduate in Computer Science with a practical foundation in software development, cloud computing, and IT." />
    <div className="max-w-4xl space-y-5 text-body text-muted-foreground">
      <p>My projects span cybersecurity, employee attrition prediction, and web-based voting. I enjoy applying programming, database, and problem-solving skills to practical challenges, and I want to build on that experience as part of a technology team.</p>
    </div>
  </SectionFrame>
);
export default About;
