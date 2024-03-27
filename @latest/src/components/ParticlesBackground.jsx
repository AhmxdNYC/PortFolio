// ParticlesBackground.jsx
import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("particles.js loaded", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000", // Keeps the background color as black
        },
      },
      fpsLimit: 240,
      interactivity: {
        events: {
          // onClick: {
          //   enable: true,
          //   mode: "push",
          // },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          // push: {
          //   quantity: 4, // Adjust if you want more particles added on click
          // },
          repulse: {
            distance: 250, // Increased distance for repulse to make it interact further away
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 200, // Increased distance for links to appear further away
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true, // Keeping movement random for dynamic effect
          speed: 4, // Decreased speed for slower movement
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1500, // Increased area for a slower build-up of particles
          },
          value: 130, // Increased number of particles for a fuller look gradually
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return init ? (
    <Particles
      id="tsparticles"
      options={options}
      style={{
        position: "",
        top: 0,
        left: 0,
        width: "",
        height: "",
        overflow: "",
      }}
    />
  ) : null;
};

export default ParticlesBackground;
