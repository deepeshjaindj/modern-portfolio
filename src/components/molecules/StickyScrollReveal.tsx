"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { classnames } from "@/utils";
import { FaArrowRight } from "react-icons/fa";

interface ProjectItem {
  title: string;
  shortSummary: string;
  description: string[];
  techs: {
    title: string;
    icon: React.ReactNode;
  }[];
  projectImage: string;
  backgroundColors: string[];
  tagline: string;
  liveURL: string;
  githubURL: string;
}

interface StickyScrollProps {
  content: ProjectItem[];
}

export const StickyScroll = ({ content }: StickyScrollProps) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const TechTag = ({
    borderColor,
    bgColor,
    textColor,
    icon,
    title,
  }: {
    borderColor: string;
    bgColor: string;
    textColor: string;
    title: string;
    icon: React.ReactNode;
  }) => {
    return (
      <motion.span
        className="flex items-center gap-2 border text-sm rounded-full py-1 px-3 w-fit cursor-default"
        style={{ borderColor, backgroundColor: bgColor, color: textColor }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 10px rgba(255,255,255,0.3)",
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {icon}
        {title}
      </motion.span>
    );
  };

  const ImageCard = ({ item }: { item: ProjectItem }) => {
    return (
      <div className="flex flex-col lg:mx-10 lg:w-full mb-10 md:mb-50">
        <a
          target="_blank"
          draggable={false}
          className="pointer-events-none relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 p-1.5 shadow-2xl md:pointer-events-auto lg:h-[560px] lg:rounded-3xl lg:p-2"
          href={item.liveURL}
          rel="noopener noreferrer"
        >
          <div
            className={`group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl transition-all duration-300 lg:rounded-2xl`}
            style={{
              backgroundImage: `linear-gradient(to bottom, ${item.backgroundColors[0]}, ${item.backgroundColors[1]}, ${item.backgroundColors[2]})`,
            }}
          >
            <div
              className="absolute inset-0 -z-10"
              style={{
                background: `linear-gradient(188.62deg, ${item.backgroundColors[0]} 49.9%, ${item.backgroundColors[1]} 81.7%, ${item.backgroundColors[2]} 93.88%, ${item.backgroundColors[3]} 113.5%)`,
              }}
            />

            <div className="flex w-full flex-row items-center justify-between px-12 py-8 text-white group">
              <motion.h3
                className="max-w-[90%] text-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.tagline}
              </motion.h3>

              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="text-pink-300"
              >
                <FaArrowRight />
              </motion.div>
            </div>

            <Image
              alt={`${item.title} - ${item.shortSummary} | Deepesh Jain Portfolio Project`}
              loading="lazy"
              width={1203}
              height={753}
              decoding="async"
              className={`w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white shadow-[0_0_30px_${item.backgroundColors[2]}] transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 lg:group-hover:translate-y-10`}
              src={item.projectImage}
            />
          </div>
        </a>
      </div>
    );
  };

  const ProjectDetails = ({
    item,
    index,
    mobile = false,
  }: {
    item: ProjectItem;
    index: number;
    mobile?: boolean;
  }) => {
    return (
      <div
        className={classnames(
          `${index === activeCard || mobile ? "block" : "hidden"}`,
        )}
      >
        <a
          target="_blank"
          draggable={false}
          rel="noopener noreferrer"
          href={item.githubURL}
          className="text-3xl font-bold mb-2 hover:opacity-80"
          style={{ color: item.backgroundColors[1] }}
        >
          {item.title}
        </a>
        <p className="text-md my-3">{item.shortSummary}</p>
        <ul className="list-disc text-md pl-4">
          {item.description.map((description, index) => (
            <li key={index} className="mb-2">
              {description}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 my-5">
          {item.techs.map((tech, index) => (
            <TechTag
              key={index}
              borderColor={item.backgroundColors[1]}
              bgColor={item.backgroundColors[4]}
              textColor={item.backgroundColors[0]}
              icon={tech.icon}
              title={tech.title}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className="relative w-full max-w-7xl flex gap-15 lg:gap-30 font-sans px-4"
      ref={ref}
    >
      <div className="flex-5 hidden md:block">
        {content.map((item, index) => (
          <ImageCard key={index} item={item} />
        ))}
      </div>
      <div className="sticky h-[60dvh] top-[20%] flex-3 text-neutral-600 hidden md:block">
        {content.map((item, index) => (
          <ProjectDetails key={index} item={item} index={index} />
        ))}
      </div>

      <div className="md:hidden">
        {content.map((item, index) => (
          <div key={index} className="mb-20 px-4">
            <ImageCard item={item} />
            <ProjectDetails item={item} index={index} mobile />
          </div>
        ))}
      </div>
    </div>
  );
};
