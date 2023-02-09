import React, { DOMAttributes, MouseEventHandler } from "react";

type FilterSectionType = {
  handleReset: MouseEventHandler<HTMLButtonElement>;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Header({ handleReset, onClick }: FilterSectionType) {
  return (
    <button
      className=" bg-gray-50 flex justify-between items-center p-4 px-8 w-full"
      onClick={onClick}
    >
      <div className="text-xl font-semibold">Filter</div>
      <button
        onClick={handleReset}
        className="my-2 w-1/3 rounded-full z-20 p-3 bg-primary-blue text-white font-bold"
      >
        RESET FILTER
      </button>
    </button>
  );
}
