import React from "react";
import { GoHome, GoFileSubmodule } from "react-icons/go";
import { CgWorkAlt } from "react-icons/cg";
import { GrTechnology } from "react-icons/gr";
import { LuNotebookPen } from "react-icons/lu";

function Navbar({
  onHomeClick,
  onProjectsClick,
  onExperienceClick,
  onSkillsClick,
  onContactClick,
}) {
  return (
    <div className="text-2xl lg:text-xl text-white gap-4 bg-secondary h-auto flex items-center  lg:m-8 pl-5 pr-5 pt-1 pb-1 rounded-2xl w-auto">
      <button
        type="button"
        onClick={onHomeClick}
        aria-label="Go to Intro section"
        className="hover:bg-white rounded hover:text-black p-2"
      >
        <GoHome size={20} />
      </button>
      <button
        type="button"
        onClick={onProjectsClick}
        aria-label="Go to Projects section"
        className="hover:bg-white rounded hover:text-black p-2"
      >
        <GoFileSubmodule size={20} />
      </button>
      <button
        type="button"
        onClick={onExperienceClick}
        aria-label="Go to Experience section"
        className="hover:bg-white rounded hover:text-black p-2"
      >
        <CgWorkAlt size={20} />
      </button>
      <button
        type="button"
        onClick={onSkillsClick}
        aria-label="Go to Skills section"
        className="hover:bg-white rounded hover:text-black p-2"
      >
        <GrTechnology size={20} />
      </button>
      <button
        type="button"
        onClick={onContactClick}
        aria-label="Go to Contact section"
        className="hover:bg-white rounded hover:text-black p-2"
      >
        <LuNotebookPen size={20} />
      </button>
    </div>
  );
}

export default Navbar;
