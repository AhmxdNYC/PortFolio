import React from "react";
import { Element } from "react-scroll"; // For smooth scrolling and linking to the Skills section

// Skills component definition
const Skills = () => {
  return (
    <div className="bg-black w-full z-10 min-h-screen">
      <div className="pt-20 ml-4">
        <Element name="skills">
          <h2 className="text-white text-6xl mb-8">Skills</h2>
          <div
            data-name="skills-container"
            className="flex flex-wrap ml-20 w-[70rem] h-auto"
          >
            {/* Tailwind CSS */}
            <div className="w-1/3 p-2 text-white border border-red-500 text-center h-[14rem] flex flex-col justify-center items-center">
              <p className="m-2 p-4">Tailwind CSS</p>
              <img
                className="w-full h-full object-contain scale-75"
                src="./tailwind-css.svg"
                alt="Tailwind CSS logo"
              />
            </div>

            {/* React */}
            <div className="w-1/3 p-2 text-white border border-red-500 text-center h-[14rem] flex flex-col justify-center items-center object-contain">
              <p className="m-2 p-4">React</p>
              <img
                className="w-full h-full object-contain scale-75"
                src="./React-icon.svg.png"
                alt="React logo"
              />
            </div>

            {/* Vite */}
            <div className="w-1/3 p-2 text-white border border-red-500 text-center h-[14rem] flex flex-col justify-center items-center">
              <p className="m-2 p-4">Vite</p>
              <img
                className="w-full h-full object-contain scale-75"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/820px-Vitejs-logo.svg.png"
                alt="Vite logo"
              />
            </div>

            {/* Git */}
            <div className="w-1/3 p-2 text-white border border-red-500 text-center h-[14rem] flex flex-col justify-center items-center">
              <p className="m-2 p-4">Git</p>
              <img
                className="w-full h-full object-contain scale-75"
                src="./git.svg"
                alt="Git logo"
              />
            </div>

            {/* Node.js */}
            <div className="w-1/3 p-2 text-white border border-red-500 text-center h-[14rem] flex flex-col justify-center items-center">
              <p className="m-2 p-4">Node.js</p>
              <img
                className="w-full h-full object-contain scale-75"
                src="./nodejs.svg"
                alt="Node.js logo"
              />
            </div>

            {/* GitHub with Zoom Effect */}
            <div className="w-1/3 p-2 text-white border border-red-500 text-center h-[14rem] flex flex-col justify-center items-center overflow-hidden">
              <p className="m-2 p-4">GitHub</p>
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github w-full h-full object-contain scale-75"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
            </div>

            {/* Additional skills here, following the same structure */}
            {/* Example Skill 1 */}
            <div className="w-1/3 p-2 text-white border border-red-500 text-center h-[14rem] flex flex-col justify-center items-center">
              <p className="m-2 p-4">Example Skill 1</p>
              <img
                className="max-w-full h-auto"
                src="./example-skill-1.svg"
                alt="Example Skill 1 logo"
              />
            </div>
            {/* Add more skills as needed */}
          </div>
        </Element>
      </div>
    </div>
  );
};

// Export the Skills component
export default Skills;
