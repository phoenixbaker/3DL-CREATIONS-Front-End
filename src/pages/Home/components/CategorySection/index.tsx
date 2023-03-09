import React from "react";
import useProducts from "../../../../hooks/useProducts";
import CategoryCard from "./CategoryCard";
import SectionSlider from "../SectionSlider";

export default function CategorySection() {
  // const { products } = useProducts();
  return (
    <div className="grid grid-cols-5 gap-y-10 w-3/5 pt-32">
      <CategoryCard
        src="/image3.jpg"
        text="Popular"
        href="/products"
        state="Popular"
        className="col-span-2 justify-self-center hover:scale-[1.03] hover:rotate-2 duration-100"
      />
      <div />
      <CategoryCard
        src="/image3.jpg"
        text="Star Wars"
        href="/products"
        state="Star Wars"
        className="justify-self-center col-span-2 hover:scale-[1.03] hover:-rotate-2 duration-100"
      />
      <div className="col-span-2"></div>
      <CategoryCard
        src="/image3.jpg"
        text="Baby Groot"
        href="/products"
        state="Baby Groot"
        className="justify-self-center hover:scale-[1.04] duration-100"
      />
    </div>
  );
}
