import React from "react";
import { Element } from "react-scroll"; // For smooth scrolling and linking to the Skills section
import { useTheme } from "./ModeContext.jsx";
import { forwardRef, useRef, useEffect } from "react";
const Skills = forwardRef((props, ref) => {
  const { theme } = useTheme();

  const skillRef1 = useRef(null);
  const skillRef2 = useRef(null);
  const skillRef3 = useRef(null);
  const skillRef4 = useRef(null);
  const skillRef5 = useRef(null);
  const skillRef6 = useRef(null);
  // Add more as needed
  let lastScrollY = 0;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("skills - visible");
          entry.target.classList.add("show");
        } else {
          console.log("skills - invisible");
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.1 },
  );

  const handleScroll = () => {
    let currentScrollY = window.pageYOffset;
    if (currentScrollY > lastScrollY) {
      const refs = [
        skillRef1,
        skillRef2,
        skillRef3,
        skillRef4,
        skillRef5,
        skillRef6,
      ];
      refs.forEach((ref) => {
        if (ref.current) {
          observer.observe(ref.current);
        }
      });
    }
    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);

  return (
    // w-full z-10 min-h-screen
    <div
      ref={ref}
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } z-10 min-h-screen w-full `}
    >
      <style>
        {`
        .hidden-display {
          filter: blur(5px);
          opacity: 0;
          transform: translateX(-100%);
          transition : all 1s;
        }
          .show {
            opacity: 1;
            filter: blur(0);
            transform: translateX(0);
          }
          @media(prefers-reduced-motion) {
            .hidden-display {
              transition: none;
            }
          }
        `}
      </style>
      <Element name="skills">
        <div className="ml-4 pt-20">
          <h2 className="mb-8 ml-[16rem] text-6xl text-yellow-500">Skills</h2>
          {/* Skills Container */}
          {/*  */}
          <div
            data-name="skills-container"
            className="ml-auto flex h-auto w-[70rem] flex-wrap gap-5"
          >
            {/* Tailwind */}
            <a
              ref={skillRef1}
              href="https://tailwindcss.com/"
              target="_blank"
              className=" hidden-display flex h-[14rem] w-1/4 flex-col items-center justify-center rounded-md border border-[#2c2c2c] pt-10 text-center transition-all duration-300 hover:scale-[1.05]"
            >
              <p className="text-lg font-bold ">Tailwind CSS</p>
              <img
                className="h-full w-full scale-50 object-contain"
                src="./tailwind-css.svg"
                alt="Tailwind CSS logo"
              />
            </a>

            {/* React */}
            <a
              ref={skillRef2}
              href="https://react.dev/"
              target="_blank"
              className="hidden-display flex h-[14rem] w-1/4 flex-col items-center justify-center rounded-md border border-[#2c2c2c] pt-10 text-center transition-all duration-300 hover:scale-[1.05]"
            >
              <p className="text-lg font-bold ">React</p>
              {/* w-full h-full object-contain scale-50 */}
              <img
                className="h-full w-full scale-50 object-contain"
                src="./React-icon.svg.png"
                alt="React logo"
              />
            </a>

            {/* Python */}
            <a
              ref={skillRef3}
              href=""
              target="_blank"
              className="hidden-display flex h-[14rem] w-1/4 flex-col items-center justify-center rounded-md border border-[#2c2c2c] pt-10 text-center transition-all duration-300 hover:scale-[1.05]"
            >
              <p className="text-lg font-bold ">P...</p>
              <img
                className="h-full w-full scale-75 object-contain"
                src={
                  theme === "dark"
                    ? "./coming soon.png"
                    : "./coming soon rev.png"
                }
                alt="Vite logo"
              />
            </a>

            {/* Git */}
            <a
              ref={skillRef4}
              href="https://git-scm.com/"
              target="_blank"
              className="hidden-display flex h-[14rem] w-1/4 flex-col items-center justify-center rounded-md border border-[#2c2c2c] pt-10 text-center transition-all duration-300 hover:scale-[1.05]"
            >
              <p className="text-lg font-bold ">Git</p>
              <img
                className="h-full w-full scale-50 object-contain"
                src="./git.svg"
                alt="Git logo"
              />
            </a>

            {/* Node.js */}
            <a
              ref={skillRef5}
              href="https://nodejs.org/en"
              target="_blank"
              className="hidden-display flex h-[14rem] w-1/4 flex-col items-center justify-center rounded-md border border-[#2c2c2c] pt-10 text-center transition-all duration-300 hover:scale-[1.05]"
            >
              <p className="text-lg font-bold ">Node.js</p>
              <img
                className="h-full w-full scale-50 object-contain"
                src="./nodejs.svg"
                alt="Node.js logo"
              />
            </a>

            {/* GitHub */}
            <a
              ref={skillRef6}
              href="https://github.com/"
              target="_blank"
              className=" hidden-display relative flex h-[14rem] w-1/4 flex-col items-center justify-center overflow-hidden rounded-md border border-[#2c2c2c] pt-10 text-center transition-all duration-300 hover:scale-[1.05]"
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
                className="feather feather-github absolute top-8 h-full w-full scale-50 object-contain"
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
///
//////
/////////
