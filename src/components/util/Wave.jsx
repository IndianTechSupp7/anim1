import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useSpring,
} from "framer-motion";

function Wave() {
  const pathRef = useRef(null);
  const baseRef = useRef(null);
  const phase = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: baseRef });
  const waveHeight = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 10,
  });
  useAnimationFrame((t) => {
    phase.set(t / 1000); // seconds as phase
    const d = generateWavePath(phase.get());
    if (pathRef.current) {
      pathRef.current.setAttribute("d", d);
    }
  });

  const generateWavePath = (t) => {
    const amplitude = 10;
    const frequency = 2;
    const width = 200;
    const height = 200 * waveHeight.get();
    const fullh = 200;
    const segments = 2;

    const points = [];
    for (let i = 0; i <= segments; i++) {
      const x = (width / segments) * i;
      const y = height / 2 + Math.sin(t * 2 + i * frequency) * amplitude;
      points.push({ x, y });
    }

    let d = `M ${points[0].x},${points[0].y} `;
    for (let i = 1; i < points.length; i++) {
      const p0 = points[i - 1];
      const p1 = points[i];
      const cx1 = p0.x + (p1.x - p0.x) / 2;
      const cy1 = p0.y;
      const cx2 = p1.x - (p1.x - p0.x) / 2;
      const cy2 = p1.y;
      d += `C ${cx1},${cy1} ${cx2},${cy2} ${p1.x},${p1.y} `;
    }
    const lastPoint = points[points.length - 1];
    d += `L ${lastPoint.x},${fullh} `; // Line to bottom right
    d += `L ${points[0].x},${fullh} `; // Line to bottom left
    d += `Z`;

    return d;
  };


  return (
    <div
      ref={baseRef}
      className="relative flex size-[200px] justify-end items-end overflow-hidden bg-secondray rounded-lg"
    >
      <svg className="size-full">
        <path ref={pathRef} fill="#6040a0" stroke="#6040a0" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default Wave;
