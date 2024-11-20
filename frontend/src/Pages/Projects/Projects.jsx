import { Element } from "react-scroll";
import { useTheme } from "../../components/ModeContext";
import { forwardRef, useRef, useEffect } from "react";
// import { useQuery, gql } from "@apollo/client";
import Project from "./Project/Project";
import projectsData from "../../components/ProjectData";

// const GET_PROJECTS = gql`
//   query GetProjects {
//     projects {
//       name
//       description
//       url
//       createdAt
//       updatedAt
//     }
//   }
// `;

const Projects = forwardRef((props, ref) => {
  const { theme } = useTheme();
  // const { data, loading, error } = useQuery(GET_PROJECTS);
  const projectRefs = useRef([]);

  // Combine hardcoded and fetched projects
  // const combinedProjects = [
  //   ...projectsData,
  //   ...(data?.projects || []).map((project) => ({
  //     id: project.name,
  //     name: project.name,
  //     description: project.description || "No description available.",
  //     href: project.url,
  //     imgSrc: "./default-image.png",
  //     imgAlt: project.name,
  //     techs: ["GraphQL"],
  //     isNew: false,
  //   })),
  // ];
  // console.log(combinedProjects);

  // Filter out unwanted projects
  // const includedProjects = combinedProjects.filter((project) => {
  //   // Example: Include only projects with specific names or tags
  //   const includedNames = [
  //     "portfolio",
  //     "HealthAgents",
  //     "movies",
  //     "GIT-ACP-Quickly-Extension",
  //     "Sparking-Zero-Team-Builder",
  //   ];
  //   return includedNames.includes(project.name);
  // });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-project");
            observer.unobserve(entry.target); // Trigger animation once
          }
        });
      },
      { threshold: 0.1 },
    );

    // Observe all project elements after combinedProjects updates
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []); // Re-run when projects are updated

  // if (loading) return <p>Loading projects...</p>;
  // if (error) return <p>Error loading projects: {error.message}</p>;

  return (
    <div
      ref={ref}
      className={`relative z-10 h-auto w-full pt-[10rem] ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Element name="projects">
        <h2 className="mb-[4rem] p-4 text-center text-5xl font-extrabold text-yellow-500 sm:text-5xl lg:text-6xl">
          Projects
        </h2>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <Project
              key={index}
              ref={(el) => {
                if (el) projectRefs.current[index] = el;
              }}
              project={project}
              theme={theme}
              className="hidden-display-project"
            />
          ))}
        </div>
      </Element>
      <style>
        {`
           .hidden-display-project {
            opacity: 0;
            transform: translateY(20px);
            transition: all 2s ease;
          }
          .show-project {
            opacity: 1;
            transform: translateY(0);
          }
          .projects-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: auto;
            height: auto;
            padding-bottom: 4rem; /* Add padding to the bottom */
          }
        `}
      </style>
    </div>
  );
});

export default Projects;
