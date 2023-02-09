import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  InputHTMLAttributes,
} from "react";

interface InformationBoxesTypes extends InputHTMLAttributes<HTMLInputElement> {
  header: string;
}

export default function InformationBoxes({
  header,
  ...props
}: InformationBoxesTypes) {
  return (
    <div className="pb-8 flex flex-col w-10/12">
      <h3 className="text-xl pb-4">{header}</h3>
      <input
        className="border-2 border-black rounded-full p-2 px-4"
        {...props}
      />
    </div>
  );
}
