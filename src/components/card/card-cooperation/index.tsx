import Image from "next/image";

type CardCooperationProps = {
  image: string;
  alt: string;
};

export const CardCooperation = ({ image, alt }: CardCooperationProps) => {
  return (
    <div className="card card-hover flex h-40 w-full items-center justify-center p-6">
      <Image
        src={image}
        width={140}
        height={60}
        alt={alt}
        className="h-auto max-h-16 w-auto object-contain"
      />
    </div>
  );
};
