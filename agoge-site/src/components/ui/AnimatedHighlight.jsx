"use client";
import React from "react";
import { motion } from "motion/react";

export const AnimatedHighlight = ({ children }) => {
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
      />
    </span>
  );
};