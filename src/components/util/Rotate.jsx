import { useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Btn from "../btn/Btn";

function Rotate() {
  const anim = useAnimationControls();
  const rotation = useRef(0);

  const press = () => {
    rotation.current += 360;
    anim.start({
      rotate: rotation.current,
    });
  };
  return (
    <>
      <div className="h-fit w-fit flex flex-col justify-center items-center">
        <motion.div
          animate={anim}
          className="rounded-md w-[200px] h-[200px] bg-primary"
          transition={{
            duration: 0.6,
          }}
        ></motion.div>
        <Btn onPress={press} />
      </div>
    </>
  );
}

export default Rotate;
