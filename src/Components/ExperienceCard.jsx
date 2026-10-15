import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";

function ExperienceCard({ heading, para, date, active }) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] group border border-white/10 bg-[#1c1a19]/80 transition-all duration-500 hover:bg-[#1c1a19] hover:border-[#f46c38]/30 hover:shadow-xl hover:shadow-black/40 mb-3 backdrop-blur-sm relative overflow-hidden">
      {/* Subtle background glow on hover */}
      <div className={`absolute -inset-1 bg-gradient-to-r from-[#f46c38]/15 to-transparent ${active ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}/>

      {/* Icon badge */}
      <div className={`shrink-0 p-3 sm:p-4 rounded-xl sm:rounded-2xl ${active ? 'bg-[#f46c38] text-white' : 'bg-white/5 text-[#f46c38]'} border border-white/10 group-hover:bg-[#f46c38] group-hover:text-white transition-all duration-500 shadow-sm`}>
        <BsBriefcase className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2 sm:space-y-3">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-white text-xl sm:text-2xl tracking-tight transition-colors duration-300 group-hover:text-[#f46c38]">{heading}</h1>
          <div className="transition-all duration-500 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 hidden lg:block">
            <div className="h-10 w-10 flex items-center justify-center rounded-full border border-[#f46c38]/40 bg-[#f46c38]/10 text-[#f46c38]">
              <IoIosArrowForward size={20} />
            </div>
          </div>
        </div>
        <p className="text-[#998f8f] text-base sm:text-lg leading-relaxed font-inter">{para}</p>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-[#f46c38]" />
          <span className="text-[#f46c38] font-semibold text-xs sm:text-sm tracking-wider uppercase">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
