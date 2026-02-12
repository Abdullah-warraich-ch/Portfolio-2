import "./App.css";
import { useCallback, useRef } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Intro from "./Section/Intro";
import RecentProjects from "./Section/RecentProjects";
import Experience from "./Section/Experience";
import Skills from "./Section/Skills";
import Contact from "./Section/Contact";
import Footer from "./Section/Footer";

function App() {
  const introRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = useCallback((sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="flex flex-col lg:items-center">
      <div className="fixed top-4 left-0 z-50 w-full flex justify-center">
        <Navbar
          onHomeClick={() => scrollToSection(introRef)}
          onProjectsClick={() => scrollToSection(projectsRef)}
          onExperienceClick={() => scrollToSection(experienceRef)}
          onSkillsClick={() => scrollToSection(skillsRef)}
          onContactClick={() => scrollToSection(contactRef)}
        />
      </div>
      <div className="pt-28 flex flex-col sm:max-w-4/5 xl:flex-row 2xl:max-w-1/2 lg:max-w-full xl:max-w-[80%] gap-10 ">
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
