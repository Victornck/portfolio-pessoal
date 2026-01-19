import { cn } from "@/lib/utils";

export function ContactCard({
  href,
  title,
  subtitle,
  // eslint-disable-next-line no-unused-vars
  icon: Icon,
  gradient,
  shadow,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-black/60 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8 flex flex-col items-center gap-4 transition-all hover:-translate-y-2"
    >
      <div
        className={cn(
          "w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg",
          gradient,
          shadow,
        )}
      >
        <Icon className="w-10 h-10 text-white" />
      </div>

      <span className="text-white font-bold text-xl">{title}</span>
      <span className="text-gray-400 text-center">{subtitle}</span>
    </a>
  );
}
