import { useRef, useState } from "react";
import {
  motion,
  useAnimationControls,
  useMotionValue,
  useTransform,
} from "framer-motion";

import Transition from "../components/transition";

import Rotate from "../components/util/Rotate";
import Scroll from "../components/util/Scroll";
import AppearText from "../components/text/AppearText";
import ButtonWrapper from "../components/btn/HoverBtn";
import ZoopText from "../components/text/ZoopText";
import PathText from "../components/text/PathText";
import Wave from "../components/util/Wave";

function Home() {
  return (
    <>
      <div className="relative flex flex-col justify-start items-center w-full h-[200vh]">
        <section className="w-full h-[50vh] flex flex-col items-center justify-center">
          <h1 className="md:text-5xl text-2xl select-none">
            <AppearText>Framer-Motion Animations</AppearText>
          </h1>
          <h2 className="text-lg text-neutral-500 pt-2">
            <AppearText
              options={{
                staggerDirection: -1,
                delayChildren: 0.2,
                staggerChildren: 0.007,
              }}
              childTransition={{ damping: 20 }}
              childInitial={{ y: 20, opacity: 0 }}
            >
              Its a simple animation testing site.
            </AppearText>
          </h2>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-20 justify-items-center">
          <ZoopText>Hello WOrld</ZoopText>
          <PathText />
          <ButtonWrapper />
          <Rotate />
          <Scroll />
          <Wave />
        </section>
      </div>
    </>
  );
}

export default Home;
