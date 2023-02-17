import { Rating } from "@mui/material";
import React from "react";
import useUnit from "../../hooks/useUnit";

export default function Average() {
  const { unit } = useUnit();
  let avg =
    unit.ratings.avg.toString().length > 1
      ? unit.ratings.avg.toFixed(1)
      : unit.ratings.avg.toString();
  return (
    <div className="flex gap-x-2 text-sm mt-2 mb-14">
      <Rating value={+avg} precision={0.1} readOnly />
      {`(${avg})`}
    </div>
  );
}
