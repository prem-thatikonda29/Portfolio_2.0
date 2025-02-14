import React from "react";
import { Instagram, Linkedin, Github, Twitter } from "lucide-react";
import Tilt from "react-parallax-tilt";

function Footer() {
  const icons = [Instagram, Linkedin, Github, Twitter];

  return (
    <div className="w-full h-[15vh] bg-background-light dark:bg-background border-t border-background dark:border-background-light shadow-lg shadow-background dark:shadow-background-light flex items-center justify-center gap-6">
      {icons.map((Icon, index) => (
        <Tilt
          key={index}
          tiltMaxAngleX={35}
          tiltMaxAngleY={35}
          perspective={1000}
          scale={1.1}
          transitionSpeed={1000}
          glareEnable={false} // You can enable this for light reflection
          className="group relative w-[70px] h-[70px] flex justify-center items-center border-2 border-background dark:border-background-light transition-transform duration-500 transform-style-3d"
        >
          {/* Icon */}
          <Icon
            size={40}
            className="text-background dark:text-background-light cursor-pointer relative z-10"
          />
        </Tilt>
      ))}
    </div>
  );
}

export default Footer;
