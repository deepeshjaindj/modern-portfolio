"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons from react-icons

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
  
      for (const link of navLinks) {
        const section = document.querySelector(link.href) as HTMLElement; // Cast to HTMLElement
        if (section) {
          const offsetTop = section.offsetTop - 80; // Adjust for navbar height
          const offsetBottom = offsetTop + section.offsetHeight;
  
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(link.href);
            window.history.replaceState(null, "", link.href);
            break;
          }
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    const section = document.querySelector(href) as HTMLElement;
    if (section) {
      window.scrollTo({ top: section.offsetTop - 70, behavior: "smooth" });
      setActiveSection(href);
      window.history.pushState(null, "", href);
      setIsMenuOpen(false); // Close the menu on link click
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-10 left-1/2 z-50 -translate-x-1/2 rounded-full bg-secondary/30 px-2 py-1 shadow-xl backdrop-blur-md border border-white/30 font-sans"
    >
      <div className="flex items-center justify-between">
        <ul className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <motion.li
              key={link.href}
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <button
                onClick={() => handleLinkClick(link.href)}
                className={`block px-4 py-1 text-base font-medium transition-colors duration-200 rounded-full ${
                  activeSection === link.href
                    ? "bg-backgroundBlue/15 text-white shadow-lg border border-white/50"
                    : "text-white/90 hover:text-primaryYellow"
                }`}
              >
                {link.name}
              </button>
            </motion.li>
          ))}
        </ul>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-backgroundBlue bg-opacity-70 flex flex-col items-center justify-center">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLinkClick(link.href)}
                  className={`block px-4 py-2 text-lg font-medium text-white transition-colors duration-200 rounded-full ${
                    activeSection === link.href
                      ? "bg-backgroundBlue/15 text-white shadow-lg border border-white/50"
                      : "text-white/90 hover:text-primaryYellow"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;