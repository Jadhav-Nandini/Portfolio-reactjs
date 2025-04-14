import React from "react";
import TechCard from "./TechCard";

// tech - prop from parent component
const TechIUse = ({ tech }) => {

  return (
    <section >
      <div className="mt-5  grid grid-cols-2 gap-6 sm:grid-cols-5">
        {tech.map((techItem, index) => (
          <TechCard 
          key={index} {...techItem} />
        ))}
      </div>
    </section>
  );
};

export default TechIUse;




