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
  {
    href: "https://www.python.org/",
    imgSrc: "./python-logo.svg",
    imgAlt: "Python logo",
    title: "Python",
  },
  {
    href: "https://www.flask.org/",
    imgSrc: "/flask-logo.svg",
    imgAlt: "flask logo",
    title: "Flask",
  },
  {
    href: "https://graphql.org/",
    imgSrc: "./graphQL-logo.svg",
    imgAlt: "GraphQL Logo",
    title: "GraphQL",
  },
  {
    href: "https://nextjs.org/",
    imgSrc: "./nextjs-logo.svg",
    imgAlt: "NextJS Logo",
    title: "NextJS",
  },
  {
    href: "",
    imgSrc: "./typescript.svg",
    imgAlt: "Typescript Logo",
    title: "Typescript",
  },
  {
    href: "",
    imgSrc: "/prisma-3.svg",
    imgAlt: "Prisma Logo",
    title: "Prisma",
  },
  {
    href: "",
    imgSrc: "./bash-logo.svg",
    imgAlt: "Bash Logo",
    title: "Bash",
  },
];

export default skillsData;
