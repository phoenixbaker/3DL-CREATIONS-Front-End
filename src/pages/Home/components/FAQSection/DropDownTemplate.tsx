import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import React, { ReactNode, useState } from "react";

type DropDownTemplateProps = {
  shown?: boolean;
  question: string;
  children?: ReactNode;
};

export default function DropDownTemplate({
  shown,
  question,
  children,
}: DropDownTemplateProps) {
  const [show, setShow] = useState(shown);
  return (
    <div className="flex flex-col w-full">
      <button
        className="flex w-full justify-between items-center bg-gray-50 p-4"
        onClick={() => setShow((prev) => !prev)}
      >
        <h1 className="text-xl font-semibold">{question}</h1>
        {show ? <ArrowDropDown /> : <ArrowDropUp />}
      </button>
      {show && (
        <p className="p-4 border-gray-50 border-l-2 border-r-2 border-b-2">
          {children}
        </p>
      )}
    </div>
  );
}
