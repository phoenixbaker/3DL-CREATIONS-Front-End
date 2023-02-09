import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";

function valuetext(value: number) {
  return `$${value}`;
}

type PriceSliderType = {
  data: number[];
  selected: number[];
  setRange: (res: number[]) => void;
};

export default function PriceSlider({
  data,
  setRange,
  selected,
}: PriceSliderType) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    setRange(newValue as number[]);
  };

  return (
    <div className="flex flex-col bg-white w-full items-center p-4 px-8 ">
      <div className="flex justify-between w-full">
        <div className="text-lg">Price</div>
      </div>
      <div className="w-10/12">
        {data && (
          <Slider
            size="small"
            marks={[
              { value: data[0], label: `$${data[0]}` },
              { value: data[1], label: `$${data[1]}` },
            ]}
            min={data[0]}
            max={data[1]}
            getAriaLabel={() => "Price Range"}
            valueLabelDisplay="auto"
            value={selected?.length ? selected : data}
            onChange={handleChange}
            getAriaValueText={valuetext}
          />
        )}
      </div>
    </div>
  );
}
