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
  const itemClass =
    "rounded p-2 transition duration-300 hover:bg-white hover:text-black hover:-translate-y-0.5 lg:hover:translate-x-1";

  return (
    <nav
      className={`nav-dock-animate text-2xl lg:text-xl text-white gap-4 bg-secondary/95 backdrop-blur-sm h-auto flex items-center pl-5 pr-5 pt-1 pb-1 rounded-2xl border border-white/10 shadow-lg ${
        isDocked ? "flex-row lg:flex-col  w-15" : "flex-row w-auto"
      }`}
    >
      <button
        type="button"
        onClick={onHomeClick}
        aria-label="Go to Intro section"
        className={itemClass}
      >
        <GoHome size={20} />
      </button>
      <button
        type="button"
        onClick={onProjectsClick}
        aria-label="Go to Projects section"
        className={itemClass}
      >
        <GoFileSubmodule size={20} />
      </button>
      <button
        type="button"
        onClick={onExperienceClick}
        aria-label="Go to Experience section"
        className={itemClass}
      >
        <CgWorkAlt size={20} />
      </button>
      <button
        type="button"
        onClick={onSkillsClick}
        aria-label="Go to Skills section"
        className={itemClass}
      >
        <GrTechnology size={20} />
      </button>
      <button
        type="button"
        onClick={onContactClick}
        aria-label="Go to Contact section"
        className={itemClass}
      >
        <LuNotebookPen size={20} />
      </button>
    </nav>
  );
}

export default Navbar;
