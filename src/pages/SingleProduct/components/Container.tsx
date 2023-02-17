import React, { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <section>
      <div className="grid grid-cols-5 min-h-screen-nav">
        <br />
        <div className="flex px-12 py-8 col-span-3">
          <div className="grid grid-cols-3 bg-gray-50 shadow-2xl h-3/4">
            {children}
          </div>
        </div>
        <br />
      </div>
    </section>
  );
}
