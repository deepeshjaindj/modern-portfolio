"use client";

import React from "react";
import {
  BentoCard,
  BentoGrid,
  File,
  Folder,
  Tree,
  OrbitingCircles,
  AuroraText,
} from "../atoms";
import { motion } from "motion/react";
import {
  FILE_TREE_ELEMENTS,
  FIRST_CARD_ANIMATION_OFFERINGS,
  SECOND_CARD_ANIMATION_OFFERINGS,
} from "@/utils/constants";
import { VscVscodeInsiders } from "react-icons/vsc";
import { RiRobot3Line, RiStackLine, RiTimeZoneFill } from "react-icons/ri";
import { GiNinjaHead } from "react-icons/gi";
import { MdRocketLaunch } from "react-icons/md";
import {
  AWSIcon,
  CSSIcon,
  DockerIcon,
  ES6Icon,
  EsLintIcon,
  ExpressJSIcon,
  GithubIcon,
  GitIcon,
  GitLabIcon,
  GraphQLIcon,
  HTMLIcon,
  JavaScriptIcon,
  MUIIcon,
  NextJSIcon,
  NodeJSIcon,
  NPMIcon,
  PostgresIcon,
  PostmanIcon,
  ReactIcon,
  ReactQueryIcon,
  RedisIcon,
  ReduxIcon,
  StrapiIcon,
  TailwindIcon,
  TypeScriptIcon,
  VercelIcon,
  VsCodeIcon,
} from "@/assets";
import MongoDBIcon from "@/assets/MongoDBIcon";
import Image from "next/image";
import { LuWorkflow } from "react-icons/lu";

const Offerings = () => {
  const FEATURES = [
    {
      Icon: GiNinjaHead,
      name: "Future-Ready Tech Stack",
      description: "From code to cloud, covered.",
      href: "#Tech",
      cta: "Tech Stack",
      className: "col-span-3 lg:col-span-1 order-1",
      bgClassName: "w-[120%] h-[80%] self-center opacity-50",
      linkType: "internal",
      background: (
        <div className="relative flex size-full items-center justify-center overflow-hidden">
          <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={30}>
              <GithubIcon />
              <VsCodeIcon />
              <EsLintIcon />
              <ES6Icon />
              <GitIcon />
              <NPMIcon />
              <DockerIcon />
              <AWSIcon />
              <GitLabIcon />
              <VercelIcon />
            </OrbitingCircles>
            <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
              <NodeJSIcon />
              <ExpressJSIcon />
              <MongoDBIcon />
              <PostgresIcon />
              <StrapiIcon />
              <GraphQLIcon />
              <RedisIcon />
              <PostmanIcon />
            </OrbitingCircles>
            <OrbitingCircles iconSize={20} radius={60} speed={3}>
              <ReactIcon />
              <NextJSIcon />
              <TailwindIcon />
              <ReduxIcon />
              <ReactQueryIcon />
              <MUIIcon />
            </OrbitingCircles>
            <OrbitingCircles iconSize={15} radius={20} reverse speed={4}>
              <HTMLIcon />
              <CSSIcon />
              <JavaScriptIcon />
              <TypeScriptIcon />
            </OrbitingCircles>
          </div>
        </div>
      ),
    },
    {
      Icon: VscVscodeInsiders,
      name: "Clean & Maintainable Code",
      description: "Readable, scalable, and future-proof.",
      href: "https://github.com/deepeshjaindj",
      cta: "Github",
      className: "col-span-3 lg:col-span-1 order-2",
      linkType: "external",
      bgClassName: "font-mono h-[70%] px-6 py-4 opacity-75",
      background: (
        <div className="relative flex h-[100%] flex-col items-center justify-center overflow-hidden rounded-lg bg-background border border-neutral-200 text-neutral-900">
          <Tree
            className="overflow-hidden rounded-md bg-background p-2"
            initialSelectedId="7"
            initialExpandedItems={[
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
            ]}
            elements={FILE_TREE_ELEMENTS}
          >
            <Folder element="src" value="1">
              <Folder value="2" element="app">
                <File value="3">
                  <p>layout.tsx</p>
                </File>
                <File value="4">
                  <p>page.tsx</p>
                </File>
              </Folder>
              <Folder value="5" element="components">
                <Folder value="6" element="ui">
                  <File value="7">
                    <p>button.tsx</p>
                  </File>
                </Folder>
                <File value="8">
                  <p>header.tsx</p>
                </File>
                <File value="9">
                  <p>footer.tsx</p>
                </File>
              </Folder>
              <Folder value="10" element="lib">
                <File value="11">
                  <p>utils.ts</p>
                </File>
              </Folder>
            </Folder>
          </Tree>
        </div>
      ),
    },
    {
      Icon: RiTimeZoneFill,
      name: "Timezone Friendly",
      description: "Work syncs with your schedule.",
      href: "#contact",
      cta: "Let's Connect",
      className: "col-span-3 lg:col-span-1 row-span-2 order-4 lg:order-3",
      linkType: "internal",
      bgClassName: "h-[85%] p-2",
      background: (
        <div className="h-[100%] rounded-lg">
          <div className="relative flex size-full items-start justify-center overflow-hidden rounded-lg border px-2 pb-40 pt-8 md:pt-20 lg:pt-8 md:pb-60">
            <AuroraText
              className="pointer-events-none whitespace-pre-wrap bg-clip-text text-6xl font-semibold text-neutral-600 text-center lg:text-right w-full md:w-[70%] lg:w-full"
              colors={["#242472", "#2313b4", "#1624a1", "#111dc4", "#202094"]}
            >
              Available across time zones
            </AuroraText>
            <div className="absolute mx-auto aspect-[1/1] w-[160%] bottom-[-25%] max-w-[550px]">
              <Image
                src={"/globe-img.png"}
                width={600}
                height={600}
                alt="Globe Image || Deepesh Jain Portfolio"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
          </div>
        </div>
      ),
    },
    {
      Icon: MdRocketLaunch,
      name: "Skills, Standards & Superpowers",
      description: "Engineering polished digital solutions.",
      className: "col-span-3 lg:col-span-2 order-3 lg:order-4",
      href: "#projects",
      cta: "Explore Projects",
      linkType: "internal",
      bgClassName: "h-[80%] p-4 opacity-75 hover:opacity-50",
      background: (
        <motion.div
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] flex-row space-x-2"
        >
          <motion.div
            variants={FIRST_CARD_ANIMATION_OFFERINGS}
            className="h-full w-1/3 rounded-2xl bg-white p-4 border border-neutral-200 flex flex-col items-center justify-center"
          >
            <LuWorkflow className="rounded-full h-10 w-10 p-2 bg-red-100 text-red-600 border border-red-500" />
            <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
              Automated Workflows
            </p>
            <p className="border border-red-500 bg-red-100 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
              Automation
            </p>
          </motion.div>
          <motion.div className="h-full relative w-1/3 rounded-2xl bg-white p-4 border border-neutral-200 flex flex-col items-center justify-center">
            <RiRobot3Line className="rounded-full h-10 w-10 p-2 bg-green-100 text-green-600 border border-green-500" />
            <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
              AI Agents & MCP
            </p>
            <p className="border border-green-500 bg-green-100 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
              Agentic
            </p>
          </motion.div>
          <motion.div
            variants={SECOND_CARD_ANIMATION_OFFERINGS}
            className="h-full w-1/3 rounded-2xl bg-white p-4 border border-neutral-200 flex flex-col items-center justify-center"
          >
            <RiStackLine className="rounded-full h-10 w-10 p-2 bg-orange-100 text-orange-600 border border-orange-500" />
            <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
              Full-stack Development
            </p>
            <p className="border border-orange-500 bg-orange-100 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
              Engineering
            </p>
          </motion.div>
        </motion.div>
      ),
    },
  ];

  return (
    <section className="min-h-dvh flex items-center justify-center bg-gradient-to-b from-neutral-100 to-white pt-16 pb-8 font-sans">
      <BentoGrid className="w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-16">
        {FEATURES.map((feature, idx) => (
          <BentoCard
            key={idx}
            {...feature}
            bgClassName={feature.bgClassName}
            linkType={feature.linkType}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Offerings;
