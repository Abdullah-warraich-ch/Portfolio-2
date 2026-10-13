import React from "react";
import Heading from "../Components/Heading";
import Paragraph from "../Components/Paragraph";
import { SiAltiumdesigner } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";

const Hstyle = "text-slate-900 font-bold text-3xl lg:text-5xl";

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
            <h1 className={`${Hstyle} group-hover:text-orange-500 transition-colors duration-300`}>
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
        {/* Design card */}
        <div className="group relative overflow-hidden h-72 w-full md:w-[45%] bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-[2rem] p-10 flex flex-col justify-between transition-all duration-500 hover:border-orange-500/50 hover:bg-orange-50/50 hover:shadow-xl hover:shadow-orange-500/10 shadow-lg shadow-slate-200/50">
          <div className="absolute -right-8 -top-8 w-40 h-40 bg-orange-500/10 rounded-full blur-[60px] group-hover:bg-orange-500/20 transition-all duration-700 animate-float"></div>

          <div className="p-4 bg-orange-500/10 rounded-2xl w-fit border border-orange-500/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
            <SiAltiumdesigner size={32} />
          </div>

          <div className="relative z-10">
            <h1 className="text-slate-900 font-bold text-[1.3rem] pt-2 leading-tight">
              Figma, PhotoShop <br /> & Canva Specialist
            </h1>
          </div>

          <div className="flex justify-end relative z-10">
            <button className="h-12 w-12 flex items-center justify-center border border-slate-200 bg-white text-orange-600 rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-md group-hover:scale-110">
              <CiLocationArrow1 size={24} />
            </button>
          </div>
        </div>

        {/* Dev card */}
        <div className="group relative overflow-hidden h-72 w-full md:w-[55%] bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-[2rem] p-10 flex flex-col justify-between transition-all duration-500 hover:border-emerald-500/50 hover:bg-emerald-50/50 hover:shadow-xl hover:shadow-emerald-500/10 shadow-lg shadow-slate-200/50">
          <div className="absolute -right-8 -top-8 w-40 h-40 bg-emerald-400/10 rounded-full blur-[60px] group-hover:bg-emerald-400/20 transition-all duration-700 animate-float delay-1000"></div>

          <div className="p-4 bg-emerald-500/10 rounded-2xl w-fit border border-emerald-500/20 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
            <FaCode size={32} />
          </div>

          <div className="relative z-10">
            <h1 className="text-slate-900 font-bold text-[1.3rem] pt-2 leading-tight">
              React, Next, Tailwind, <br /> Bootstrap & JQuery
            </h1>
          </div>

          <div className="flex justify-end relative z-10">
            <button className="h-12 w-12 flex items-center justify-center border border-slate-200 bg-white text-emerald-600 rounded-full hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 shadow-md group-hover:scale-110">
              <CiLocationArrow1 size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Intro;
