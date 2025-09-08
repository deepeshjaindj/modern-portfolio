"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AuroraText } from "../atoms";
import { StickyScroll } from "../molecules";
import {
  SiAmazonwebservices,
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiResend,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
  SiVuetify,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiTeamLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";

const TABS = {
  TEAMS: "teams",
  PROJECTS: "projects",
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState(TABS.TEAMS);

  const content =
    activeTab === TABS.PROJECTS
      ? [
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
              { title: "Resend", icon: <SiResend /> },
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
          // {
          //   title: "Blog Platform (Coming Soon)",
          //   shortSummary:
          //     "A minimalistic, content-focused blogging platform engineered for creators who value speed, simplicity, and beautiful reading experiences.",
          //   description: [
          //     "Built using Next.js with MDX support for writing content directly in Markdown + JSX hybrid format.",
          //     "Implemented Strapi CMS integration for managing blog posts, categories, SEO metadata, and featured images.",
          //     "Focused on strong SEO practices with structured data, sitemap generation, Open Graph tags, and optimized meta descriptions.",
          //   ],
          //   tagline: "Content that loads fast, and reads better",
          //   techs: [
          //     { title: "Next.js", icon: <SiNextdotjs /> },
          //     { title: "TypeScript", icon: <SiTypescript /> },
          //     { title: "MDX", icon: <SiMdx /> },
          //     { title: "TailwindCSS", icon: <SiTailwindcss /> },
          //     { title: "Strapi", icon: <SiStrapi /> },
          //     { title: "Vercel", icon: <SiVercel /> },
          //   ],
          //   projectImage: "/blog.jpg",
          //   backgroundColors: [
          //     "rgb(107,13,51)",
          //     "rgb(219,39,119)",
          //     "rgb(244,114,182)",
          //     "rgb(249,215,147)",
          //     "rgb(250, 216, 234)",
          //   ],
          //   liveURL: "#",
          //   githubURL: "#",
          // },
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
        ]
      : [
          {
            title: "MikMak + Swaven",
            shortSummary:
              "A leading shoppable media platform that powers interactive commerce experiences for global brands. My primary focus is on enhancing the widgeting system that enables seamless product embedding across digital channels, and strengthening the analytics pipeline.",
            description: [
              "Worked on Vue.js-based interactive widgets that drive shoppable experiences across media touchpoints.",
              "Enhanced cross-platform performance of widgets, resolved device specific issues.",
              "Explored AI-driven features, participated in an AI Hackathon, and worked with AWS Bedrock.",
            ],
            tagline: "Shoppable media with scalable analytics backbone",
            techs: [
              { title: "Vue.js", icon: <SiVuedotjs /> },
              { title: "Vuetify", icon: <SiVuetify /> },
              { title: "Node.js", icon: <SiNodedotjs /> },
              { title: "JavaScript", icon: <SiJavascript /> },
              { title: "Jest", icon: <SiJest /> },
              { title: "AWS", icon: <SiAmazonwebservices /> },
            ],
            projectImage: "/mikmak.png",
            backgroundColors: [
              "rgb(24, 80, 92)",
              "rgb(23, 120, 128)",
              "rgb(64, 224, 208)",
              "rgb(147, 249, 228)",
              "rgb(235, 255, 252)",
            ],
            liveURL: "https://www.mikmak.com/",
            githubURL: "#",
          },
          {
            title: "Localsearch",
            shortSummary:
              "Played a key role in building a nationwide business directory and lead-generation platform designed for heavy search traffic",
            description: [
              "Crafted reusable React + TypeScript components that powered a consistent and performant UI across the platform.",
              "Delivered complex search and filtering flows by integrating deeply with GraphQL APIs.",
              "Solved cross-device and accessibility challenges.",
              "Collaborated across multiple service teams, aligning frontend delivery with backend microservices in a distributed setup.",
            ],
            tagline:
              "Nationwide business directory with scalable GraphQL-powered UI",
            techs: [
              { title: "React.js", icon: <SiReact /> },
              { title: "TypeScript", icon: <SiTypescript /> },
              { title: "GraphQL", icon: <SiGraphql /> },
              { title: "TailwindCSS", icon: <SiTailwindcss /> },
              { title: "Node.js", icon: <SiNodedotjs /> },
              { title: "Express.js", icon: <SiExpress /> },
            ],
            projectImage: "/localsearch.png",
            backgroundColors: [
              "rgb(20, 45, 120)",
              "rgb(40, 90, 255)",
              "rgb(120, 160, 255)",
              "rgb(190, 210, 255)",
              "rgb(240, 245, 255)",
            ],
            liveURL: "https://www.localsearch.com.au/",
            githubURL: "#",
          },
          {
            title: "Freshtracks Canada",
            shortSummary:
              "Contributed to building a trip planner platform designed to streamline travel planning by managing products, suppliers, itineraries, bookings, and quotes.",
            description: [
              "Built responsive, high-performance UIs with React.js and Next.js, leveraging code splitting, and React Query for optimized rendering.",
              "Improved overall application performance and scalability through optimizations",
              "Integrated AWS S3 for secure storage of travel-related assets and resources.",
              "Collaborated cross-functionally to translate business requirements into scalable solutions.",
            ],
            tagline: "Scalable trip planner with microservices architecture",
            techs: [
              { title: "Next.js", icon: <SiNextdotjs /> },
              { title: "React.js", icon: <SiReact /> },
              { title: "JavaScript", icon: <SiJavascript /> },
              { title: "React Hook Form", icon: <SiReacthookform /> },
              { title: "React Query", icon: <SiReactquery /> },
              { title: "AWS", icon: <SiAmazonwebservices /> },
            ],
            projectImage: "/ftc.png",
            backgroundColors: [
              "rgb(120, 25, 30)",
              "rgb(210, 45, 50)",
              "rgb(240, 120, 125)",
              "rgb(255, 190, 192)",
              "rgb(255, 240, 240)",
            ],
            liveURL: "https://freshtrackscanada.com/",
            githubURL: "#",
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
        <div className="flex flex-col md:flex-row gap-4 md:gap-2 mt-8 justify-center items-center">
          <div className="relative flex items-center gap-1 text-white rounded-full backdrop-blur-md transition-all duration-300 text-md font-sans">
            <div
              onClick={() => setActiveTab(TABS.TEAMS)}
              className={`px-6 py-2 rounded-full font-bold flex gap-2 items-center cursor-pointer transition-colors duration-300
                ${
                  activeTab === TABS.TEAMS
                    ? "bg-pink-600 text-white"
                    : "bg-white border border-pink-600 text-pink-600 hover:bg-pink-50"
                }`}
            >
              Worked Alongside
              <RiTeamLine
                className={`text-xl transition-colors duration-300 ${activeTab === TABS.TEAMS ? "text-white" : "text-pink-600"}`}
              />
            </div>
          </div>
          <div className="relative flex items-center gap-1 text-white rounded-full backdrop-blur-md transition-all duration-300 text-md font-sans">
            <div
              onClick={() => setActiveTab(TABS.PROJECTS)}
              className={`px-6 py-2 rounded-full font-bold flex gap-2 items-center cursor-pointer transition-colors duration-300
                ${
                  activeTab === TABS.PROJECTS
                    ? "bg-pink-600 text-white"
                    : "bg-white border border-pink-600 text-pink-600 hover:bg-pink-50"
                }`}
            >
              Personal Projects
              <FiGithub
                className={`text-xl transition-colors duration-300 ${activeTab === TABS.PROJECTS ? "text-white" : "text-pink-600"}`}
              />
            </div>
          </div>
        </div>
      </motion.div>
      <StickyScroll content={content} />
    </section>
  );
};

export default Projects;
