"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraText } from "../atoms";
import { FaCertificate, FaExternalLinkAlt, FaTrophy } from "react-icons/fa";
import { AirtableIcon, JavaScriptIcon, ReactIcon, WorkatoIcon } from "@/assets";
import { KsolvesIcon } from "@/assets";
import MongoDBIcon from "@/assets/MongoDBIcon";

interface CertTheme {
  gradient: string;
  border: string;
  iconBg: string;
  link: string;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  icon?: React.ReactNode;
  theme: CertTheme;
}

const THEMES: Record<string, CertTheme> = {
  mongodb: {
    gradient:
      "linear-gradient(135deg, rgba(0,104,74,0.12) 0%, rgba(19,170,82,0.06) 50%, rgba(255,255,255,0.9) 100%)",
    border: "1px solid rgba(19,170,82,0.25)",
    iconBg: "rgba(19,170,82,0.12)",
    link: "#00684A",
  },
  workato: {
    gradient:
      "linear-gradient(135deg, rgba(103,234,221,0.15) 0%, rgba(92,45,190,0.08) 50%, rgba(255,255,255,0.9) 100%)",
    border: "1px solid rgba(103,234,221,0.3)",
    iconBg: "rgba(103,234,221,0.15)",
    link: "#5C2D91",
  },
  airtable: {
    gradient:
      "linear-gradient(135deg, rgba(252,180,0,0.12) 0%, rgba(24,191,255,0.08) 50%, rgba(255,255,255,0.9) 100%)",
    border: "1px solid rgba(252,180,0,0.25)",
    iconBg: "rgba(252,180,0,0.12)",
    link: "#D97706",
  },
  react: {
    gradient:
      "linear-gradient(135deg, rgba(97,218,251,0.14) 0%, rgba(0,216,255,0.06) 50%, rgba(255,255,255,0.9) 100%)",
    border: "1px solid rgba(97,218,251,0.3)",
    iconBg: "rgba(97,218,251,0.15)",
    link: "#0891B2",
  },
  javascript: {
    gradient:
      "linear-gradient(135deg, rgba(247,223,30,0.14) 0%, rgba(240,219,79,0.06) 50%, rgba(255,255,255,0.9) 100%)",
    border: "1px solid rgba(247,223,30,0.3)",
    iconBg: "rgba(247,223,30,0.15)",
    link: "#B45309",
  },
};

interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}

const ACHIEVEMENT_GRADIENTS = [
  "linear-gradient(135deg, rgba(245,158,11,0.14) 0%, rgba(217,119,6,0.06) 50%, rgba(255,255,255,0.92) 100%)",
  "linear-gradient(135deg, rgba(234,179,8,0.12) 0%, rgba(202,138,4,0.06) 50%, rgba(255,255,255,0.92) 100%)",
];

const Certifications = () => {
  const achievements: Achievement[] = [
    {
      title: "Star Performer Award",
      organization: "Ksolves India Limited",
      date: "January 2025",
      description:
        "Recognized for exceptional performance, technical leadership, and consistent delivery of high-impact solutions across multiple projects.",
      icon: <KsolvesIcon className="w-5 h-5" />,
    },
    {
      title: "Rising Star Award",
      organization: "Ksolves India Limited",
      date: "December 2023",
      description:
        "Awarded for rapid professional growth, outstanding contributions to team projects, and demonstrating strong initiative as a software engineer.",
      icon: <KsolvesIcon className="w-5 h-5" />,
    },
    {
      title: "Rising Star Award",
      organization: "Ksolves India Limited",
      date: "March 2023",
      description:
        "Honored for exceptional learning velocity, proactive problem-solving, and impactful contributions during the internship period.",
      icon: <KsolvesIcon className="w-5 h-5" />,
    },
  ];

  const certifications: Certification[] = [
    {
      title: "MongoDb Certified Associate Developer",
      issuer: "MongoDB University",
      date: "August 2024",
      credentialId: "MDBxi9ie30a7m",
      credentialUrl:
        "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/dd09f6ac-9217-4db5-9ce9-c3747c6e8782-deepesh-jain-59a2fd65-5026-480a-8808-4223fecf5ab3-certificate.pdf",
      description:
        "Demonstrated proficiency in MongoDB development, including schema design, aggregation, and performance optimization.",
      icon: <MongoDBIcon />,
      theme: THEMES.mongodb,
    },
    {
      title: "Workato Foundation Level 1 & 2",
      issuer: "Workato",
      date: "October 2025",
      credentialId: "88f2w4jfyb8z",
      credentialUrl: "https://verify.skilljar.com/c/88f2w4jfyb8z",
      description:
        "Validated foundational knowledge of Workato's integration platform, covering recipe creation, data transformation, and automation best practices.",
      icon: <WorkatoIcon />,
      theme: THEMES.workato,
    },
    {
      title: "Airtable Builder",
      issuer: "Airtable",
      date: "January 2026",
      credentialId: "zpc8rsskfd4d",
      credentialUrl: "https://verify.skilljar.com/c/zpc8rsskfd4d",
      description:
        "Recognized for expertise in building and managing Airtable bases, including advanced formulas, automation, and integration capabilities.",
      icon: <AirtableIcon />,
      theme: THEMES.airtable,
    },
    {
      title: "Frontend Developer Certification",
      issuer: "Hackerrank",
      date: "December 2023",
      credentialId: "4685A19A5AEF",
      credentialUrl: "https://www.hackerrank.com/certificates/4685a19a5aef",
      description:
        "Certified in frontend development skills, including HTML, CSS, JavaScript, and React.js, demonstrating the ability to build responsive and interactive web applications.",
      icon: <ReactIcon />,
      theme: THEMES.react,
    },
    {
      title: "JavaScript Developer Certification",
      issuer: "Hackerrank",
      date: "June 2023",
      credentialId: "A7E4602DB735",
      credentialUrl: "https://www.hackerrank.com/certificates/a7e4602db735",
      description:
        "Certified in JavaScript programming, showcasing proficiency in core language features, algorithms, and problem-solving skills essential for modern web development.",
      icon: <JavaScriptIcon />,
      theme: THEMES.javascript,
    },
  ];

  return (
    <section
      id="certifications"
      className="relative flex flex-col items-center justify-center min-h-dvh w-full text-neutral-800 pt-16 pb-16 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl flex flex-col items-center text-center pt-12 font-sans px-4 sm:px-6 lg:px-10 xl:px-16"
      >
        <p className="section-label">Credentials</p>
        <h1 className="section-heading">
          My Credentials —{" "}
          <AuroraText
            className="font-display italic font-bold"
            colors={["#ce2094", "#7324daf8", "#e2258d"]}
            speed={2}
          >
            Certifications & Achievements
          </AuroraText>
        </h1>
        <h2 className="section-subheading">
          Validating expertise, one certificate at a time
        </h2>
      </motion.div>

      <div className="w-full max-w-7xl flex flex-col items-center pt-14 font-sans px-4 sm:px-6 lg:px-10 xl:px-16">
        {certifications.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-neutral-500 py-20"
          >
            <FaCertificate className="text-6xl mx-auto mb-4 opacity-50" />
            <p className="text-lg">No certifications added yet.</p>
            <p className="text-sm mt-2">
              Add your certifications in the Certifications.tsx file
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {certifications.map((cert, index) => {
              const { theme } = cert;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  style={{
                    background: theme.gradient,
                    border: theme.border,
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                      style={{ background: theme.iconBg }}
                    >
                      {cert.icon ?? <FaCertificate className="text-xl" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-neutral-800 leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-sm font-medium text-neutral-500 mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {cert.description && (
                    <p className="text-sm text-neutral-600 mb-4 line-clamp-3 leading-relaxed">
                      {cert.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200/60">
                    <span className="text-xs font-medium text-neutral-400">
                      {cert.date}
                    </span>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
                        style={{ color: theme.link }}
                      >
                        Verify
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    )}
                  </div>

                  {cert.credentialId && (
                    <p className="text-xs text-neutral-400 mt-2 font-mono">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full mt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaTrophy className="text-amber-500 text-xl" />
            <h3 className="text-xl font-bold text-neutral-800">Achievements</h3>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            {achievements.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                style={{
                  background:
                    ACHIEVEMENT_GRADIENTS[index % ACHIEVEMENT_GRADIENTS.length],
                  border: "1px solid rgba(245,158,11,0.2)",
                }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ background: "rgba(245,158,11,0.12)" }}
                  >
                    <FaTrophy className="text-amber-500 text-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold text-neutral-800 leading-snug">
                      {award.title}
                    </h4>
                    <div className="flex items-center gap-1.5 mt-1">
                      {award.icon}
                      <p className="text-sm font-medium text-neutral-500">
                        {award.organization}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  {award.description}
                </p>

                <div className="pt-3 border-t border-amber-200/40">
                  <span className="text-xs font-medium text-neutral-400">
                    {award.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
