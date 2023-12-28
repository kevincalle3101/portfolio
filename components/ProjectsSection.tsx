"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
// import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number,
  title: string,
  description: string,
  imageCover: string,
  imagePathArray: string[],
  tag: string[],
  gitUrl: string,
  previewUrl: string,
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Countries App",
    description: "An application that will allow you to know all the data of any country in the world",
    imageCover: "/images/projects/countriesApp/countriesCover.webp",
    imagePathArray: ["/images/projects/countriesApp/countries1.webp", "/images/projects/countriesApp/countries2.webp", "/images/projects/countriesApp/countries3.webp", "/images/projects/countriesApp/countries4.webp"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kevincalle3101/countries-app",
    previewUrl: "https://kevincalle-countries-app.vercel.app/"
  },
  {
    id: 2,
    title: "Gaia Ecotrack",
    description: "Gaia Ecotrack, developed during my internship at Andromeda Computer, is the MVP of a natural energy tokenization system for subsequent trading on the Algorand network.",
    imageCover: "/images/projects/gaiaEcotrack/gaiaCover.webp",
    imagePathArray: ["/images/projects/gaiaEcotrack/gaia1.webp", "/images/projects/gaiaEcotrack/gaia2.webp"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ilichb/GaiaEcotrack/tree/GaiaDEV",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "Tu Sueño",
    description: "Tu Sueño is a project for a Colombian piggy bank sales company, which has inventory management, online sales and user management.",
    imageCover: "/images/projects/tuSueno/tuSuenoCover.webp",
    imagePathArray: ["/images/projects/tuSueno/tuSueno1.webp", "/images/projects/tuSueno/tuSueno2.webp", "/images/projects/tuSueno/tuSueno3.webp", "/images/projects/tuSueno/tuSueno4.webp", 
    "/images/projects/tuSueno/tuSueno5.webp", "/images/projects/tuSueno/tuSueno6.webp"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/UrielGarmendia/tu-suenio-front",
    previewUrl: "https://tu-suenio-front.vercel.app/",
  },
  {
    id: 4,
    title: "Agilix",
    description: "Agilix is a Point of Sale (POS) System that simplifies the management of retail businesses, promoting their growth through an intuitive and efficient web application.",
    imageCover: "/images/projects/agilix/agilixCover.webp",
    imagePathArray: ["/images/projects/agilix/agilix1.webp", "/images/projects/agilix/agilix2.webp", "/images/projects/agilix/agilix3.webp", "/images/projects/agilix/agilix4.webp",
     "/images/projects/agilix/agilix5.webp","/images/projects/agilix/agilix6.webp"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JoseEnriquez88/Agilix",
    previewUrl: "/"
  },
  {
    id: 5,
    title: "Videogames Wiki",
    description: "It's a video game Wiki that has intuitive search, video game details, and you can create your own!",
    imageCover: "/images/projects/videogamesWiki/videogamesCover.webp",
    imagePathArray: ["/images/projects/videogamesWiki/videogames1.webp", "/images/projects/videogamesWiki/videogames2.webp", "/images/projects/videogamesWiki/videogames3.webp",
    "/images/projects/videogamesWiki/videogames4.webp", "/images/projects/videogamesWiki/videogames5.webp", "/images/projects/videogamesWiki/videogames6.webp"],
    tag: ["All"], 
    gitUrl: "https://github.com/kevincalle3101/PI-VIDEOGAMES",
    previewUrl: "https://videogames-wiki.vercel.app/"
  },
  {
    id: 6,
    title: "Rick and Morty Wiki",
    description: "It has more than 800 characters from the series, their details and save your favorites with an intuitive search for them.",
    imageCover: "/images/projects/rickAndMorty/rickMortyCover.webp",
    imagePathArray: ["/images/projects/rickAndMorty/rickMorty1.webp", "/images/projects/rickAndMorty/rickMorty2.webp", "/images/projects/rickAndMorty/rickMorty3.webp",
    "/images/projects/rickAndMorty/rickMorty4.webp"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kevincalle3101/RickAndMorty-Project",
    previewUrl: "https://rick-and-morty-project-snowy.vercel.app/"
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
              imgCover={project.imageCover}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              imagePathArray={project.imagePathArray}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
