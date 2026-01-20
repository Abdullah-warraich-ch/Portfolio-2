import React from "react";
import Heading from "../Components/Heading";
import Paragraph from "../Components/Paragraph";
import { IoIosArrowForward } from "react-icons/io";
import RecentProjectCard from "../Components/RecentProjectCard";

function RecentProjects() {
  return (
    <div>
      <div className="mb-10">
        <Heading FWord="RECENT" LWord="PROJECTS" />
      </div>
      <a href="https://e-commerce-product-page-beta-sand.vercel.app/">
        <RecentProjectCard
          pic="project1.png"
          heading="Simple E-Commerce Page"
          discr="Product Listing + Add to Cart"
        />
      </a>

      <RecentProjectCard
        pic="https://cdn.sanity.io/images/599r6htc/regionalized/1f5848c2e38f2b9c8a5563e4f672c60e8ae97b57-2400x2400.png?w=2400&h=2400&q=75&fit=max&auto=format"
        heading="Task Management Dashboard"
        discr="Made A Task Management Dashboard for Practice"
      />

      <RecentProjectCard
        pic="https://i.pinimg.com/736x/6f/46/55/6f465503a2a317f965dbdbe3f72f1a77.jpg"
        heading="Admin Style Ui Section"
        discr="Worked on Different Ui Section of Company's Landing Page"
      />
    </div>
  );
}

export default RecentProjects;
