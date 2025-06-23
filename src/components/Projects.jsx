import React from 'react';
import { projects } from '../data/projectsDetail';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full px-6 py-16 flex flex-col items-center justify-center bg-[#f5e3e8]/30 dark:bg-black"
    >
      <div className="max-w-7xl w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-nav-icon text-center text-gray-900 dark:text-[#ddc7d3] mb-12 tracking-tight border-2 p-3 px-6 rounded-2xl border-rose-400/40">
          My Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

