import React, { useState } from "react";
import { DropDownSelect } from "../../../../components/MaterialUI";
import useProducts from "../../../../hooks/useProducts";

let sortByList = [
  {
    value: "Relevance",
  },
  {
    value: "Price low to high",
  },
  {
    value: "Price high to low",
  },
  {
    value: "Customer rating",
  },
  {
    value: "Product (A-Z)",
  },
  {
    value: "Product (Z-A)",
  },
  {
    value: "Stock",
  },
];

export default function Sort() {
  const { sortBy, setSortBy } = useProducts();

  return (
    <div className="flex flex-col w-full bg-gray-50 items-center p-4 px-8">
      <div className=" w-full text-xl font-semibold">Sort</div>
      <DropDownSelect
        label="Sort By"
        selectors={sortByList}
        value={sortBy}
        setData={(e) => setSortBy(e)}
      />
    </div>
  );
}
