import { useState } from "react";
import { Link } from "react-scroll";
const Navbar = ({ scrollToSection, introRef }) => {
  const [isNavDropVisible, setIsNavDropVisible] = useState(false);
  const [isSocialDropVisible, setIsSocialDropVisible] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 text-white py-4 bg-opacity-90">
      <nav className="flex justify-center space-x-4">
        <div
          className="relative list-none"
          onMouseEnter={() => setIsNavDropVisible(true)}
          onMouseLeave={() => setIsNavDropVisible(false)}
        >
          <span className="cursor-pointer">Navigation</span>
          {isNavDropVisible && (
            <div className="absolute right-[-1.2rem] w-[7rem] bg-gray-800 text-white py-2 rounded-md shadow-lg cursor-pointer">
              {/* Reduce or eliminate any margin that might create a gap */}
              <button
                onClick={() => scrollToSection(introRef)}
                className="block px-4 py-1 hover:bg-gray-700"
              >
                Home
              </button>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="block px-4 py-1 hover:bg-gray-700"
              >
                Experience
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="block px-4 py-1 hover:bg-gray-700"
              >
                Skills
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="block px-4 py-1 hover:bg-gray-700"
              >
                Projects
              </Link>
            </div>
          )}
        </div>
        <div
          className="relative list-none"
          onMouseEnter={() => setIsSocialDropVisible(true)}
          onMouseLeave={() => setIsSocialDropVisible(false)}
        >
          <span className="cursor-pointer">Socials</span>
          {isSocialDropVisible && (
            <div className="absolute right-[-1.5rem] w-[6rem] bg-gray-800 text-white py-2 rounded-md shadow-lg cursor-pointer">
              {/* Links for social media or any other external links */}
              <a
                href="https://github.com/AhmxdNYC"
                className="block px-4 py-1 hover:bg-gray-700"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ahmad-hamza-b664b3252/"
                className="block px-4 py-1 hover:bg-gray-700"
              >
                LinkedIn
              </a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-700">
                Twitter
              </a>
              {/* Add more social links as needed */}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
