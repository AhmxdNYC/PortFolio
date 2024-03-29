import React from "react";
import { Element } from "react-scroll";
import { useTheme } from "./ModeContext";
const Experience = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } w-full z-10 min-h-screen `}
    >
      <Element name="experience">
        <div className="pt-20 ml-4">
          <h2 className="text-yellow-500 text-6xl mb-8 ml-[16rem]">
            Experience
          </h2>
          {/* Experience Container */}
          <div
            data-name="Experience-container"
            className="flex flex-col w-[70rem] h-auto ml-auto gap-5 "
          >
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
