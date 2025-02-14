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
    size: "w-24 h-24",
    top: "10%",
    left: "15%",
    rotate: -15,
  },
  {
    src: cubeLogo,
    size: "w-20 h-20",
    bottom: "10%",
    right: "10%",
    rotate: 10,
  },
  {
    src: figmaLogo,
    size: "w-24 h-24",
    top: "20%",
    right: "15%",
    rotate: -20,
  },
  {
    src: paintLogo,
    size: "w-20 h-20",
    bottom: "5%",
    left: "5%",
    rotate: 25,
  },
  {
    src: paletteLogo,
    size: "w-16 h-16",
    top: "30%",
    right: "10%",
    rotate: -30,
  },
  {
    src: sketchBookLogo,
    size: "w-20 h-20",
    bottom: "20%",
    left: "20%",
    rotate: 15,
  },
  {
    src: lightroomLogo,
    size: "w-24 h-24",
    top: "5%",
    right: "20%",
    rotate: -25,
  },
  {
    src: textLogo,
    size: "w-20 h-20",
    bottom: "25%",
    right: "5%",
    rotate: 30,
  },
  {
    src: toggleLogo,
    size: "w-24 h-24",
    top: "35%",
    left: "5%",
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
