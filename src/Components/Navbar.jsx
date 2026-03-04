import React from "react";
import { GoHome, GoFileSubmodule } from "react-icons/go";
import { CgWorkAlt } from "react-icons/cg";
import { GrTechnology } from "react-icons/gr";
import { LuNotebookPen } from "react-icons/lu";

function Navbar({
  isDocked,
  onHomeClick,
  onProjectsClick,
  onExperienceClick,
  onSkillsClick,
  onContactClick,
}) {
  const navItems = [
    { icon: GoHome, label: "Home", onClick: onHomeClick },
    { icon: GoFileSubmodule, label: "Projects", onClick: onProjectsClick },
    { icon: CgWorkAlt, label: "Experience", onClick: onExperienceClick },
    { icon: GrTechnology, label: "Skills", onClick: onSkillsClick },
    { icon: LuNotebookPen, label: "Contact", onClick: onContactClick },
  ];

  return (
    <nav
      className={`nav-dock-animate text-2xl lg:text-xl text-white gap-2 bg-[#1a1816]/90 backdrop-blur-md h-auto flex items-center px-3 py-1.5 rounded-2xl border border-white/[0.08] shadow-xl ${isDocked ? "flex-row lg:flex-col w-auto" : "flex-row w-auto"
        }`}
    >
      {navItems.map(({ icon: Icon, label, onClick }, i) => (
        <button
          key={i}
          type="button"
          onClick={onClick}
          aria-label={`Go to ${label} section`}
          title={label}
          className="group relative rounded-xl p-2.5 text-white transition-all duration-300 hover:bg-orange-500 hover:text-white hover:-translate-y-0.5 active:scale-90"
        >
          <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
