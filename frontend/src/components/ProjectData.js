const projectsData = [
  {
    id: 1,
    name: "infotrove",
    description:
      "InfoTrove is an application for knowledge seekers, offering daily reads on various topics from science and politics to movies",
    href: "https://info-trove.vercel.app/",
    imgSrc: "./infoTroveWeb.png",
    imgAlt: "Info Trove",
    techs: ["NodeJS", "React", "Tailwind", "Axios", "GraphQl", "Apollo"],
    demoImgSrc: (theme) =>
      theme === "dark" ? "./Demo Dark.png" : "./Demo Light.png",
    logoImgSrc: "./infoTrove.png",
    repoHref: "https://github.com/InfoTrove/InfoTrove",
    updated: true,
    online: true,
  },
  // {
  //   id: 2,
  //   name: "portfolio",
  //   description: "A showcase of my personal projects and skills.",
  //   href: "/projects/portfolio",
  //   imgSrc: (theme) =>
  //     theme === "dark" ? "./PortFolioWeb.png" : "./PortFolioWebRev.png",
  //   imgAlt: "Portfolio",
  //   techs: ["GIT", "API", "NodeJS", "CSS", "HTML5", "Test"],
  //   demoImgSrc: (theme) =>
  //     theme === "dark" ? "./Demo Dark.png" : "./Demo Light.png",
  //   logoImgSrc: (theme) => (theme === "dark" ? "./Port.png" : "./Portrev.png"),
  //   repoHref: "https://github.com/AhmxdNYC/PortFolio",
  // },
  {
    id: 3,
    name: "recipe-wizard",
    description:
      "An app that provides personalized recipes based on available ingredients using the Spoonacular API",
    href: "/projects/recipe-wizard",
    imgSrc: "./recipeWizardWeb.png",
    imgAlt: "Recipe Wizard",
    techs: ["NodeJS", "Dom Manipulation", "Local Storage", "SCSS"],
    demoImgSrc: (theme) =>
      theme === "dark" ? "./Demo Dark.png" : "./Demo Light.png",
    logoImgSrc: "./RecipeWizard-modified.png",
    repoHref: "https://github.com/RecipeWizardTeam/Recipe-Wizard",
  },
  // {
  //   id: 4,
  //   name: "movies",
  //   description:
  //     "A movie app that uses local storage to keep track of your favorite films. It also fetches data from the OMDb API.",
  //   href: "/projects/movies",
  //   imgSrc: "./movies.png",
  //   imgAlt: "Movies App",
  //   techs: [""],
  //   demoImgSrc: (theme) =>
  //     theme === "dark" ? "./Demo Dark.png" : "./Demo Light.png",
  //   logoImgSrc: "./Movies-App.png",
  //   repoHref: "https://github.com/AhmxdNYC/Movies-Project-",
  // },
  {
    id: 5,
    name: "Rootlink",
    description:
      "An app to help adoptees and their biological families reconnect in a secure environment",
    href: "https://github.com/FamilyTie/RootLink",
    imgSrc: "./rootlinkFront.png",
    imgAlt: "RootLink",
    techs: [
      "NodeJS",
      "Typescript",
      "PostGres",
      "Express",
      "React",
      "Tailwind",
      "Socket io",
      "Python",
      "Flask",
      "Firebase",
      "Blocknote",
    ],
    demoImgSrc: (theme) => theme === "./rootlinkFront.png",
    logoImgSrc: "./rootlinkLogo.png",
    repoHref: "https://github.com/AhmxdNYC/Movies-Project-",
    updated: true,
  },
  {
    id: 6,
    name: "Recipe Agents",
    description:
      "An AI Agent meal planning system that generates personalized meal plans based on your personal information. Utilizing the LangGraph framework to design smart workflows and the Tavily API for Retrieval-Augmented Generation (RAG)",
    href: "https://github.com/FamilyTie/RootLink",
    imgSrc: "./HealthAgents.png",
    imgAlt: "Recipe Agents",
    techs: ["NodeJS", "Python", "Flask", "LangChain", "LangGraph", "Tavily"],
    demoImgSrc: (theme) => theme === "./rootlinkFront.png",
    // logoImgSrc: "./rootlinkLogo.png",
    repoHref: "https://github.com/FamilyTie/RootLink",
  },
  // {
  //   id: 7,
  //   name: "Sparking Zero Team Builder",
  //   description:
  //     "A team-building app that helps you build the perfect sparking zero team while utilzing the point system as efficenty as possible",
  //   href: "https://github.com/FamilyTie/RootLink",
  //   imgSrc: "./sparkingBuilder.png",
  //   imgAlt: "Recipe Agents",
  //   techs: ["NodeJs", "React", "Typescript", "Tailwind"],
  //   demoImgSrc: (theme) => theme === "./sparkingBuilder.png",
  //   // logoImgSrc: "./rootlinkLogo.png",
  //   repoHref: "https://github.com/AhmxdNYC/Sparking-Zero-Team-Builder",
  //   isNew: true,
  // },
  {
    id: 7,
    name: "ACP Quickly",
    description:
      "A Visual Studio Code extension that streamlines Git operations by allowing you to quickly stage, commit, and push changes with a single command. It simplifies Git workflows by eliminating the need for quotation marks around commit messages and provides real-time status updates, all while ensuring smooth performance across different shell environments.",
    href: "https://github.com/FamilyTie/RootLink",
    // imgSrc: "./sparkingBuilder.png",
    imgAlt: "ACP Quickly",
    techs: ["NodeJs", "Bash", "Shell", "Git", "Visual Studio Code API"],
    demoImgSrc: (theme) => theme === "./sparkingBuilder.png",
    // logoImgSrc: "./rootlinkLogo.png",
    repoHref: "https://github.com/AhmxdNYC/Sparking-Zero-Team-Builder",
    isNew: true,
  },
];

export default projectsData;
