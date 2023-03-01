import React from "react";
import { ProductUnitType } from "../../../../config/types/Product";
import ProductUnit from "../../../../components/ui/ProductUnit";

export default function ImageSlider({ data }: { data?: ProductUnitType[] }) {
  return (
    <div className="grid auto-cols-max grid-flow-col gap-x-9 mx-2 my-12">
      {data?.map((prod, i) => (
        <ProductUnit product={prod} className="w-56" />
      ))}
    </div>
  );
}
