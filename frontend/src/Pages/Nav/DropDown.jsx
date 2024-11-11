import React from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

const Dropdown = ({ isVisible, items, onMouseEnter, onMouseLeave, type }) => (
  <div
    className="relative"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <span className="cursor-pointer">{items.title}</span>
    {isVisible && (
      <div
        className={`absolute ${
          type === "social" ? "left-[-20px]" : "left-[-6px]"
        } top-6 cursor-pointer rounded-md bg-gray-800 py-2 text-center text-white shadow-lg`}
      >
        {items.links.map((link, index) =>
          link.external ? (
            <a
              key={index}
              href={link.to}
              target="_blank"
              rel="noreferrer"
              className="block px-4 py-1 text-center hover:bg-gray-700"
            >
              {link.label}
            </a>
          ) : link.type === "button" ? (
            <button
              key={index}
              onClick={link.onClick}
              className="block w-full px-4 py-1 text-center hover:bg-gray-700"
            >
              {link.label}
            </button>
          ) : (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              offset={link.offset || 0}
              className="block px-4 py-1 texxt-center hover:bg-gray-700"
            >
              {link.label}
            </Link>
          ),
        )}
      </div>
    )}
  </div>
);

// Extra from copilot for error handling later on
Dropdown.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  items: PropTypes.shape({
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(["button", "link"]).isRequired,
        label: PropTypes.string.isRequired,
        to: PropTypes.string,
        onClick: PropTypes.func,
        offset: PropTypes.number,
        external: PropTypes.bool,
      }),
    ).isRequired,
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["navigation", "social"]).isRequired,
};

export default Dropdown;
