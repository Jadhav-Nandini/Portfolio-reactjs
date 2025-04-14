import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen  text-white flex items-center justify-center px-6 md:px-20 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-500 to-indigo-400 mb-3 font-heading">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed font-thin font-poppin ">
          I'm a passionate developer who blends creativity with clean code. I specialize in
          building elegant, user-friendly interfaces and love crafting web experiences that feel
          luxurious and modern. I enjoy bringing beautiful designs to life and constantly learning
          new technologies to elevate my skills.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
