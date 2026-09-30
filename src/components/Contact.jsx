import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Mail, Send } from 'lucide-react';
import SectionFrame from '@/components/ui/section-frame';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Reveal from '@/components/motion/Reveal';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const submit = (event) => {
    event.preventDefault();
    const fields = new FormData(formRef.current);
    const body = `${fields.get('message')}\n\nFrom: ${fields.get('name')}\nReply to: ${fields.get('email')}`;
    window.location.href = `mailto:shivanireddyk1604@gmail.com?subject=${encodeURIComponent(fields.get('subject'))}&body=${encodeURIComponent(body)}`;
    setStatus('opened');
  };

  const labels = {
    idle: <><span>Open email draft</span><Send className="h-4 w-4" /></>,
    opened: <><span>Open email draft again</span><Send className="h-4 w-4" /></>,
  };

  return (
    <SectionFrame id="contact" tone="plain" className="!border-[#b8d3ff] !bg-[#eef5ff] text-[#101217] dark:!border-[#2f6fbf]/60 dark:!bg-[#0d2744] dark:text-white">
      <div className="absolute -bottom-56 -left-24 h-[520px] w-[520px] rounded-full bg-[#dceaff]/80 dark:bg-[#174a7f]/45" />
      <div className="absolute -right-36 -top-48 h-[500px] w-[500px] rounded-full bg-[#8ec5ff]/25 blur-[90px] dark:bg-[#2d79c7]/20" />
      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-10 xl:gap-16">
        <Reveal y={20}>
          <p className="text-caption font-semibold uppercase tracking-[.18em] text-[#0767df] dark:text-[#59a2ff]">Let’s work together</p>
          <h2 className="mt-5 text-headline text-balance">Let us connect.</h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-black/60 dark:text-white/70">I am seeking an entry-level technology role across software, cloud, infrastructure, DevOps, and IT. Get in touch about opportunities or projects.</p>
          <div className="mt-10 space-y-4 border-t border-[#b8d3ff] pt-8 dark:border-[#2f6fbf]/60">
            <a href="mailto:shivanireddyk1604@gmail.com" className="group flex items-center justify-between gap-4 rounded-2xl border border-[#b8d3ff] bg-white/70 p-4 text-[#0767df] backdrop-blur-xl transition-colors hover:bg-white dark:border-[#2f6fbf]/60 dark:bg-white/5 dark:text-[#79b5ff] dark:hover:bg-white/10"><span className="flex min-w-0 items-center gap-3"><Mail className="h-5 w-5 shrink-0" /><span className="break-all text-sm">shivanireddyk1604@gmail.com</span></span><ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" /></a>
          </div>
        </Reveal>

        <Reveal y={20} delay={.1}>
          <form ref={formRef} onSubmit={submit} className="rounded-[30px] border border-[#c7dcf7] bg-white p-5 text-[#16161c] shadow-[0_30px_90px_-45px_rgba(7,103,223,.35)] dark:border-[#2f6fbf]/50 dark:bg-[#101b29] dark:text-white sm:p-8">
            <div className="mb-8"><p className="font-display text-2xl font-semibold">Send me a message</p><p className="mt-2 text-sm text-black/65 dark:text-white/70">This opens a draft in your email app. Review and send it there.</p></div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium">Name<Input name="name" autoComplete="name" placeholder="Enter your name" required className="mt-2" /></label>
              <label className="text-sm font-medium">Email<Input name="email" autoComplete="email" type="email" placeholder="Enter your email" required className="mt-2" /></label>
            </div>
            <label className="mt-5 block text-sm font-medium">Subject<Input name="subject" placeholder="Enter a subject" required className="mt-2" /></label>
            <label className="mt-5 block text-sm font-medium">Message<Textarea name="message" placeholder="Send me a message" rows={5} required className="mt-2 resize-y" /></label>
            <div className="mt-7 flex flex-col gap-3 xl:flex-row xl:items-center">
              <Button type="submit" className="shrink-0 bg-[#0767df] text-white hover:bg-[#005bc8]">
                <AnimatePresence mode="wait" initial={false}><motion.span key={status} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="inline-flex items-center gap-2">{labels[status]}</motion.span></AnimatePresence>
              </Button>
              {status === 'opened' && <span role="status" className="text-xs text-muted-foreground">Your email app was requested. If it did not open, email me using the address above.</span>}
            </div>
          </form>
        </Reveal>
      </div>
    </SectionFrame>
  );
};

export default Contact;
