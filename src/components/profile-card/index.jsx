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
  const allImages = rawImages.map((src) => (src.includes("?") ? src : `${src}?v=4`));
  const config = getLayoutConfig(allImages.length);

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full flex-wrap justify-center gap-4 sm:gap-6">
        {allImages.map((src, i) => (
          <div
            key={i}
            className={`group relative aspect-[4/5] flex-shrink-0 overflow-hidden rounded-lg border border-hairline bg-surface-parchment transition-colors duration-200 hover:border-ink/25 ${config.itemWidth}`}
          >
            <Image
              src={src}
              alt={`Anggota Divisi ${i + 1}`}
              fill
              sizes={config.sizes}
              className="object-cover object-center transition-transform duration-500 ease-apple group-hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
