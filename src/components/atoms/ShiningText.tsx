import { motion } from "motion/react";
import React from "react";

interface ShiningTextProps {
  children: React.ReactNode;
}

const ShiningText: React.FC<ShiningTextProps> = ({ children }) => {
  return (
    <motion.span
      className="relative font-display italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        backgroundPosition: {
          duration: 3,
          ease: "linear",
          repeat: Infinity,
        },
        filter: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        },
      }}
      style={{
        backgroundSize: "200% 200%",
        backgroundImage: "linear-gradient(45deg, #ff8800, #ffea00f8, #ff5100)",
      }}
    >
      { children }
    </motion.span>
  );
};

export default ShiningText;
