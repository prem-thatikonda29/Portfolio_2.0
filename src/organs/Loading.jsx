import { useState, useEffect, useRef } from "react";
import { Rocket } from "lucide-react";

function Loading({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef(null);

  // Animate Stars
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 2,
      alpha: Math.random(),
      speed: Math.random() * 0.02,
    }));

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0.2) star.speed *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(drawStars);
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawStars();
  }, []);

  // Progress Bar Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return oldProgress + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <section className="w-full h-screen bg-background flex flex-col justify-center items-center relative overflow-hidden">
      {/* Starry Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      ></canvas>

      {/* Progress Bar */}
      <div className="w-3/4 h-4 bg-gray-700 rounded-sm relative z-10">
        <div
          className="h-full bg-[#6C757D] rounded-sm transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
        {/* Rocket Icon */}
        <Rocket
          size={60}
          className="absolute -top-8 sm:-top-10 md:-top-12 text-white transition-all duration-100 ease-linear rotate-45 sm:size-80 md:size-80"
          style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
        />
      </div>
    </section>
  );
}

export default Loading;
