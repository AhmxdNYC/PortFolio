import React from "react";
import { Element } from "react-scroll"; // For smooth scrolling and linking to the Projects section
import { useTheme } from "./ModeContext";
import { forwardRef } from "react";
const Projects = forwardRef((props, ref) => {
  const { theme } = useTheme();
  return (
    <div
      ref={ref}
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } w-full z-10 min-h-screen `}
    >
      <div className="pt-20 ml-4">
        <Element name="projects">
          <h2 className="text-yellow-500 text-6xl mb-8 ml-[16rem]">Projects</h2>
          {/* Projects Container */}
          <div
            data-name="Projects-container"
            className="flex flex-wrap w-[70rem] h-auto ml-auto gap-5"
          >
            {/* Info Trove */}
            <a
              href="https://github.com/InfoTrove/InfoTrove"
              target="_blank"
              className="hover:scale-[1.05] transition-all duration-300 w-1/4 pt-10 border border-[#2c2c2c] text-center h-[14rem] flex flex-col justify-center items-center rounded-md"
            >
              <p className="font-bold text-lg ">Info Trove</p>
              <img
                className="w-full h-full object-contain scale-75"
                src={
                  theme === "dark" ? "./infoTroveRev.png" : "./infoTrove.png"
                }
                alt="Tailwind CSS logo"
              />
            </a>

            {/* Coming Soon */}
            <a
              href=""
              target="_blank"
              className="hover:scale-[1.05] transition-all duration-300 w-1/4 pt-10 border border-[#2c2c2c] text-center h-[14rem] flex flex-col justify-center items-center rounded-md"
            >
              <p className="font-bold text-lg ">Fe...</p>
              <img
                className="w-full h-full object-contain scale-75"
                src={
                  theme === "dark"
                    ? "./coming soon.png"
                    : "./coming soon rev.png"
                }
                alt="React logo"
              />
            </a>

            {/* Vite */}
            <a
              href=""
              target="_blank"
              className="hover:scale-[1.05] transition-all duration-300 w-1/4 pt-10 border border-[#2c2c2c] text-center h-[14rem] flex flex-col justify-center items-center rounded-md"
            >
              <p className="font-bold text-lg ">Portfolio</p>
              <img
                className="w-full h-full object-contain scale-90"
                src={theme === "dark" ? "./Port.png" : "./Portrev.png"}
                alt="React logo"
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
              className="hover:scale-[1.05] transition-all duration-300 w-1/4 pt-10 border border-[#2c2c2c] text-center h-[14rem] flex flex-col justify-center items-center overflow-hidden rounded-md"
            >
              <p className="font-bold ">GitHub</p>
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
                className="feather feather-github w-full h-full object-contain scale-50"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </Element>
      </div>
    </div>
  );
});

// Export the Projects component
export default Projects;
