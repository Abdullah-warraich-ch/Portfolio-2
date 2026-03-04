import React from "react";
import Heading from "../Components/Heading";
import Paragraph from "../Components/Paragraph";
import { IoIosArrowForward } from "react-icons/io";
import { FaReact, FaNodeJs, FaBootstrap, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase, SiTypescript, SiJavascript, SiRedux, SiPostgresql } from "react-icons/si";
import RecentProjectCard from "../Components/RecentProjectCard";

const RecentProjects = React.forwardRef(function RecentProjects(props, ref) {
  const iconStyle = "text-lg";

  return (
    <section ref={ref} data-name="RecentProjects" className="scroll-mt-28 flex flex-col gap-10">
      <div>
        <Heading FWord="RECENT" LWord="PROJECTS" />
      </div>

      <div className="flex flex-col gap-2 relative">
        {/* Vertical connector line */}
        <div className="absolute left-10 md:left-12 top-0 bottom-0 w-px bg-white/[0.03] z-0 hidden lg:block" />

        <a
          href="https://e-commerce-product-page-beta-sand.vercel.app/"
          target="_blank"
          className="relative z-10"
        >
          <RecentProjectCard
            pic="project1.png"
            heading="Simple E-Commerce Page"
            discr="Product Listing + Add to Cart"
            tags={[
              <div className="flex items-center gap-1.5"><FaReact className={iconStyle} /> React</div>,
              <div className="flex items-center gap-1.5"><RiTailwindCssFill className={iconStyle} /> Tailwind</div>,
              <div className="flex items-center gap-1.5"><SiJavascript className={iconStyle} /> JavaScript</div>
            ]}
          />
        </a>

        <a
          href="https://quiz-d7129dioh-abdullah-warraich-chs-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10"
        >
          <RecentProjectCard
            pic="project2.png"
            heading="Quiz App"
            discr="A Simple Quiz Application"
            tags={[
              <div title="Firebase" className="text-xl px-1"><SiFirebase color="#FFCA28" /></div>,
              <div title="React" className="text-xl px-1"><FaReact color="#61DAFB" /></div>,
              <div title="Tailwind" className="text-xl px-1"><RiTailwindCssFill color="#06B6D4" /></div>
            ]}
          />
        </a>

        <a
          href="https://university-portal-rouge.vercel.app/admin"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10"
        >
          <RecentProjectCard
            pic="image.png"
            heading="University Portal"
            discr="VU University Portal"
            tags={[
              <div title="TypeScript" className="text-xl px-1"><SiTypescript color="#3178C6" /></div>,
              <div title="React" className="text-xl px-1"><FaReact color="#61DAFB" /></div>,
              <div title="Firebase" className="text-xl px-1"><SiFirebase color="#FFCA28" /></div>
            ]}
          />
        </a>
      </div>
    </section>
  );
});

export default RecentProjects;
