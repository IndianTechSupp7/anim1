import React from "react";
import { motion } from "framer-motion";

function Btn({ onPress, text = "Press Me" }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 1.05,
      }}
      onClick={onPress}
      className="select-none flex font-bold tracking-widest justify-center items-center w-[200px] p-5 m-5 bg-secondray rounded-2xl"
    >
      {text}
    </motion.div>
  );
}

export default Btn;
