import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import Navbar from "./Navbar";
import Experience from "./Experience";
import Skills from "./Skills";
import { Element } from "react-scroll";
import { useRef } from "react";
import Projects from "./Projects";
const Home = () => {
  const introRef = useRef(null);
  // Refs for other sections like Experience, Skills, etc.

  // Function to scroll to a ref (section)
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col overflow-hidden min-h-screen" ref={introRef}>
      {/* Particles and content section */}
      <div className="relative" style={{ height: "100vh" }}>
        <ParticlesBackground />
        <div className="flex flex-col items-center">
          <Navbar scrollToSection={scrollToSection} introRef={introRef} />

          <div
            data-name="text-img-container"
            className="flex w-full justify-between px-10 mt-[12rem]"
          >
            <div className="text-white ml-[3rem] z-10">
              <h1 className="text-6xl font-bold">Hello,</h1>
              <p className="text-6xl font-bold">
                I'm <span className="text-yellow-500">Ahmad</span>
              </p>
              <p className="text-6xl font-bold">Front End Software</p>
              <p className="text-6xl font-bold">Engineer</p>
              <button className="bg-yellow-500 mt-12 text-3xl rounded-md p-2 mb-6 font-bold">
                Contact
              </button>
              <p className="mt-6 text-1xl w-[20rem] italic">
                My passion for software engineering lies in me to constantly
                push my limits and seek a challenging career that fosters
                continuous growth!
              </p>
              <div className="flex flex-wrap justify-between w-1/2 mt-12">
                <button className="text-white rounded-md p-2 font-bold">
                  Github
                </button>
                <button className="text-white rounded-md p-2 font-bold">
                  Linkedin
                </button>
                <button className="text-white rounded-md p-2 font-bold">
                  Idk
                </button>
              </div>
            </div>
            <div className="w-96 h-96 bg-yellow-500 border border-yellow-500 rounded-full overflow-hidden relative mr-[8rem]">
              <img
                src="./MarcyFellows-2.jpg"
                alt=""
                className="absolute top-[-20%]"
              />
            </div>
          </div>
        </div>
      </div>

      <Experience />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
