import React, { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="bg-primary-dark-blue w-full bg-opacity-90 flex flex-col items-center py-16 text-white">
      <div className="flex flex-col items-center gap-y-20 w-3/4">
        {children}
      </div>
    </div>
  );
}
