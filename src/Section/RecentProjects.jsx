import React from "react";
import Heading from "../Components/Heading";
import Paragraph from "../Components/Paragraph";
import { IoIosArrowForward } from "react-icons/io";
import RecentProjectCard from "../Components/RecentProjectCard";

const RecentProjects = React.forwardRef(function RecentProjects(props, ref) {
  return (
    <section ref={ref} className="scroll-mt-28">
      <div className="mb-10">
        <Heading FWord="RECENT" LWord="PROJECTS" />
      </div>
      <a
        href="https://e-commerce-product-page-beta-sand.vercel.app/"
        target="_blank"
      >
        <RecentProjectCard
          pic="project1.png"
          heading="Simple E-Commerce Page"
          discr="Product Listing + Add to Cart"
        />
      </a>

      <a
        href="https://quiz-d7129dioh-abdullah-warraich-chs-projects.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RecentProjectCard
          pic="project2.png"
          heading="Quiz App"
          discr="A Simple Quiz Application"
        />
      </a>

      <a
        href="https://university-portal-rouge.vercel.app/admin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RecentProjectCard
          pic="image.png"
          heading="University Portal"
          discr="VU University Portal (In Progress)"
        />
      </a>
    </section>
  );
});

export default RecentProjects;
