import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled, active] = useState(false);

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

  {/* LOGO / NOME */}
  <div className="flex space-x-2 leading-tight">
    <img className="w-5 h-5" src="/logo.png" alt="logo" />
    <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent font-bold">
      Berlinck.dev
    </span>
  </div>

  {/* MENU — só desktop */}
  <ul className="hidden md:flex gap-6">
    {links.map((link) => (
      <li key={link.href} className="relative">
        <a
          href={`#${link.href}`}
          className="text-gray-400 hover:text-white transition"
        >
          {link.label}
        </a>

        {active === link.href && (
          <motion.div
            layoutId="active-underline"
            className="absolute left-0 -bottom-1 h-[2px] w-full bg-purple-500"
          />
        )}
      </li>
    ))}
  </ul>
</div>
    </motion.nav>
  );
}

export default Navbar;
