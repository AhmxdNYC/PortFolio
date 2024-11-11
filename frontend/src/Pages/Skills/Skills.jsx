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

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Only add "show" if scrolling down
        if (entry.isIntersecting && window.scrollY > lastScrollY) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 },
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      skillRefs.forEach((ref) => {
        if (ref.current) {
          observer.observe(ref.current);
          ref.current.style.transition = "all 1.5s ease-in-out";
        }
      });
      // Update the lastScrollY value after setting observers
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, skillRefs]);

  Skills.displayName = "Skills";
  return (
    <div
      ref={ref}
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } z-10 h-auto  w-full`}
    >
      <style>
        {`
        .hidden-display {
          filter: blur(5px);
          opacity: 0;
          transform: translateX(-100%);
        transition: all 1s ease-in-out; /* Increased transition duration to 10 seconds */
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
        <div className="px-4 pt-20">
          <h2 className="mb-8 text-4xl font-bold text-center text-yellow-500 sm:text-5xl lg:text-6xl">
            Skills
          </h2>

          {/* Skills Container */}
          <div
            data-name="skills-container"
            className="grid w-full max-w-screen-lg grid-cols-4 gap-5 mx-auto"
          >
            {skillsData.map((skill, index) => (
              <Skill
                key={index}
                ref={skillRefs[index]}
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
