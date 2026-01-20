import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "Skills", href: "#skills" },
    { label: "Projetos", href: "#projects" },
    { label: "Experiência", href: "#experience" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 h-16 transition-all ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        <div>
          <span className="font-semibold text-lg">Victor Berlinck</span>
          <p className="font-light bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
            Dev
          </p>
        </div>

        {/* Menu */}
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href} className="relative">
              <motion.a
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
                whileHover="hover"
              >
                {link.label}

                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-purple-500"
                  initial={{ scaleX: 0 }}
                  variants={{
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
