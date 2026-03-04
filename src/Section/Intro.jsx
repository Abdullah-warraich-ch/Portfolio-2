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
      className="scroll-mt-28 flex flex-col w-full gap-10 items-center md:items-start"
    >
      <div>
        <Heading FWord="SOFTWARE" LWord="ENGINEER" />
      </div>

      <div className="md:pr-45">
        <Paragraph para="Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products." />
      </div>

      {/* Stats */}
      <div className="flex w-full lg:w-1/2 gap-5 md:gap-20">
        {[
          { count: "1+", label: "YEARS OF EXPERIENCE" },
          { count: "3+", label: "PROJECTS COMPLETED" },
          { count: "2+", label: "CLIENTS WORLDWIDE" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center group">
            <h1 className={`${Hstyle} group-hover:text-orange-500 transition-colors duration-300`}>
              {stat.count}
            </h1>
            <Paragraph para={stat.label} />
          </div>
        ))}
      </div>

      {/* Skill cards */}
      {/* Stack Cards */}
      <div className="flex gap-6 flex-col md:flex-row w-full">
        {/* Design card */}
        <div className="group relative overflow-hidden h-72 w-full md:w-[45%] bg-[#1c1b19]/40 backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-10 flex flex-col justify-between transition-all duration-500 hover:border-orange-500/40 hover:bg-orange-500/[0.03] hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)]">
          <div className="absolute -right-8 -top-8 w-40 h-40 bg-orange-500/10 rounded-full blur-[60px] group-hover:bg-orange-500/20 transition-all duration-700"></div>

          <div className="p-4 bg-orange-500/10 rounded-2xl w-fit border border-orange-500/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
            <SiAltiumdesigner size={32} />
          </div>

          <div className="relative z-10">
            <h3 className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-2">Design Stack</h3>
            <h1 className="text-white font-bold text-2xl leading-tight">
              Figma, PhotoShop <br /> & Canva Specialist
            </h1>
          </div>

          <div className="flex justify-end relative z-10">
            <button className="h-12 w-12 flex items-center justify-center border border-white/20 bg-white text-orange-600 rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-lg group-hover:scale-110">
              <CiLocationArrow1 size={24} />
            </button>
          </div>
        </div>

        {/* Dev card */}
        <div className="group relative overflow-hidden h-72 w-full md:w-[55%] bg-[#1c1b19]/40 backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-10 flex flex-col justify-between transition-all duration-500 hover:border-green-400/40 hover:bg-green-400/[0.03] hover:shadow-[0_20px_40px_-15px_rgba(74,222,128,0.15)]">
          <div className="absolute -right-8 -top-8 w-40 h-40 bg-green-400/10 rounded-full blur-[60px] group-hover:bg-green-400/20 transition-all duration-700"></div>

          <div className="p-4 bg-green-400/10 rounded-2xl w-fit border border-green-400/20 text-green-500 group-hover:bg-green-400 group-hover:text-black transition-all duration-500">
            <FaCode size={32} />
          </div>

          <div className="relative z-10">
            <h3 className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-2">Development Stack</h3>
            <h1 className="text-white font-bold text-2xl leading-tight">
              React, Next, Tailwind, <br /> Bootstrap & JQuery
            </h1>
          </div>

          <div className="flex justify-end relative z-10">
            <button className="h-12 w-12 flex items-center justify-center border border-black/20 bg-white text-green-600 rounded-full hover:bg-green-400 hover:text-white hover:border-green-400 transition-all duration-300 shadow-lg group-hover:scale-110">
              <CiLocationArrow1 size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Intro;
