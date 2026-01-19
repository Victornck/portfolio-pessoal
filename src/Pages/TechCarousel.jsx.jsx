const techLogos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
];

function TechCarousel() {
  return (
    <div className="w-full overflow-hidden py-10">
      <div className="flex w-max animate-carousel gap-14 items-center hover:[animation-play-state:paused]">
        {[...techLogos, ...techLogos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Tecnologia"
            className="h-12 grayscale opacity-70 hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  );
}

export default TechCarousel;
