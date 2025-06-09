import { motion } from "framer-motion";
import { useNavbarAnimation } from "../providers/navbarProvider";

const Transition = ({ children }) => {
  const { pageDirection } = useNavbarAnimation();
  const trs = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  };
  const handleAnimationComplete = () => {
    const scrollBehavior = location.pathname === "/" ? "smooth" : "auto";
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: scrollBehavior });
    }, 50);
  };
  return (
    <>
      <motion.div
        className="w-full absolute top-0 left-0"
        animate={{ x: 0 }}
        exit={{ x: `${100 * pageDirection.current}%` }}
        initial={{ x: `${100 * pageDirection.current}%` }}
        transition={trs}
        onAnimationComplete={handleAnimationComplete}
      >
        {children}
      </motion.div>
    </>
  );
};
export default Transition;
