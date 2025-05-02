"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.getElementById("navbar")?.classList.add("hidden");
  });

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-backgroundBlue text-neutral-200 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-neutral-400 opacity-40 blur-2xl"
            style={{
              width: `${40 + i * 10}px`,
              height: `${40 + i * 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ["0%", "10%", "0%"],
              x: ["0%", "5%", "0%"],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div className="z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-7xl font-extrabold text-white hover:scale-120"
        >
          404
        </motion.h1>
        <p className="mt-4 text-lg text-neutral-300">
          You’ve drifted into the void.
        </p>
        <p className="mb-10 text-sm text-neutral-400">
          But don’t worry, Deepesh has left a portal for you 👇
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            🛸 Beam me home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
