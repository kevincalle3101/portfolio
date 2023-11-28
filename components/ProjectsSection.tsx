"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
// import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number,
  title: string,
  description: string,
  image: string,
  tag: string[],
  gitUrl: string,
  previewUrl: string,
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Countries App",
    description: "Project 5 description",
    image: "/images/projects/countriesApp.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kevincalle3101/countries-app",
    previewUrl: "https://kevincalle-countries-app.vercel.app/",
  },
  {
    id: 2,
    title: "Gaia Ecotrack",
    description: "Andromeda Computer (Colombia) Internship Project",
    image: "/images/projects/gaiaEcotrack.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Tu Sueño",
    description: "Project 2 description",
    image: "/images/projects/tuSueno.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/UrielGarmendia/tu-suenio-front",
    previewUrl: "https://tu-suenio-front.vercel.app/",
  },
  {
    id: 4,
    title: "Agilix",
    description: "Project 3 description",
    image: "/images/projects/agilix.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JoseEnriquez88/Agilix",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Videogames Wiki",
    description: "Project 4 description",
    image: "/images/projects/videogamesWiki.webp",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kevincalle3101/PI-VIDEOGAMES",
    previewUrl: "https://videogames-wiki.vercel.app/",
  },
  {
    id: 6,
    title: "Rick and Morty Wiki",
    description: "Authentication and CRUD operations",
    image: "/images/projects/rickAndMorty.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kevincalle3101/RickAndMorty-Project",
    previewUrl: "https://rick-and-morty-project-snowy.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // const handleTagChange = (newTag) => {
  //   setTag(newTag);
  // };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-500 to-rose-600 mt-4 mb-8 md:mb-12 max-w-[300px] mx-auto">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
