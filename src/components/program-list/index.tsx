import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const programs = [
  "HIMTI IT Fest Competition 5.0",
  "Reformatics 2025",
  "Brahma: IT Fest Ready",
  "Brahma: Kobit & Barbar",
  "HIMTI GO!",
  "Microblog & Article",
  "Bengkel IT",
  "Pengabdian Kepada Masyarakat",
  "HIMTI Collaboration",
  "HIMTI Connect College",
  "HIMTI Connect Company",
];

const ProgramsList = () => {
  return (
    <div className="mt-10 flex flex-col">
      {programs.map((program) => (
        <div
          key={program}
          className="flex cursor-pointer items-center justify-between gap-4 border-b border-hairline py-4 transition-colors hover:text-brand-link"
        >
          <p className="text-body">{program}</p>
          <Icon
            icon="material-symbols:arrow-right-alt"
            className="h-5 w-5 -rotate-45 text-brand-link"
          />
        </div>
      ))}
    </div>
  );
};

export default ProgramsList;
