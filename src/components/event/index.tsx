import React from "react";
import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface EventImageProps {
  src: string | StaticImageData;
  alt: string;
  title: string;
  href: string;
}

const EventImage: React.FC<EventImageProps> = ({ src, alt, title, href }) => {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg border border-hairline bg-surface-canvas transition-colors duration-200 hover:border-ink/25"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-parchment">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-apple group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex items-center justify-between gap-4 p-5">
        <div className="min-w-0">
          <p className="text-caption-strong uppercase tracking-[0.08em] text-brand-link">
            Featured Event
          </p>
          <p className="mt-1 truncate text-tagline text-ink">{title}</p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline text-ink transition-colors group-hover:border-ink/25">
          <Icon icon="material-symbols:arrow-right-alt" className="h-5 w-5 -rotate-45" />
        </span>
      </div>
    </Link>
  );
};

export default EventImage;
