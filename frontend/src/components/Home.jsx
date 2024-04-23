import ParticlesBackground from "./ParticlesBackground.jsx";
import Navbar from "./Navbar.jsx";
import Skills from "./Skills.jsx";
import { useRef } from "react";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import { useTheme } from "./ModeContext.jsx";
import ScrollProgressIndicator from "./CustomScroll.jsx";
const Home = () => {
  const { theme } = useTheme();
  const introRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    console.log("Attempting to scroll to section:", ref.current);
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
        <ParticlesBackground />
        <ParticlesBackground />
        <div className="flex flex-col items-center">
          <Navbar scrollToSection={scrollToSection} introRef={introRef} />

          <div
            data-name="text-img-container"
            className="mt-[12rem] flex w-full justify-between px-10"
          >
            <div className=" z-10 ml-[3rem]">
              <h1 className="text-6xl font-bold">Hello,</h1>
              <p className="text-6xl font-bold">
                I'm <span className="text-yellow-500">Ahmad</span>
              </p>
              <p className="text-6xl font-bold">Front End Software</p>
              <p className="text-6xl font-bold">Engineer</p>
              <button
                className="mb-6 mt-12 rounded-md bg-yellow-500 p-2 text-3xl font-bold"
                onClick={() => scrollToSection(contactRef)}
              >
                Contact
              </button>

              <p className="text-1xl mt-6 w-[20rem] italic">
                My passion for software engineering lies in me to constantly
                push my limits and seek a challenging career that fosters
                continuous growth!
              </p>
              <div className="mt-12 flex w-[18rem] flex-wrap justify-between">
                <button className=" rounded-md p-2 font-bold">Github</button>
                <button className=" rounded-md p-2 font-bold">Linkedin</button>
                <a
                  href="https://docs.google.com/document/d/1WZpSPBJSDNtbnZJVEFY1fvr7gLJFDKbicjs9Trz2fYE/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className=" rounded-md p-2 font-bold"
                >
                  Resume
                </a>
              </div>
            </div>
            <div className="relative mr-[8rem] h-96 w-96 overflow-hidden rounded-full border border-yellow-500 bg-yellow-500 shadow-[0_0_8px_rgba(255,255,0,0.6)]">
              <img
                src="./MarcyFellows-2.jpg"
                alt=""
                className="absolute top-[-20%]"
              />
            </div>
            <p className="absolute bottom-[12.5rem] right-[17.5rem] z-10">
              Click Screen to pause
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        } z-10 h-[8rem]`}
      ></div>
      {/* Other Sections */}
      {/* <Experience /> */}

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
