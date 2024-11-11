import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const Project = forwardRef(({ project, theme, className }, ref) => (
  <div
    ref={ref}
    className={`${className} flex transform flex-col rounded-lg border shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg`}
    style={{
      borderColor: theme === "dark" ? "#444" : "#ccc",
    }}
  >
    {/* Project Image */}
    <Link
      to={project.href}
      className="relative w-full overflow-hidden rounded-t-md"
    >
      <img
        className="object-cover w-full transition-transform duration-300 h-72 hover:scale-105"
        src={
          typeof project.imgSrc === "function"
            ? project.imgSrc(theme)
            : project.imgSrc
        }
        alt={project.imgAlt}
      />
    </Link>

    {/* Project Info Below Image */}
    <div className="p-4 space-y-2 rounded-b-lg bg-neutral-800">
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
        <Link
          to={project.demoLink}
          className="px-4 py-2 text-xs font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-700"
        >
          Demo
        </Link>
        <Link
          to={project.repoLink}
          className="px-4 py-2 text-xs font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-700"
        >
          Repo
        </Link>
      </div>
    </div>
  </div>
));

export default Project;
