import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    title: "Taskify",
    description:
      "Aplicação voltada ao gerenciamento eficiente de tarefas, oferecendo um fluxo simples e ágil para aumentar a produtividade.",
    stack: ["React", "Tailwind", "Vite"],
    demo: "https://taskify-rho-five.vercel.app",
    repo: "https://github.com/Victornck/Taskify",
  },

  {
    title: "Valen Store",
    description:
      "E-commerce de maquiagens com layout responsivo e SEO otimizado.",
    stack: ["React", "Vite", "CSS"],
    demo: "https://valen-store.vercel.app",
    repo: "https://github.com/seuuser/valen-store",
  },
];

function Projects() {
  return (
    <div className="mt-24 text-center ">
      <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent font-bold text-4xl">
        PROJETOS
      </span>
      <p className="text-center opacity-55">
        Conhecimento aplicado em projetos
      </p>

      <div>
        <div className="mt-10 max-w-6xl mx-auto px-4 space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="space-y-4 p-6 rounded-xl bg-zinc-900 border border-zinc-800 text-left"
            >
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <div className="opacity-30">
                <Separator />
              </div>
              <p className="mt-2 text-zinc-400">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-8 mt-5">
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 text-zinc-200 hover:text-purple-400 transition"
                >
                  <FaExternalLinkAlt /> Ver projeto
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  className="flex items-center gap-2 text-zinc-200 hover:text-purple-400 transition"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
