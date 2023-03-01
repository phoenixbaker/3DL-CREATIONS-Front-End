import React from "react";

export default function Header({ title }: { title: string }) {
  return (
    <div className="flex w-full items-center">
      <div className="h-px w-full bg-gray-600"></div>

      <h1 className="text-xl mx-12 text-center ">{title.toUpperCase()}</h1>

      <div className="h-px w-full bg-black"></div>
    </div>
  );
}
