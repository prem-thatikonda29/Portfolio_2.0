import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Landing_left from "../organs/Landing_Left";
import Landing_right from "../organs/Landing_Right";

const Landing = () => {
  const containerRef = useRef(null);
  const devSection = useRef(null);
  const designSection = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    iconsRef.current = document.querySelectorAll(".tech-icon");
  }, []);

  const handleMouseMove = (e, section) => {
    // Only apply mouse move effects on larger screens
    if (!containerRef.current || window.innerWidth < 768) return;

    const { clientX } = e;
    const { left, right, width } = containerRef.current.getBoundingClientRect();

    let devWidth = devSection.current.getBoundingClientRect().width;
    let designWidth = designSection.current.getBoundingClientRect().width;

    if (section === "dev") {
      const distanceFromLeft = clientX - left;
      devWidth = Math.max(25, Math.min((distanceFromLeft / width) * 100, 75));
      designWidth = 100 - devWidth;
    } else {
      const distanceFromRight = right - clientX;
      designWidth = Math.max(
        25,
        Math.min((distanceFromRight / width) * 100, 75)
      );
      devWidth = 100 - designWidth;
    }

    gsap.to(devSection.current, {
      width: `${devWidth}%`,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(designSection.current, {
      width: `${designWidth}%`,
      duration: 0.3,
      ease: "power2.out",
    });

    // Get icons in each section separately
    const devIcons = devSection.current.querySelectorAll(".tech-icon");
    const designIcons = designSection.current.querySelectorAll(".tech-icon");

    // Adjust opacity based on each section's width
    gsap.to(devIcons, {
      opacity: devWidth < 40 ? 0 : 0.2,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(designIcons, {
      opacity: designWidth < 40 ? 0 : 0.2,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={containerRef}
      className="bg-background h-screen w-full md:flex block overflow-hidden"
      id="landing"
    >
      {/* Developer Section */}
      <div
        ref={devSection}
        className="section developer bg-background md:flex-grow md:w-auto w-full h-1/2 md:h-full flex items-center justify-center"
        onMouseMove={(e) => handleMouseMove(e, "dev")}
      >
        <Landing_left />
      </div>

      {/* Designer Section */}
      <div
        ref={designSection}
        className="section designer bg-background-light md:flex-grow md:w-auto w-full h-1/2 md:h-full flex items-center justify-center"
        onMouseMove={(e) => handleMouseMove(e, "design")}
      >
        <Landing_right />
      </div>
    </section>
  );
};

export default Landing;
