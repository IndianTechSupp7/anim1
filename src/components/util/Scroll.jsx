import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function Scroll() {
  const base = useRef(null)
  const { scrollYProgress } = useScroll({target: base, offset: ["start end", "end start"]});
  return (
    <motion.div ref={base} className="rect bg-secondray flex justify-end items-center">
      <motion.div
        className="rect h-full origin-bottom"
        style={{ scaleY: scrollYProgress }}
      ></motion.div>
    </motion.div>
  );
}

export default Scroll;
