import { GalleryVerticalEnd } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import SelfCheckup from "../assets/certificados/bootcamp.png";

const Certificates = [
  {
    id: 1,
    img: SelfCheckup,
    title: "BootCamp SelfCheckUp",
    descricao:
      "Formação prática em React, abordando componentização, hooks, gerenciamento de estado e boas práticas front-end.",
  },
];

function Button() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-3 pt-4 space-y-2">
      <div className="flex gap-6 pt-4">
        <div>
          <Dialog>
            <DialogTrigger className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition inline-flex items-center justify-center">
              <GalleryVerticalEnd />
              Ver certificados
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
              <DialogHeader>
                <DialogTitle className="text-xl">Meus Certificados</DialogTitle>

                <DialogDescription className="text-sm">
                  Cursos e formações concluídas ao longo da minha jornada como
                  desenvolvedor.
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 overflow-y-auto max-h-[60vh] pr-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="rounded-xl border bg-muted/50 p-4 hover:shadow-lg transition"
                    >
                      <img
                        src={cert.img}
                        alt={cert.title}
                        className="rounded-lg object-contain mb-3"
                      />
                      <h3 className="text-sm font-semibold">{cert.title}</h3>
                      <p className="text-xs text-muted-foreground">
                        {cert.descricao}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <a
          className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-gradient-to-r from-orange-400 to-purple-500 hover:text-white transition hover:border-transparent "
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
