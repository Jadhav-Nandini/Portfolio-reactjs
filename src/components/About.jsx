import { motion } from "framer-motion";

const About = () => {
  return (

   <section id="about" className="w-full min-h-screen flex items-center justify-center px-6 bg-[#f5e3e8]/30 dark:bg-black">

    <div className="max-w-3xl text-center text-lg font-poppin text-gray-800 dark:text-gray-300 space-y-6">
    
  <h2 className="text-3xl sm:text-4xl font-bold font-nav-icon text-center text-gray-900 dark:text-[#ddc7d3] mb-10 tracking-tight">
    About Me
  </h2>

  <div className="max-w-3xl mx-auto text-center text-lg font-poppin text-gray-800 dark:text-gray-300 space-y-5">
    <p>
      I'm <span className="font-semibold text-rose-500 dark:text-rose-300">Nandini</span>,  a passionate full-stack developer with a strong focus on creating smooth, modern, and interactive user interfaces.
    </p>

    <p>
      My expertise lies in building responsive web applications using technologies like <span className="font-medium text-rose-500 dark:text-rose-200">React.js</span>, <span className="font-medium text-rose-500 dark:text-rose-200">Tailwind CSS</span>, <span className="font-medium text-rose-500 dark:text-rose-200">Node.js</span>, and <span className="font-medium text-rose-500 dark:text-rose-200">MongoDB</span>.
    </p>

    <p>
      I’m currently looking for full-time opportunities where I can contribute, grow, and bring creative ideas to life through code.
    </p>

    <p className="font-heading text-xl text-rose-500 dark:text-gray-700 ">
      Let’s connect and build something meaningful together.
    </p>
       </div>
  </div>
</section>

  );
};

export default About;
