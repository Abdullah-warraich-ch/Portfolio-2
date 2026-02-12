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

      <RecentProjectCard
        pic="https://i.pinimg.com/736x/6f/46/55/6f465503a2a317f965dbdbe3f72f1a77.jpg"
        heading="Admin Style Ui Section"
        discr="Worked on Different Ui Section of Company's Landing Page"
      />
    </section>
  );
});

export default RecentProjects;
