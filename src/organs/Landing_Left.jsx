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
    size: "w-24 h-24",
    top: "10%", // Percentage-based positioning
    left: "15%",
    rotate: -15,
  },
  {
    src: firebaseLogo,
    size: "w-20 h-20",
    bottom: "10%", // Changed to top for consistency
    right: "10%",
    rotate: 10,
  },
  {
    src: githubLogo,
    size: "w-24 h-24",
    top: "20%",
    right: "15%",
    rotate: -20,
  },
  {
    src: javascriptLogo,
    size: "w-20 h-20",
    bottom: "15%",
    left: "5%",
    rotate: 25,
  },
  {
    src: pythonLogo,
    size: "w-16 h-16",
    top: "30%",
    right: "10%",
    rotate: -30,
  },
  {
    src: nodeLogo,
    size: "w-20 h-20",
    bottom: "20%",
    left: "10%",
    rotate: 15,
  },
  {
    src: tailwindLogo,
    size: "w-24 h-24",
    top: "5%",
    right: "20%",
    rotate: -25,
  },
  {
    src: npmLogo,
    size: "w-20 h-20",
    bottom: "25%",
    right: "5%",
    rotate: 30,
  },
  {
    src: graphLogo,
    size: "w-24 h-24",
    top: "35%",
    left: "5%",
    rotate: -10,
  },
  {
    src: errorSvg,
    size: "w-16 h-16",
    bottom: "30%",
    right: "20%",
    rotate: 15,
  },
];

const lucideIcons = [
  {
    Component: Code,
    size: "w-20 h-20",
    top: "40%",
    left: "25%",
    rotate: -15,
    color: "#DEE2E6",
  },
  {
    Component: CodeXml,
    size: "w-16 h-16",
    bottom: "40%", // Changed to "top" for consistency
    right: "20%",
    rotate: 20,
    color: "#DEE2E6",
  },
  {
    Component: SquareTerminal,
    size: "w-24 h-24",
    top: "33%",
    left: "10%",
    rotate: -30,
    color: "#DEE2E6",
  },
  {
    Component: Coffee,
    size: "w-16 h-16",
    bottom: "10%", // Changed to "top"
    right: "15%",
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
