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
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "MongoDb Certified Associate Developer",
      issuer: "MongoDB University",
      date: "August 2024",
      credentialId: "MDBxi9ie30a7m",
      credentialUrl: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/dd09f6ac-9217-4db5-9ce9-c3747c6e8782-deepesh-jain-59a2fd65-5026-480a-8808-4223fecf5ab3-certificate.pdf",
      description: "Demonstrated proficiency in MongoDB development, including schema design, aggregation, and performance optimization.",
    },
    {
      title: "Workato Foundation Level 1 & 2",
      issuer: "Workato",
      date: "October 2025",
      credentialId: "88f2w4jfyb8z",
      credentialUrl: "https://verify.skilljar.com/c/88f2w4jfyb8z",
      description: "Validated foundational knowledge of Workato's integration platform, covering recipe creation, data transformation, and automation best practices.",
    },
    {
      title: "Airtable Builder",
      issuer: "Airtable",
      date: "January 2026",
      credentialId: "zpc8rsskfd4d",
      credentialUrl: "https://verify.skilljar.com/c/zpc8rsskfd4d",
      description: "Recognized for expertise in building and managing Airtable bases, including advanced formulas, automation, and integration capabilities.",
    },
    {
      title: "Frontend Developer Certification",
      issuer: "Hackerrank",
      date: "December 2023",
      credentialId: "4685A19A5AEF",
      credentialUrl: "https://www.hackerrank.com/certificates/4685a19a5aef",
      description: "Certified in frontend development skills, including HTML, CSS, JavaScript, and React.js, demonstrating the ability to build responsive and interactive web applications.",
    },
    {
      title: "JavaScript Developer Certification",
      issuer: "Hackerrank",
      date: "June 2023",
      credentialId: "A7E4602DB735",
      credentialUrl: "https://www.hackerrank.com/certificates/a7e4602db735",
      description: "Certified in JavaScript programming, showcasing proficiency in core language features, algorithms, and problem-solving skills essential for modern web development.",
    },
  ];

  return (
    <section
      id="certifications"
      className="relative flex flex-col items-center justify-center min-h-dvh w-full text-neutral-800 pt-16 pb-12 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl flex flex-col items-center text-center pt-12 font-sans px-4 sm:px-6 lg:px-10 xl:px-16"
      >
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight max-w-6xl">
          My Credentials -{" "}
          <AuroraText
            className="font-display italic font-bold"
            colors={["#ce2094", "#7324daf8", "#e2258d"]}
            speed={2}
          >
            Certifications & Achievements
          </AuroraText>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl mt-2 text-neutral-600">
          Validating expertise, one certificate at a time
        </h2>
      </motion.div>

      <div className="w-full max-w-7xl flex flex-col items-center pt-16 font-sans px-4 sm:px-6 lg:px-10 xl:px-16">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white border border-neutral-200 rounded-xl p-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:shadow-[0_0_32px_rgba(34,_42,_53,_0.12),_0_2px_2px_rgba(0,_0,_0,_0.08),_0_0_0_1px_rgba(34,_42,_53,_0.06),_0_0_8px_rgba(34,_42,_53,_0.12),_0_24px_96px_rgba(47,_48,_55,_0.08),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-pink-100 rounded-lg">
                      <FaCertificate className="text-pink-600 text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-neutral-800">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-neutral-600 mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </div>

                {cert.description && (
                  <p className="text-sm text-neutral-600 mb-4 line-clamp-3">
                    {cert.description}
                  </p>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <span className="text-xs text-neutral-500">{cert.date}</span>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-pink-600 hover:text-pink-700 text-sm font-medium transition-colors"
                    >
                      Verify
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>

                {cert.credentialId && (
                  <p className="text-xs text-neutral-400 mt-2">
                    ID: {cert.credentialId}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;

