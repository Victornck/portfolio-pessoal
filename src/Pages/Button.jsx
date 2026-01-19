function Button() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 pt-4 space-y-2">
      <div className="flex gap-6 pt-4">
        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
          Entrar em contato
        </button>

        <button className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
          Baixar CV
        </button>
      </div>
    </div>
  );
}

export default Button;
