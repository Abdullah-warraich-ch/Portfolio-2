import React from "react";
import Heading from "../Components/Heading";
import Paragraph from "../Components/Paragraph";
import { SiAltiumdesigner } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";

const Hstyle = "text-white font-bold text-3xl lg:text-5xl";

const Intro = React.forwardRef(function Intro(props, ref) {
  return (
    <section
      ref={ref}
      data-name="Intro"
      className="scroll-mt-28 flex flex-col w-full gap-8 md:gap-10 items-center md:items-start pt-16 md:pt-0"
    >
      <div>
        <Heading FWord="SOFTWARE" LWord="ENGINEER" />
      </div>

      <div className="md:pr-20 lg:pr-45 text-center md:text-left">
        <Paragraph para="Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products." />
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center md:justify-start w-full gap-8 md:gap-20">
        {[
          { count: "1+", label: "YEARS OF EXPERIENCE" },
          { count: "3+", label: "PROJECTS COMPLETED" },
          { count: "2+", label: "CLIENTS WORLDWIDE" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center md:items-start group">
            <h1 className={`${Hstyle} group-hover:text-[#f46c38] transition-colors duration-300`}>
              {stat.count}
            </h1>
            <div className="max-w-[100px] md:max-w-none">
              <Paragraph para={stat.label} />
            </div>
          </div>
        ))}
      </div>

      {/* Stack Cards */}
      <div className="flex gap-6 flex-col md:flex-row w-full stagger-reveal">
        {/* Design card (Orange Accent like Sawad Card 1) */}
        <div className="group relative overflow-hidden h-72 w-full md:w-[45%] bg-[#f46c38] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] shadow-xl shadow-[#f46c38]/10 text-white">
          <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl w-fit text-white">
            <SiAltiumdesigner size={32} />
          </div>

          <div className="relative z-10">
            <h1 className="text-white font-bold text-[1.4rem] pt-2 leading-tight uppercase tracking-tight">
              Figma, PhotoShop <br /> & Canva Specialist
            </h1>
          </div>

          <div className="flex justify-end relative z-10">
            <div className="h-12 w-12 flex items-center justify-center border border-white/40 bg-white/10 text-white rounded-full group-hover:bg-white group-hover:text-[#f46c38] transition-all duration-300 shadow-sm group-hover:scale-110">
              <CiLocationArrow1 size={24} />
            </div>
          </div>
        </div>

        {/* Dev card (Lime Accent like Sawad Card 2 #c5ff41) */}
        <div className="group relative overflow-hidden h-72 w-full md:w-[55%] bg-[#c5ff41] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] shadow-xl shadow-[#c5ff41]/10 text-[#151312]">
          <div className="p-4 bg-black/10 backdrop-blur-md rounded-2xl w-fit text-[#151312]">
            <FaCode size={32} />
          </div>

          <div className="relative z-10">
            <h1 className="text-[#151312] font-bold text-[1.4rem] pt-2 leading-tight uppercase tracking-tight">
              React, Next, Tailwind, <br /> Bootstrap & JQuery
            </h1>
          </div>

          <div className="flex justify-end relative z-10">
            <div className="h-12 w-12 flex items-center justify-center border border-black/20 bg-black/5 text-[#151312] rounded-full group-hover:bg-[#151312] group-hover:text-[#c5ff41] transition-all duration-300 shadow-sm group-hover:scale-110">
              <CiLocationArrow1 size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Intro;
