import React from "react";
import ProjectItem from "./ProjectItem";
import Link from "next/link";
import Image from "next/image";
import NoImage from "../public/assets/projects/leaks.png";
import Site from "../public/assets/projects/site.png";
import h3lper from "../public/assets/projects/h3lper.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Public Projects that are fully completed</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="This Site..."
            backgroundImg={Site}
            projectUrl="https://github.com/Potatopy/h3lped-portfolio"
            langType="React.js + Next.js"
          />
          <ProjectItem
            title="h3lper.js"
            backgroundImg={h3lper}
            projectUrl="https://github.com/Potatopy/h3lper.js"
            langType="Node.js + Discord.js"
          />
          <ProjectItem
            title="A C# Project"
            backgroundImg={NoImage}
            projectUrl="/"
            langType="C#"
          />
          <ProjectItem
            title="Coming Soon!"
            backgroundImg={NoImage}
            projectUrl="/"
            langType="not just yet ;)"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
