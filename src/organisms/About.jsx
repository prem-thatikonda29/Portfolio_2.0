import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import aboutImg from "../assets/about.jpeg";
import { Undo } from "lucide-react";

function About() {
  return (
    <section
      className="relative w-full h-screen bg-background-light dark:bg-background px-horizontal py-vertical flex gap-20 overflow-hidden"
      id="about"
    >
      <div className="w-1/2 h-full">
        <img src={aboutImg} alt="my image" />
      </div>
      <div className="w-1/2 h-full">
        <h1 className="text-heading-dark dark:text-heading-light font-bowlby text-5xl mb-bottom z-10">
          Typical &quot;About me&quot; Section
        </h1>

        <h4 className="text-4xl font-gemunu text-heading-dark dark:text-heading-light">
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
          <Undo size={80} className="rotate-150 scale-x-[-1]" />
        </h4>
      </div>
    </section>
  );
}

export default About;
