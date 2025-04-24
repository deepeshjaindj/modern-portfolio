"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { AuroraText, BackgroundBeamsCollide, FloatingDock } from "../atoms";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";

const About = () => {
  const links = [
    {
      title: "LinkedIn",
      icon: <FaLinkedin className="w-full h-full text-neutral-500" />,
      href: "#",
    },
    {
      title: "Github",
      icon: <FaGithub className="w-full h-full text-neutral-500" />,
      href: "#",
    },
    {
      title: "Stack Overflow",
      icon: <FaStackOverflow className="w-full h-full text-neutral-500" />,
      href: "#",
    },
    {
      title: "X aka Twitter",
      icon: <FaTwitter className="w-full h-full text-neutral-500" />,
      href: "#",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-dvh w-full bg-white text-slate-800">
      <BackgroundBeamsCollide>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-7xl flex flex-col items-center text-center pt-12 font-sans px-4 sm:px-6 lg:px-10 xl:px-16"
        >
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight max-w-6xl">
            More Than Just Code –{" "}
            <AuroraText
              className="font-display italic font-bold"
              colors={["#ce2094", "#7324daf8", "#e2258d"]}
              speed={2}
            >
              I Build Experiences
            </AuroraText>
          </h1>
          <h3 className="text-lg sm:text-xl md:text-2xl mt-2 text-gray-700">
            Driven by curiosity, focused on craft, and fueled by coffee &
            creativity
          </h3>

          <div className="mt-15 w-full flex flex-col md:flex-row gap-10 items-center">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex-1 text-left text-base md:text-lg leading-relaxed space-y-4 order-2 md:order-1"
            >
              <h4 className="text-slate-600 font-bold text-sm tracking-wide text-center md:text-left">
                KNOW ABOUT ME
              </h4>
              <p className="text-center md:text-left">
                Hey, I’m Deepesh Jain — a Fullstack Developer who’s obsessed
                with crafting interfaces that don’t just look good, but feel
                right.
              </p>
              <p className="text-center md:text-left">
                I believe the best web experiences happen when design and
                engineering shake hands — and that’s exactly where I thrive.
                Whether I’m architecting a system or obsessing over a button’s
                hover state, I bring equal parts logic and love to both sides of
                the stack.
              </p>
              <p className="text-center md:text-left">
                Performance, accessibility, responsive design, clean code —
                these aren’t buzzwords to me, they’re checkboxes I never skip.
              </p>
              <p className="text-center md:text-left">
                When I’m not coding, I’m probably diving into a new tech tool,
                sipping coffee ☕, or mentoring fellow devs in the community.
              </p>
              <p className="text-center md:text-left">
                Let’s build something that isn’t just functional — but
                unforgettable. 🚀
              </p>
              <FloatingDock mobileClassName="translate-y-20" items={links} />
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex-1 flex justify-end order-1 md:order-2"
            >
              <Image
                src="/deepesh-jain-crop.png"
                alt="Deepesh Jain"
                width={450}
                height={400}
                className="rounded-2xl object-cover md:shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </BackgroundBeamsCollide>
    </div>
  );
};

export default About;
