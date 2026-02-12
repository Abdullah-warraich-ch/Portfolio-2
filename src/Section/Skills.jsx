import React from "react";
import Heading from "../Components/Heading";
import SkillCard from "../Components/SkillCard";
import { FaFigma, FaReact, FaGithub, FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";

const Skills = React.forwardRef(function Skills(props, ref) {
  return (
    <section ref={ref} className="scroll-mt-28">
      <div className="mb-10">
        <Heading FWord="TECHNICAL" LWord="SKILLS" />
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <SkillCard logo={<FaReact />} title="React JS" disc="Ui Library" />
        <SkillCard logo={<FaFigma />} title="Figma" disc="Design Tool" />
        <SkillCard
          logo={<RiTailwindCssFill />}
          title="TailWind"
          disc="Utility-First CSS"
        />
        <SkillCard
          logo={<RiNextjsLine />}
          title="Next JS"
          disc="React Framework"
        />
        <SkillCard
          logo={<IoLogoJavascript />}
          title="JavaScript"
          disc="Client-side scripting"
        />
        <SkillCard
          logo={<FaGithub />}
          title="Github"
          disc="Code collaboration"
        />
        <SkillCard
          logo={<FaBootstrap />}
          title="BootStrap"
          disc="CSS Framework"
        />
        <SkillCard
          logo={<IoLogoCss3 />}
          title="CSS"
          disc="Responsive styling"
        />
      </div>
    </section>
  );
});

export default Skills;
