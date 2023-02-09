import { useEffect, useState } from "react";
import {
  ProductObjectType,
  ProductUnitType,
} from "../../../config/types/Product";
import handleFilter from "../utils/handleFilter";
import { FilterType } from "./Filter";

import ProductUnit from "./ProductUnit";

type handleListProps = {
  products: ProductObjectType;
  filter: FilterType;
};

export default function HandleList({ products, filter }: handleListProps) {
  const [res, setRes] = useState<ProductUnitType[]>([]);

  useEffect(() => {
    setRes(handleFilter({ products, filter }));
  }, [filter, products]);

  if (!res.length) return <div>No Products Found :(</div>;
  else
    return (
      <>
        {res.map((prod, i) => (
          <ProductUnit product={prod} key={i} />
        ))}
      </>
    );
}
