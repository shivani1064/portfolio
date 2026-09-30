import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();
  useEffect(() => { console.error('404 Error: User attempted to access non-existent route:', location.pathname); }, [location.pathname]);
  return (
    <main className="site-container grid min-h-screen place-items-center py-6">
      <div className="stage-radius relative grid min-h-[calc(100vh-3rem)] w-full place-items-center overflow-hidden bg-[linear-gradient(135deg,#6d3cf4,#477cf6_65%,#32cde3)] px-6 text-center text-white">
        <div className="absolute h-[480px] w-[480px] rounded-full border border-white/15" /><div className="absolute h-[320px] w-[320px] rounded-full border border-white/15" />
        <div className="relative"><p className="text-xs font-semibold uppercase tracking-[.2em] text-white/60">Page not found</p><h1 className="mt-4 font-display text-[clamp(7rem,24vw,18rem)] font-semibold leading-none tracking-[-.09em]">404</h1><p className="mx-auto mt-4 max-w-md text-lg text-white/68">The page you’re looking for doesn’t exist or has moved.</p><a href={import.meta.env.BASE_URL} className="mx-auto mt-8 inline-flex h-13 items-center gap-2 rounded-full bg-[#15151b] px-6 py-3.5 font-semibold"><ArrowLeft className="h-4 w-4" />Return home</a></div>
      </div>
    </main>
  );
};

export default NotFound;
