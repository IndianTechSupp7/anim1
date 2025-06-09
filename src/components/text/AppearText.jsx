import React, { useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { p, span, tr } from "framer-motion/client";

function AppearText({
  children,
  options = {},
  childTransition = {},
  childInitial = { opacity: 0, y: 40 },
  childAnimate = { opacity: 1, y: 0 },
}) {
  const baseRef = useRef(null);
  const inView = useInView(baseRef, { once: true });
  const control = useAnimationControls();

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.01,
        ...options,
      },
    },
  };
  const childVariants = {
    initial: childInitial,
    animate: {
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        ...childTransition,
      },
      ...childAnimate,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("animate");
    }
  }, [inView, control]);

  return (
    <motion.div
      ref={baseRef}
      className="flex whitespace-pre"
      variants={containerVariants}
      initial="initial"
      animate={control}
    >
      {Array.from(children).map((item, index) => (
        <motion.span variants={childVariants} key={index}>
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default AppearText;
