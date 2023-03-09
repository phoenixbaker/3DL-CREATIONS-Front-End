import { Rating } from "@mui/material";
import React from "react";

export default function ReviewTemplate() {
  return (
    <div className="w-96 bg-gray-50 text-black rounded-md hover:scale-105 duration-300">
      <div className="h-72">Photo Src</div>
      <div className="border-t-black border p-4">
        <Rating value={5} readOnly />
        <div>@phoenixbvu</div>
        <div>"comment"</div>
      </div>
    </div>
  );
}
