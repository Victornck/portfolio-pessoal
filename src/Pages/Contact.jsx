import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { ContactCard } from "./ContactCard";

const contacts = [
  {
    title: "WhatsApp",
    subtitle: "(88) 98182-1934",
    href: "https://wa.me/5588981821934",
    icon: FaWhatsapp,
    gradient: "bg-gradient-to-br from-green-500 to-green-700",
  },
  {
    title: "LinkedIn",
    subtitle: "Victor Berlinck",
    href: "https://www.linkedin.com/in/victor-berlinck-61bba1273/",
    icon: FaLinkedin,
    gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    title: "GitHub",
    subtitle: "Victornck",
    href: "https://github.com/Victornck",
    icon: FaGithub,
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
  },
];

function Contact() {
  return (
    <div className="mt-24 text-center max-w-6xl mx-auto px-4">
      <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent font-bold text-4xl">
        CONTATO
      </span>
      <p className="text-center opacity-55">Entre em contato comigo</p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact) => (
          <ContactCard key={contact.title} {...contact} />
        ))}
      </div>
    </div>
  );
}

export default Contact;
