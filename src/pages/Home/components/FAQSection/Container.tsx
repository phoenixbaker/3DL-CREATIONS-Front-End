import React, { ReactNode } from "react";

export default function Container({ children }: { children?: ReactNode }) {
  return (
    <div className="w-full py-16 flex flex-col items-center">
      <div className="flex flex-col items-center gap-y-12 w-1/4">
        {children}
      </div>
    </div>
  );
}
