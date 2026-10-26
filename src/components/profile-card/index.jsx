"use client";

import Image from "next/image";

export default function ProfileCard({ images, imagesTop = [], imagesBottom = [] }) {
  const rawImages = images && images.length > 0 ? images : [...imagesTop, ...imagesBottom];
  const allImages = rawImages.map((src) => (src.includes("?") ? src : `${src}?v=2`));

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {allImages.map((src, i) => (
          <div
            key={i}
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden glass-surface border border-white/10 shadow-lg hover:border-green-500/30 hover:-translate-y-1.5 transition-all duration-300"
          >
            <Image
              src={src}
              alt={`Anggota Divisi ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}

