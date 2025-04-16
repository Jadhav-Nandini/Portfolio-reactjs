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
        <p className=" flex flex-col text-xl  text-rose-950  dark:text-white dark:hover:text-rose-300/100 leading-relaxed font-normal darK:font-thin font-poppin ">
           
            Hi, I’m Nandini — a frontend developer and BCA student with a
            passion for building clean, responsive, and user-focused web
            applications. I specialize in modern web technologies like React.js,
            Tailwind CSS, and JavaScript.
            I enjoy bringing designs to life through animations, smooth
            interactions, and attention to detail. Recently, I’ve been exploring
            backend tools like Node.js and MongoDB to grow into a full stack
            developer. <br />
            I love learning by building, and I'm always looking for
            opportunities to challenge myself, collaborate with others, and grow
            as a developer. <br />
            I’m currently open to internship roles where I can contribute,
            learn, and be part of a passionate team working on real-world
            products.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
