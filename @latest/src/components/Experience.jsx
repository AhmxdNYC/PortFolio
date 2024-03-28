import { Element } from "react-scroll";
import { useGesture } from "@use-gesture/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Experience = () => {
  // State to control the width of the line
  const [lineWidth, setLineWidth] = useState(100);

  // Gesture binding

  return (
    <div className="bg-black w-full z-10 min-h-screen">
      <Element name="experience">
        <div className="p-2 ml-4 mt-[10rem] text-white">
          <h2 className="text-white text-6xl mb-8 ml-[16rem]">Experience</h2>
          <div className="w-[70rem] h-auto ml-auto gap-3">
            <li className="list-none">Place</li>
            <li className="list-none italic">Present</li>
            <li className="">yurr</li>
            <li>boom</li>
            <li>boom</li>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Experience;
