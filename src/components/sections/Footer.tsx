import React from "react";
import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { SOCIAL_LINKS } from "@/utils/constants";
import { FaDownload } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center w-full bg-backgroundBlue text-neutral-300 font-sans px-4 sm:px-6 lg:px-10 xl:px-16">
      <div className="mx-auto h-px w-full bg-gradient-to-r from-white/50 via-white/80 to-white/50" />

      <div className="container mx-auto mb-12 mt-6 grid max-w-6xl gap-8 py-12 md:grid-cols-[1.1fr_1.4fr_1.1fr] md:gap-16 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-semibold text-white">Deepesh Jain</h2>
          <div className="mt-2 flex items-center gap-2 justify-center md:justify-start">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-green-400 text-xs font-medium tracking-wide">
              Available for work
            </span>
          </div>
          <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
            Help you launch experiences that look great, perform fast, and scale
            effortlessly — front to back.
          </p>
          <div className="mt-4 flex gap-4 justify-center md:justify-start">
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-all hover:text-primaryYellow hover:-translate-y-0.5 duration-200"
              >
                <span className="sr-only">{label}</span>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav Links */}
        <div className="grid grid-cols-2 gap-4 gap-y-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-white">General</h3>
            <ul className="mt-4 flex flex-col gap-y-3 text-sm">
              {["Home", "About", "Experience", "Projects"].map((text, i) => (
                <li key={i}>
                  <Link
                    href={`/${text === "Home" ? "" : "#" + text.toLowerCase()}`}
                    className="transition-colors hover:text-primaryYellow"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/Deepesh-Jain-Resume.pdf"
                  download
                  className="transition-colors hover:text-primaryYellow flex items-center justify-center md:justify-start gap-1"
                >
                  Resume <FaDownload />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-y-3 text-sm">
              {SOCIAL_LINKS.map((item, i) => (
                <li key={i}>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.href}
                    className="transition-colors hover:text-primaryYellow"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-base text-neutral-200">
            Feel free to reach out to me for any inquiries or collaboration
            opportunities.
          </h2>
          <p className="mt-3 flex items-center gap-2 text-base text-primaryYellow justify-center md:justify-start">
            <HiMail />
            <a
              href="mailto:deepeshjainofficial@gmail.com?subject=Let's%20catch%20up%20for%20a%20cool%20opportunity!"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              deepeshjainofficial@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="mx-auto h-px w-full max-w-7xl bg-gradient-to-r from-primaryYellow via-white/50 to-primaryYellow" />
      <p className="container py-10 text-center text-sm text-neutral-100">
        Copyright © {new Date().getFullYear()} Deepesh Jain. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
