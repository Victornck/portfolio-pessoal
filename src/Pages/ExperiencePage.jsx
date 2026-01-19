import { Separator } from "@/components/ui/separator";
import { GitBranch } from "lucide-react";

const experiences = [
  {
    title: "Desenvolvedor Full Stack Freelancer",
    description:
      "Desenvolvedor freelancer com atuação no planejamento, desenvolvimento e entrega de soluções de software escaláveis, focadas em qualidade, performance e boas práticas.",
    date: "2023-Atual",
  },
];

function ExperiencePage() {
  return (
    <div className="mt-24 text-center">
      <div>
        <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent font-bold text-4xl">
          EXPERIÊNCIA
        </span>
        <p className="text-center opacity-55">
          Onde experiência encontra tecnologia
        </p>
      </div>

      <div className="mt-10 max-w-6xl mx-auto px-4 space-y-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="w-full p-8 rounded-xl bg-zinc-900 border border-zinc-800"
          >
            <div className="flex items-center gap-3">
              <GitBranch className="w-5 h-5 text-purple-400" />

              <div className=" w-full flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">
                  {experience.title}
                </h3>

                <span className="text-sm text-zinc-400">{experience.date}</span>
              </div>
            </div>

            <p className="mt-3 text-zinc-400 leading-relaxed text-left">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperiencePage;
