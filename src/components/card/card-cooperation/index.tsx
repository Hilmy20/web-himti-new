import Image from "next/image";

type CardCooperationProps = {
  image: string;
  alt: string;
};

export const CardCooperation = ({ image, alt }: CardCooperationProps) => {
  return (
    <div className="glass-surface glass-surface-hover w-full h-44 rounded-2xl flex items-center justify-center p-6 group">
      <Image
        src={image}
        width={140}
        height={60}
        alt={alt}
        className="max-h-16 w-auto object-contain filter brightness-90 contrast-125 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
      />
    </div>
  );
};
