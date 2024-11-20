// Project.js
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const Project = forwardRef(({ project, theme, className }, ref) => (
  <div
    ref={ref}
    className={`${className} relative flex transform flex-col rounded-lg border-4 border-black p-4 shadow-lg transition-transform duration-300 hover:scale-105`}
    style={{
      borderColor: theme === "dark" ? "#333" : "#222",
      background: theme === "dark" ? "#1a1a1a" : "#f4f4f4",
      boxShadow: "5px 5px 0px rgba(0, 0, 0, 0.3)", // Manga-style shadow
      transform: "skewY(-6deg)",
    }}
  >
    {/* "New!" Badge */}
    {project.isNew && (
      <div className="absolute z-10 px-3 py-1 text-xs font-bold text-white bg-yellow-400 rounded-bl-lg shadow-md left-2 top-2">
        New!
      </div>
    )}
    {project.updated && (
      <div className="absolute z-10 px-3 py-1 text-xs font-bold text-white bg-yellow-400 rounded-bl-lg shadow-md left-2 top-2">
        Updated!
      </div>
    )}
    {project.online && (
      <button className="absolute z-10 px-3 py-1 text-xs font-bold text-white bg-green-400 rounded-bl-lg shadow-md left-24 top-2">
        online!
      </button>
    )}

    {/* Project Image with Comic-Style Border */}
    <Link
      to={project.href}
      className="relative w-full overflow-hidden rounded-t-lg"
      style={{ border: "4px solid #333" }}
    >
      <img
        className="object-contain w-full h-48 transition-transform duration-300 hover:scale-105"
        src={
          typeof project.imgSrc === "function"
            ? project.imgSrc(theme)
            : project.imgSrc
        }
        alt={project.imgAlt}
      />
    </Link>

    {/* Project Info with Comic-Style Text */}
    <div className="p-3 space-y-2 border-t-4 border-black rounded-b-lg bg-neutral-800">
      {/* Title and Logo */}
      <div className="flex items-center justify-center space-x-2">
        <h3 className="text-2xl font-extrabold text-center text-white">
          {project.name}
        </h3>
        {project.logoImgSrc && (
          <img
            src={
              typeof project.logoImgSrc === "function"
                ? project.logoImgSrc(theme)
                : project.logoImgSrc
            }
            alt={`${project.name} logo`}
            className="object-contain w-8 h-8"
          />
        )}
      </div>

      {/* Description */}
      <p className="text-sm italic font-semibold text-center text-gray-600">
        {project.description}
      </p>

      {/* Tech Stack with Comic Bubble Styling */}
      <div className="flex flex-wrap justify-center gap-2 pt-3 mb-3 border-t-2 border-gray-500 border-dashed">
        {project.techs.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-semibold text-white bg-black rounded-full shadow-lg"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center space-x-3">
        <Link
          to={project.demoLink}
          className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500"
        >
          Demo
        </Link>
        <Link
          to={project.repoHref}
          className="px-4 py-2 text-xs font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-700"
        >
          Repo
        </Link>
      </div>
    </div>
  </div>
));

export default Project;
