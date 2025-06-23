import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../context/themeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { darkMode, toggleDarkMode } = useTheme();

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Skills", href: "#skills" }, 
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full p-5 z-50 border-b dark:border-white/10 border-black/10   backdrop-blur-md "
      >
        <div className=" max-w-7xl mx-auto  py-3 flex justify-between items-center dark:text-white text-gray-800 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, ease: "easeIn" }}
            className="text-4xl font-extrabold tracking-wider "
          >
            {/* Logo */}
            <span
            id="#"
              className="font-nav-icon cursor-default bg-gradient-to-r from-red-800 via-rose-600 to-fuchsia-700
               dark:from-rose-500 dark:via-red-300
              dark:to-fuchsia-300 
            bg-clip-text text-transparent
            dark:hover:from-rose-400 dark:hover:via-red-400 hover:to-red-300 transition-all ease-in duration-300 "
            >
              Developer
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 font-poppin text-lg tracking-wider">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:underline underline-offset-5 decoration-[#fd4fa9] 
                bg-gradient-to-r from-gray-800 via-fuchsia-800/90 to-fuchsia-700 dark:from-rose-500 dark:via-red-300 dark:to-fuchsia-300  bg-clip-text text-transparent dark:hover:from-rose-400 dark:hover:via-red-400 hover:to-red-300 "
              >
                {link.name}
              </motion.a>
            ))}

            <button 
            className="cursor-pointer"
            onClick={toggleDarkMode}>
              {darkMode ? ( 
                <Moon size={26} />
              ) : (
                <Sun size={26} className="text-gray-900" />
              )}
            </button>
          </div>

          {/* Mobile Menu
           */}
          <div className=" flex gap-4  md:hidden">
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <Moon size={24} />
              ) : (
                <Sun size={24} className="text-gray-900" />
              )}
            </button>

            <button onClick={() => setIsOpen(true)}>
              <Menu size={26} />
            </button>
          </div>
        </div>
      </motion.nav>
        {/* Mobile Sidebar */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{ type: "tween", duration: 0.1 }} 
          className="fixed top-0 right-0 h-screen w-[65%] backdrop-blur-xl   bg-white/20 dark:bg-white/10 text-white border-1 border-black/20 dark:border-white/20
        duration-300 transition-all  ease-in-out z-50  shadow-xl md:hidden"
        >
          <button className="w-full px-7 pt-5" onClick={() => setIsOpen(false)}>
            <X 
              size={26}
              className="hover:scale-115 text-black/40 dark:text-white "
            />
          </button>

          <div className="flex flex-col items-center p-7 space-y-7 ">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium
              tracking-wider px-5 py-4
              bg-gradient-to-r
             from-pink-600 via-rose-600
              to-red-400
              hover:from-pink-800 hover:via-rose-600
              hover:to-red-300/50
              
              dark:from-pink-300 dark:via-rose-200
              dark:to-red-300
              dark:hover:from-pink-700 dark:hover:via-rose-200
              dark:hover:to-red-400
              bg-clip-text
              text-transparent
          
              rounded hover:border dark:hover:bg-white/4 dark:hover:border-white/50 hover:scale-105
              hover:bg-black hover:border-black/50  "
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
    </>
  );
};

export default Navbar;
