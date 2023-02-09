import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductObjectType, ProductUnitType } from "../../config/types/Product";

import useProducts from "../../hooks/useProducts";
import { SearchBar } from "../../layout";
import FilterMenu, { FilterType } from "./components/Filter";
import HandleList from "./components/HandleList";

export default function Products() {
  const { products } = useProducts();
  const [filter, setFilter] = useState<FilterType>({} as FilterType);

  const [result, setResult] = useState<ProductObjectType>(products);

  useEffect(() => {
    setResult(products);
  }, [products]);

  return (
    <section className="bg-gray-100 h-screen" id="ProductSection">
      <SearchBar
        placeholder="Search for Product..."
        result={(res) => setResult(res)}
        showDropDown={false}
      />
      <div className="grid grid-cols-10 pt-14">
        <FilterMenu setFilterSearch={(e) => setFilter(e)} />
        <div className="grid grid-flow-col auto-cols-max gap-8 col-span-6">
          <HandleList products={result} filter={filter} />
        </div>
      </div>
    </section>
  );
}
