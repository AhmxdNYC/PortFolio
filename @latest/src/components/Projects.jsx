import { Element} from 'react-scroll';
const Projects = () => {
  return (
    <div className="bg-black w-full z-10 h-[50rem]">
      <div className="ml-[4rem] mt-[20rem]">
        <Element name = "projects">
        <h2 className="text-white text-6xl">Projects</h2>
        <div className="mt-[2rem] ml-[20rem] text-xl">
          {/* Group 1 */}
          <div className="flex justify-between mb-4 text-white w-[20rem]">
            <div className="list-none">Place</div>
            <div className="list-none italic">Present</div>
            <div className="">yurr</div>
          </div>
          {/* Group 2 */}
          <div className="flex justify-between">
            <div>boom</div>
            <div>boom</div>
            {/* Empty div for spacing if you have less than 3 items in the last group */}
            <div></div>
          </div>
        </div>
      </Element>
      </div>
    </div>
  );
};

export default Projects;
