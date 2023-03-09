import React, { ReactNode } from "react";

export default function Container({ children }: { children?: ReactNode }) {
  return (
    <div className="w-full bg-white h-full flex flex-col pb-10 pt-16 items-center shadow-2xl">
      <div className="flex flex-col w-3/4 items-center gap-y-20">
        {children}
      </div>
    </div>
  );
}
