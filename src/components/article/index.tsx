import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ArticleCardProps {
  src: string;
  alt: string;
  title: string;
  author: string;
  href: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  src,
  alt,
  title,
  author,
  href,
}) => {
  return (
    <article className="flex flex-col gap-4 sm:flex-row sm:gap-6">
      <Link href={href} className="shrink-0">
        <Image
          src={src}
          alt={alt}
          width={160}
          height={160}
          className="h-40 w-full rounded-sm bg-surface-parchment object-cover sm:w-40"
        />
      </Link>

      <Link href={href} className="flex flex-col justify-between gap-4">
        <div>
          <h2 className="text-tagline text-ink">{title}</h2>
          <p className="mt-1 text-caption text-ink-fine">{author}</p>
        </div>
        <span className="btn-link text-caption">
          Read more
          <Icon icon="material-symbols:arrow-right-alt" className="h-4 w-4 -rotate-45" />
        </span>
      </Link>
    </article>
  );
};

export default ArticleCard;
