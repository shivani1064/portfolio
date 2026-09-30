import { motion } from 'framer-motion';
import { EASE } from '@/lib/motion';

const Preloader = () => (
  <motion.div exit={{ y: '-100%', transition: { duration: .8, ease: EASE } }} className="fixed inset-0 z-[120] grid place-items-center bg-[#111116] text-white" aria-hidden="true">
    <div className="text-center">
      <div className="overflow-hidden"><motion.p initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: .7, ease: EASE, delay: .1 }} className="font-display text-4xl font-semibold tracking-[-.06em] sm:text-6xl">Shivani Reddy Katta<span className="text-[#8068ff]">.</span></motion.p></div>
      <div className="mx-auto mt-5 h-[2px] w-36 overflow-hidden bg-white/10"><motion.div initial={{ x: '-100%' }} animate={{ x: '0%' }} transition={{ duration: 1.05, ease: EASE, delay: .25 }} className="h-full w-full bg-gradient-to-r from-[#7758ff] to-[#29d5eb]" /></div>
    </div>
  </motion.div>
);

export default Preloader;
