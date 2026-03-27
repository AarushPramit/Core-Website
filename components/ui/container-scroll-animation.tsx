"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // animation
  const rotate = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <div
      ref={containerRef}
      className="h-[160vh] flex items-center justify-center relative px-24"
    >
      <div style={{ perspective: "1200px" }} className="w-full">

        <motion.div className="text-center mb-10">
          {titleComponent}
        </motion.div>

        <motion.div
          style={{
            rotateX: rotate,
            scale,
            translateY: translate,
          }}
          className="w-full max-w-[1500px] mx-auto h-[70vh] rounded-3xl overflow-hidden shadow-2xl"
        >
          {children}
        </motion.div>

      </div>
    </div>
  );
};