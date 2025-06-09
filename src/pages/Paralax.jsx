import React, { useRef } from "react";
import ReactLenis from "lenis/react";
import { MapPin } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

function Paralax() {
  return (
    <div className="relative flex flex-col w-full">
      <ReactLenis root options={{ lerp: 0.05 }}>
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
}

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      className="relative w-full"
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
    >
      <CenterImage />
      <ParalaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-bg/0 to-bg" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  return (
    <motion.div
      className="sticky w-full h-screen top-0"
      style={{
        opacity,
        backgroundSize,
        clipPath,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParalaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px] relative z-10">
      <ParalaxImage
        src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParalaxImage
        src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParalaxImage
        src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParalaxImage
        src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParalaxImage = ({ className = "", src, alt = "", start, end }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: [`${start}px end`, `end ${end * -1}px`],
    target: ref,
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      style={{ opacity, transform }}
      ref={ref}
      src={src}
      alt={alt}
      className={className}
    />
  );
};

const Schedule = () => {
  return (
    <div className="w-3xl h-screen mx-auto">
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="uppercase text-2xl mb-20"
      >
        Launch Schedule
      </motion.h1>
      <div>
        <ScheduleElement name={"NG-21"} date={"DEC 9TH"} place={"FLORIDA"} />
        <ScheduleElement name={"NG-21"} date={"DEC 9TH"} place={"FLORIDA"} />
        <ScheduleElement name={"NG-21"} date={"DEC 9TH"} place={"FLORIDA"} />
        <ScheduleElement name={"NG-21"} date={"DEC 9TH"} place={"FLORIDA"} />
        <ScheduleElement name={"NG-21"} date={"DEC 9TH"} place={"FLORIDA"} />
        <ScheduleElement name={"NG-21"} date={"DEC 9TH"} place={"FLORIDA"} />
        <ScheduleElement name={"NG-21"} date={"DEC 9TH"} place={"FLORIDA"} />
      </div>
    </div>
  );
};

const ScheduleElement = ({ name, date, place }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="px-3 pb-9 mb-9 flex justify-between border-b border-zinc-800"
    >
      <div>
        <p className="text-xl mb-1.5">{name}</p>
        <p className="text-sm text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center">
        <p className="text-sm text-zinc-500">{place}</p>
        <MapPin color="#71717b" height={"14px"} />
      </div>
    </motion.div>
  );
};

export default Paralax;
