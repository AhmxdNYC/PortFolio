import React from "react";
import { Element } from "react-scroll";
import { useTheme } from "./ModeContext";
const Experience = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } z-10 min-h-screen w-full `}
    >
      <Element name="experience">
        <div className="ml-4 pt-20">
          <h2 className="mb-8 ml-[16rem] text-6xl text-yellow-500">
            Experience
          </h2>
          {/* Experience Container */}
          <div
            data-name="Experience-container"
            className="ml-auto flex h-auto w-[70rem] flex-col gap-5 "
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
