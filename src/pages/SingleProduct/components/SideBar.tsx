import React, { ReactNode } from "react";

export default function SideBar({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white p-6 flex flex-col gap-y-12 shadow-lg overflow-y-scroll">
      {children}
    </div>
  );
}
