import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${scrolled 
          ? "backdrop-blur-md bg-black/50 border-b border-white/10 shadow-lg" 
          : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex justify-between items-center">
        <div className="flex space-x-2 leading-tight items-center">
          <span
            className="bg-gradient-to-r 
            from-green-300 
            to-green-700 
            bg-200%
            animate-gradient 
            bg-clip-text 
            text-transparent 
            font-bold 
            text-base"
          >
            Berlinck.dev
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;