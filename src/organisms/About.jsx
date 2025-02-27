import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import aboutImg from "../assets/about.jpeg";
import { Undo } from "lucide-react";

function About() {
  return (
    <section
      className="relative w-full min-h-screen sm:h-[calc()] bg-background-light dark:bg-background px-4 sm:px-8 md:px-horizontal py-vertical flex flex-col md:flex-row md:gap-20 items-center overflow-hidden"
      id="about"
    >
      <div className="w-full md:w-1/2 h-auto mb-8 md:mb-0">
        <img
          src={aboutImg}
          alt="my image"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bowlby text-heading-dark dark:text-heading-light mb-8 z-10">
          Typical &quot;About me&quot; Section
        </h1>

        <h4 className="text-2xl sm:text-3xl md:text-4xl font-gemunu text-heading-dark dark:text-heading-light">
          I&apos;m an engineering student who loves building things for the web.
          <br />
          <br />
          Always experimenting, always learning, and always up for a good
          challenge.
          <br />
          <br />
          Because someone has to care about the little details that make a big
          difference in user experience
          <br />
          <br />
          (p.s : Me trying to come up with good designs)
          <br />
          <br />
          <Undo
            size={60}
            className="hidden md:block rotate-150 scale-x-[-1] sm:size-36 md:size-50"
          />
        </h4>
      </div>
    </section>
  );
}

export default About;
