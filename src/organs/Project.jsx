import React from "react";
import { Github, Globe } from "../assets/Icons";
import Link_Icon from "./Link_Icon";

function Project({ name, techStack, githubLink, liveLink }) {
  const colors = {
    ReactJs: "#58c4dc",
    MongoDB: "#00ed64",
    NodeJs: "#84ba64",
    ThreeJs: "#bbbbbb",
    GSAP: "#0ae448",
    FramerMotion: "#fff42b",
    TailwindCSS: "#00B4D8",
    Firebase: "#f6820d",
  };

  return (
    <div className="border-background dark:border-background-light border-4 w-92 h-60 text-2xl p-4 flex flex-col">
      {/* Icons Section */}
      <div className="h-1/3 w-full flex gap-2 justify-end mb-2">
        {githubLink && (
          <Link_Icon>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          </Link_Icon>
        )}
        {liveLink && (
          <Link_Icon>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <Globe />
            </a>
          </Link_Icon>
        )}
      </div>

      {/* Project Name */}
      <div className="h-1/3 w-full mb-2 flex items-center">
        <h2 className="px-2 text-heading dark:text-heading-light font-bold text-4xl font-gemunu">
          {name}
        </h2>
      </div>

      {/* Technologies Used */}
      <div className="h-1/3 w-full mb-2 flex flex-wrap items-center font-gemunu gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 rounded-md text-lg font-bold"
            style={{ color: colors[tech] || "#e9ecef" }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Project;
