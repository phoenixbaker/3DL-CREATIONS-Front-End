import React from "react";
import useProducts from "../../../hooks/useProducts";
import SectionSlider from "./SectionSlider";

export default function CategorySection() {
  const { products } = useProducts();
  return (
    <SectionSlider
      title="Category (Update)"
      data={[
        ...Object.values(products),
        ...Object.values(products),
        ...Object.values(products),
      ]}
    />
  );
}
