import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

interface ProgramsProps {
  title: string;
  href: string;
  backgroundColor?: "white" | "green";
}

const Programs: React.FC<ProgramsProps> = ({
  title,
  href,
  backgroundColor,
}) => {
  const isHighlight = backgroundColor === "green";

  return (
    <Link
      href={href}
      className={`group w-full p-5 sm:p-6 flex flex-row items-center justify-between rounded-2xl transition-all duration-300 ${
        isHighlight
          ? "bg-gradient-to-r from-blue-600/80 to-indigo-600/80 border border-white/30 backdrop-blur-2xl shadow-[0_12px_36px_rgba(0,102,255,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:brightness-110 hover:-translate-y-0.5"
          : "glass-surface glass-surface-hover"
      }`}
    >
      <div>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-white">
          {title}
        </p>
      </div>
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
          isHighlight
            ? "bg-white/20 border border-white/40 text-white"
            : "bg-white/10 border border-white/15 text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:border-transparent"
        }`}
      >
        <Icon
          icon={"material-symbols:arrow-right-alt"}
          className="w-5 h-5 sm:w-6 sm:h-6 transform -rotate-45"
        />
      </div>
    </Link>
  );
};

export default Programs;
