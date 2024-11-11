import { Element } from "react-scroll";
import { useTheme } from "../../components/ModeContext";
const About = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } z-10  w-full `}
    >
      <Element name="About">
        <div className="ml-4 pt-20">
          <h2 className="mb-8 text-center text-4xl text-yellow-500 md:text-6xl">
            About
          </h2>
          {/* About Container */}
          <div
            data-name="About-container"
            className="mx-auto flex h-auto w-full max-w-4xl flex-col gap-5 px-4 md:px-0"
          >
            <li className="list-none">Place</li>
            <li className="list-none italic">Present</li>
            <li className="">yurr</li>
            <li>boom</li>
            <li>boom</li>
          </div>
        </div>
      </Element>
    </div>
  );
};
export default About;
