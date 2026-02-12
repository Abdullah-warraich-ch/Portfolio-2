import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Intro from "./Section/Intro";
import RecentProjects from "./Section/RecentProjects";
import Experience from "./Section/Experience";
import Skills from "./Section/Skills";
import Contact from "./Section/Contact";
import Footer from "./Section/Footer";

function App() {
  const [isNavDocked, setIsNavDocked] = useState(false);
  const introRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = useCallback((sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavDocked(window.scrollY > 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionRefs = [introRef, projectsRef, experienceRef, skillsRef, contactRef];
    const elements = sectionRefs.map((sectionRef) => sectionRef.current).filter(Boolean);
    if (!elements.length) return;

    elements.forEach((element, index) => {
      element.classList.add("reveal-section");
      element.style.setProperty("--reveal-delay", `${index * 90}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col lg:items-center">
      <div
        className={`relative z-50 px-4 pt-4 flex justify-center lg:pt-0 lg:fixed lg:transition-all lg:duration-500 lg:ease-out lg:left-0 lg:w-full ${
          isNavDocked
            ? "lg:left-auto lg:right-6 lg:top-1/2 lg:w-auto lg:px-0 lg:justify-end lg:-translate-y-1/2"
            : "lg:top-4 lg:left-0 lg:right-0 lg:w-full lg:px-4 lg:justify-center lg:translate-y-0"
        }`}
      >
        <Navbar
          isDocked={isNavDocked}
          onHomeClick={() => scrollToSection(introRef)}
          onProjectsClick={() => scrollToSection(projectsRef)}
          onExperienceClick={() => scrollToSection(experienceRef)}
          onSkillsClick={() => scrollToSection(skillsRef)}
          onContactClick={() => scrollToSection(contactRef)}
        />
      </div>
      <div className="pt-8 lg:pt-24 flex flex-col sm:max-w-4/5 xl:flex-row 2xl:max-w-1/2 lg:max-w-full xl:max-w-[80%] gap-10 ">
        <div className="max-w-[90%] m-auto lg:m-0">
          <Sidebar />
        </div>
        <div className="flex flex-col gap-20 max-w-[90%] m-auto ">
          <Intro ref={introRef} />
          <RecentProjects ref={projectsRef} />
          <Experience ref={experienceRef} />
          <Skills ref={skillsRef} />
          <Contact ref={contactRef} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
