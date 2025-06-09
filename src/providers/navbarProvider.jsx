// NavbarAnimationContext.js
import { createContext, use, useContext, useEffect, useRef } from "react";
import { clamp, useMotionValue, useSpring } from "framer-motion";

const NavbarContext = createContext(null);

export function NavbarProvider({ children }) {
  const rawWidth = useMotionValue(0);
  const rawLeft = useMotionValue(0);

  const currentRef = useRef(null);
  const oldRef = useRef(null);
  const width = useSpring(rawWidth, { stiffness: 300, damping: 30 });
  const left = useSpring(rawLeft, { stiffness: 300, damping: 30 });

  const pageDirection = useRef(1);

  const handleAnimate = (e) => {
    const { width: w, left: l } = e.getBoundingClientRect();
    const parentLeft = e.parentElement.getBoundingClientRect().left;
    const paddedWidth = w + 16;
    const paddedLeft = l - parentLeft - 8;
    rawWidth.set(paddedWidth);
    rawLeft.set(paddedLeft);

    if (currentRef.current && e.id) {
      const newId = parseInt(e.id, 10);
      const currentId = currentRef.current.id
        ? parseInt(currentRef.current.id, 10)
        : null;

      if (currentId !== null) {
        if (newId > currentId) {
          pageDirection.current = 1; // going "forward"
        } else if (newId < currentId) {
          pageDirection.current = -1; // going "backward"
        } else {
          pageDirection.current = 0;
        }
      }
    }

    // Update refs
    oldRef.current = currentRef.current;
    currentRef.current = e;
  };
  useEffect(() => {
    if (!currentRef.current) return;
    handleAnimate(currentRef.current);
  }, []);

  return (
    <NavbarContext.Provider
      value={{
        width,
        left,
        rawWidth,
        rawLeft,
        handleAnimate,
        currentRef,
        pageDirection,
        oldRef,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbarAnimation() {
  return useContext(NavbarContext);
}
