import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProgramsProps {
  title: string;
  href: string;
  backgroundColor?: "white" | "green";
}

const Programs: React.FC<ProgramsProps> = ({ title, href, backgroundColor }) => {
  const isHighlight = backgroundColor === "green";

  return (
    <Link
      href={href}
      className={cn(
        "group flex w-full flex-row items-center justify-between gap-4 rounded-md border px-5 py-5 transition-colors duration-150 sm:px-6",
        isHighlight
          ? "border-transparent bg-brand-primary text-ink hover:bg-brand-secondary"
          : "border-hairline bg-surface-canvas text-ink hover:border-ink/25"
      )}
    >
      <p className="text-tagline">{title}</p>
      <span
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors",
          isHighlight
            ? "border-ink/20 text-ink"
            : "border-hairline text-brand-link group-hover:border-ink/25"
        )}
      >
        <Icon icon="material-symbols:arrow-right-alt" className="h-5 w-5 -rotate-45" />
      </span>
    </Link>
  );
};

export default Programs;
