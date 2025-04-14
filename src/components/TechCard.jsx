import React from "react";



const TechCard =  ({ title, Icon, href }) => {
  
  return (
    <a className="hover:scale-105 focus:scale-95"
    href={href} target="_blank" rel="noopener noreferrer">
      <div
        className="h-22  flex flex-col items-center justify-center  space-y-2 font-poppin 
         border-none dark:bg-gray-800/50 bg-red-100/10 p-3 text-sm dark:text-[#ddc7d3] rounded-md shadow-md hover:shadow-rose-500/40 dark:hover:shadow-rose-300
        active:translate-y-[2px] transition-all duration-300 ease-out"
      >
        <Icon size={30} />
        <span className="whitespace-nowrap ">{title}</span>
      </div>
    </a>
  );
};

export default TechCard