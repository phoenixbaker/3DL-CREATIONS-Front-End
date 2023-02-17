import React from "react";
import { ProductUnitType } from "../../../../config/types/Product";
import useUnit from "../../hooks/useUnit";
import Average from "./Average";
import ReviewList from "./ReviewList";

export default function Ratings() {
  const { unit } = useUnit();
  return (
    <div className="flex flex-col items-center">
      <div className="font-medium text-xl">Reviews</div>
      {unit.ratings && (
        <>
          <Average />
          <ReviewList />
        </>
      )}
    </div>
  );
}
