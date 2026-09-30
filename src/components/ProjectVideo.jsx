import { useEffect, useRef, useState } from 'react';

// Attach the source only on first view; retain it to avoid reloading on scroll.
const ProjectVideo = ({ src, poster, className, label, active = true }) => {
  const videoRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || failed) return undefined;

    let visible = false;
    let disposed = false;
    const shouldPlay = () => visible && active && !document.hidden && !disposed;
    const syncPlayback = () => {
      if (!shouldPlay()) {
        video.pause();
        return;
      }
      if (!video.hasAttribute('src')) {
        video.muted = true;
        video.defaultMuted = true;
        video.src = src;
        video.load();
      }
      // Autoplay can still be denied by device power/data policies.
      video.play()?.catch(() => {});
    };
    const onPlaying = () => {
      if (!shouldPlay()) video.pause();
    };
    video.addEventListener('playing', onPlaying);
    document.addEventListener('visibilitychange', syncPlayback);

    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio >= 0.1;
        syncPlayback();
      }, { threshold: [0, 0.1] });
      observer.observe(video);
    } else {
      visible = true;
      syncPlayback();
    }

    return () => {
      disposed = true;
      observer?.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
      video.removeEventListener('playing', onPlaying);
      video.pause();
    };
  }, [src, active, failed]);

  if (failed) return <img src={poster} alt={label} className={className} />;

  return (
    <video
      ref={videoRef}
      poster={poster}
      className={className}
      aria-label={label}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      disablePictureInPicture
      onError={() => setFailed(true)}
    />
  );
};

export default ProjectVideo;
