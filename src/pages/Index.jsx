import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";

// Show the intro curtain once per browser session, never for reduced motion.
const shouldSkipIntro = () =>
  typeof window === "undefined" ||
  window.sessionStorage.getItem("intro-seen") === "1" ||
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Index = () => {
  const [introDone, setIntroDone] = useState(shouldSkipIntro);

  useEffect(() => {
    if (introDone) return;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      window.sessionStorage.setItem("intro-seen", "1");
      document.body.style.overflow = "";
      setIntroDone(true);
    }, 1500);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [introDone]);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>{!introDone && <Preloader />}</AnimatePresence>
      <ScrollProgress />
      <Header />
      <main>
        <Hero start={introDone} />
        <Skills />
        <About />
        <Education />
        <Activities />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
