import React from "react";
import useProducts from "../../hooks/useProducts";
import ProductList from "./ProductUnit";

export default function Slider() {
  let { products } = useProducts();

  return (
    <div className="flex gap-x-10">
      {Object.values(products).map((prod, i) => (
        <ProductList product={prod} />
      ))}
    </div>
  );
}
