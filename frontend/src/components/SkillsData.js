const skillsData = [
  {
    href: "https://tailwindcss.com/",
    imgSrc: "/tailwind-css.svg",
    imgAlt: "Tailwind CSS logo",
    title: "Tailwind CSS",
  },
  {
    href: "https://react.dev/",
    imgSrc: "react-icon.png",
    imgAlt: "React logo",
    title: "React",
  },
  {
    href: "",
    imgSrc: (theme) =>
      theme === "dark" ? "/coming-soon.png" : "/coming-soon-rev.png",
    imgAlt: "Python logo",
    title: "Python",
  },
  {
    href: "https://git-scm.com/",
    imgSrc: "/git.svg",
    imgAlt: "Git logo",
    title: "Git",
  },
  {
    href: "https://nodejs.org/en",
    imgSrc: "/nodejs.svg",
    imgAlt: "Node.js logo",
    title: "Node.js",
  },
  {
    href: "https://github.com/",
    imgSrc: (theme) =>
      theme === "dark" ? "/github-logo-light.png" : "/github-logo.png",
    imgAlt: "GitHub logo",
    title: "GitHub",
  },
  {
    href: "https://www.postgresql.org/",
    imgSrc: "/postgresql.png",
    imgAlt: "PostgreSQL logo",
    title: "PostgreSQL",
  },
  {
    href: "https://expressjs.com/",
    imgSrc: (theme) =>
      theme === "dark" ? "/expressjs-light.svg" : "/expressjs.svg",
    imgAlt: "Express.js logo",
    title: "Express.js",
  },
];

export default skillsData;
