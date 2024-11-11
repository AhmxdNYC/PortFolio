import React, { forwardRef } from "react";

const Skill = forwardRef(({ href, imgSrc, imgAlt, title, theme }, ref) => (
  <a
    ref={ref}
    href={href}
    target="_blank"
    rel="noreferrer"
    className="hidden-display flex h-32 flex-col items-center justify-center rounded-md border border-[#2c2c2c] p-4 text-center transition-all duration-300 hover:scale-105 sm:h-40 md:h-48 lg:h-56"
  >
    <p className="text-base font-bold sm:text-lg">{title}</p>
    <img
      className="object-contain h-16 sm:h-20 md:h-24 lg:h-28"
      src={imgSrc}
      alt={imgAlt}
    />
  </a>
));

export default Skill;
