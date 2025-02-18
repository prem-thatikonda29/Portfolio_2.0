import { useEffect, useRef, useState } from "react";
import "../index.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsList } from "../constants/constants";
import { Github, Globe } from "lucide-react";
import Link_Icon from "../organs/Link_Icon";

const ListItem = ({ item }) => {
  const ref = useRef();

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
    <div
      ref={ref}
      className="border-background dark:border-background-light border-4 w-92 h-60 text-2xl p-4 flex flex-col shadow-lg"
    >
      {/* Icons Section */}
      <div className="h-1/3 w-full flex gap-2 justify-end mb-2">
        {item.githubLink && (
          <Link_Icon>
            <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          </Link_Icon>
        )}
        {item.liveLink && (
          <Link_Icon>
            <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
              <Globe />
            </a>
          </Link_Icon>
        )}
      </div>

      {/* Project Name */}
      <div className="h-1/3 w-full mb-2 flex items-center">
        <h2 className="px-2 text-heading dark:text-heading-light font-bold text-4xl font-gemunu">
          {item.name}
        </h2>
      </div>

      {/* Technologies Used */}
      <div className="h-1/3 w-full mb-2 flex flex-wrap items-center font-gemunu gap-2">
        {item.techStack.map((tech, index) => (
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
};

// const Projects = () => {
//   const [containerDistance, setContainerDistance] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     const calculateDistance = () => {
//       if (ref.current) {
//         const rect = ref.current.getBoundingClientRect();
//         setContainerDistance(rect.left);
//       }
//     };

//     calculateDistance();
//     window.addEventListener("resize", calculateDistance);
//     return () => window.removeEventListener("resize", calculateDistance);
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });
//   const xTranslate = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, -(projectsList.length * 92 + (projectsList.length - 1) * 40)] // Accounts for width & gap
//   );

//   return (
//     <div
//       className="projects px-horizontal py-vertical bg-background-light dark:bg-background"
//       ref={ref}
//     >
//       <h1 className="text-5xl font-bowlby dark:text-heading-light">
//         Stuff that I&apos;ve done
//       </h1>
//       <motion.div className="pList" style={{ x: xTranslate }} initial={false}>
//         {/* <div
//           className="empty"
//           style={{
//             width: window.innerWidth - containerDistance,
//           }}
//         /> */}
//         {/* <div className="empty" style={{ width: "10vw" }} /> */}
//         {projectsList.map((item) => (
//           <ListItem item={item} key={item.id} />
//         ))}
//       </motion.div>
//       <section />
//       <section />
//     </div>
//   );
// };

// export default Projects;

const Projects = () => {
  return (
    <div className="projects bg-background-light dark:bg-background">
      <h1 className="text-5xl font-bowlby dark:text-heading-light mb-4">
        Stuff that I&apos;ve done
      </h1>

      {/* Scrollable Container */}
      <div className="pContainer">
        <div className="pList">
          {projectsList.map((item) => (
            <ListItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
