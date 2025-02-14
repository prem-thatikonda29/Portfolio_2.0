import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2, // Smooth movement
        ease: "power2.out",
      });

      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5, // Delayed effect
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 bg-white rounded-full pointer-events-none mix-blend-difference z-50"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Follower Effect */}
      <div
        ref={followerRef}
        className="fixed w-16 h-16 border border-white rounded-full pointer-events-none mix-blend-difference opacity-50 z-40"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default Cursor;
