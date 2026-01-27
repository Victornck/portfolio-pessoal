
function Navbar() {
  return (
    <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
      {/* LOGO / NOME */}
      <div className="flex space-x-2 leading-tight">
        <img className="w-5 h-5" src="/logo.png" alt="logo" />
        <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent font-bold">
          Berlinck.dev
        </span>
      </div>
    </div>
  );
}

export default Navbar;
