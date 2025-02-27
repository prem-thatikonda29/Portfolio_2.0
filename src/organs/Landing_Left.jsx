import React from "react";
import {
  CodeXml,
  SquareTerminal,
  Code,
  Coffee,
  reactLogo,
  errorSvg,
  firebaseLogo,
  githubLogo,
  graphLogo,
  javascriptLogo,
  nodeLogo,
  npmLogo,
  pythonLogo,
  tailwindLogo,
} from "../assets/Icons";

const icons = [
  {
    src: reactLogo,
    size: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
    top: "15%",
    left: "20%",
    rotate: -15,
  },
  {
    src: firebaseLogo,
    size: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20",
    bottom: "15%",
    right: "20%",
    rotate: 10,
  },
  {
    src: githubLogo,
    size: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
    top: "25%",
    right: "25%",
    rotate: -20,
  },
  {
    src: javascriptLogo,
    size: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20",
    bottom: "20%",
    left: "15%",
    rotate: 25,
  },
  {
    src: pythonLogo,
    size: "w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16",
    top: "35%",
    right: "15%",
    rotate: -30,
  },
  {
    src: nodeLogo,
    size: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20",
    bottom: "25%",
    left: "25%",
    rotate: 15,
  },
  {
    src: tailwindLogo,
    size: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
    top: "10%",
    right: "30%",
    rotate: -25,
  },
  {
    src: npmLogo,
    size: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20",
    bottom: "30%",
    right: "15%",
    rotate: 30,
  },
  {
    src: graphLogo,
    size: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
    top: "40%",
    left: "20%",
    rotate: -10,
  },
  {
    src: errorSvg,
    size: "w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16",
    bottom: "35%",
    right: "25%",
    rotate: 15,
  },
];

const lucideIcons = [
  {
    Component: Code,
    size: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20",
    top: "45%",
    left: "30%",
    rotate: -15,
    color: "#DEE2E6",
  },
  {
    Component: CodeXml,
    size: "w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16",
    bottom: "40%",
    right: "30%",
    rotate: 20,
    color: "#DEE2E6",
  },
  {
    Component: SquareTerminal,
    size: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
    top: "20%",
    left: "15%",
    rotate: -30,
    color: "#DEE2E6",
  },
  {
    Component: Coffee,
    size: "w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16",
    bottom: "15%",
    right: "20%",
    rotate: 25,
    color: "#DEE2E6",
  },
];

const Landing_left = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden p-0">
      <h1 className="text-6xl font-bowlby text-heading-light z-20">
        Developer
      </h1>

      {/* Floating Image Icons */}
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt="Tech Icon"
          className={`tech-icon ${icon.size} opacity-20 absolute z-10 grayscale`}
          style={{
            top: icon.top,
            bottom: icon.bottom,
            left: icon.left,
            right: icon.right,
            transform: `rotate(${icon.rotate}deg)`,
          }}
        />
      ))}

      {/* Floating Lucide React Icons */}
      {lucideIcons.map((icon, index) => (
        <icon.Component
          key={`lucide-${index}`}
          className={`tech-icon ${icon.size} opacity-20 absolute z-10`}
          style={{
            top: icon.top,
            bottom: icon.bottom,
            left: icon.left,
            right: icon.right,
            transform: `rotate(${icon.rotate}deg)`,
            color: icon.color,
          }}
        />
      ))}
    </div>
  );
};

export default Landing_left;
