// Projects.js
import { Element } from "react-scroll";
import { useTheme } from "../../components/ModeContext";
import { forwardRef, useRef, useEffect } from "react";
import Project from "./Project/Project";
import projectsData from "../../components/ProjectData";

const Projects = forwardRef((props, ref) => {
  const { theme } = useTheme();
  const projectRefs = Array.from({ length: projectsData.length }, () =>
    useRef(null),
  );

  Projects.displayName = "Projects";

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

    projectRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      projectRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [projectRefs]);

  return (
    <div
      ref={ref}
      className={`relative z-10 w-full ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
      style={{
        backgroundImage: `url(${
          theme === "dark"
            ? "/path/to/dark-halftone-pattern.png"
            : "/path/to/light-halftone-pattern.png"
        })`,
        backgroundSize: "cover",
        padding: "1rem",
      }}
    >
      <style>
        {`
          .hidden-display {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.8s ease;
          }
          .show {
            opacity: 1;
            transform: translateY(0);
          }
          .projects-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: auto;
          }
        `}
      </style>
      <Element name="projects">
        <h2 className="mb-8 text-5xl font-extrabold text-center text-yellow-500 sm:text-5xl lg:text-6xl">
          Projects
        </h2>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <Project
              key={project.id}
              ref={projectRefs[index]}
              project={project}
              theme={theme}
              className={`project-panel ${
                index % 2 === 0 ? "rotate-1" : "-rotate-1"
              }`}
            />
          ))}
        </div>
      </Element>
    </div>
  );
});

export default Projects;
