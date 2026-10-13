import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";

function ExperienceCard({ heading, para, date, active }) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] group border border-slate-200/60 bg-white/60 transition-all duration-500 hover:bg-white hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5 mb-3 backdrop-blur-sm relative overflow-hidden">
      {/* Subtle background glow on hover */}
      <div className={`absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-transparent ${active ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}/>

      {/* Icon badge */}
      <div className={`shrink-0 p-3 sm:p-4 rounded-xl sm:rounded-2xl ${active ? 'bg-orange-500 text-white' : 'bg-orange-500/10 text-orange-500'} border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-sm`}>
        <BsBriefcase className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2 sm:space-y-3">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-slate-900 text-xl sm:text-2xl tracking-tight transition-colors duration-300 group-hover:text-orange-500">{heading}</h1>
          <div className="transition-all duration-500 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 hidden lg:block">
            <div className="h-10 w-10 flex items-center justify-center rounded-full border border-orange-500/30 bg-orange-50 text-orange-500">
              <IoIosArrowForward size={20} />
            </div>
          </div>
        </div>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-inter">{para}</p>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
          <span className="text-orange-500 font-semibold text-xs sm:text-sm tracking-wider uppercase">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
