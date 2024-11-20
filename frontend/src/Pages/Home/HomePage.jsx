import ParticlesBackground from "../../components/ParticlesBackground.jsx";
import Navbar from "../Nav/Navbar.jsx";
import Skills from "../Skills/Skills.jsx";
import { useRef } from "react";
import Projects from "../Projects/Projects.jsx";
import Contact from "../Contact/Contact.jsx";
import { useTheme } from "../../components/ModeContext.jsx";
import ScrollProgressIndicator from "../../components/CustomScroll.jsx";

const Home = () => {
  const { theme } = useTheme();
  const introRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } flex flex-col font-open-sans`}
    >
      {/* Particles and content section */}
      <div className="min-h-screen mt-10 lg:mt-0">
        <ParticlesBackground />
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <Navbar scrollToSection={scrollToSection} introRef={introRef} />

          {/* Main content container */}
          <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-2 px-4 sm:mt-20 sm:gap-4 sm:px-8 md:mt-24 md:gap-6 lg:mt-[10rem] lg:flex-row lg:items-center lg:gap-[9rem] lg:px-10">
            <div className="z-10 text-center md:text-left ">
              <h1 className="text-2xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
                Hello,
              </h1>
              <p className="text-2xl font-semibold font-open-sans sm:text-4xl md:text-5xl lg:text-6xl">
                I'm <span className="text-yellow-500">Ahmad</span>
              </p>
              <p className="text-2xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
                Full Stack Software
              </p>
              <p className="text-2xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
                Engineer
              </p>
              <button
                className="p-4 px-6 py-2 mt-8 font-bold bg-yellow-500 rounded-md sm:mt-10 sm:text-lg md:mt-12"
                onClick={() => scrollToSection(contactRef)}
              >
                Contact
              </button>
            </div>

            <div className="flex flex-col items-center mb-auto mt-7 sm:mt-3">
              {/* Image Container */}
              <div className="relative mx-auto h-48 w-48 sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-[26rem] lg:w-[24rem]">
                <div className="absolute inset-0 decagon-background"></div>
                <div className="relative w-full h-full decagon">
                  <img
                    src="./MarcyFellows-2.jpg"
                    alt="Profile"
                    className="absolute object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Buttons Container */}
              <div className="z-10 flex flex-col items-center mt-6 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button className="p-2 text-2xl font-bold rounded-md">
                  Github
                </button>
                <button className="p-2 text-2xl font-bold rounded-md">
                  LinkedIn
                </button>
                <a
                  href="https://docs.google.com/document/d/1WZpSPBJSDNtbnZJVEFY1fvr7gLJFDKbicjs9Trz2fYE/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-2xl font-bold rounded-md"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Skills, Projects, and Contact sections */}
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      {/* <ScrollProgressIndicator
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactsRef={contactRef}
      /> */}
    </div>
  );
};

export default Home;
