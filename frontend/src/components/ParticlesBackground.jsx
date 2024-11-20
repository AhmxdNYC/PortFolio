// ParticlesBackground.jsx
import { useEffect, useMemo, useRef, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "./ModeContext.jsx";
const ParticlesBackground = () => {
  const { theme } = useTheme();
  const particlesInstanceRef = useRef(null); // reference to particle instance

  // initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);

      engine.options.fullScreen.enable = false;
    });
  }, []);

  const particlesInit = useCallback((instance) => {
    // Store the instance for later control
    particlesInstanceRef.current = instance;
  }, []);

  // Listen for clicks to pause/play
  // useEffect(() => {
  //   const handleClick = () => {
  //     if (particlesInstanceRef.current) {
  //       const instance = particlesInstanceRef.current;
  //       instance.isPaused() ? instance.play() : instance.pause();
  //     }
  //   };

  //   document.addEventListener("click", handleClick);
  //   return () => document.removeEventListener("click", handleClick);
  // }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: theme === "dark" ? "#000000" : "#ffffff",
        },
      },
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      fpsLimit: 240,
      interactivity: {
        events: {
          // onClick: {
          //   enable: true,
          //   mode: "pause",
          // },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 250,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: theme === "dark" ? "#ffffff" : "#000000",
        },
        links: {
          shape: "square",
          color: theme === "dark" ? "#ffffff" : "#000000",
          distance: 200,
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
          random: true,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1500,
          },
          value: 200,
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
    [theme],
  );

  return (
    <div className="container">
      <Particles
        key={theme}
        id="tsparticles"
        init={particlesInit}
        options={options}
      />
    </div>
  );
};

export default ParticlesBackground;
