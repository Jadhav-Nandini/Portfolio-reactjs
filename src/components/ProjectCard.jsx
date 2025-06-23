
import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, image, github, live, tech }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl bg-[#e3a8bebc] border-none 

                 p-7 dark:bg-gray-700/30
                 shadow-lg  border border-gray-300/20 
                 dark:border-gray-700 flex flex-col justify-between hover:shadow-rose-500/40 dark:hover:shadow-rose-300/50
        active:translate-y-[1px] transition-all duration-200 ease-out"
    >

      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
        />
      )}

      <h3 className="text-xl font-bold font-nav-icon text-gray-900 dark:hover:text-rose-300/70 dark:text-pink-200 mb-2 tracking-wide cursor-context-menu">
        {title}
      </h3>

      <p className="text-md text-gray-700 dark:text-gray-300 font-poppin mb-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 text-xs mb-4">
        {tech.map((item, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700/60  dark:text-gray-100 font-poppin cursor-context-menu"
          >
            {item}
          </span>
        ))}
      </div>


      <div className="flex gap-4 mt-auto">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-[#37071f] dark:text-rose-300 hover:border-1 rounded-2xl p-3 hover:border-rose-300  font-semibold"
          >
            Live
          </a>
        )}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-[#37071f] dark:text-rose-300 hover:border-1 rounded-2xl p-3 hover:border-rose-300 font-semibold"
        >
          Code
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
