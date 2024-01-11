"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface typeTabData {
  title: string;
  id: string;
  content: JSX.Element;
}

const tabData: typeTabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Andromeda Computer-Internship Certificate</li>
        <li>EFSET English certificate-B2 Upper Intermediate</li>
        <li>Henry Bootcamp-Full Stack Web Developer</li>
        <li>Códigofacilito-Curso a fondo de SASS </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Developer - Flexwork LATAM(Internship) Jan-Present 2024</li>
        <li>Full Stack Developer - Andromeda Computer(Internship) Oct-Nov 2023</li>
        <li>Full Stack Developer - Tu Sueño Set-Oct 2023</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string): void => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/codingImagePortfolio.jpg" width={480} height={450} alt="coding" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-600 to-rose-700 mb-4 max-w-[300px]">About Me</h2>
          <p className="text-base lg:text-lg">
            Full stack developer with experience in technologies such as Next.js,
            TypeScript, React, Redux Toolkit, and Express. Proficient in CSS design, TailwindCSS,
            and GIT version control. Knowledge of PostgreSQL as a databases and agile methodologies
            such as SCRUM. Additionally, I possess skills in user interface design using Figma, i am proactive,
            quick to learn, and work well in a team. English proficiency level: EF SET Intermediate B1.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {tabData.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
