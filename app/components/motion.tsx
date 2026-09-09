"use client";

import {
  motion,
  MotionConfig,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

/** Centralized motion language: measured, readable, and easy to tune. */
export const motionTokens = {
  duration: { fast: 0.22, normal: 0.46, slow: 0.62 },
  ease: [0.22, 1, 0.36, 1] as const,
  distance: { compact: 12, standard: 20, mobile: 14 },
  viewport: { once: true, amount: 0.18 },
  stagger: 0.07,
};

export const revealUp: Variants = {
  hidden: { opacity: 0, y: motionTokens.distance.standard },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration.normal, ease: motionTokens.ease },
  },
};

export const revealDown: Variants = {
  hidden: { opacity: 0, y: -motionTokens.distance.compact },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration.normal, ease: motionTokens.ease },
  },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.985 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: motionTokens.duration.slow, ease: motionTokens.ease },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: motionTokens.stagger, delayChildren: 0.04 },
  },
};

type RevealProps = HTMLMotionProps<"div"> & { children: ReactNode };

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function FadeUp({ children, ...props }: RevealProps) {
  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={motionTokens.viewport}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeDown({ children, ...props }: RevealProps) {
  return (
    <motion.div
      variants={revealDown}
      initial="hidden"
      whileInView="visible"
      viewport={motionTokens.viewport}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, ...props }: RevealProps) {
  return (
    <motion.div
      variants={scaleReveal}
      initial="hidden"
      whileInView="visible"
      viewport={motionTokens.viewport}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, ...props }: RevealProps) {
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={motionTokens.viewport} {...props}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...props }: RevealProps) {
  return <motion.div variants={revealUp} {...props}>{children}</motion.div>;
}
