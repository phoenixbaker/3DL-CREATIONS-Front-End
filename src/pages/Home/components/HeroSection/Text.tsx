import { Rating } from "@mui/material";
import React, { MutableRefObject, Ref, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Text({
  contentRef,
}: {
  contentRef: MutableRefObject<HTMLDivElement>;
}) {
  let navigate = useNavigate();
  return (
    <div className="w-3/5 pt-44 text-white">
      <h1 className="text-8xl font-extrabold hover:scale-105 duration-75">
        3DL Creations
      </h1>
      <p className="text-2xl font-semibold">
        Bringing your creations and ideas to life
      </p>
      <div className="flex pt-6 gap-x-2 font-bold">
        <Rating value={5} readOnly />
        <text>(5.0) Customer Rating</text>
      </div>
      <button
        className="mt-12 border-white border-2 p-4 rounded-xl font-bold text-xl hover:scale-105"
        onClick={() =>
          contentRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      >
        All Services
      </button>
    </div>
  );
}
