"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"

interface AnimationWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
}

// Fade in from bottom animation
export const FadeInUp = ({ children, className = "", delay = 0 }: AnimationWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
)

// Fade in from left animation
export const FadeInLeft = ({ children, className = "", delay = 0 }: AnimationWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
)

// Fade in from right animation
export const FadeInRight = ({ children, className = "", delay = 0 }: AnimationWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
)

// Scale in animation
export const ScaleIn = ({ children, className = "", delay = 0 }: AnimationWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
)

// Stagger container for animating children
export const StaggerContainer = ({ children, className = "" }: AnimationWrapperProps) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
)

// Stagger item for use within StaggerContainer
export const StaggerItem = ({ children, className = "" }: AnimationWrapperProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
)

// Page transition wrapper
export const PageTransition = ({ children, className = "" }: AnimationWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className={className}
  >
    {children}
  </motion.div>
)
