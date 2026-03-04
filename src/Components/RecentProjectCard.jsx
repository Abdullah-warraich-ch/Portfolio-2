import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function RecentProjectCard({ pic, heading, discr, tags = [] }) {
  const handleMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="flex p-6 rounded-[2.5rem] gap-8 items-center group relative border border-white/[0.04] bg-[#1c1b19]/20 transition-all duration-700 hover:bg-white/[0.04] hover:border-white/[0.08] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] cursor-pointer backdrop-blur-md mb-4 overflow-hidden"
    >
      {/* Spotlight highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(249,115,22,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image Container with Perspective */}
      <div className="shrink-0 relative z-10 overflow-hidden rounded-2xl border border-white/[0.05] shadow-2xl transition-all duration-700 group-hover:scale-[1.03] group-hover:-rotate-1">
        <img
          src={pic}
          alt={heading}
          className="h-32 w-48 object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Info Section */}
      <div className="flex-1 space-y-3 relative z-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-orange-500/50 block group-hover:w-10 transition-all duration-500" />
          <span className="text-[10px] text-orange-500 font-bold tracking-[0.2em] uppercase opacity-70">Featured Project</span>
        </div>
        <h1 className="text-white font-bold text-2xl tracking-tight transition-all duration-500 group-hover:translate-x-1">{heading}</h1>
        <p className="text-gray-500 text-lg font-inter leading-relaxed max-w-[90%]">{discr}</p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/[0.05] text-gray-400 group-hover:border-orange-500/30 group-hover:text-orange-500/80 transition-all duration-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive Action Side */}
      <div className="ml-auto flex items-center gap-4 relative z-10">
        <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
          <span className="text-white text-xs font-bold uppercase tracking-widest">View Demo</span>
          <IoIosArrowForward className="text-orange-500" size={16} />
        </div>

        <div className="lg:hidden h-12 w-12 flex items-center justify-center rounded-full border border-orange-500/30 text-orange-500 opacity-60">
          <IoIosArrowForward size={22} />
        </div>
      </div>
    </div>
  );
}

export default RecentProjectCard;
