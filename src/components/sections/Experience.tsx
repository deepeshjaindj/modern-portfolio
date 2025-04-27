"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraText } from "../atoms";
import { Timeline } from "../molecules";
import { FaLocationDot } from "react-icons/fa6";
import { KsolvesIcon } from "@/assets";
import Image from "next/image";

const Experience = () => {
  const data = [
    {
      title: (
        <div className="text-neutral-700">
          <span className="text-sm">JULY 2023 - PRESENT</span>
          <h1 className="text-2xl md:text-3xl font-bold my-1 md:my-2">
            Software Engineer
          </h1>
          <h2 className="flex text-md gap-2 items-center">
            <KsolvesIcon className="w-5 h-5" />
            Ksolves India Limited
          </h2>
          <p className="flex items-center gap-2 items-center mt-1 text-sm md:text-md">
            {" "}
            <FaLocationDot />
            Indore, India
          </p>
        </div>
      ),
      className: "pt-10 md:pt-20",
      content: (
        <div className="mb-8 text-md font-normal text-neutral-700">
          <p>
            At Ksolves India Ltd, I work as a Fullstack Developer with a strong
            frontend focus — building, optimizing, and scaling modern web
            applications. I collaborat across teams to deliver high-quality
            features, write clean, maintainable code, contribute to both
            frontend and backend stacks, and actively handle deployment
            workflows. Every project refine my skills — from crafting
            pixel-perfect UIs to architecting scalable APIs and shipping
            production-ready apps on platforms like Vercel and AWS.
          </p>
          <ul className="list-disc pl-6 space-y-3 mt-3 mb-5">
            {[
              "Built and optimized production-grade web apps using Next.js, React.js, and TypeScript — enhancing page load speeds by up to 30%.",
              "Integrated scalable backend APIs using Node.js and Express, ensuring seamless data flow and authentication with JWT-based security.",
              "Refactored legacy monolithic codebases into modular, component-driven architectures, reducing maintenance time by 25%.",
              "Developed and consumed RESTful services with MongoDB and PostgreSQL databases, following best practices for secure and efficient data handling.",
              "Led deployment processes on platforms like Vercel, Netlify, and AWS, setting up CI/CD pipelines for faster releases.",
              "Advocated for clean code practices, introducing ESLint and Prettier standardization across frontend and backend projects.",
              "Collaborated closely with cross-functional teams — designers, testers, backend engineers — to deliver 100% client-approved solutions within tight deadlines.",
            ].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/stock1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/stock2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className="text-neutral-700">
          <span className="text-sm">SEPTEMBER 2022 - JUNE 2023</span>
          <h1 className="text-2xl md:text-3xl font-bold my-1 md:my-2">
            Software Developer - Intern
          </h1>
          <h2 className="flex text-md gap-2 items-center">
            <KsolvesIcon className="w-5 h-5" />
            Ksolves India Limited
          </h2>
          <p className="flex items-center gap-2 items-center mt-1 text-sm md:text-md">
            {" "}
            <FaLocationDot />
            Indore, India
          </p>
        </div>
      ),
      content: (
        <div className="mb-8 text-md font-normal text-neutral-700">
          <p>
            Joining Ksolves was where theory met real-world execution. I leveled
            up by working on real production apps — contributing to frontend
            design systems, backend API architectures, and cloud-based
            deployments, while embracing clean code and modern development
            practices.
          </p>
          <ul className="list-disc pl-6 space-y-3 mt-3 mb-5">
            {[
              "Designed and implemented responsive UIs with React.js and Tailwind CSS, achieving pixel-perfect matches to Figma designs.",
              "Worked hands-on with Redux for efficient state management and lazy loading to boost mobile and desktop performance.",
              "Integrated complex backend services via REST APIs, focusing on robust error handling and user experience.",
              "Actively contributed to backend tasks — creating CRUD APIs with Express.js and managing server-side logic.",
              "Deployed and maintained projects on Vercel, gaining experience in serverless hosting and deployment workflows.",
              "Collaborated with senior developers to fix bugs, optimize codebases, and deliver client projects with more than 95% on-time completion rate.",
            ].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/stock3.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/stock4.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-dvh w-full text-neutral-800 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl flex flex-col items-center text-center pt-12 font-sans px-4 sm:px-6 lg:px-10 xl:px-16"
      >
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight max-w-6xl">
          The Timeline of -
          <AuroraText
            className="font-display italic font-bold"
            colors={["#ce2094", "#7324daf8", "#e2258d"]}
            speed={2}
          >
            Code, Growth, and Creativity
          </AuroraText>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl mt-2 text-neutral-600">
          Solving problems, scaling solutions.
        </h2>
      </motion.div>
      <Timeline data={data} />
    </div>
  );
};

export default Experience;
