import React from "react";
import { Instagram, Linkedin, Github, Twitter } from "lucide-react";
import { Tilt } from "react-tilt";

function Footer() {
  const icons = [Instagram, Linkedin, Github, Twitter];

  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div className="w-full h-[15vh] bg-background-light dark:bg-background border-t border-background dark:border-background-light shadow-lg shadow-background dark:shadow-background-light flex items-center justify-center gap-6">
      {icons.map((Icon, index) => (
        <Tilt key={index} options={defaultOptions}>
          <div className="group relative w-[70px] h-[70px] flex justify-center items-center border-2 border-background dark:border-background-light transition-transform duration-500 transform-style-3d">
            {/* Icon */}
            <Icon
              size={40}
              className="text-background dark:text-background-light cursor-pointer relative z-10"
            />
          </div>
        </Tilt>
      ))}
    </div>
  );
}

export default Footer;
