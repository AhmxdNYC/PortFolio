import { Element } from "react-scroll";
import { useTheme } from "../../components/ModeContext";
const About = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } z-10 h-auto w-full `}
    >
      <Element name="About">
        <div className="ml-4 ">
          <h2 className="mb-8 text-4xl text-center text-yellow-500 md:text-6xl">
            About
          </h2>
          {/* About Container */}
          <div
            data-name="About-container"
            className="flex flex-col w-full h-auto max-w-4xl gap-5 px-4 mx-auto md:px-0"
          >
            <li className="list-none">Place</li>
            <li className="italic list-none">Present</li>
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
