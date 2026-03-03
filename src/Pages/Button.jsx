import { GalleryVerticalEnd } from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import SelfCheckup from "../assets/certificados/bootcamp.png";
import CertificadoJava from "../assets/certificados/CertificadoJava.png";
import CertificadoJavaSpring from "../assets/certificados/CertificadoMinicursoJava.png";

const Certificates = [
  {
    id: 1,
    img: SelfCheckup,
    title: "BootCamp SelfCheckUp",
    descricao:
      "Formação prática em React, abordando componentização, hooks, gerenciamento de estado e boas práticas front-end.",
  },
  {
    id: 2,
    img: CertificadoJava,
    title: "Lógica de Programação em Java",
    descricao:
      "Lógica de programação, algoritmos e estruturas básicas em Java.",
  },
  {
    id: 3,
    img: CertificadoJavaSpring,
    title: "Desenvolvimento Back-end em Java",
    descricao:
      "Criação de API REST com Spring Boot, integração com banco de dados, implementação de segurança, tratamento de exceções e deploy.",
  },
];

function Button() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center text-center px-3 pt-4 space-y-2">
      <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
        <div>
          {/* Dialog Principal */}
          <Dialog>
            <DialogTrigger
              className="
              w-full sm:w-auto
              sm:min-w-[220px]
              h-12
              px-6
              bg-green-500 text-black
              rounded-full
              font-semibold
              inline-flex items-center justify-center gap-2
              whitespace-nowrap
              hover:bg-gradient-to-r
          hover:from-green-700 
          hover:to-green-700 
          hover:text-white
              transition
            "
            >
              <GalleryVerticalEnd size={18} />
              Ver certificados
            </DialogTrigger>

            <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black text-white font-poppins border-none">
              <DialogHeader>
                <DialogTitle className="text-xl">Meus Certificados</DialogTitle>
                <DialogDescription className="text-sm text-white">
                  Cursos e formações concluídas ao longo da minha jornada como
                  desenvolvedor.
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 overflow-y-auto max-h-[60vh] pr-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {Certificates.map((cert) => (
                    <div
                      key={cert.id}
                      onClick={() => setSelectedCert(cert)}
                      className="
  cursor-pointer
  rounded-xl
  border border-white/10
  p-4
  hover:-translate-y-1
  hover:shadow-xl
  transition
"
                    >
                      <img
                        src={cert.img}
                        alt={cert.title}
                        className="rounded-lg object-contain mb-3"
                      />
                      <h3 className="text-sm font-semibold text-gree">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-white">{cert.descricao}</p>
                    </div>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Dialog de Visualização Ampliada */}
          <Dialog
            open={!!selectedCert}
            onOpenChange={() => setSelectedCert(null)}
          >
            <DialogContent className="max-w-5xl">
              {selectedCert && (
                <div className="flex flex-col items-center">
                  <h2 className="text-lg font-semibold mb-4">
                    {selectedCert.title}
                  </h2>

                  <img
                    src={selectedCert.img}
                    alt={selectedCert.title}
                    className="max-h-[75vh] object-contain rounded-lg shadow-2xl"
                  />
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>

        <a
          href="/victor-berlinck.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
          w-full sm:w-auto
          sm:min-w-[220px]
          h-12
          px-6
          border border-green-500
          text-green-500
          rounded-full
          font-semibold
          inline-flex items-center justify-center
          whitespace-nowrap
          hover:text-white
          hover:border-white
          hover:border-transparent
          transition
        "
        >
          Visualizar Currículo
        </a>
      </div>
    </div>
  );
}

export default Button;
