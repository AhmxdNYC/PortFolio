import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const Project = forwardRef(({ project, theme, className }, ref) => (
  <div
    ref={ref}
    className={`${className} flex transform flex-col rounded-lg border border-gray-700 bg-neutral-800 p-4 shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg`}
  >
    <Link
      to={project.href}
      className="relative w-full h-48 overflow-hidden rounded-md"
    >
      <img
        className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        src={
          typeof project.imgSrc === "function"
            ? project.imgSrc(theme)
            : project.imgSrc
        }
        alt={project.imgAlt}
      />
    </Link>

    {/* Project Details */}
    <div className="p-4 space-y-2">
      <h3 className="text-lg font-semibold text-center text-gray-100">
        {project.name}
      </h3>
      <p className="text-sm text-center text-gray-400">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap justify-center gap-2 pt-3 border-t border-gray-700">
        {project.techs.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-semibold text-gray-200 bg-gray-700 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-around mt-4">
        <div className="relative group">
          <img
            src={
              typeof project.demoImgSrc === "function"
                ? project.demoImgSrc(theme)
                : project.demoImgSrc
            }
            alt="Demo preview"
            className="object-contain w-12 h-12 rounded opacity-80 group-hover:opacity-100"
          />
          <button className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-100 bg-black bg-opacity-50 rounded-md opacity-0 group-hover:opacity-100">
            Demo
          </button>
        </div>
        <div className="flex items-center">
          <img
            src={
              typeof project.logoImgSrc === "function"
                ? project.logoImgSrc(theme)
                : project.logoImgSrc
            }
            alt="Project logo"
            className="object-contain w-10 h-10"
          />
        </div>
        <div className="relative group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke={theme === "dark" ? "white" : "black"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 transition-transform duration-300 transform group-hover:scale-110"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <button className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-100 bg-black bg-opacity-50 rounded-md opacity-0 group-hover:opacity-100">
            Repo
          </button>
        </div>
      </div>
    </div>
  </div>
));

export default Project;
