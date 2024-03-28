import { Element } from "react-scroll";
import { useGesture } from "@use-gesture/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Experience = () => {
  // State to control the width of the line
  const [lineWidth, setLineWidth] = useState(100);

  // Gesture binding


  return (
    <div className="bg-black w-full z-10 h-[50rem]">
      <Element name="experience">
        <div className="ml-[4rem] mt-[20rem]">
          <h2 className="text-white text-6xl">Experience</h2>
          <ul className="text-white mt-[2rem] ml-[20rem] text-xl list-disc">
            <li className="list-none">Place</li>
            <li className="list-none italic">Present</li>
            <li className="">yurr</li>
            <li>boom</li>
            <li>boom</li>
          </ul>
          <ul className="text-white mt-[2rem] ml-[20rem] text-xl list-disc">
            <li className="list-none">Place</li>
            <li className="list-none italic">Present</li>
            <li className="">yurr</li>
            <li>boom</li>
            <li>boom</li>
          </ul>
  
        </div>
      </Element>
    </div>
  );
};

export default Experience;
