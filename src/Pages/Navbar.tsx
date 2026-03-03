function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0F0F0F] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-14 flex justify-between items-center">
        {/* LOGO / NOME */}
        <div className="flex space-x-2 leading-tight items-center">
          <span
            className="bg-gradient-to-r 
            from-green-300 
            to-green-700 
            bg-200%
            animate-gradient bg-clip-text text-transparent font-bold text-base"
          >
            Berlinck.dev
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
