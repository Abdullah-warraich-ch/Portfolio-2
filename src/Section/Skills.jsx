import React from "react";
import Heading from "../Components/Heading";
import SkillCard from "../Components/SkillCard";
import { FaFigma, FaReact, FaGithub, FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";

const skills = [
  { logo: <FaReact />, title: "React JS", disc: "UI Library", color: "#61DAFB" },
  { logo: <FaFigma />, title: "Figma", disc: "Design Tool", color: "#F24E1E" },
  { logo: <RiTailwindCssFill />, title: "TailWind", disc: "Utility-First CSS", color: "#06B6D4" },
  { logo: <RiNextjsLine />, title: "Next JS", disc: "React Framework", color: "#FFFFFF" },
  { logo: <IoLogoJavascript />, title: "JavaScript", disc: "Client-side scripting", color: "#F7DF1E" },
  { logo: <FaGithub />, title: "Github", disc: "Code collaboration", color: "#E6EDF3" },
  { logo: <FaBootstrap />, title: "BootStrap", disc: "CSS Framework", color: "#7952B3" },
  { logo: <IoLogoCss3 />, title: "CSS", disc: "Responsive styling", color: "#264DE4" },
];

const Skills = React.forwardRef(function Skills(props, ref) {
  return (
    <section ref={ref} data-name="Skills" className="scroll-mt-28">
      <div className="mb-8">
        <Heading FWord="TECHNICAL" LWord="SKILLS" />
      </div>
      <div className="grid lg:grid-cols-2 gap-3">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </div>
    </section>
  );
});

export default Skills;
