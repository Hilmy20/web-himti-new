import React from "react";

const CooperationBox = () => {
  const cooperationItems = [" ", " ", " ", " "];

  return (
    <div className="mt-16">
      <p className="text-caption-strong uppercase tracking-[0.08em] text-brand-link">
        In cooperation with
      </p>
      <div className="mt-4 flex flex-wrap gap-6">
        {cooperationItems.map((item, index) => (
          <div
            key={index}
            className="flex h-[200px] w-[295px] items-center justify-center rounded-lg border border-hairline bg-surface-canvas p-4 text-ink"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CooperationBox;
