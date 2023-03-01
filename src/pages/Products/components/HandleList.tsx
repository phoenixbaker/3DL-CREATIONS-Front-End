import { useEffect, useState } from "react";
import {
  FilterType,
  ProductObjectType,
  ProductUnitType,
  SelectedFilterType,
} from "../../../config/types/Product";
import useProducts from "../../../hooks/useProducts";
import handleFilter from "../utils/handleFilter";

import ProductUnit from "../../../components/ui/ProductUnit";

type handleListProps = {
  products: ProductObjectType;
};

export default function HandleList({ products }: handleListProps) {
  const { selectedFilter, sortBy } = useProducts();
  const [res, setRes] = useState<ProductUnitType[]>([]);

  useEffect(() => {
    setRes(handleFilter({ products, filter: selectedFilter, sortBy }));
  }, [selectedFilter, products, sortBy]);

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
