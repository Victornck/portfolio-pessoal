function Button() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 pt-4 space-y-2">
      <div className="flex gap-6 pt-4">
        <a
          href="#contact"
          className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition inline-flex items-center justify-center"
        >
          Entrar em contato
        </a>

        <a
          className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          href="/victor-berlinck.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visualizar Currículo
        </a>
      </div>
    </div>
  );
}

export default Button;
