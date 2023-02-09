import React, { HTMLAttributes } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface ListButton extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  selected?: boolean;
}

export default function ListButton({
  text,
  className,
  selected = false,
}: ListButton) {
  return (
    <button
      className={`flex items-center justify-between p-2 py-3 under border-b-1 border-y border-b-gray-500 text-left ${
        selected ? "bg-gray-200 font-bold text-xl " : "bg-gray-50 text-lg"
      } ${className}`}
    >
      {text}
      <ArrowForwardIosIcon />
    </button>
  );
}
