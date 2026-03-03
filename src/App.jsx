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
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white font-poppins">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-3xl animate-pulse-slow opacity-35"></div>
      <div className="absolute -bottom-70 -right-40 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-3xl animate-pulse-slow opacity-15"></div>

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
