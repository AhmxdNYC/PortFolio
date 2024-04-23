// ParticlesBackground.jsx
import { useEffect, useMemo, useRef, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "./ModeContext.jsx";
const ParticlesBackground = () => {
  const { theme } = useTheme();
  const particlesInstanceRef = useRef(null); // To hold the particles instance for control

  // Original initialization logic for particles
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesInit = useCallback((instance) => {
    // Store the instance for later control
    particlesInstanceRef.current = instance;
  }, []);

  // Intersection Observer to pause/play based on visibility
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           console.log("Particles are visible");
  //           particlesInstanceRef.current?.play();
  //         } else {
  //           console.log("Particles are not visible");
  //           particlesInstanceRef.current?.pause();
  //         }
  //       });
  //     },
  //     { threshold: 0.1 }
  //   );

  //   const particlesEl = document.getElementById("tsparticles");
  //   if (particlesEl) observer.observe(particlesEl);

  //   return () => observer.disconnect();
  // }, []);

  // Listen for clicks to pause/play
  useEffect(() => {
    const handleClick = () => {
      if (particlesInstanceRef.current) {
        const instance = particlesInstanceRef.current;
        instance.isPaused() ? instance.play() : instance.pause();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: theme === "dark" ? "#000000" : "#ffffff",
        },
      },
      fpsLimit: 240,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "pause",
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
    <Particles
      key={theme}
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default ParticlesBackground;
