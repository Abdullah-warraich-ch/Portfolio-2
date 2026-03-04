import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/Abdullah-warraich-ch", hoverColor: "#e6edf3" },
  { Icon: CiLinkedin, href: "https://www.linkedin.com/in/muhammad-abdullah-949b26195/", hoverColor: "#0A66C2" },
];

function Sidebar() {
  return (
    <div className="bg-[#1a1816]/60 backdrop-blur-xl border border-white/[0.07] flex flex-col p-5 lg:p-10 rounded-2xl items-center gap-8 lg:sticky top-20">
      {/* Full image — no cropping */}
      <div className="relative group w-full overflow-hidden rounded-2xl">
        <img
          src="Media.jpeg"
          alt="Abdullah"
          className="w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
        <span className="absolute bottom-3 left-3 text-white text-xs font-medium bg-orange-500/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
          Available for Work
        </span>
      </div>

      {/* Name */}
      <div className="text-center">
        <h1 className="font-poppins font-bold text-3xl text-white">Abdullah</h1>
        <div className="h-0.5 w-10 bg-orange-500 rounded-full mx-auto mt-2" />
      </div>

      {/* Bio */}
      <div className="lg:mt-2">
        <p className="font-medium leading-7 text-gray-500 text-center text-xl">
          A <span className="text-white/80">Software Engineer</span> who has developed
          countless innovative solutions.
        </p>
      </div>

      {/* Social icons — show original brand color on hover */}
      <div className="flex gap-4 text-2xl text-gray-500">
        {socialLinks.map(({ Icon, href, hoverColor }, i) => (
          <a
            key={i}
            href={href}
            aria-label={`Visit my ${href.includes('github') ? 'GitHub' : 'LinkedIn'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 hover:scale-110"
            onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Download CV — white default, orange on hover */}
      <a
        href="/Abdullah's_CV.pdf"
        download
        className="text-center w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg active:scale-95 block uppercase tracking-widest text-sm"
      >
        Download CV
      </a>
    </div>
  );
}

export default Sidebar;
