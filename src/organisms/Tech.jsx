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
    iconRefs.current.forEach((el, index) => {
      gsap.to(el, {
        y: -200, // Move up
        duration: 1 + Math.random(), // Slight randomization in duration
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 1.5, // Random delay for natural movement
      });
    });
  }, []);

  return (
    <section className="relative w-full h-fit overflow-hidden bg-background-light dark:bg-background flex flex-col px-horizontal py-vertical">
      <h1 className="text-5xl font-bowlby text-heading-dark dark:text-heading-light mb-bottom">
        Tech
      </h1>

      <div
        id="container"
        className="w-full h-[240px] flex items-end justify-center"
      >
        {techIcons.map((icon, index) => (
          <img
            key={index}
            ref={(el) => (iconRefs.current[index] = el)}
            className="w-16 h-16 opacity-80 mx-4 grayscale hover:grayscale-0"
            src={icon}
            alt={`tech-icon-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
