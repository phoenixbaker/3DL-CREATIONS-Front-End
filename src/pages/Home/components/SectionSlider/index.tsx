import React from "react";
import { ProductUnitType } from "../../../../config/types/Product";
import Header from "./Header";
import ImageSlider from "./ImageSlider";

type SectionSliderProps = {
  title: string;
  data?: ProductUnitType[];
};

export default function SectionSlider({ title, data }: SectionSliderProps) {
  return (
    <div className="place-self-center w-3/5 py-16 flex flex-col overflow-x-hidden h-fit">
      <Header title={title} />
      <ImageSlider data={data} />
    </div>
  );
}
