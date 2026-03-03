import Button from "./Pages/Button";
import Contact from "./Pages/Contact.jsx";
import ExperiencePage from "./Pages/ExperiencePage";
import HeaderComponent from "./Pages/HeaderComponent";
import Navbar from "./Pages/Navbar";
import ProgrammingLanguage from "./Pages/ProgrammingLanguage";
import Projects from "./Pages/Projects.jsx";
import TechCarousel from "./Pages/TechCarousel.jsx.jsx";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-black via-zinc-900 to-black text-white font-poppins">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-3xl opacity-15 animate-pulse-slow" />
      </div>
      <Navbar />
      <div>
        <HeaderComponent />
        <Button />
      </div>

      <ProgrammingLanguage />
      <TechCarousel />
      <Projects />
      <ExperiencePage />
      <Contact />
      <div>
        <footer className="mt-8 bg-black/80   py-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Victor Berlinck. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Desenvolvido com React & TailWind
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
