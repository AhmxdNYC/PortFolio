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
      className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} w-full`}
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
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            padding: 2rem;
            max-width: 1200px;
            margin: auto;
          }
          .project-panel:nth-child(odd) {
            transform: rotate(-1deg) translateY(-10px);
            background-color: ${theme === "dark" ? "#222" : "#f9f9f9"};
          }
          .project-panel:nth-child(even) {
            transform: rotate(1deg) translateY(10px);
            background-color: ${theme === "dark" ? "#333" : "#f0f0f0"};
          }
          .project-panel {
            border: 3px solid ${theme === "dark" ? "#444" : "#ccc"};
            box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .project-panel:hover {
            transform: scale(1.05) rotate(0deg);
            box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
      <Element name="projects">
        <h2 className="mb-8 text-4xl font-bold text-center text-yellow-500 sm:text-5xl lg:text-6xl">
          Projects
        </h2>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <Project
              key={project.id}
              ref={projectRefs[index]}
              project={project}
              theme={theme}
              className="project-panel"
            />
          ))}
        </div>
      </Element>
    </div>
  );
});

export default Projects;
