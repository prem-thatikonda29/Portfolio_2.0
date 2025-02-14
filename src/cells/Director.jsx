import { useEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";

function Director() {
  const ballRef = useRef(null);
  useEffect(() => {
    gsap.to(ballRef.current, {
      y: 35,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "sine.inOut",
    });
  });
  return (
    <div className="w-12 h-20 border-2 border-heading-light rounded-full flex justify-center items-start p-2 mt-16">
      <a href="#landing">
        <div
          className="rounded-full w-6 h-6 bg-background-light ball"
          ref={ballRef}
        ></div>
      </a>
    </div>
  );
}

export default Director;
