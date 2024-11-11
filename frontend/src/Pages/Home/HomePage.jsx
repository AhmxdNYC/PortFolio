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
      } flex min-h-screen flex-col overflow-hidden`}
    >
      {/* Particles and content section */}
      <div className="relative h-screen mt-10 overflow-hidden lg:mt-0">
        <ParticlesBackground />
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <Navbar scrollToSection={scrollToSection} introRef={introRef} />

          {/* Main content container */}
          <div className="flex flex-col justify-between w-full gap-4 px-4 mt-16 sm:mt-20 sm:gap-6 sm:px-8 md:mt-24 md:gap-8 lg:mt-32 lg:flex-row lg:gap-10 lg:px-10">
            <div className="z-10 ml-0 text-center md:ml-8 md:mr-8 md:text-left lg:ml-12 lg:mr-12 lg:text-left">
              <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                Hello,
              </h1>
              <p className="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                I'm <span className="text-yellow-500">Ahmad</span>
              </p>
              <p className="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                Full Stack Software
              </p>
              <p className="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                Engineer
              </p>

              {/* Contact button */}
              <button
                className="p-2 mt-8 font-bold bg-yellow-500 rounded-md sm:mt-10 sm:text-lg md:mt-12 md:text-2xl lg:text-3xl"
                onClick={() => scrollToSection(contactRef)}
              >
                Contact
              </button>

              {/* Description */}
              <p className="mt-6 w-full text-base italic sm:mt-8 sm:w-[18rem] sm:text-lg md:mt-10 md:w-[20rem] md:text-xl lg:text-2xl">
                My passion for software engineering lies in constantly pushing
                my limits and seeking a challenging career that fosters
                continuous growth!
              </p>

              {/* Social buttons */}
              <div className="mt-8 flex w-full justify-center space-x-4 sm:w-[18rem] md:justify-start lg:justify-start">
                <button className="p-2 font-bold rounded-md">Github</button>
                <button className="p-2 font-bold rounded-md">LinkedIn</button>
                <a
                  href="https://docs.google.com/document/d/1WZpSPBJSDNtbnZJVEFY1fvr7gLJFDKbicjs9Trz2fYE/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 font-bold rounded-md"
                >
                  Resume
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center mt-5 md:mr-16 md:mt-16 lg:mr-20 lg:mt-20">
              {/* Decagon outline container */}
              <div className="decagon-container relative mx-auto h-48 w-48 sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-[26rem] lg:w-[26rem]">
                {/* Outline decagon */}
                <div className="absolute inset-0 decagon-background"></div>

                {/* Main decagon with profile image */}
                <div className="relative w-full h-full decagon">
                  <img
                    src="./MarcyFellows-2.jpg"
                    alt="Profile"
                    className="absolute object-cover w-full h-full"
                  />
                </div>
              </div>
              <p className="z-10 mt-4 text-center">Click Screen to pause</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills, Projects, and Contact sections */}
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <ScrollProgressIndicator
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactsRef={contactRef}
      />
      <Contact ref={contactRef} />
    </div>
  );
};
export default Home;
