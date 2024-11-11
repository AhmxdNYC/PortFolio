import { Element } from "react-scroll";
import { useTheme } from "./ModeContext.jsx";
import { forwardRef, useRef } from "react";

const Skills = forwardRef((props, ref) => {
  const { theme } = useTheme();
  const skillRef1 = useRef(null);
  const skillRef2 = useRef(null);
  const skillRef3 = useRef(null);
  const skillRef4 = useRef(null);
  const skillRef5 = useRef(null);
  const skillRef6 = useRef(null);
  const skillRef7 = useRef(null);
  const skillRef8 = useRef(null);

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

  Skills.displayName = "Skills";

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
        skillRef7,
        skillRef8,
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
    <div
      ref={ref}
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } z-10 h-full w-full`}
    >
      <style>
        {`
        .hidden-display {
          filter: blur(5px);
          opacity: 0;
          transform: translateX(-100%);
          transition: all 1s;
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
        <div className="px-4 pt-20">
          <h2 className="mb-8 text-4xl font-bold text-center text-yellow-500 sm:text-5xl lg:text-6xl">
            Skills
          </h2>

          {/* Skills Container */}
          <div
            data-name="skills-container"
            className="grid w-full max-w-screen-lg grid-cols-4 gap-5 mx-auto"
          >
            {/* Tailwind */}
            <a
              ref={skillRef1}
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
              className="hidden-display flex h-32 flex-col items-center justify-center rounded-md border border-[#2c2c2c] p-4 text-center transition-all duration-300 hover:scale-105 sm:h-40 md:h-48 lg:h-56"
            >
              <p className="text-base font-bold sm:text-lg">Tailwind CSS</p>
              <img
                className="object-contain h-16 sm:h-20 md:h-24 lg:h-28"
                src="./tailwind-css.svg"
                alt="Tailwind CSS logo"
              />
            </a>

            {/* React */}
            <a
              ref={skillRef2}
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer"
              className="hidden-display flex h-32 flex-col items-center justify-center rounded-md border border-[#2c2c2c] p-4 text-center transition-all duration-300 hover:scale-105 sm:h-40 md:h-48 lg:h-56"
            >
              <p className="text-base font-bold sm:text-lg">React</p>
              <img
                className="object-contain h-16 sm:h-20 md:h-24 lg:h-28"
                src="./React-icon.svg.png"
                alt="React logo"
              />
            </a>

            {/* Python */}
            <a
              ref={skillRef3}
              href=""
              target="_blank"
              rel="noreferrer"
              className="hidden-display flex h-32 flex-col items-center justify-center rounded-md border border-[#2c2c2c] p-4 text-center transition-all duration-300 hover:scale-105 sm:h-40 md:h-48 lg:h-56"
            >
              <p className="text-base font-bold sm:text-lg">Python</p>
              <img
                className="object-contain h-16 sm:h-20 md:h-24 lg:h-28"
                src={
                  theme === "dark"
                    ? "./coming soon.png"
                    : "./coming soon rev.png"
                }
                alt="Python logo"
              />
            </a>

            {/* Git */}
            <a
              ref={skillRef4}
              href="https://git-scm.com/"
              target="_blank"
              rel="noreferrer"
              className="hidden-display flex h-32 flex-col items-center justify-center rounded-md border border-[#2c2c2c] p-4 text-center transition-all duration-300 hover:scale-105 sm:h-40 md:h-48 lg:h-56"
            >
              <p className="text-base font-bold sm:text-lg">Git</p>
              <img
                className="object-contain h-16 sm:h-20 md:h-24 lg:h-28"
                src="./git.svg"
                alt="Git logo"
              />
            </a>

            {/* Node.js */}
            <a
              ref={skillRef5}
              href="https://nodejs.org/en"
              target="_blank"
              rel="noreferrer"
              className="hidden-display flex h-32 flex-col items-center justify-center rounded-md border border-[#2c2c2c] p-4 text-center transition-all duration-300 hover:scale-105 sm:h-40 md:h-48 lg:h-56"
            >
              <p className="text-base font-bold sm:text-lg">Node.js</p>
              <img
                className="object-contain h-16 sm:h-20 md:h-24 lg:h-28"
                src="./nodejs.svg"
                alt="Node.js logo"
              />
            </a>

            {/* GitHub */}
            <a
              ref={skillRef6}
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hidden-display flex h-32 flex-col items-center justify-center rounded-md border border-[#2c2c2c] p-4 text-center transition-all duration-300 hover:scale-105 sm:h-40 md:h-48 lg:h-56"
            >
              <p className="text-base font-bold sm:text-lg">GitHub</p>
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
                className="h-16 sm:h-20 md:h-24 lg:h-28"
              ></svg>
            </a>

            {/* PostgreSQL */}
            <a
              ref={skillRef7}
              href="https://www.postgresql.org/"
              target="_blank"
              rel="noreferrer"
              className="hidden-display flex h-32 flex-col items-center justify-center rounded-md border border-[#2c2c2c] p-4 text-center transition-all duration-300 hover:scale-105 sm:h-40 md:h-48 lg:h-56"
            >
              <p className="text-base font-bold sm:text-lg">PostgreSQL</p>
              <img
                className="object-contain h-16 sm:h-20 md:h-24 lg:h-28"
                src="./postgresql.png"
                alt="PostgreSQL logo"
              />
            </a>

            {/* Express.js */}
            <a
              ref={skillRef8}
              href="https://expressjs.com/"
              target="_blank"
              rel="noreferrer"
              className="hidden-display flex h-32 flex-col items-center justify-center rounded-md border border-[#2c2c2c] p-4 text-center transition-all duration-300 hover:scale-105 sm:h-40 md:h-48 lg:h-56"
            >
              <p className="text-base font-bold sm:text-lg">Express.js</p>
              <svg
                width="64"
                height="64"
                viewBox="0 -181.5 512 512"
                fill={theme === "dark" ? "white" : "black"}
                className="h-16 sm:h-20 md:h-24 lg:h-28"
              ></svg>
            </a>
          </div>
        </div>
      </Element>
    </div>
  );
});

export default Skills;
