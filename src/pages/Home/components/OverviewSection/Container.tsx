import { ParallaxLayer } from "@react-spring/parallax";
import React, { ReactNode } from "react";

export default function Container({ children }: { children?: ReactNode }) {
  return (
    <div className="py-10 bg-gray-50 w-full h-full flex flex-col items-center shadow-2xl">
      <div className="w-3/5 flex flex-col items-center gap-y-20">
        {children}
      </div>
    </div>
  );
}
