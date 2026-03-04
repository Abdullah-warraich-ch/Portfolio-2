import React from "react";
import Heading from "../Components/Heading";
import Paragraph from "../Components/Paragraph";
import { IoIosArrowForward } from "react-icons/io";
import RecentProjectCard from "../Components/RecentProjectCard";

const RecentProjects = React.forwardRef(function RecentProjects(props, ref) {
  return (
    <section ref={ref} className="scroll-mt-28 flex flex-col gap-10">
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
            tags={["React", "Tailwind CSS", "JavaScript"]}
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
            tags={["HTML5", "CSS3", "JavaScript", "Redux"]}
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
            discr="VU University Portal (In Progress)"
            tags={["Next.js", "TypeScript", "Node.js", "PostgreSQL"]}
          />
        </a>
      </div>
    </section>
  );
});

export default RecentProjects;
