import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const Project = forwardRef(({ project, theme, className }, ref) => (
  <div
    ref={ref}
    className={`${className} flex transform flex-col rounded-lg border-4 border-double border-gray-600 shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl`}
    style={{
      borderColor: theme === "dark" ? "#444" : "#aaa",
      boxShadow: "4px 4px 0px rgba(0, 0, 0, 0.2)", // Manga-style shadow
    }}
  >
    {/* Project Image */}
    <Link
      to={project.href}
      className="relative w-full overflow-hidden rounded-t-md"
    >
      <img
        className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
        src={
          typeof project.imgSrc === "function"
            ? project.imgSrc(theme)
            : project.imgSrc
        }
        alt={project.imgAlt}
      />
    </Link>

    {/* Project Info Below Image with Manga Styling */}
    <div
      className="p-4 space-y-3 rounded-b-lg bg-neutral-800"
      style={{
        backgroundImage:
          theme === "dark"
            ? "url('/path/to/dark-dots.png')"
            : "url('/path/to/light-dots.png')", // Manga halftone effect
        backgroundSize: "10px 10px",
      }}
    >
      <h3 className="text-xl font-semibold text-center text-gray-100">
        {project.name}
      </h3>
      <p className="text-sm text-center text-gray-400">{project.description}</p>

      {/* Tech Stack with Manga Bubbles */}
      <div className="flex flex-wrap justify-center gap-2 pt-3 border-t-2 border-gray-700">
        {project.techs.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-semibold text-gray-200 bg-gray-700 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-around mt-4 space-x-2">
        <Link
          to={project.demoLink}
          className="px-3 py-2 text-xs font-semibold text-white bg-gray-700 rounded-md hover:bg-gray-600"
        >
          Demo
        </Link>
        <Link
          to={project.repoLink}
          className="px-3 py-2 text-xs font-semibold text-white bg-gray-700 rounded-md hover:bg-gray-600"
        >
          Repo
        </Link>
      </div>
    </div>
  </div>
));

export default Project;
