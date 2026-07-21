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
  SiMongodb,
} from "react-icons/si";
import React from "react";

export const projects = [
  {
    id: 1,
    link: "https://ustaad-ai.vercel.app/",
    pic: "ustaad.png",
    heading: "Ustaad",
    discr: "AI Tutor Finder",
    tags: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
      { name: "Node", icon: <FaNodeJs color="#339933" /> },
    ],
  },
  {
    id: 2,
    link: "https://rehloo.vercel.app/",
    pic: "rehloo.png",
    heading: "Rehloo, Find A Hostel",
    discr: "A Hostel Booking System",
    tags: [
      { name: "Mongo", icon: <SiMongodb color="#47A248" /> },
      { name: "Nextjs", icon: <RiNextjsLine color="#FFFFFF" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
    ],
  },
  {
    id: 3,
    link: "https://quiz-sooty-sigma-47.vercel.app/homepage",
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
    id: 4,
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
    id: 5,
    link: "https://ramadan-time-two.vercel.app/",
    pic: "ramadan.png",
    heading: "Ramadan Time",
    discr: "GPS-powered Ramadan companion app.",
    tags: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
    ],
  },
  {
    id: 6,
    link: "https://e-commerce-product-page-beta-sand.vercel.app/",
    pic: "project1.png",
    heading: "Simple E-Commerce Page",
    discr: "Product Listing + Add to Cart",
    tags: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
      { name: "JS", icon: <SiJavascript color="#F7DF1E" /> },
    ],
  }
];
