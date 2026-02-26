"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraText } from "../atoms";
import { Timeline } from "../molecules";
import { FaLocationDot } from "react-icons/fa6";
import { KsolvesIcon, OneSolveIcon } from "@/assets";
import Image from "next/image";

const Experience = () => {
  const data = [
    {
      title: (
        <div className="text-neutral-600">
          <span className="text-sm">JAN 2026 - PRESENT</span>
          <h1 className="text-2xl md:text-3xl font-bold my-1 md:my-2">
            Senior Software Engineer
          </h1>
          <h2 className="flex text-sm md:text-md gap-2 items-center">
            <OneSolveIcon className="w-4 h-4" />
            OneSolve Technologies
          </h2>
          <p className="flex items-center gap-2 items-center mt-1 text-sm md:text-md">
            {" "}
            <FaLocationDot />
            Nashik, India
          </p>
        </div>
      ),
      className: "pt-10 md:pt-20",
      content: (
        <div className="mb-8 text-sm md:text-md lg:text-lg font-normal text-neutral-600">
          <p>
            As a Senior Software Engineer at OneSolve, I lead the design and
            development of scalable integration solutions using the Workato
            platform. I collaborate closely with cross-functional teams to
            architect and implement complex workflows that automate critical
            business processes across multiple enterprise systems, including
            Salesforce, databases, and third-party APIs. My role involves
            optimizing system performance, implementing robust error-handling
            mechanisms, and ensuring high uptime through proactive monitoring
            and maintenance.
          </p>
          <ul className="list-disc pl-6 space-y-3 mt-3 mb-5">
            {[
              "Architected and deployed complex integration workflows using Workato platform, connecting Salesforce, databases, and third-party APIs to automate critical business processes across multiple enterprise systems.",
              "Reduced manual workload by 40% through collaboration with business analysts and stakeholders to gather requirements and implement automated solutions.",
              "Enhanced system performance by 35% by identifying workflow bottlenecks and implementing industry best practices for integration optimization.",
              "Engineered custom connectors and recipes to enable real-time data synchronization across platforms, ensuring 99.9% data accuracy.",
              "Implemented comprehensive error-handling mechanisms and monitoring solutions, achieving 99.5% uptime and reducing issue resolution time by 50%.",
            ].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/stock4.jpg"
              alt="Deepesh Jain || Fullstack Developer || Stock Image"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/stock3.jpg"
              alt="Deepesh Jain || Frontend Developer || Stock Image"
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
        <div className="text-neutral-600">
          <span className="text-sm">JULY 2023 - JAN 2026</span>
          <h1 className="text-2xl md:text-3xl font-bold my-1 md:my-2">
            Software Engineer
          </h1>
          <h2 className="flex text-sm md:text-md gap-2 items-center">
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
        <div className="mb-8 text-sm md:text-md lg:text-lg font-normal text-neutral-600">
          <p>
            At Ksolves India Ltd, I spearheaded the development of scalable,
            user-centric applications using React.js, delivering 15+ successful
            projects on time and within budget. I led cross-functional
            collaboration with frontend, backend, QA, and client teams to ensure
            delivery of high-quality solutions meeting business requirements.
          </p>
          <ul className="list-disc pl-6 space-y-3 mt-3 mb-5">
            {[
              "Spearheaded development of scalable, user-centric applications using React.js, delivering 15+ successful projects on time and within budget.",
              "Modernized 5+ legacy React projects by implementing updated libraries and architectural best practices, improving performance by 40% and reducing maintenance costs.",
              "Designed and optimized architecture for large-scale React applications, ensuring scalability to support 100K+ concurrent users.",
              "Established comprehensive testing framework using Jest and React Testing Library, achieving 85% code coverage and reducing production bugs by 60%.",
              "Accelerated development cycles by 30% through creation of reusable component library and optimization of state management with React Query.",
              "Led cross-functional collaboration with frontend, backend, QA, and client teams to ensure delivery of high-quality solutions meeting business requirements.",
            ].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/stock1.jpg"
              alt="Deepesh Jain || Fullstack Developer || Stock Image"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/stock2.jpg"
              alt="Deepesh Jain || Frontend Developer || Stock Image"
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
        <div className="text-neutral-600">
          <span className="text-sm">SEPTEMBER 2022 - JUNE 2023</span>
          <h1 className="text-2xl md:text-3xl font-bold my-1 md:my-2">
            Software Developer - Intern
          </h1>
          <h2 className="flex text-sm md:text-md gap-2 items-center">
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
        <div className="mb-8 text-sm md:text-md lg:text-lg font-normal text-neutral-600">
          <p>
            Joining Ksolves was where theory met real-world execution. I leveled
            up by working on real production apps — contributing to frontend
            design systems, backend API architectures, and cloud-based
            deployments, while embracing clean code and modern development
            practices.
          </p>
          <ul className="list-disc pl-6 space-y-3 mt-3 mb-5">
            {[
              "Developed responsive, reusable React.js components following atomic design principles, ensuring scalability and maintainability across applications.",
              "Integrated RESTful APIs for seamless data communication and dynamic content rendering, implementing robust error handling for optimal user experience.",
              "Optimized application performance by 35% through implementation of lazy loading, code splitting, and efficient state management with Redux.",
              "Collaborated with UI/UX teams to deliver pixel-perfect, responsive designs using HTML5, CSS3, and Tailwind CSS, ensuring cross-device compatibility and WCAG accessibility standards.",
              "Enhanced application functionality and user experience by debugging and resolving complex issues using React DevTools.",
            ].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/stock3.jpg"
              alt="Deepesh Jain || React Developer || Stock Image"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/stock4.jpg"
              alt="Deepesh Jain || Javascript Developer || Stock Image"
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
    <section
      id="experience"
      className="relative flex flex-col items-center justify-center min-h-dvh w-full text-neutral-800 pt-16 pb-12 bg-[url('/cubes.png')]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl flex flex-col items-center text-center pt-12 font-sans px-4 sm:px-6 lg:px-10 xl:px-16"
      >
        <p className="section-label">Work History</p>
        <h1 className="section-heading">
          The Timeline of —{" "}
          <AuroraText
            className="font-display italic font-bold"
            colors={["#ce2094", "#7324daf8", "#e2258d"]}
            speed={2}
          >
            Code, Growth, and Creativity
          </AuroraText>
        </h1>
        <h2 className="section-subheading">
          Solving problems, scaling solutions
        </h2>
      </motion.div>
      <Timeline data={data} />
    </section>
  );
};

export default Experience;
