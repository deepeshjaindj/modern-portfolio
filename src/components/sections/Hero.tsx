"use client";

import type { NextPage } from "next";
import { AuroraBackground, AuroraText } from "../atoms";
import Image from "next/image";
import { FiDownload, FiMail } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../molecules/Modal";
import { ContactForm } from "../molecules";

const STATS = [
  { value: "3.5+", label: "Years Exp." },
  { value: "10+", label: "Projects" },
  { value: "20+", label: "Technologies" },
  { value: "6+", label: "Clients" },
];

const Hero: NextPage = () => {
  const [isContactFormOpen, setIssContactFormOpen] = useState(false);

  return (
    <AuroraBackground>
      {/*
        Mobile  (<md): natural height from content + padding, no forced min-h-dvh
        Desktop (md+): min-h-dvh with vertical centering + absolute scroll indicator
      */}
      <div
        className="relative w-full flex flex-col items-center bg-backgroundBlue
                   pt-24 pb-16
                   md:min-h-dvh md:justify-center md:pt-0 md:pb-0"
        id="home"
      >
        {/* Base Background */}
        <div className="absolute inset-0 bg-backgroundBlue" />

        {/* Background Image */}
        <div className="pointer-events-none absolute inset-0 bg-[url('/heroBg.jpg')] bg-cover opacity-40" />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center text-center gap-6 px-6 sm:px-8 lg:px-10 xl:px-12 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]">
          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-400/40 bg-green-400/10 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-green-300 text-sm font-medium font-sans tracking-wide">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white drop-shadow-lg font-serif"
          >
            Crafting Scalable, Performant, and Future-Ready{" "}
            <AuroraText
              className="font-display italic"
              colors={["#ff8800", "#ffea00f8", "#ffa600", "#e7cd37"]}
              speed={2}
            >
              Web Solutions
            </AuroraText>
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/90 font-sans flex items-center flex-wrap justify-center lg:flex-nowrap gap-x-2 gap-y-1"
          >
            <span>Hello, I&apos;m Deepesh Jain</span>
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-7 lg:h-7 overflow-hidden rounded-full border-2 border-blue-400 hover:scale-125 transition-transform duration-300 flex-shrink-0">
              <Image
                src="/deepesh-profile.png"
                alt="Deepesh Jain || Profile Image || Software Engineer"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <span>a Fullstack Developer</span>
          </motion.h2>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-row gap-3 sm:gap-4"
          >
            <button
              className="flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white
                        rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-500
                        hover:from-purple-500 hover:to-blue-500 transition-all duration-500
                        font-sans cursor-pointer hover:shadow-blue-500/30 hover:shadow-xl hover:-translate-y-0.5"
              onClick={() => setIssContactFormOpen(true)}
            >
              <FiMail className="text-base sm:text-lg flex-shrink-0" />
              Let&apos;s Connect
            </button>

            <a
              href="/Deepesh-Jain-Resume.pdf"
              download
              className="flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white/90 bg-transparent border border-white/30
                        rounded-full shadow-lg hover:bg-white/10 hover:border-white/50
                        transition-all duration-300 font-sans hover:-translate-y-0.5"
            >
              <FiDownload className="text-base sm:text-lg flex-shrink-0" />
              Resume
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex items-center gap-5 sm:gap-8 md:gap-10 pt-4 border-t border-white/10 w-full justify-center"
          >
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-serif">
                  {value}
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm text-white/50 font-sans mt-0.5 tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/*
          Mobile : in normal flow, sits naturally below stats with mt-10
          Desktop: absolute bottom-6, overlaid on the full-height section
        */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative z-20 mt-10 flex flex-col items-center gap-1.5
                     md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:mt-0"
        >
          <span className="text-white/40 text-[10px] font-sans tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactFormOpen}
        onClose={() => setIssContactFormOpen(false)}
      >
        <ContactForm handleClose={() => setIssContactFormOpen(false)} />
      </Modal>
    </AuroraBackground>
  );
};

export default Hero;
