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

    // Observe each ref
    projectRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup
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
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } z-10 w-full`}
    >
      <style>
        {`
        .hidden-display {
          filter: blur(5px);
          opacity: 0;
          transform: translateX(-100%);
          transition: all 1s;
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
        className="pt-20 pb-3 ml-4"
      >
        <Element name="projects">
          <h2 className="mb-8 ml-[16rem] text-6xl text-yellow-500">Projects</h2>
          {/* Projects Container */}
          <div
            data-name="Projects-container"
            className="ml-[12.3%] flex h-auto w-[85rem] flex-wrap gap-5"
          >
            {projectsData.map((project, index) => (
              <Project
                key={project.id}
                ref={projectRefs[index]}
                project={project}
                theme={theme}
              />
            ))}
          </div>
        </Element>
      </div>
    </div>
  );
});

export default Projects;
