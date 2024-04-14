import React from "react";
import { Element } from "react-scroll"; // For smooth scrolling and linking to the Projects section
import { useTheme } from "./ModeContext";
import { forwardRef } from "react";
import { useRef, useEffect } from "react";
import Experience from "./Experience";
const Projects = forwardRef((props, ref) => {
  const { theme } = useTheme();
  const projectRef1 = useRef(null);
  const projectRef2 = useRef(null);
  const projectRef3 = useRef(null);
  const projectRef4 = useRef(null);
  const projectRef5 = useRef(null);
  // Add more as needed

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 },
    );

    // Observe each ref
    const refs = [
      projectRef1,
      projectRef2,
      projectRef3,
      projectRef4,
      projectRef5,
    ]; // Add more as needed
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup
    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []); // Empty array ensures effect runs only on mount

  return (
    <div
      ref={ref}
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } z-10 min-h-screen w-full pb-40 `}
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
      <div
        data-name="When hover over breaks boundaries pad"
        className="ml-4 pb-3 pt-20"
      >
        <Element name="projects">
          <h2 className="mb-8 ml-[16rem] text-6xl text-yellow-500">Projects</h2>
          {/* Projects Container F*/}
          <div
            data-name="Projects-container"
            className="ml-[12.3%] flex h-auto w-[85rem] flex-wrap gap-5"
          >
            {/* Info Trove */}
            <div
              ref={projectRef1}
              data-name="main"
              className="  hidden-display flex w-1/4 flex-col justify-center overflow-hidden rounded-md border border-[#2c2c2c] transition-all duration-300 hover:scale-[1.05]"
            >
              <a href="https://github.com/InfoTrove/InfoTrove" target="_blank">
                <img
                  className=" h-full w-full "
                  src="./infoTroveWeb.png"
                  alt="Node.js logo"
                />
              </a>
              <div
                data-name="techs"
                className="flex flex-wrap gap-4 border-t-4 border-[#3a3939] p-4"
              >
                <p className="ml-2 rounded-md border-2 border-[#2c2c2c] p-1">
                  GIT
                </p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">API</p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">
                  NodeJS
                </p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">CSS</p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">
                  HTML5
                </p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">Test</p>
              </div>
              <div className="mx-auto mt-2 flex w-[20rem] justify-between">
                <div className="group relative">
                  <img
                    src={
                      theme === "dark" ? "./Demo Dark.png" : "./Demo Light.png"
                    }
                    alt=""
                    className="relative bottom-0 size-8 object-contain"
                  />
                  <button className="absolute inset-0 m-auto mt-3 hidden h-full w-full items-center justify-center bg-opacity-50 text-xs font-bold opacity-0 transition-opacity duration-300 group-hover:flex group-hover:opacity-100">
                    <p className="hover:underline">Demo</p>
                  </button>
                </div>
                <div className="relative flex ">
                  <img
                    src={
                      theme === "dark"
                        ? "./infoTroveRev.png"
                        : "./infoTrove.png"
                    }
                    alt=""
                    className="relative bottom-2 mb-4 size-12 scale-150 object-contain "
                  />
                </div>
                <div className="group relative">
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
                    className="feather feather-github relative bottom-0 size-8 object-contain"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <button className="absolute inset-0 m-auto mt-3 hidden h-full w-full items-center justify-center bg-opacity-50 text-xs font-bold opacity-0 transition-opacity duration-300 group-hover:flex group-hover:opacity-100">
                    <p className="hover:underline">Repo</p>
                  </button>
                </div>
              </div>
            </div>
            {/*theme === "dark" ? "./infoTroveRev.png" : "./infoTrove.png" href="https://github.com/InfoTrove/InfoTrove <div
              data-name="main"
              className="hover:scale-[1.05] transition-all duration-300 w-1/4 border border-[#2c2c2c] flex flex-col justify-center rounded-md overflow-hidden"
            >
              <a
                href="https://github.com/AhmxdNYC/Movies-Project-"
                target="_blank"
              >
                <img
                  className=" w-full h-full "
                  src="./movies.png"
                  alt="Node.js logo"
                />
              </a>
              <div
                data-name="techs"
                className="flex gap-4 p-4 border-t-4 border-[#3a3939] flex-wrap"
              >
                <p className="border-2 border-[#2c2c2c] p-1 rounded-md ml-2">
                  GIT
                </p>
                <p className="border-2 border-[#2c2c2c] p-1 rounded-md">API</p>
                <p className="border-2 border-[#2c2c2c] p-1 rounded-md">
                  NodeJS
                </p>
                <p className="border-2 border-[#2c2c2c] p-1 rounded-md">CSS</p>
                <p className="border-2 border-[#2c2c2c] p-1 rounded-md">
                  HTML5
                </p>
                <p className="border-2 border-[#2c2c2c] p-1 rounded-md">
                  Test
                </p>
              </div>
              <div className="flex justify-between w-[20rem] mx-auto mt-2">
                <div className="relative group">
                  <img
                    src="./Demo Dark.png"
                    alt=""
                    className="relative object-contain size-8 bottom-0"
                  />
                  <button className="mt-3 absolute inset-0 m-auto hidden group-hover:flex items-center justify-center w-full h-full bg-opacity-50 font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="hover:underline">Demo</p>
                  </button>
                </div>
                <div className="flex relative ">
                  <img
                    src="./Movies-App.png"
                    alt=""
                    className="relative object-contain size-12 bottom-2 mb-4 scale-150 "
                  />
                </div>
                <div className="relative group">
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
                    className="feather feather-github relative object-contain size-8 bottom-0"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <button className="mt-3 absolute inset-0 m-auto hidden group-hover:flex items-center justify-center w-full h-full bg-opacity-50 font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="hover:underline">Repo</p>
                  </button>
                </div>
              </div>
            </div> */}
            {/* PortFolio href="https://github.com/AhmxdNYC/PortFolio" src={theme === "dark" ? "./Port.png" : "./Portrev.png"} */}
            <div
              ref={projectRef2}
              data-name="main"
              className="hidden-display flex w-1/4 flex-col justify-center overflow-hidden rounded-md border border-[#2c2c2c] transition-all duration-300 hover:scale-[1.05]"
            >
              <a href="https://github.com/AhmxdNYC/PortFolio" target="_blank">
                <img
                  className=" h-full w-full "
                  src={
                    theme === "dark"
                      ? "./PortFolioWeb.png"
                      : "./PortFolioWebRev.png"
                  }
                  alt="Node.js logo"
                />
              </a>
              <div
                data-name="techs"
                className="flex flex-wrap gap-4 border-t-4 border-[#3a3939] p-4"
              >
                <p className="ml-2 rounded-md border-2 border-[#2c2c2c] p-1">
                  GIT
                </p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">API</p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">
                  NodeJS
                </p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">CSS</p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">
                  HTML5
                </p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">Test</p>
              </div>
              <div className="mx-auto mt-2 flex w-[20rem] justify-between">
                <div className="group relative">
                  <img
                    src={
                      theme === "dark" ? "./Demo Dark.png" : "./Demo Light.png"
                    }
                    alt=""
                    className="relative bottom-0 size-8 object-contain"
                  />
                  <button className="absolute inset-0 m-auto mt-3 hidden h-full w-full items-center justify-center bg-opacity-50 text-xs font-bold opacity-0 transition-opacity duration-300 group-hover:flex group-hover:opacity-100">
                    <p className="hover:underline">Demo</p>
                  </button>
                </div>
                <div className="relative flex ">
                  <img
                    src={theme === "dark" ? "./Port.png" : "./Portrev.png"}
                    alt=""
                    className="relative bottom-2 mb-4 size-12 scale-150 object-contain "
                  />
                </div>
                <div className="group relative">
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
                    className="feather feather-github relative bottom-0 size-8 object-contain"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <button className="absolute inset-0 m-auto mt-3 hidden h-full w-full items-center justify-center bg-opacity-50 text-xs font-bold opacity-0 transition-opacity duration-300 group-hover:flex group-hover:opacity-100">
                    <p className="hover:underline">Repo</p>
                  </button>
                </div>
              </div>
            </div>

            {/* Recipe Wizard href="https://github.com/RecipeWizardTeam/Recipe-Wizard"*/}
            <div
              ref={projectRef3}
              data-name="main"
              className="hidden-display flex w-1/4 flex-col justify-center overflow-hidden rounded-md border border-[#2c2c2c] transition-all duration-300 hover:scale-[1.05]"
            >
              <a
                href="https://github.com/RecipeWizardTeam/Recipe-Wizard"
                target="_blank"
              >
                <img
                  className=" h-full w-full "
                  src="./recipeWizardWeb.png"
                  alt="Node.js logo"
                />
              </a>
              <div
                data-name="techs"
                className="flex flex-wrap gap-4 border-t-4 border-[#3a3939] p-4"
              >
                <p className="ml-2 rounded-md border-2 border-[#2c2c2c] p-1">
                  GIT
                </p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">API</p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">
                  NodeJS
                </p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">CSS</p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">
                  HTML5
                </p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">Test</p>
              </div>
              <div className="mx-auto mt-2 flex w-[20rem] justify-between">
                <div className="group relative">
                  <img
                    src={
                      theme === "dark" ? "./Demo Dark.png" : "./Demo Light.png"
                    }
                    alt=""
                    className="relative bottom-0 size-8 object-contain"
                  />
                  <button className="absolute inset-0 m-auto mt-3 hidden h-full w-full items-center justify-center bg-opacity-50 text-xs font-bold opacity-0 transition-opacity duration-300 group-hover:flex group-hover:opacity-100">
                    <p className="hover:underline">Demo</p>
                  </button>
                </div>
                <div className="relative flex ">
                  <img
                    src="./RecipeWizard-modified.png"
                    alt=""
                    className="relative bottom-2 mb-4 size-12 scale-125 object-contain "
                  />
                </div>
                <div className="group relative">
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
                    className="feather feather-github relative bottom-0 size-8 object-contain"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <button className="absolute inset-0 m-auto mt-3 hidden h-full w-full items-center justify-center bg-opacity-50 text-xs font-bold opacity-0 transition-opacity duration-300 group-hover:flex group-hover:opacity-100">
                    <p className="hover:underline">Repo</p>
                  </button>
                </div>
              </div>
            </div>

            {/* Movies App */}
            <div
              ref={projectRef4}
              data-name="main"
              className="hidden-display flex w-1/4 flex-col justify-center overflow-hidden rounded-md border border-[#2c2c2c] transition-all duration-300 hover:scale-[1.05]"
            >
              <a
                href="https://github.com/AhmxdNYC/Movies-Project-"
                target="_blank"
              >
                <img
                  className=" h-full w-full "
                  src="./movies.png"
                  alt="Node.js logo"
                />
              </a>
              <div
                data-name="techs"
                className="flex flex-wrap gap-4 border-t-4 border-[#3a3939] p-4"
              >
                <p className="ml-2 rounded-md border-2 border-[#2c2c2c] p-1">
                  GIT
                </p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">API</p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">
                  NodeJS
                </p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">CSS</p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">
                  HTML5
                </p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">Test</p>
              </div>
              <div className="mx-auto mt-2 flex w-[20rem] justify-between">
                <div className="group relative">
                  <img
                    src={
                      theme === "dark" ? "./Demo Dark.png" : "./Demo Light.png"
                    }
                    alt=""
                    className="relative bottom-0 size-8 object-contain"
                  />
                  <button className="absolute inset-0 m-auto mt-3 hidden h-full w-full items-center justify-center bg-opacity-50 text-xs font-bold opacity-0 transition-opacity duration-300 group-hover:flex group-hover:opacity-100">
                    <p className="hover:underline">Demo</p>
                  </button>
                </div>
                <div className="relative flex ">
                  <img
                    src={
                      theme === "dark"
                        ? "./Movies-App.png"
                        : "././Movies-App-Rev.png"
                    }
                    alt=""
                    className="relative bottom-2 mb-4 size-12 scale-150 object-contain "
                  />
                </div>
                <div className="group relative">
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
                    className="feather feather-github relative bottom-0 size-8 object-contain"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <button className="absolute inset-0 m-auto mt-3 hidden h-full w-full items-center justify-center bg-opacity-50 text-xs font-bold opacity-0 transition-opacity duration-300 group-hover:flex group-hover:opacity-100">
                    <p className="hover:underline">Repo</p>
                  </button>
                </div>
              </div>
            </div>
            {/* Coming Soon */}
            <div
              ref={projectRef5}
              data-name="main"
              className="hidden-display flex w-1/4 flex-col justify-center overflow-hidden rounded-md border border-[#2c2c2c] transition-all duration-300 hover:scale-[1.05]"
            >
              <a
                href="https://github.com/AhmxdNYC/Movies-Project-"
                target="_blank"
              >
                <img
                  className=" h-full w-full "
                  src={theme === "dark" ? "./soon.jpeg" : "./soonrev.jpg"}
                  alt="Node.js logo"
                />
              </a>
              <div
                data-name="techs"
                className="flex flex-wrap gap-4 border-t-4 border-[#3a3939] p-4"
              >
                <p className="ml-2 rounded-md border-2 border-[#2c2c2c] p-1">
                  GIT
                </p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">API</p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">
                  NodeJS
                </p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">CSS</p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">
                  HTML5
                </p>
                <p className="rounded-md border-2 border-[#2c2c2c] p-1">Test</p>
              </div>
              <div className="mx-auto mt-2 flex w-[20rem] justify-between">
                <div className="group relative">
                  <img
                    src={
                      theme === "dark" ? "./Demo Dark.png" : "./Demo Light.png"
                    }
                    alt=""
                    className="relative bottom-0 size-8 object-contain"
                  />
                  <button className="absolute inset-0 m-auto mt-3 hidden h-full w-full items-center justify-center bg-opacity-50 text-xs font-bold opacity-0 transition-opacity duration-300 group-hover:flex group-hover:opacity-100">
                    <p className="hover:underline">Demo</p>
                  </button>
                </div>
                <div className="relative flex ">
                  <img
                    src={
                      theme === "dark"
                        ? "./coming soon.png"
                        : "./coming soon rev.png"
                    }
                    alt=""
                    className="relative bottom-2 mb-4 size-12 scale-150 object-contain "
                  />
                </div>
                <div className="group relative">
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
                    className="feather feather-github relative bottom-0 size-8 object-contain"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <button className="absolute inset-0 m-auto mt-3 hidden h-full w-full items-center justify-center bg-opacity-50 text-xs font-bold opacity-0 transition-opacity duration-300 group-hover:flex group-hover:opacity-100">
                    <p className="hover:underline">Repo</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Element>
      </div>
    </div>
  );
});

// Export the Projects component
export default Projects;
