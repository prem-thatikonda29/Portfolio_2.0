import React from "react";
import {
  animateLogo,
  cubeLogo,
  figmaLogo,
  paintLogo,
  paletteLogo,
  sketchBookLogo,
  lightroomLogo,
  textLogo,
  toggleLogo,
} from "../assets/Icons";

const icons = [
  {
    src: animateLogo,
    size: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
    top: "15%",
    left: "20%",
    rotate: -15,
  },
  {
    src: cubeLogo,
    size: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20",
    bottom: "15%",
    right: "20%",
    rotate: 10,
  },
  {
    src: figmaLogo,
    size: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
    top: "25%",
    right: "25%",
    rotate: -20,
  },
  {
    src: paintLogo,
    size: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20",
    bottom: "20%",
    left: "15%",
    rotate: 25,
  },
  {
    src: paletteLogo,
    size: "w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16",
    top: "35%",
    right: "15%",
    rotate: -30,
  },
  {
    src: sketchBookLogo,
    size: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20",
    bottom: "25%",
    left: "25%",
    rotate: 15,
  },
  {
    src: lightroomLogo,
    size: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
    top: "10%",
    right: "30%",
    rotate: -25,
  },
  {
    src: textLogo,
    size: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20",
    bottom: "30%",
    right: "15%",
    rotate: 30,
  },
  {
    src: toggleLogo,
    size: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
    top: "40%",
    left: "20%",
    rotate: -10,
  },
];

const Landing_right = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden p-0">
      <h1 className="text-6xl font-bowlby text-heading-dark">Designer</h1>

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
    </div>
  );
};

export default Landing_right;
