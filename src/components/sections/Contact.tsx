"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/utils/constants";
import Modal from "../molecules/Modal";
import { ContactForm } from "../molecules";

const Contact = () => {
  const [isContactFormOpen, setIssContactFormOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-dvh w-full text-neutral-800 pt-16 bg-[url('/skybg.jpg')] bg-cover"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-y-2 text-center font-sans px-4 sm:px-6 lg:px-10 xl:px-16 mb-16">
        <div className="relative mb-4">
          <Image
            src="/dj-logo.png"
            alt="Deepesh Jain Logo"
            width={80}
            height={80}
            draggable={false}
            loading="lazy"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="mt-4 text-2xl font-light tracking-wide text-white sm:text-4xl lg:text-5xl">
            BUILDING COOL STUFF,
            <span className="font-extrabold"> TOGETHER</span>
          </h3>
          <h3 className="mt-3 text-nowrap text-2xl font-light text-white sm:text-4xl lg:text-5xl">
            LET&apos;S GET <span className="font-extrabold">STARTED!</span>
          </h3>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="my-10 group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs hover:bg-transparent md:py-1 md:pr-1 md:pl-3"
        >
          <button
            className="z-10 px-3 text-white transition-colors duration-300 group-hover:text-black cursor-pointer"
            onClick={() => setIssContactFormOpen(true)}
          >
            Get In Touch
          </button>
          <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"></span>
          <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5">
            <FaArrowRight className="text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0" />
            <FaArrowRight className="absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </span>
        </motion.div>

        <p className="tracking-wid text-base font-semibold text-white lg:text-2xl">
          Open to full-time opportunities and freelance collaborations.
        </p>
        <p className="my-2 text-sm font-extralight tracking-wide text-balance text-white opacity-75 lg:text-xl">
          Passionate about building dynamic web apps
          <br />
          and delivering smooth, user-focused experiences.
        </p>
        <div className="mt-8 flex gap-10 justify-center text-xl md:text-3xl">
          {/* Social links */}
          {SOCIAL_LINKS.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 transition-colors hover:text-primaryYellow"
            >
              <span className="sr-only">{label}</span>
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Background Color */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-backgroundBlue opacity-75"
      />

      {/* Contact Modal */}
      <Modal
        isOpen={isContactFormOpen}
        onClose={() => setIssContactFormOpen(false)}
      >
        <ContactForm handleClose={() => setIssContactFormOpen(false)} />
      </Modal>
    </section>
  );
};

export default Contact;
