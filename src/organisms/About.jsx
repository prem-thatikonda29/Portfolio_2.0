import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "../assets/me.jpg";
import { Undo } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    gsap.set(image, { xPercent: -100, opacity: 0 });
    gsap.set(text, { xPercent: 100, opacity: 0 });

    gsap.to(image, {
      xPercent: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 50%",
        end: "top 20%",
        scrub: true,
        markers: false,
      },
    });

    gsap.to(text, {
      xPercent: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 50%",
        end: "top 20%",
        scrub: true,
        markers: false,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-background-light dark:bg-background px-4 sm:px-8 md:px-horizontal py-vertical flex flex-col md:flex-row md:gap-20 items-center overflow-hidden"
      id="about"
    >
      <div ref={imageRef} className="w-full md:w-1/2 h-auto mb-8 md:mb-0">
        <img
          src={aboutImg}
          alt="my image"
          className="w-full h-auto object-cover grayscale-100 hover:grayscale-0 transition-all duration-500 ease-in-out"
        />
      </div>

      <div ref={textRef} className="w-full md:w-1/2">
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
          {/* <br />
          <br />
          (p.s : Me trying to come up with good designs)
          <br />
          <br />
          <Undo
            size={60}
            className="hidden md:block rotate-150 scale-x-[-1] sm:size-36 md:size-36"
          /> */}
        </h4>
      </div>
    </section>
  );
}

export default About;
