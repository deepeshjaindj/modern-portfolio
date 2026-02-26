"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { AuroraText, FloatingDock } from "../atoms";
import { SOCIAL_LINKS } from "@/utils/constants";

const ABOUT_STATS = [
  { value: "3.5+", label: "Years of\nExperience" },
  { value: "15+", label: "Projects\nDelivered" },
  { value: "35+", label: "Tools and\nTechnologies" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-dvh w-full bg-white text-neutral-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl flex flex-col items-center text-center pt-16 pb-16 font-sans px-4 sm:px-6 lg:px-10 xl:px-16"
      >
        <p className="section-label">Who I Am</p>
        <h1 className="section-heading">
          More Than Just Code –{" "}
          <AuroraText
            className="font-display italic font-bold"
            colors={["#ce2094", "#7324daf8", "#e2258d"]}
            speed={2}
          >
            I Build Experiences
          </AuroraText>
        </h1>
        <h2 className="section-subheading">
          Driven by curiosity, focused on craft, and fueled by coffee &
          creativity
        </h2>

        <div className="mt-16 w-full flex flex-col md:flex-row gap-12 items-center text-neutral-600">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 text-left text-base md:text-lg leading-relaxed space-y-4 order-2 md:order-1"
          >
            <p className="text-center md:text-left text-neutral-700">
              Hey, I&apos;m Deepesh Jain — a Results-driven Senior Software
              Engineer with 3.5+ years of experience developing scalable web
              applications and enterprise integration solutions.
            </p>
            <p className="text-center md:text-left">
              Expert in modern JavaScript frameworks (React.js, Next.js,
              Node.js) with a proven ability to architect end-to-end solutions,
              automate business workflows, and optimize system performance.
            </p>
            <p className="text-center md:text-left">
              I&apos;ve demonstrated success in leading cross-functional teams,
              modernizing legacy systems, and delivering high-impact technical
              solutions that drive business growth. Proficient in Workato
              integration platform, Salesforce administration, and Agile
              methodologies.
            </p>
            <p className="text-center md:text-left">
              When I&apos;m not coding, I&apos;m probably diving into a new tech
              tool, sipping coffee, or mentoring fellow devs in the community.
            </p>

            {/* Stats Cards */}
            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              {ABOUT_STATS.map(({ value, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex-1 bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-2xl font-extrabold text-primary font-serif block">
                    {value}
                  </span>
                  <span className="text-xs text-neutral-500 mt-1 block leading-snug whitespace-pre-line">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>

            <FloatingDock
              mobileClassName="translate-y-20"
              items={SOCIAL_LINKS}
            />
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center md:justify-end order-1 md:order-2 max-w-[300px] md:max-w-[100%]"
          >
            {/* Gradient border wrapper */}
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary via-secondary to-purple-400 shadow-xl shadow-primary/20">
              <Image
                src="/deepesh-jain-crop.png"
                alt="Deepesh Jain || Frontend Developer || React Developer"
                width={450}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
