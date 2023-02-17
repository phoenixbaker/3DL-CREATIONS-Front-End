import { CircularProgress } from "@mui/material";
import React from "react";
import { ProductUnitType } from "../../../config/types/Product";
import useUnit from "../hooks/useUnit";

export default function Images() {
  const { unit } = useUnit();
  if (!unit.images?.length)
    return (
      <div className="col-span-2 w-full flex h-full items-center justify-center">
        <CircularProgress size={"5vh"} />
      </div>
    );
  return (
    <div className="flex w-full col-span-2 p-10 flex-col">
      <img src={unit.images[0]} className="col-span-2 w-fit h-3/5 shadow-md" />
      <div className="font-bold text-2xl p-6">Image Slider</div>
    </div>
  );
}
