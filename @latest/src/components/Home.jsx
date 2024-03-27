import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import Navbar from "./Navbar";
import Experience from "./Experience";
import Skills from "./Skills";
const Home = () => {
  
  return (
    <div className="flex flex-col">
      {/* Particles and content section */}
      <div className="relative overflow-hidden" style={{ height: "100vh" }}>
        <ParticlesBackground />
        <div className="flex flex-col items-center">
          <Navbar />
          <div data-name="text-img-container" className="flex w-full justify-between px-10 mt-[12rem]">
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
              <p className="mt-6 text-3xl">Description</p>
              <div className="flex justify-between w-1/2 mt-20">
                <button className="text-white">Github</button>
                <button className="text-white">Linkedin</button>
                <button className="text-white">Idk</button>
              </div>
            </div>
            <div className="w-96 h-96 bg-yellow-500 border border-yellow-500 rounded-full overflow-hidden relative mr-[8rem]">
              <img
                src="./MarcyFellows-2.jpg"
                alt=""
                style={{ top: "-20%" }}
                className="absolute"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Experience section follows naturally in the document flow */}
      <Experience />
      <Skills />
    </div>
  );
};

export default Home;
