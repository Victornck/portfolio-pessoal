import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GitBranch } from "lucide-react";

const techLogos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
];

function TechCarousel() {
  return (
    <div className="w-full overflow-hidden py-10">
      <div className="flex w-max animate-carousel gap-14 items-center">
        {[...techLogos, ...techLogos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Tecnologia"
            className="h-12 grayscale opacity-70 hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-6 p-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-transparent border border-white/25 text-white/70 px-3 py-1.5 rounded-lg hover:none hover:bg-transparent hover:text-white hover:border-white/25">
              Ver tecnologias
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#0F0F0F] border-none text-white">
            <DialogHeader>
              <DialogTitle>Tecnologias</DialogTitle>
              <DialogDescription className="text-white opacity-55">
                Tecnologias que utilizo no dia a dia.
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-wrap gap-4 justify-center mt-4">
              {[...techLogos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Tecnologia"
                  className="h-12 opacity-70 hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default TechCarousel;
