import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductObjectType } from "../../config/types/Product";

import useProducts from "../../hooks/useProducts";
import { NavBar, SearchBar } from "../../layout";
import FilterMenu from "./components/Filter";
import HandleList from "./components/HandleList";

export default function Products() {
  const { products, setSelectedFilter, filter } = useProducts();
  let location = useLocation();

  const [result, setResult] = useState<ProductObjectType>(products);

  useEffect(() => {
    if (location.state?.redirect) {
      setSelectedFilter((prev) => ({
        ...prev,
        tags: [location.state.redirect],
      }));
      setResult(products);
    }
  }, [products, filter]);

  return (
    <section className="bg-gray-50 min-h-screen-nav w-full" id="ProductSection">
      <NavBar />
      <SearchBar
        placeholder="Search for Product..."
        result={(res) => setResult(res)}
        showDropDown={false}
      />
      <div className="grid grid-cols-10 pt-14 h-full">
        <FilterMenu />
        <div className="grid grid-flow-col auto-cols-max gap-8 col-span-6">
          <HandleList products={result} />
        </div>
      </div>
    </section>
  );
}
