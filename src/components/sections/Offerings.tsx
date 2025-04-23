"use client";

import React from "react";
import { BentoCard, BentoGrid, IconCloud } from "../atoms";
import { FaBell, FaCalendar, FaCode, FaShare } from "react-icons/fa";
import { motion } from "motion/react";
import { File, Folder, Tree } from "../atoms/FileTree";
import { Globe } from "../atoms/Globe";
import {
  FILE_TREE_ELEMENTS,
  FIRST_CARD_ANIMATION_OFFERINGS,
  SECOND_CARD_ANIMATION_OFFERINGS,
  SLUGS_FOR_TECH_CLOUD,
} from "@/utils/constants";

const Offerings = () => {
  const images = SLUGS_FOR_TECH_CLOUD.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  const features = [
    {
      Icon: FaCode,
      name: "Wide Tech Stack",
      description: "Cutting Edge Dev Techs",
      href: "#",
      cta: "View Stack",
      className: "col-span-3 lg:col-span-1",
      bgClassName: "w-[120%] h-[80%] self-center opacity-50",
      background: (
        <div className="relative flex size-full items-center justify-center overflow-hidden">
          <IconCloud images={images} />
        </div>
      ),
    },
    {
      Icon: FaBell,
      name: "Notifications",
      description: "Get notified when something happens.",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1",
      bgClassName: "font-display h-[70%] px-6 py-4 opacity-75",
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
      Icon: FaShare,
      name: "Integrations",
      description: "Supports 100+ integrations and counting.",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1 row-span-2",
      bgClassName: "h-[85%] p-2",
      background: (
        <div className="bg-yellow-100 h-[100%] rounded-lg">
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Globe
            </span>
            <Globe className="top-28" />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
          </div>
        </div>
      ),
    },
    {
      Icon: FaCalendar,
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      className: "col-span-3 lg:col-span-2",
      href: "#",
      cta: "Learn more",
      bgClassName: "h-[80%] p-4 opacity-75 hover:opacity-50",
      background: (
        <motion.div
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
        >
          <motion.div
            variants={FIRST_CARD_ANIMATION_OFFERINGS}
            className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
          >
            <img
              src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
              alt="avatar"
              height="100"
              width="100"
              className="rounded-full h-10 w-10"
            />
            <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
              Just code in Vanilla Javascript
            </p>
            <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
              Delusional
            </p>
          </motion.div>
          <motion.div className="h-full relative w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
            <img
              src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
              alt="avatar"
              height="100"
              width="100"
              className="rounded-full h-10 w-10"
            />
            <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
              Tailwind CSS is cool, you know
            </p>
            <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
              Sensible
            </p>
          </motion.div>
          <motion.div
            variants={SECOND_CARD_ANIMATION_OFFERINGS}
            className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
          >
            <img
              src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
              alt="avatar"
              height="100"
              width="100"
              className="rounded-full h-10 w-10"
            />
            <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
              I love angular, RSC, and Redux.
            </p>
            <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
              Helpless
            </p>
          </motion.div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="min-h-dvh flex items-center justify-center bg-gradient-to-b from-primaryYellow/20 to-white pt-12 font-sans">
      <BentoGrid className="w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-16">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} bgClassName={feature.bgClassName} />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Offerings;
