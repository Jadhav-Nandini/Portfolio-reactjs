



import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-28  dark:bg-black transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black dark:text-white">
          Hey, I'm <span className=" bg-gradient-to-r from-[#da0a76]  via-[#c6124b] to-[#be1889e4] text-transparent bg-clip-text tracking-wide font-poppin">Nandini</span>
        </h1>
        <p className="mt-4  text-gray-700 dark:text-gray-300 font-heading text-2xl font-light ">
    
          A full-stack developer creating elegant, intuitive web solutions with a flair for luxury and precision.
      
        </p>
        <motion.a
          href="#pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-block px-6 py-3 text-transparent bg-clip-text font-semibold rounded bg-gradient-to-r from-red-500 to-fuchsia-500 
          hover:from-fuchsia-600 hover:to-red-500
          border-1 border-red-500/60 dark:border-rose-300/40 hover:ring  hover:border-0 hover:ring-red-400 hover:shadow-md"
        >
         Download Resume
        </motion.a>
      </motion.div>
        
    </section>
    <hr className=" border-rose-200/60 dark:border-neutral-800 " />
    </>

  );
};

export default Hero;


