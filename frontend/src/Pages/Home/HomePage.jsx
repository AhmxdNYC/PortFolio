import ParticlesBackground from "../../components/ParticlesBackground.jsx";
import Navbar from "../../components/Navbar.jsx";
import Skills from "../../components/Skills.jsx";
import { useRef } from "react";
import Projects from "../../components/Projects.jsx";
import Contact from "../../components/Contact.jsx";
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
      } flex min-h-screen flex-col overflow-hidden `}
      ref={introRef}
    >
      {/* Particles and content section */}
      <div
        className="absolute overflow-hidden"
        style={{ position: "relative", overflow: "hidden", height: "100vh" }}
      >
        <div className="">
          <ParticlesBackground />
        </div>
        <div className="flex flex-col items-center">
          <Navbar scrollToSection={scrollToSection} introRef={introRef} />

          {/* Main content container */}
          <div className="mt-24 flex w-full flex-col justify-between px-4 sm:mt-12 sm:px-8 md:mt-16 lg:mt-[10rem] lg:flex-row lg:px-10">
            <div className="z-10 ml-0 text-center lg:ml-[3rem] lg:mr-[3rem] lg:text-left">
              <h1 className="text-xl font-bold sm:text-5xl md:text-6xl lg:text-6xl">
                Hello,
              </h1>
              <p className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                I'm <span className="text-yellow-500">Ahmad</span>
              </p>
              <p className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                Front End Software
              </p>
              <p className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
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
              <div className="mt-8 flex w-full justify-center space-x-4 sm:w-[18rem] lg:justify-start">
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
            <div className="flex flex-col lg:mr-[10rem] lg:mt-[4rem]">
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
      <div
        className={`${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        } z-10 h-[8rem]`}
      />
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
