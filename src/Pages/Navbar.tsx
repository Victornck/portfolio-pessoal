function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0F0F0F] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center ">
        {/* LOGO / NOME */}
        <div className="flex space-x-2 leading-tight items-center">
          <img className="w-9 h-9" src="/logo.png" alt="logo" />
          <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent font-bold text-2xl">
            Berlinck.dev
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
