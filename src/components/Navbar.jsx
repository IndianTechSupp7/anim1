import React, { use, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useNavbarAnimation } from "../providers/navbarProvider";

const NavLink = React.forwardRef(({ to, text, id }, ref) => {
  const { handleAnimate } = useNavbarAnimation();

  return (
    <Link
      id={id}
      ref={ref}
      to={to}
      onClick={(e) => handleAnimate(e.target)}
      className="select-none"
    >
      {text}
    </Link>
  );
});

function Navbar() {
  const { width, left, currentRef } = useNavbarAnimation();
  const location = useLocation();

  /*useEffect(() => {
    if (!currentRef.current) return;

    const { width, left } = currentRef.current.getBoundingClientRect();
    const parentLeft =
      currentRef.current.parentElement.getBoundingClientRect().left;

    const paddedWidth = width + 16;
    const paddedLeft = left - parentLeft - 8;
    rawWidth.set(paddedWidth);
    rawLeft.set(paddedLeft);
  }, [location]);
  */
  return (
    <div className="fixed z-50 top-0 left-0 w-full p-5 flex items-center justify-center">
      <div className="relative flex items-center justify-center gap-5">
        <NavLink
          id="0"
          ref={location.pathname === "/" ? currentRef : null}
          to="/"
          text="Home"
        />
        <NavLink
          id="1"
          ref={location.pathname === "/paralax" ? currentRef : null}
          to="/paralax"
          text="Paralax"
        />
        <NavLink
          id="2"
          ref={location.pathname === "/premo" ? currentRef : null}
          to="/premo"
          text="Premo"
        />
        <motion.span
          style={{ width, left }}
          className="h-full w-0 overflow-hidden py-4 bg-white rounded-xl absolute left-1/2 top-1/2 -translate-y-1/2 mix-blend-difference pointer-events-none"
        />
      </div>
    </div>
  );
}

export default Navbar;
