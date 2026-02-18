"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackgroundGlowProps {
  className?: string;
  blobColors?: {
    first?: string;
    second?: string;
    third?: string;
  };
  showGrid?: boolean;
}

const BackgroundGlow: React.FC<BackgroundGlowProps> = ({
  className,
  blobColors = {
    first: "bg-blue-600/20",
    second: "bg-purple-600/20",
    third: "bg-indigo-600/20",
  },
  showGrid = true,
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none select-none z-0",
        className
      )}
      aria-hidden="true"
    >
      {/* Grid Overlay */}
      {showGrid && (
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#9ca3af 1px, transparent 1px), linear-gradient(90deg, #9ca3af 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(to bottom, transparent, black, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black, transparent)",
          }}
        />
      )}

      {/* Main Gradient Blobs */}
      <div className="absolute inset-0 w-full h-full">
        {/* Blob 1 - Top Left/Center */}
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className={cn(
            "absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] mix-blend-screen dark:mix-blend-screen",
            blobColors.first
          )}
        />

        {/* Blob 2 - Bottom Right */}
        <motion.div
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 50, -50, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2,
          }}
          className={cn(
            "absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[140px] mix-blend-screen dark:mix-blend-screen",
            blobColors.second
          )}
        />

        {/* Blob 3 - Center/Random (Subtle) */}
        {blobColors.third && (
          <motion.div
            animate={{
              x: [0, 40, -40, 0],
              y: [0, 40, -40, 0],
              scale: [1, 1.1, 0.9, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 5,
            }}
            className={cn(
              "absolute top-1/3 left-1/3 w-[40vw] h-[40vw] rounded-full blur-[100px] mix-blend-plus-lighter",
              blobColors.third
            )}
          />
        )}
      </div>

      {/* Noise Texture (Optional - adds premium feel) */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('/noise.png')] bg-repeat" />
    </div>
  );
};

export default BackgroundGlow;
