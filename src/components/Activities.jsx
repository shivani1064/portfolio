import SectionFrame from '@/components/ui/section-frame';
import SectionHeading from '@/components/motion/SectionHeading';
const activities = [
  { title: 'Smart India Hackathon', year: '2023', description: 'Competed and engineered a smartwatch prototype with on-device BMI tracking and activity detection, delivering real-time wellness insights during judging demos.' },
  { title: 'Salesforce Trailhead', year: '2024', description: 'Earned 15 badges and 17,375 points through modules on CRM, App Customization, and Process Automation, achieving Adventurer status.' },
];
const Activities = () => (
  <SectionFrame id="activities" tone="soft">
    <SectionHeading title="Activities & achievements." description="Learning through hands-on challenges and continued exploration." />
    <div className="grid gap-5 md:grid-cols-2">{activities.map(activity => (
      <article key={activity.title} className="rounded-[28px] border border-border bg-surface-2 p-7 sm:p-10">
        <p className="text-sm font-semibold text-accent">{activity.year}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold">{activity.title}</h3>
        <p className="mt-5 text-body text-muted-foreground">{activity.description}</p>
      </article>
    ))}</div>
  </SectionFrame>
);
export default Activities;
