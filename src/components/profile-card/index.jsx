"use client";

import Image from "next/image";

function getLayoutConfig(count) {
  switch (count) {
    case 3:
      return {
        itemWidth: "w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] max-w-[280px]",
        sizes: "(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 280px",
      };
    case 4:
      return {
        itemWidth: "w-[calc(50%-0.5rem)] sm:w-[calc(25%-1.125rem)] max-w-[250px]",
        sizes: "(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 250px",
      };
    case 5:
      return {
        itemWidth: "w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.2rem)] max-w-[220px] lg:max-w-[200px]",
        sizes: "(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px",
      };
    case 6:
      return {
        itemWidth: "w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] max-w-[260px]",
        sizes: "(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 260px",
      };
    default:
      return {
        itemWidth: "w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)] max-w-[250px]",
        sizes: "(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 250px",
      };
  }
}

export default function ProfileCard({ images, imagesTop = [], imagesBottom = [] }) {
  const rawImages = images && images.length > 0 ? images : [...imagesTop, ...imagesBottom];
  // Append version query param to bust any cached thumbnails
  const allImages = rawImages.map((src) => (src.includes("?") ? src : `${src}?v=4`));

  const config = getLayoutConfig(allImages.length);

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
        {allImages.map((src, i) => (
          <div
            key={i}
            className={`group relative aspect-[4/5] rounded-2xl overflow-hidden glass-surface border border-white/10 shadow-lg hover:border-green-500/30 hover:-translate-y-1.5 transition-all duration-300 flex-shrink-0 ${config.itemWidth}`}
          >
            <Image
              src={src}
              alt={`Anggota Divisi ${i + 1}`}
              fill
              sizes={config.sizes}
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}

