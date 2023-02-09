import { Slider } from "@mui/material";
import { useState } from "react";

type SizeSectionType = {
  data: number[];
  selected: number[];
  setRange: (res: number[]) => void;
};

function valuetext(value: number) {
  return `${value}cm`;
}

export default function SizeSection({
  data,
  setRange,
  selected,
}: SizeSectionType) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    setRange(newValue as number[]);
  };
  return (
    <div className="flex flex-col w-full bg-white items-center p-4 px-12 ">
      <div className=" w-full bg-white text-xl">Size</div>
      <div className="w-10/12">
        <Slider
          min={data[0]}
          size="small"
          max={data[1]}
          marks={data.map((size) => ({ value: size, label: size + "cm" }))}
          getAriaLabel={() => "Size Range"}
          value={selected ? selected : []}
          onChange={handleChange}
          valueLabelDisplay="auto"
          color="primary"
          getAriaValueText={valuetext}
        />
      </div>
    </div>
  );
}
