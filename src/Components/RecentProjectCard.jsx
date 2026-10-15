import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

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
      className="group relative flex flex-col sm:flex-row p-4 sm:p-6 rounded-2xl sm:rounded-3xl gap-5 sm:gap-7 items-start sm:items-center border border-white/10 bg-[#1c1a19]/80 backdrop-blur-xl transition-all duration-500 hover:bg-[#1c1a19] hover:border-[#f46c38]/40 hover:shadow-2xl hover:shadow-[#f46c38]/10 cursor-pointer mb-4 overflow-hidden shadow-md"
    >
      {/* Dynamic Cursor Spotlight Highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(244,108,56,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top-Right Pointing Arrow on Hover */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full border border-white/10 bg-white/5 text-white opacity-0 scale-75 translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:border-[#f46c38] group-hover:bg-[#f46c38] group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-[0_0_25px_rgba(244,108,56,0.4)] pointer-events-none">
        <FiArrowUpRight size={22} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      {/* Image Container */}
      <div className="w-full sm:w-52 h-44 sm:h-36 shrink-0 relative z-10 overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 shadow-sm group-hover:border-[#f46c38]/40 transition-all duration-500 bg-[#151312]">
        <img
          src={pic}
          alt={heading}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-500" />
      </div>

      {/* Content Column */}
      <div className="flex-1 flex flex-col gap-2.5 relative z-10 w-full min-w-0 pr-8 sm:pr-10">
        {/* Heading */}
        <h3 className="text-white font-bold text-xl sm:text-2xl tracking-tight transition-colors duration-300 group-hover:text-[#f46c38]">
          {heading}
        </h3>

        {/* Description */}
        <p className="text-[#998f8f] text-sm sm:text-base font-normal leading-relaxed">
          {discr}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag, index) => {
            const isObject = typeof tag === "object" && tag !== null && "name" in tag;
            return (
              <span
                key={isObject ? tag.name : index}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-white/80 bg-white/5 border border-white/10 backdrop-blur-sm group-hover:border-[#f46c38]/30 group-hover:bg-[#f46c38]/10 group-hover:text-white transition-all duration-300"
              >
                {isObject ? (
                  <>
                    <span className="text-sm">{tag.icon}</span>
                    <span>{tag.name}</span>
                  </>
                ) : (
                  tag
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RecentProjectCard;
