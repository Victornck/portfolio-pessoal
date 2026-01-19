import Button from "./Pages/Button";
import Contact from "./Pages/Contact.jsx";
import ExperiencePage from "./Pages/ExperiencePage";
import HeaderComponent from "./Pages/HeaderComponent";
import ProgrammingLanguage from "./Pages/ProgrammingLanguage";
import Projects from "./Pages/Projects.jsx";
import TechCarousel from "./Pages/TechCarousel.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white font-poppins">
      <div>
        <HeaderComponent />
        <Button />
      </div>

      <ProgrammingLanguage />
      <TechCarousel />
      <Projects />
      <ExperiencePage />
      <Contact />
    </div>
  );
}

export default App;
