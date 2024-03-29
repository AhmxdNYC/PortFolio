import React from "react";
import { Element } from "react-scroll"; // For smooth scrolling and linking to the Skills section
import { useTheme } from "./ModeContext.jsx";
import { forwardRef } from "react";
const Skills = forwardRef((props, ref) => {
  const { theme } = useTheme();
  return (
    // w-full z-10 min-h-screen
    <div
      ref={ref}
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } w-full z-10 min-h-screen `}
    >
      <Element name="skills">
        <div className="pt-20 ml-4">
          <h2 className="text-yellow-500 text-6xl mb-8 ml-[16rem]">Skills</h2>
          {/* Skills Container */}
          <div
            data-name="skills-container"
            className="flex flex-wrap w-[70rem] h-auto ml-auto gap-5"
          >
            {/* Tailwind */}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="hover:scale-[1.05] transition-all duration-300 w-1/4 pt-10 border border-[#2c2c2c] text-center h-[14rem] flex flex-col justify-center items-center rounded-md"
            >
              <p className="font-bold text-lg ">Tailwind CSS</p>
              <img
                className="w-full h-full object-contain scale-50"
                src="./tailwind-css.svg"
                alt="Tailwind CSS logo"
              />
            </a>

            {/* React */}
            <a
              href="https://react.dev/"
              target="_blank"
              className="hover:scale-[1.05] transition-all duration-300 w-1/4 pt-10 border border-[#2c2c2c] text-center h-[14rem] flex flex-col justify-center items-center rounded-md"
            >
              <p className="font-bold text-lg ">React</p>
              {/* w-full h-full object-contain scale-50 */}
              <img
                className="w-full h-full object-contain scale-50"
                src="./React-icon.svg.png"
                alt="React logo"
              />
            </a>

            {/* Python */}
            <a
              href=""
              target="_blank"
              className="hover:scale-[1.05] transition-all duration-300 w-1/4 pt-10 border border-[#2c2c2c] text-center h-[14rem] flex flex-col justify-center items-center rounded-md"
            >
              <p className="font-bold text-lg ">P...</p>
              <img
                className="w-full h-full object-contain scale-75"
                src={
                  theme === "dark"
                    ? "./coming soon.webp"
                    : "./coming soon rev.png"
                }
                alt="Vite logo"
              />
            </a>

            {/* Git */}
            <a
              href="https://git-scm.com/"
              target="_blank"
              className="hover:scale-[1.05] transition-all duration-300 w-1/4 pt-10 border border-[#2c2c2c] text-center h-[14rem] flex flex-col justify-center items-center rounded-md"
            >
              <p className="font-bold text-lg ">Git</p>
              <img
                className="w-full h-full object-contain scale-50"
                src="./git.svg"
                alt="Git logo"
              />
            </a>

            {/* Node.js */}
            <a
              href="https://nodejs.org/en"
              target="_blank"
              className="hover:scale-[1.05] transition-all duration-300 w-1/4 pt-10 border border-[#2c2c2c] text-center h-[14rem] flex flex-col justify-center items-center rounded-md"
            >
              <p className="font-bold text-lg ">Node.js</p>
              <img
                className="w-full h-full object-contain scale-50"
                src="./nodejs.svg"
                alt="Node.js logo"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              className="relative hover:scale-[1.05] transition-all duration-300 w-1/4 pt-10 border border-[#2c2c2c] text-center h-[14rem] flex flex-col justify-center items-center overflow-hidden rounded-md"
            >
              <p className="absolute top-[1.7rem] font-bold ">GitHub</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute top-8 feather feather-github w-full h-full object-contain scale-50"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </Element>
    </div>
  );
});

// Export the Skills component
export default Skills;
