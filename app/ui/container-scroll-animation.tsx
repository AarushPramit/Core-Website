"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ContainerScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div ref={ref} className="h-[200vh] flex items-center justify-center">
      <motion.div style={{ scale }}>
        {children}
      </motion.div>
    </div>
  );
};
