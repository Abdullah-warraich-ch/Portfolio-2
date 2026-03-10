import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiPostgresql,
} from "react-icons/si";
import React from "react";

export const projects = [
  {
    id: 1,
    link: "https://e-commerce-product-page-beta-sand.vercel.app/",
    pic: "project1.png",
    heading: "Simple E-Commerce Page",
    discr: "Product Listing + Add to Cart",
    tags: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
      { name: "JS", icon: <SiJavascript color="#F7DF1E" /> },
    ],
  },
  {
    id: 2,
    link: "https://quiz-d7129dioh-abdullah-warraich-chs-projects.vercel.app/",
    pic: "project2.png",
    heading: "Quiz App",
    discr: "A Simple Quiz Application",
    tags: [
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
    ],
  },
  {
    id: 3,
    link: "https://university-portal-rouge.vercel.app/admin",
    pic: "image.png",
    heading: "University Portal",
    discr: "VU University Portal",
    tags: [
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
    ],
  },
  // Placeholders for future projects
  {
    id: 4,
    link: "https://ramadan-time-two.vercel.app/",
    pic: "ramadan.png",
    heading: "Ramadan Time",
    discr: "GPS-powered Ramadan companion app.",
    tags: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
    ],
  },
];
