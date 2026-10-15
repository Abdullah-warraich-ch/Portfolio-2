import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import AnimatedEye from "./AnimatedEye";

const socialLinks = [
  {
    Icon: FaGithub,
    href: "https://github.com/Abdullah-warraich-ch",
    hoverColor: "#e6edf3",
  },
  {
    Icon: CiLinkedin,
    href: "https://www.linkedin.com/in/muhammad-abdullah-949b26195/",
    hoverColor: "#0A66C2",
  },
];

function Sidebar() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="animated-border relative flex flex-col p-[2px] rounded-2xl lg:sticky top-20 shadow-2xl shadow-black/50">
      <div className="bg-[#1c1a19] p-5 lg:p-8 rounded-2xl items-center gap-7 flex flex-col border border-white/10">
        {/* Full image — no cropping, with reserved space & skeleton */}
        <div
          className="relative group w-full overflow-hidden rounded-2xl"
          style={{ aspectRatio: "533 / 800" }}
        >
          {/* Skeleton shimmer — visible until image loads */}
          {!imgLoaded && (
            <div className="sidebar-skeleton absolute inset-0 rounded-2xl" />
          )}
          <img
            src="/media.jpeg"
            alt="Abdullah"
            width={533}
            height={800}
            loading="eager"
            fetchpriority="high"
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover rounded-2xl shadow-md transition-all duration-500 ${
              imgLoaded ? "sidebar-img-visible" : "sidebar-img-hidden"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
          <span className="absolute bottom-3 left-3 text-white text-xs font-medium bg-[#f46c38] px-3 py-1 rounded-full backdrop-blur-sm shadow-sm flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5ff41] animate-pulse" />
            Available for Work
          </span>
        </div>

        {/* Name */}
        <div className="text-center">
          <h1 className="font-poppins font-bold text-3xl text-white tracking-tight">
            Abdullah
          </h1>
          <div className="h-0.5 w-10 bg-[#f46c38] rounded-full mx-auto mt-2" />
        </div>

        {/* Bio */}
        <div className="lg:mt-1">
          <p className="font-medium leading-7 text-[#998f8f] text-center text-lg">
            A <span className="text-white font-semibold">Software Engineer</span> who has
            developed countless innovative solutions.
          </p>
        </div>

        {/* Social icons — show hover color with subtle glowing box */}
        <div className="flex gap-4 text-2xl text-[#998f8f]">
          {socialLinks.map(({ Icon, href, hoverColor }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-white/5 bg-white/[0.03] text-[#998f8f] transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:border-[#f46c38]/40 hover:bg-[#f46c38]/10 hover:text-white"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Download CV button */}
        <a
          href="/Muhammad_Abdullah.pdf"
          download
          className="relative overflow-hidden group text-center w-full bg-[#f46c38] text-white font-semibold py-3.5 rounded-xl hover:bg-[#ff7b47] transition-all duration-300 shadow-lg shadow-[#f46c38]/20 active:scale-95 block uppercase tracking-widest text-xs"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Download CV
            <AnimatedEye size={18} className="text-white transition-colors duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
