import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const Project = forwardRef(({ project, theme }, ref) => (
  <div
    ref={ref}
    data-name="main"
    className="hidden-display flex w-1/4 flex-col justify-center overflow-hidden rounded-md border border-[#2c2c2c] transition-all duration-300 hover:scale-[1.05]"
  >
    <Link to={project.href}>
      <img
        className="h-full w-full"
        src={
          typeof project.imgSrc === "function"
            ? project.imgSrc(theme)
            : project.imgSrc
        }
        alt={project.imgAlt}
      />
    </Link>
    <div
      data-name="techs"
      className="flex flex-wrap gap-4 border-t-4 border-[#3a3939] p-4"
    >
      {project.techs.map((tech, index) => (
        <p
          key={index}
          className="ml-2 rounded-md border-2 border-[#2c2c2c] p-1"
        >
          {tech}
        </p>
      ))}
    </div>
    <div className="mx-auto mt-2 flex w-[20rem] justify-between">
      <div className="group relative">
        <img
          src={
            typeof project.demoImgSrc === "function"
              ? project.demoImgSrc(theme)
              : project.demoImgSrc
          }
          alt=""
          className="relative bottom-0 size-8 object-contain"
        />
        <button className="absolute inset-0 m-auto mt-3 hidden h-full w-full items-center justify-center bg-opacity-50 text-xs font-bold opacity-0 transition-opacity duration-300 group-hover:flex group-hover:opacity-100">
          <p className="hover:underline">Demo</p>
        </button>
      </div>
      <div className="relative flex">
        <img
          src={
            typeof project.logoImgSrc === "function"
              ? project.logoImgSrc(theme)
              : project.logoImgSrc
          }
          alt=""
          className="relative bottom-2 mb-4 size-12 scale-150 object-contain"
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
));

export default Project;
