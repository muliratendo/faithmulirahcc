"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
}

export default function ScrollReveal(props: ScrollRevealProps) {
  return (
    <ErrorBoundary>
      <ScrollRevealContent {...props} />
    </ErrorBoundary>
  );
}

function ScrollRevealContent({
  children,
  width = "fit-content",
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef(null);
  // Changed "once: true" to "once: false" to fire animation every time
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkMobile();
    
    // Add resize listener to handle orientation changes or resizing
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // On mobile, we avoid the motion effects by effectively forcing the "visible" state
  // and setting variants that do nothing, or simply rendering a div.
  // Here we maintain the motion.div but neutralize the animation values if isMobile is true.

  const variants = isMobile
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={isMobile ? "visible" : "hidden"}
      animate={isMobile ? "visible" : (isInView ? "visible" : "hidden")}
      transition={{ duration: isMobile ? 0 : 0.8, delay: isMobile ? 0 : delay, ease: "easeOut" }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}
