
import React from 'react'
import TechIUse from "../components/TechIUse.jsx";
import { languages } from "../data/languages";
import { libraries } from "../data/libraries";
import {tools} from '../data/tools.jsx';
import {database} from '../data/database.jsx';


const Skills = () => {
  return (
    <div 
    id='skills'
    className=" dark:bg-black flex flex-col h-full max-w-screen-xl mx-auto">
    


    <h2 className=" m-3 font-nav-icon dark:text-[#ddc7d3] text-3xl sm:text-4xl  tracking-tighter pt-6">
      Tech Stack that I use :
    </h2>

    <h3 className=" m-4 mt-2 pt-4  text-3xl font-nav-icon dark:text-[#ddc7d3] ">Languages:</h3>
    {/* passing a prop  */}
    <TechIUse tech={languages} />  
    
    <h3 className="m-4 mb-1 pt-4  text-3xl font-nav-icon dark:text-[#ddc7d3]">Frameworks / Libraries :</h3>
    <TechIUse tech={libraries} />

    <h3 className="m-4 mb-1 pt-4  text-3xl font-nav-icon dark:text-[#ddc7d3]">Tools</h3>
    <TechIUse tech={tools} />

    <h3 className="m-4 mb-1  pt-4  text-3xl font-nav-icon dark:text-[#ddc7d3]">Database</h3>
    <TechIUse tech={database} />

    <hr className="my-6 border-rose-200/60 dark:border-neutral-800" />
  </div>
  )
}

export default Skills