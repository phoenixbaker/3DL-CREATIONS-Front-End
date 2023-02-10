import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import useProducts from "../../../../hooks/useProducts";

function valuetext(value: number) {
  return `$${value}`;
}

export default function PriceSlider() {
  const { setSelectedFilter, selectedFilter, filter } = useProducts();

  return (
    <div className="flex flex-col bg-white w-full items-center p-4 px-12 ">
      <div className="flex justify-between w-full">
        <div className="text-lg">Price</div>
      </div>
      <div className="w-10/12">
        {filter && (
          <Slider
            size="small"
            marks={[
              { value: filter.price[0], label: `$${filter.price[0]}` },
              { value: filter.price[1], label: `$${filter.price[1]}` },
            ]}
            min={filter.price[0]}
            max={filter.price[1]}
            getAriaLabel={() => "Price Range"}
            valueLabelDisplay="auto"
            value={selectedFilter.price}
            onChange={(e, newValue) =>
              setSelectedFilter((prevObj) => ({
                ...prevObj,
                price: newValue as number[],
              }))
            }
            getAriaValueText={valuetext}
          />
        )}
      </div>
    </div>
  );
}
