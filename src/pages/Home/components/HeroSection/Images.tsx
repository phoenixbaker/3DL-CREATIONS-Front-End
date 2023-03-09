import React from "react";

export default function Images() {
  return (
    <div className="w-full flex items-center justify-around">
      <img
        src="/3dprinter.png"
        className="h-[20rem] hover:scale-105 hover:rotate-3 duration-150"
      />
      <img
        src="/Laser.png"
        className="h-[20rem] translate-y-12 hover:translate-y-1 over:scale-105 hover:-rotate-3 duration-150"
      />
    </div>
  );
}
