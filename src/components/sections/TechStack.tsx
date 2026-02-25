"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraText } from "../atoms";
import {
  AntDesignIcon,
  AWSIcon,
  AxiosIcon,
  CSSIcon,
  DockerIcon,
  ES6Icon,
  EsLintIcon,
  ExpressJSIcon,
  FirebaseIcon,
  GithubIcon,
  GitIcon,
  GitLabIcon,
  GraphQLIcon,
  HTMLIcon,
  JavaScriptIcon,
  KnexIcon,
  KubernetesIcon,
  MUIIcon,
  MySQLIcon,
  NextJSIcon,
  NodeJSIcon,
  NPMIcon,
  PostgresIcon,
  PostmanIcon,
  ReactIcon,
  ReactQueryIcon,
  RedisIcon,
  ReduxIcon,
  ShadcnIcon,
  StrapiIcon,
  TailwindIcon,
  TypeScriptIcon,
  VercelIcon,
  VsCodeIcon,
} from "@/assets";
import MongoDBIcon from "@/assets/MongoDBIcon";

const categories = [
  {
    title: "Frontend",
    color: "amber",
    skills: [
      { title: "React.js", icon: <ReactIcon /> },
      { title: "Next.js", icon: <NextJSIcon /> },
      { title: "TypeScript", icon: <TypeScriptIcon /> },
      { title: "JavaScript (ES6)", icon: <ES6Icon /> },
      { title: "JavaScript", icon: <JavaScriptIcon /> },
      { title: "Redux", icon: <ReduxIcon /> },
      { title: "React Query", icon: <ReactQueryIcon /> },
      { title: "GraphQL", icon: <GraphQLIcon /> },
      { title: "Axios", icon: <AxiosIcon /> },
      { title: "Tailwind CSS", icon: <TailwindIcon /> },
      { title: "CSS", icon: <CSSIcon /> },
      { title: "HTML", icon: <HTMLIcon /> },
      { title: "Material UI", icon: <MUIIcon /> },
      { title: "Ant Design", icon: <AntDesignIcon /> },
      { title: "Shadcn UI", icon: <ShadcnIcon /> },
    ],
  },
  {
    title: "Backend",
    color: "purple",
    skills: [
      { title: "Node.js", icon: <NodeJSIcon /> },
      { title: "Express.js", icon: <ExpressJSIcon /> },
      { title: "Knex.js", icon: <KnexIcon /> },
      { title: "Strapi", icon: <StrapiIcon /> },
      { title: "MongoDB", icon: <MongoDBIcon /> },
      { title: "MySQL", icon: <MySQLIcon /> },
      { title: "PostgreSQL", icon: <PostgresIcon /> },
      { title: "Redis", icon: <RedisIcon /> },
    ],
  },
  {
    title: "Deployment",
    color: "pink",
    skills: [
      { title: "AWS", icon: <AWSIcon /> },
      { title: "Vercel", icon: <VercelIcon /> },
      { title: "Docker", icon: <DockerIcon /> },
      { title: "Kubernetes", icon: <KubernetesIcon /> },
      { title: "Firebase", icon: <FirebaseIcon /> },
    ],
  },
  {
    title: "Tools",
    color: "teal",
    skills: [
      { title: "Git", icon: <GitIcon /> },
      { title: "GitHub", icon: <GithubIcon /> },
      { title: "GitLab", icon: <GitLabIcon /> },
      { title: "NPM", icon: <NPMIcon /> },
      { title: "ESLint", icon: <EsLintIcon /> },
      { title: "Postman", icon: <PostmanIcon /> },
      { title: "VS Code", icon: <VsCodeIcon /> },
    ],
  },
];

const COLOR_CONFIG: Record<string, { dot: string; header: string }> = {
  amber: {
    dot: "bg-amber-400",
    header: "text-amber-600 border-amber-200 bg-amber-50",
  },
  purple: {
    dot: "bg-purple-400",
    header: "text-purple-600 border-purple-200 bg-purple-50",
  },
  pink: {
    dot: "bg-pink-400",
    header: "text-pink-600 border-pink-200 bg-pink-50",
  },
  teal: {
    dot: "bg-teal-400",
    header: "text-teal-600 border-teal-200 bg-teal-50",
  },
};

const TechStack = () => {
  const totalSkills = categories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0,
  );

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center min-h-dvh w-full text-neutral-800 pt-16 pb-16 bg-[url('/square.png')]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl flex flex-col items-center text-center pt-12 font-sans px-4 sm:px-6 lg:px-10 xl:px-16"
      >
        <p className="section-label">Skills & Tools</p>
        <h1 className="section-heading">
          My Developer Toolkit —{" "}
          <AuroraText
            className="font-display italic font-bold"
            colors={["#ce2094", "#7324daf8", "#e2258d"]}
            speed={2}
          >
            {totalSkills}+ Technologies
          </AuroraText>
        </h1>
        <h2 className="section-subheading">
          Skills sharpened by real-world problems
        </h2>
      </motion.div>

      <div className="w-full max-w-7xl flex flex-col gap-8 pt-14 font-sans px-4 sm:px-6 lg:px-10 xl:px-16">
        {categories.map(({ title, skills, color }, catIdx) => {
          const config = COLOR_CONFIG[color] ?? COLOR_CONFIG.teal;
          return (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="w-full"
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold tracking-wide uppercase ${config.header}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
                  {title}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  {skills.length} skills
                </span>
                <div className="flex-1 h-px bg-neutral-200" />
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2.5">
                {skills.map(({ title: skillTitle, icon }) => (
                  <motion.span
                    key={skillTitle}
                    className={`flex items-center gap-2 border border-${color}-500 bg-${color}-100 text-${color}-700 text-sm rounded-full py-1.5 px-3.5 w-fit cursor-default tag-container font-medium`}
                    whileHover={{ scale: 1.07, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {icon}
                    {skillTitle}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;
