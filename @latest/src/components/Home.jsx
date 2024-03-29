import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import Navbar from "./Navbar";
import Experience from "./Experience";
import Skills from "./Skills";
import { Element } from "react-scroll";
import { useRef, useState, useEffect } from "react";
import Projects from "./Projects";
import Contact from "./Contact.jsx";
import { useTheme } from "./ModeContext.jsx";
import ScrollProgressIndicator from "./CustomScroll.jsx";
import { Link } from "react-scroll";
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
      } flex flex-col overflow-hidden min-h-screen `}
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
            className="flex w-full justify-between px-10 mt-[12rem]"
          >
            <div className=" ml-[3rem] z-10">
              <h1 className="text-6xl font-bold">Hello,</h1>
              <p className="text-6xl font-bold">
                I'm <span className="text-yellow-500">Ahmad</span>
              </p>
              <p className="text-6xl font-bold">Front End Software</p>
              <p className="text-6xl font-bold">Engineer</p>
              <button
                className="bg-yellow-500 mt-12 text-3xl rounded-md p-2 mb-6 font-bold"
                onClick={() => scrollToSection(contactRef)}
              >
                Contact
              </button>

              <p className="mt-6 text-1xl w-[20rem] italic">
                My passion for software engineering lies in me to constantly
                push my limits and seek a challenging career that fosters
                continuous growth!
              </p>
              <div className="flex flex-wrap justify-between w-[18rem] mt-12">
                <button className=" rounded-md p-2 font-bold">Github</button>
                <button className=" rounded-md p-2 font-bold">Linkedin</button>
                <a
                  href="https://docs.google.com/document/d/1WZpSPBJSDNtbnZJVEFY1fvr7gLJFDKbicjs9Trz2fYE/edit?usp=sharing"
                  target="_blank"
                  className=" rounded-md p-2 font-bold"
                >
                  Resume
                </a>
              </div>
            </div>
            <div className="w-96 h-96 bg-yellow-500 border border-yellow-500 rounded-full overflow-hidden relative mr-[8rem] shadow-[0_0_8px_rgba(255,255,0,0.6)]">
              <img
                src="./MarcyFellows-2.jpg"
                alt=""
                className="absolute top-[-20%]"
              />
            </div>
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
