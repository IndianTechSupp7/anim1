import React, { useEffect } from "react";
import { motion, transform, useAnimationControls } from "framer-motion";
import AppearText from "./AppearText";

const Letter = () => {};

const Text = ({ children, anim }) => {
  const childVariant = {
    initial: {
      y: 0,
      transition: {
        ease: "easeInOut",
      },
    },
    animate: {
      y: "-100%",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      transition={{
        staggerChildren: 0.01,
      }}
      animate={anim}
      initial="initial"
      className="flex whitespace-pre overflow-hidden h-[50%]"
    >
      {Array.from(children).map((item, index) => {
        return (
          <motion.div
            key={index}
            variants={childVariant}
            className=" flex flex-col"
          >
            <span className="text-3xl">{item}</span>
            <motion.span initial={{y:-2}} className="text-3xl">{item}</motion.span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

function ZoopText({ children }) {
  const anim = useAnimationControls();

  return (
    <motion.div
      onHoverStart={() => anim.start("animate")}
      onHoverEnd={() => anim.start("initial")}
    >
      <Text anim={anim}>{children}</Text>
    </motion.div>
  );
}

export default ZoopText;
