import React from "react";
import { motion, useAnimationControls } from "framer-motion";

function PathText() {
  const control = useAnimationControls();
  const handleEnter = () => {
    control.start({ pathLength: 1 });
  };
  const handleLeave = () => {
    control.start({ pathLength: 0 });
  };
  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative text-3xl"
    >
      Hello World
      <span className="pointer-events-none absolute -top-6 -left-1 -right-4">
        <svg viewBox="0 0 75 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={control}
            transition={{ duration: 0.3, ease: [.71,.05,.02,.83] }}
            d="M42 2.5C36 7 26.5 7.65909 19 8C13.5 8.25 4.49998 8.5 2 12.5C-0.499983 16.5 -0.383612 21.5058 8 24.5C22 29.5 61 25.5 66 22.5C73.9752 17.7149 67.2798 11.0884 64.5 9.5C61 7.5 55 7 48.5 7C42 7 24.5 3.5 23.5 0.5"
            stroke="#6040a0"
            strokeLinecap="butt"
            strokeWidth={0.8}
          />
        </svg>
      </span>
    </div>
  );
}

export default PathText;
