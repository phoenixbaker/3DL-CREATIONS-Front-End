import { Rating } from "@mui/material";
import React from "react";
import useUnit from "../../hooks/useUnit";

export default function ReviewList() {
  const { unit } = useUnit();
  return (
    <div className="flex flex-col w-full">
      {unit.ratings.posted.map((post, i) => (
        <div key={i} className="flex flex-col mb-8">
          <div className="flex items-start mb-2 justify-between">
            <div className="flex flex-col gap-x-4 ">
              <div className="font-semibold text-lg">{post.by.name}</div>
              <div className="text-sm font-light">
                {post.dateCreated.toString().split("T")[0]}
              </div>
            </div>
            <Rating value={post.rating} readOnly size="small" />
          </div>
          <div>{post.text}</div>
        </div>
      ))}

      <div className="flex flex-col w-full"></div>
    </div>
  );
}
