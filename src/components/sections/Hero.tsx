"use client";

import type { NextPage } from "next";
import { AuroraBackground, AuroraText } from "../atoms";
import Image from "next/image";
import { FiExternalLink, FiMail } from "react-icons/fi";
import { useState } from "react";
import Modal from "../molecules/Modal";
import { ContactForm } from "../molecules";
import toast from "react-hot-toast";

const Hero: NextPage = () => {
  const [isContactFormOpen, setIssContactFormOpen] = useState(false);

  return (
    <AuroraBackground>
      <div
        className="relative flex items-center justify-center min-h-dvh w-full bg-backgroundBlue"
        id="home"
      >
        {/* Base Background */}
        <div className="absolute inset-0 bg-backgroundBlue color-backgroundBlue" />

        {/* Background Image */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[url('/heroBg.jpg')] bg-cover opacity-40" />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center text-center space-y-6 px-8 lg:px-10 xl:px-12 sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]">
          <a
            href="/Deepesh-Jain-Resume.pdf"
            download
            className="relative flex items-center gap-1 px-1 border border-white/30 text-white/80 rounded-full bg-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:text-white text-md font-sans"
          >
            <div className="px-2 rounded-full bg-red-600 text-sm font-bold">
              Hire?
            </div>
            <span className="font-semibold mr-2">Download Resume</span>
          </a>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg font-serif mt-2">
            Crafting Scalable, Performant, and Future-Ready{" "}
            <AuroraText
              className="font-display italic"
              colors={["#ff8800", "#ffea00f8", "#ffa600", "#e7cd37"]}
              speed={2}
            >
              Web Solutions
            </AuroraText>
          </h1>

          {/* 💡 Engaging Subheading */}
          <h2 className="text-2xl md:text-3xl font-medium text-white/90 mt-4 font-sans flex items-center flex-col lg:flex-row gap-2 lg:gap-0">
            <span className="order-2 lg:order-1">
              Hello, I&apos;m Deepesh Jain
            </span>
            <div className="w-[2.5em] h-[2.5em] lg:w-[1.5em] lg:h-[1.5em] overflow-hidden rounded-full border-2 border-blue-500 mx-3 hover:scale-125 order-1 lg:order-2 mb-3 lg:mb-0">
              <Image
                src="/deepesh-profile.png"
                alt="Deepesh Jain || Profile Image || Software Engineer"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="order-3">a Fullstack Developer</span>
          </h2>

          {/* 🚀 Call-to-Action Button */}
          <div className="flex flex-col sm:flex-row gap-0 sm:gap-5">
            <button
              className="relative flex items-center justify-center px-6 py-3 text-lg text-white 
                        rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 
                        hover:from-purple-500 hover:to-blue-500 transition-all duration-500 
                        group overflow-hidden font-sans mt-4 cursor-pointer"
              onClick={() => setIssContactFormOpen(true)}
            >
              {/* Button Text */}
              <span className="relative z-10">Let&apos;s Connect</span>

              <div className="ml-3 relative z-10">
                <FiMail className="text-xl text-white" />
              </div>
            </button>

            <button
              className="relative flex items-center justify-center px-6 py-3 text-lg text-white bg-transparent border border-white/50
                        rounded-full shadow-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 
                        transition-all duration-500 group overflow-hidden font-sans mt-4"
              onClick={() => toast.success("Blog is Coming Soon!")}
            >
              {/* Button Text */}
              <span className="relative z-10">Read Blog</span>

              <div className="ml-3 relative z-10">
                <FiExternalLink className="text-xl text-white" />
              </div>
            </button>
          </div>
        </div>
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
