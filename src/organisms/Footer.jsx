import React from "react";
import { Instagram, Linkedin, Github, Twitter } from "lucide-react";
import Tilt from "react-parallax-tilt";

function Footer() {
  const icons = [Instagram, Linkedin, Github, Twitter];

  return (
    <div className="w-full min-h-[15vh] py-6 sm:py-8 sm:mt-12 bg-background-light dark:bg-background border-t border-background dark:border-background-light shadow-lg flex flex-wrap items-center justify-center gap-6 sm:gap-8">
      {icons.map((Icon, index) => (
        <Tilt
          key={index}
          tiltMaxAngleX={25}
          tiltMaxAngleY={25}
          perspective={1000}
          scale={1.05}
          transitionSpeed={800}
          glareEnable={false}
          className="group w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[65px] flex justify-center items-center border-2 border-background dark:border-background-light transition-all duration-500"
        >
          <Icon className="text-background dark:text-background-light cursor-pointer size-5 sm:size-6 md:size-7" />
        </Tilt>
      ))}
    </div>
  );
}

export default Footer;
