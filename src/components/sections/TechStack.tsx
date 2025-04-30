"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraText } from "../atoms";

const TechStack = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-dvh w-full text-neutral-800 pt-16 pb-12">
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
    </section>
  );
};

export default TechStack;
