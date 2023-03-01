import React from "react";
import useProducts from "../../../hooks/useProducts";
import SectionSlider from "./SectionSlider";

export default function PopularSection() {
  const { products } = useProducts();
  return (
    <SectionSlider
      title="Popular"
      data={[
        ...Object.values(products),
        ...Object.values(products),
        ...Object.values(products),
      ]}
    />
  );
}
