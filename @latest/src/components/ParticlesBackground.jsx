// ParticlesBackground.jsx
import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "./ModeContext.jsx";
const ParticlesBackground = () => {
  const { theme } = useTheme();
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
          value: theme === "dark" ? "#000000" : "#ffffff", // Keeps the background color as black
        },
      },
      fpsLimit: 240,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4, // Adjust if you want more particles added on click
          },
          repulse: {
            distance: 250, // Increased distance for repulse to make it interact further away
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: theme === "dark" ? "#ffffff" : "#000000",
        },
        links: {
          color: theme === "dark" ? "#ffffff" : "#000000",
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
          value: 200, // Increased number of particles for a fuller look gradually
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
    [theme]
  );

  return init ? (
    <Particles
  key={theme} // Change key to force re-render
  id="tsparticles"
  options={options}
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  }}
/>
  ) : null;
};

export default ParticlesBackground;
