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
      <div className="absolute left-2 top-2 z-10 rounded-bl-lg bg-yellow-400 px-3 py-1 text-xs font-bold text-black shadow-md">
        New!
      </div>
    )}

    {/* Project Image with Comic-Style Border */}
    <Link
      to={project.href}
      className="relative w-full overflow-hidden rounded-t-lg"
      style={{ border: "4px solid #333" }}
    >
      <img
        className="h-48 w-full object-contain transition-transform duration-300 hover:scale-105"
        src={
          typeof project.imgSrc === "function"
            ? project.imgSrc(theme)
            : project.imgSrc
        }
        alt={project.imgAlt}
      />
    </Link>

    {/* Project Info with Comic-Style Text */}
    <div className="space-y-2 rounded-b-lg border-t-4 border-black bg-white p-3">
      {/* Title and Logo */}
      <div className="flex items-center justify-center space-x-2">
        <h3 className="text-center text-2xl font-extrabold text-gray-800">
          {project.name}
        </h3>
        <img
          src={
            typeof project.logoImgSrc === "function"
              ? project.logoImgSrc(theme)
              : project.logoImgSrc
          }
          alt={`${project.name} logo`}
          className="h-8 w-8 object-contain"
        />
      </div>

      {/* Description */}
      <p className="text-center text-sm font-semibold italic text-gray-600">
        {project.description}
      </p>

      {/* Tech Stack with Comic Bubble Styling */}
      <div className="mb-3 flex flex-wrap justify-center gap-2 border-t-2 border-dashed border-gray-500 pt-3">
        {project.techs.map((tech, index) => (
          <span
            key={index}
            className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white shadow-lg"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center space-x-3">
        <Link
          to={project.demoLink}
          className="rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500"
        >
          Demo
        </Link>
        <Link
          to={project.repoHref}
          className="rounded-md bg-gray-800 px-4 py-2 text-xs font-semibold text-white hover:bg-gray-700"
        >
          Repo
        </Link>
      </div>
    </div>
  </div>
));

export default Project;
