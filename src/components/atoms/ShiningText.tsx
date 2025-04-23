import { classnames } from "@/utils";
import { motion } from "motion/react";
import React from "react";

interface ShiningTextProps {
  children: React.ReactNode;
  variant: "light" | "dark";
  className?: string;
}

const ShiningText: React.FC<ShiningTextProps> = ({
  children,
  className,
  variant,
}) => {
  return (
    <motion.span
      className={classnames(
        "relative font-display italic font-bold text-transparent bg-clip-text",
        className,
      )}
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
        backgroundImage: `${variant === "dark" ? "linear-gradient(45deg, #ff8800, #ffea00f8, #ff5100)" : "linear-gradient(45deg, #ce2094, #7324daf8, #e2258d)"}`,
      }}
    >
      {children}
    </motion.span>
  );
};

export default ShiningText;
