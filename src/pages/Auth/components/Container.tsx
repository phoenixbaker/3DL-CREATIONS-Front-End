import React, { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center w-2/5 rounded-xl bg-gray-100 mt-16 shadow-2xl">
      {children}
    </div>
  );
}
