"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraText } from "../atoms";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  accentColor?: string;
}

const ISSUER_COLORS: Record<string, string> = {
  "MongoDB University":
    "from-green-500/10 to-green-500/5 border-green-200 [--accent:theme(colors.green.500)] [--accent-light:theme(colors.green.100)] [--accent-text:theme(colors.green.700)]",
  Workato:
    "from-blue-500/10 to-blue-500/5 border-blue-200 [--accent:theme(colors.blue.500)] [--accent-light:theme(colors.blue.100)] [--accent-text:theme(colors.blue.700)]",
  Airtable:
    "from-orange-500/10 to-orange-500/5 border-orange-200 [--accent:theme(colors.orange.500)] [--accent-light:theme(colors.orange.100)] [--accent-text:theme(colors.orange.700)]",
  Hackerrank:
    "from-teal-500/10 to-teal-500/5 border-teal-200 [--accent:theme(colors.teal.500)] [--accent-light:theme(colors.teal.100)] [--accent-text:theme(colors.teal.700)]",
};

const ISSUER_ICON_STYLES: Record<string, string> = {
  "MongoDB University": "bg-green-100 text-green-600",
  Workato: "bg-blue-100 text-blue-600",
  Airtable: "bg-orange-100 text-orange-600",
  Hackerrank: "bg-teal-100 text-teal-600",
};

const ISSUER_LINK_STYLES: Record<string, string> = {
  "MongoDB University": "text-green-600 hover:text-green-700",
  Workato: "text-blue-600 hover:text-blue-700",
  Airtable: "text-orange-600 hover:text-orange-700",
  Hackerrank: "text-teal-600 hover:text-teal-700",
};

const Certifications = () => {
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
    },
    {
      title: "Workato Foundation Level 1 & 2",
      issuer: "Workato",
      date: "October 2025",
      credentialId: "88f2w4jfyb8z",
      credentialUrl: "https://verify.skilljar.com/c/88f2w4jfyb8z",
      description:
        "Validated foundational knowledge of Workato's integration platform, covering recipe creation, data transformation, and automation best practices.",
    },
    {
      title: "Airtable Builder",
      issuer: "Airtable",
      date: "January 2026",
      credentialId: "zpc8rsskfd4d",
      credentialUrl: "https://verify.skilljar.com/c/zpc8rsskfd4d",
      description:
        "Recognized for expertise in building and managing Airtable bases, including advanced formulas, automation, and integration capabilities.",
    },
    {
      title: "Frontend Developer Certification",
      issuer: "Hackerrank",
      date: "December 2023",
      credentialId: "4685A19A5AEF",
      credentialUrl: "https://www.hackerrank.com/certificates/4685a19a5aef",
      description:
        "Certified in frontend development skills, including HTML, CSS, JavaScript, and React.js, demonstrating the ability to build responsive and interactive web applications.",
    },
    {
      title: "JavaScript Developer Certification",
      issuer: "Hackerrank",
      date: "June 2023",
      credentialId: "A7E4602DB735",
      credentialUrl: "https://www.hackerrank.com/certificates/a7e4602db735",
      description:
        "Certified in JavaScript programming, showcasing proficiency in core language features, algorithms, and problem-solving skills essential for modern web development.",
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
              const gradientClass =
                ISSUER_COLORS[cert.issuer] ?? ISSUER_COLORS["Hackerrank"];
              const iconClass =
                ISSUER_ICON_STYLES[cert.issuer] ?? "bg-pink-100 text-pink-600";
              const linkClass =
                ISSUER_LINK_STYLES[cert.issuer] ??
                "text-pink-600 hover:text-pink-700";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className={`bg-gradient-to-br ${gradientClass} border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-2.5 rounded-lg flex-shrink-0 ${iconClass}`}
                    >
                      <FaCertificate className="text-xl" />
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
                        className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${linkClass}`}
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
      </div>
    </section>
  );
};

export default Certifications;
