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
      className="group relative w-full h-[380px] md:h-[420px] rounded-3xl overflow-hidden border border-white/15 bg-white/[0.02] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-500 hover:border-white/30 hover:-translate-y-1 block"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-95"
      />
      {/* Liquid Glass Frosted Bottom Bar */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-end justify-between gap-4">
        <div className="space-y-1">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase bg-green-600/30 border border-green-500/40 text-green-300 backdrop-blur-md">
            Featured Event
          </span>
          <p className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
            {title}
          </p>
        </div>
        <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center text-white shrink-0 group-hover:bg-green-700 group-hover:border-transparent transition-all duration-300 shadow-lg">
          <Icon
            icon={"material-symbols:arrow-right-alt"}
            className="w-5 h-5 transform -rotate-45"
          />
        </div>
      </div>
    </Link>
  );
};

export default EventImage;
