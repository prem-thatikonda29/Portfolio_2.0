import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  reactLogo,
  firebaseLogo,
  javascriptLogo,
  nodeLogo,
  graphLogo,
  pythonLogo,
  tailwindLogo,
  htmlLogo,
  cssLogo,
  expressLogo,
  mongoLogo,
  threeLogo,
} from "../assets/Icons";

const techIcons = [
  pythonLogo,
  htmlLogo,
  cssLogo,
  tailwindLogo,
  javascriptLogo,
  reactLogo,
  threeLogo,
  mongoLogo,
  nodeLogo,
  expressLogo,
  graphLogo,
  firebaseLogo,
];

export default function Tech() {
  const iconRefs = useRef([]);

  useEffect(() => {
    // Only apply animation on screens larger than 768px (md breakpoint)
    if (window.innerWidth >= 768) {
      iconRefs.current.forEach((el, index) => {
        gsap.to(el, {
          y: -200,
          duration: 1 + Math.random(),
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: Math.random() * 1.5,
        });
      });
    }
  }, []);

  return (
    <section className="relative w-full h-fit overflow-hidden bg-background-light dark:bg-background flex flex-col px-horizontal py-vertical">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bowlby text-heading-dark dark:text-heading-light mb-bottom">
          Tech
        </h1>
      </div>

      <div
        id="container"
        className="w-full md:h-[240px] flex flex-wrap md:flex-nowrap items-center md:items-end justify-center gap-8 md:gap-8"
      >
        {techIcons.map((icon, index) => (
          <img
            key={index}
            ref={(el) => (iconRefs.current[index] = el)}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-300"
            src={icon}
            alt={`tech-icon-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
