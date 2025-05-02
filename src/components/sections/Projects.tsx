"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraText } from "../atoms";
import { StickyScroll } from "../molecules";
import {
  SiBootstrap,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMdx,
  SiNextdotjs,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const Projects = () => {
  const content = [
    {
      title: "Portfolio Web App",
      shortSummary:
        "An interactive, visually engaging portfolio built to showcase my journey, skills, and projects with a personal touch.",
      description: [
        "Developed using Next.js, TailwindCSS, and Framer Motion to ensure smooth animations and performance-driven design.",
        "Integrated dynamic project showcase and interactive experience timelines.",
        "Focused heavily on accessibility, semantic HTML structure, and optimal lighthouse scores.",
        "Deployed seamlessly on Vercel with CI/CD integration for continuous deployment and automatic previews.",
      ],
      tagline: "Code, creativity, and career — in one place",
      techs: [
        { title: "Next.js", icon: <SiNextdotjs /> },
        { title: "TypeScript", icon: <SiTypescript /> },
        { title: "TailwindCSS", icon: <SiTailwindcss /> },
        { title: "Framer Motion", icon: <TbBrandFramerMotion /> },
        { title: "Vercel", icon: <SiVercel /> },
      ],
      projectImage: "/portfolio.png",
      backgroundColors: [
        "rgb(61, 26, 122)",
        "rgb(126, 34, 206)",
        "rgb(192, 132, 252)",
        "rgb(249,215,147)",
        "rgb(249, 242, 255)",
      ],
      liveURL: "https://deepeshjain.vercel.app/",
      githubURL: "https://github.com/deepeshjaindj/modern-portfolio",
    },
    {
      title: "Blog Platform (Coming Soon)",
      shortSummary:
        "A minimalistic, content-focused blogging platform engineered for creators who value speed, simplicity, and beautiful reading experiences.",
      description: [
        "Built using Next.js with MDX support for writing content directly in Markdown + JSX hybrid format.",
        "Implemented Strapi CMS integration for managing blog posts, categories, SEO metadata, and featured images.",
        "Focused on strong SEO practices with structured data, sitemap generation, Open Graph tags, and optimized meta descriptions.",
      ],
      tagline: "Content that loads fast, and reads better",
      techs: [
        { title: "Next.js", icon: <SiNextdotjs /> },
        { title: "TypeScript", icon: <SiTypescript /> },
        { title: "MDX", icon: <SiMdx /> },
        { title: "TailwindCSS", icon: <SiTailwindcss /> },
        { title: "Strapi", icon: <SiStrapi /> },
        { title: "Vercel", icon: <SiVercel /> },
      ],
      projectImage: "/blog.jpg",
      backgroundColors: [
        "rgb(107,13,51)",
        "rgb(219,39,119)",
        "rgb(244,114,182)",
        "rgb(249,215,147)",
        "rgb(250, 216, 234)",
      ],
      liveURL: "#",
      githubURL: "#",
    },
    {
      title: "Book Publication Website",
      shortSummary:
        "A feature-rich online business platform designed for Concepts Books Publication",
      description: [
        "Built a complete solution for the book publication firm.",
        "Fully responsive interactive website built with Bootstrap.",
        "Implemented a JavaScript based cost calculator for real-time cost calculation.",
        "Deployed the website on github pages for optimized architecture with low running costs.",
      ],
      tagline: "Books meet technology, beautifully",
      techs: [
        { title: "JavaScript", icon: <SiJavascript /> },
        { title: "HTML", icon: <SiHtml5 /> },
        { title: "CSS", icon: <SiCss3 /> },
        { title: "Bootstrap", icon: <SiBootstrap /> },
        { title: "Github", icon: <SiGithub /> },
      ],
      projectImage: "/cbpi.png",
      backgroundColors: [
        "rgb(167, 0, 0)",
        "rgb(243, 91, 80)",
        "rgb(255, 158, 158)",
        "rgb(249,215,147)",
        "rgb(250, 219, 219)",
      ],
      liveURL:
        "https://deepeshjaindj.github.io/conceptsbookspublication.github.io/",
      githubURL:
        "https://github.com/deepeshjaindj/conceptsbookspublication.github.io",
    },
    {
      title: "Dice Duel",
      shortSummary:
        "A classic 2-player dice game built with HTML, CSS, and JavaScript.",
      tagline: "Roll the dice. Risk it all.",
      description: [
        "A turn-based game where two players compete to reach 100 points.",
        "Fully responsive design with smooth transitions, score tracking, and clear turn indicators.",
        "Built as a DOM-manipulation challenge project — no frameworks, pure JS.",
      ],
      techs: [
        { title: "JavaScript", icon: <SiJavascript /> },
        { title: "HTML", icon: <SiHtml5 /> },
        { title: "CSS", icon: <SiCss3 /> },
        { title: "Bootstrap", icon: <SiBootstrap /> },
        { title: "Github", icon: <SiGithub /> },
      ],
      projectImage: "/dice-game.png",
      backgroundColors: [
        "rgb(46, 21, 88)",
        "rgb(121, 72, 177)",
        "rgb(147, 68, 226)",
        "rgb(249,215,147)",
        "rgb(249, 242, 255)",
      ],
      liveURL: "https://deepeshjaindj.github.io/dice-game/",
      githubURL: "https://github.com/deepeshjaindj/dice-game",
    },
  ];

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-dvh w-full text-neutral-800 pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl flex flex-col items-center text-center pt-16 font-sans px-4 sm:px-6 lg:px-10 xl:px-16 mb-16"
      >
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight max-w-6xl">
          Showcasing -
          <AuroraText
            className="font-display italic font-bold"
            colors={["#ce2094", "#7324daf8", "#e2258d"]}
            speed={2}
          >
            My Passion Projects
          </AuroraText>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl mt-2 text-neutral-600">
          A collection of crafted experiences
        </h2>
      </motion.div>
      <StickyScroll content={content} />
    </section>
  );
};

export default Projects;
