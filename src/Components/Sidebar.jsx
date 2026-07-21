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
    <div className="animated-border relative flex flex-col p-[2px] rounded-2xl lg:sticky top-20 shadow-2xl">
      <div className="bg-[#1a1816] p-5 lg:p-10 rounded-2xl items-center gap-8 flex flex-col">
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
            src="/Media.jpg"
            alt="Abdullah"
            width={533}
            height={800}
            loading="eager"
            fetchpriority="high"
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-[1.03] ${
              imgLoaded ? "sidebar-img-visible" : "sidebar-img-hidden"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
          <span className="absolute bottom-3 left-3 text-white text-xs font-medium bg-orange-500/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
            Available for Work
          </span>
        </div>

        {/* Name */}
        <div className="text-center">
          <h1 className="font-poppins font-bold text-3xl text-white">
            Abdullah
          </h1>
          <div className="h-0.5 w-10 bg-orange-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Bio */}
        <div className="lg:mt-2">
          <p className="font-medium leading-7 text-gray-500 text-center text-xl">
            A <span className="text-white/80">Software Engineer</span> who has
            developed countless innovative solutions.
          </p>
        </div>

        {/* Social icons — show original brand color on hover */}
        <div className="flex gap-4 text-2xl text-gray-500">
          {socialLinks.map(({ Icon, href, hoverColor }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-120 hover:-translate-y-1 drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]"
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Download CV — white default, orange on hover */}
        <a
          href="/Muhammad_Abdullah.pdf"
          download
          className="relative overflow-hidden group text-center w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg active:scale-95 block uppercase tracking-widest text-sm"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Download CV
            <AnimatedEye size={20} className="text-black group-hover:text-white transition-colors duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-white/20 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
