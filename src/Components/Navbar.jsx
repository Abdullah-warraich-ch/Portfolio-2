import React from "react";
import { GoHome, GoFileSubmodule } from "react-icons/go";
import { CgWorkAlt } from "react-icons/cg";
import { GrTechnology } from "react-icons/gr";
import { LuNotebookPen } from "react-icons/lu";

function Navbar({
  isDocked,
  activeSection,
  onHomeClick,
  onProjectsClick,
  onExperienceClick,
  onSkillsClick,
  onContactClick,
}) {
  const navItems = [
    { icon: GoHome, label: "home", onClick: onHomeClick },
    { icon: GoFileSubmodule, label: "projects", onClick: onProjectsClick },
    { icon: CgWorkAlt, label: "experience", onClick: onExperienceClick },
    { icon: GrTechnology, label: "skills", onClick: onSkillsClick },
    { icon: LuNotebookPen, label: "contact", onClick: onContactClick },
  ];

  return (
    <nav
      className={`nav-dock-animate text-2xl lg:text-xl text-slate-700 gap-2 bg-white/80 backdrop-blur-md h-auto flex items-center px-3 py-1.5 rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-200/50 ${isDocked ? "flex-row lg:flex-col w-auto" : "flex-row w-auto"
        }`}
    >
      {navItems.map(({ icon: Icon, label, onClick }, i) => {
        const isActive = activeSection === label;
        return (
          <button
            key={i}
            type="button"
            onClick={onClick}
            aria-label={`Go to ${label} section`}
            title={label.charAt(0).toUpperCase() + label.slice(1)}
            className={`group relative rounded-xl p-2.5 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:-translate-y-0.5 active:scale-90 ${isActive ? "text-orange-500 bg-orange-500/10" : "text-slate-600 hover:text-white"
              }`}
          >
            <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
          </button>
        );
      })}
    </nav>
  );
}

export default Navbar;
