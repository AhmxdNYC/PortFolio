import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const Project = forwardRef(({ project, theme, className }, ref) => (
  <div
    ref={ref}
    className={`${className} relative transform overflow-hidden rounded-lg border shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg`}
    style={{
      borderColor: theme === "dark" ? "#444" : "#ccc",
    }}
  >
    {/* Project Image */}
    <Link to={project.href} className="block h-full">
      <img
        className="object-cover w-full transition-transform duration-300 h-80 hover:scale-105"
        src={
          typeof project.imgSrc === "function"
            ? project.imgSrc(theme)
            : project.imgSrc
        }
        alt={project.imgAlt}
      />
    </Link>

    {/* Hover Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300 bg-black opacity-0 bg-opacity-70 hover:opacity-100">
      <h3 className="text-lg font-semibold text-white">{project.name}</h3>
      <p className="mt-2 mb-4 text-sm text-gray-300">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {project.techs.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-semibold text-gray-200 bg-gray-800 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center mt-4 space-x-4">
        {/* Demo Button */}
        <button className="px-4 py-2 text-xs font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-700">
          Demo
        </button>

        {/* Repo Button */}
        <button className="px-4 py-2 text-xs font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-700">
          Repo
        </button>
      </div>
    </div>
  </div>
));

export default Project;
