import { Element } from "react-scroll";
import { useTheme } from "../../components/ModeContext.jsx";
import { forwardRef, useRef, useEffect, useState } from "react";
import Skill from "./Skill/Skill.jsx";
import skillsData from "../../components/SkillsData.js";

const Skills = forwardRef((props, ref) => {
  const { theme } = useTheme();
  const skillRefs = Array.from({ length: skillsData.length }, () =>
    useRef(null),
  );

  const [lastScrollY, setLastScrollY] = useState(0);

  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       // Only add "show" if scrolling down
  //       if (entry.isIntersecting && window.scrollY > lastScrollY) {
  //         entry.target.classList.add("show");
  //       }
  //     });
  //   },
  //   { threshold: 0.25 },
  // );

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     skillRefs.forEach((ref) => {
  //       if (ref.current) {
  //         observer.observe(ref.current);
  //       }
  //     });
  //     // Update the lastScrollY value after setting observers
  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY, skillRefs]);

  useEffect(() => {
    const handleFallback = () => {
      skillRefs.forEach((ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            ref.current.classList.add("show");
          }
        }
      });
    };

    window.addEventListener("scroll", handleFallback);
    return () => window.removeEventListener("scroll", handleFallback);
  }, [skillRefs]);

  Skills.displayName = "Skills";
  return (
    <div
      ref={ref}
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } z-10 h-auto w-full pt-[10rem]`}
    >
      <style>
        {`
      .hidden-display {
        filter: blur(5px);
        opacity: 0;
        transform: translateX(-100%);
        transition: all 1s;
      }
      .show {
        opacity: 1;
        filter: blur(0);
        transform: translateX(0);
      }
      @media(prefers-reduced-motion) {
        .hidden-display {
          transition: none;
        }
      }
    `}
      </style>
      <Element name="skills">
        <div className="px-4">
          <h2 className="mb-8 text-4xl font-bold text-center text-yellow-500 sm:text-5xl lg:text-6xl">
            Skills
          </h2>

          {/* Skills Container */}
          <div
            data-name="skills-container"
            className="grid w-full max-w-screen-lg grid-cols-1 gap-5 pb-4 mx-auto overflow-visible sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {skillsData.map((skill, index) => (
              <Skill
                key={index}
                ref={skillRefs[index]}
                className="hidden-display"
                href={skill.href}
                imgSrc={
                  typeof skill.imgSrc === "function"
                    ? skill.imgSrc(theme)
                    : skill.imgSrc
                }
                imgAlt={skill.imgAlt}
                title={skill.title}
                theme={theme}
              />
            ))}
          </div>
        </div>
      </Element>
    </div>
  );
});

export default Skills;
