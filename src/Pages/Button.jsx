import { GalleryVerticalEnd } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const certificate = [];

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
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-wrap gap-4 justify-center mt-4">
              {[...certificate].map((logo, index) => (
                <img
                  key={index}
                  src={/certificados/}
                  alt="Tecnologia"
                  className="h-12"
                />
              ))}
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
