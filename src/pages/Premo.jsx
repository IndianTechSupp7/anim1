import React from "react";
import MagnetLines from "../components/util/MagnetLines";
import { div } from "framer-motion/client";

function Premo() {
  return (
    <div className="w-full h-screen flex flex-col items-center pt-10">
      <Header />
    </div>
  );
}

const Header = () => {
  return (
    <div className="relative w-full flex justify-center items-center">
      <h1 className="text-5xl">Hello World</h1>
      <MagnetLines
        className="absolute -z-10 p-20"
        containerWidth="100%"
        containerHeight="300px"
        lineColor="#202020"
        rows={5}
        columns={30}
        lineHeight="20px"
        lineWidth="2px"
      />
    </div>
  );
};

export default Premo;
