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

const TechStack = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center min-h-dvh w-full text-neutral-800 pt-16 pb-12 bg-[url('/square.png')]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl flex flex-col items-center text-center pt-12 font-sans px-4 sm:px-6 lg:px-10 xl:px-16"
      >
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight max-w-6xl">
          My Developer Toolkit -
          <AuroraText
            className="font-display italic font-bold"
            colors={["#ce2094", "#7324daf8", "#e2258d"]}
            speed={2}
          >
            Frameworks, tools, and technologies
          </AuroraText>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl mt-2 text-neutral-600">
          Skills sharpened by real-world problems
        </h2>
      </motion.div>

      <div className="w-full max-w-7xl flex flex-col items-center text-center pt-16 font-mono px-4 sm:px-6 lg:px-10 xl:px-16">
        {categories.map(({ title, skills, color }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 w-full"
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map(({ title, icon }) => (
                <motion.span
                  key={title}
                  className={`flex items-center gap-3 border border-${color}-500 bg-${color}-100 text-${color}-700 text-sm rounded-full py-2 px-4 w-fit cursor-default tag-container`}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {icon}
                  {title}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
