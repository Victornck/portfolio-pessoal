function HeaderComponent() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center px-6 pt-32 space-y-10"
    >
      <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl">
        Olá! eu sou, <br />
        <span
          className="
            bg-gradient-to-r 
            from-green-300 
            to-green-700 
            bg-clip-text 
            text-transparent 
            font-extrabold
            bg-200%
            animate-gradient
          "
        >
          Victor Berlinck!
        </span>
      </h1>

      <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed">
        Sou desenvolvedor Full Stack em formação, focado em criar aplicações
        modernas, escaláveis e bem estruturadas, utilizando tecnologias atuais
        para resolver problemas reais de pessoas e empresas.
      </p>
    </section>
  );
}

export default HeaderComponent;
