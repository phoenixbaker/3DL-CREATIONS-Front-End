import React from "react";

import useProducts from "../../../hooks/useProducts";
import SectionSlider from "./SectionSlider";
export default function LatestSection() {
  const { products } = useProducts();
  return (
    <SectionSlider
      title="Latest"
      data={[
        ...Object.values(products),
        ...Object.values(products),
        ...Object.values(products),
      ]}
    />
  );
}
