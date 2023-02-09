import {
  ProductObjectType,
  ProductUnitType,
} from "../../../config/types/Product";
import { FilterType } from "../components/Filter";

type handleListProps = {
  products: ProductObjectType;
  filter: FilterType;
};

type handleTagsProps = {
  product: ProductUnitType;
  filter: FilterType;
};

export default function handleFilter({
  products,
  filter,
}: handleListProps): ProductUnitType[] {
  if (!Object.values(filter).length) return Object.values(products);
  return Object.values(products).filter(
    (product) =>
      (!filter.price.length ||
        (+product.price >= filter.price[0] &&
          +product.price <= filter.price[1])) &&
      (!filter.tags?.length ||
        filter.tags?.includes("All Tags") ||
        !filter.tags?.length ||
        handleTags({ product, filter })) &&
      (!filter.size?.length ||
        (+product.size >= filter.size[0] && +product.size <= filter.size[1])) &&
      (filter.stock[0] === "All" || filter.stock[0] === product.stock)
  );
}

function handleTags({ product, filter }: handleTagsProps): boolean {
  if (!filter.tags.length) return false;
  let tempObj: any = {};
  filter.tags.forEach((tag) => {
    if (!tempObj[tag]) tempObj[tag] = true;
  });
  for (var i = 0; i < product.tags.length; i++) {
    if (tempObj[product.tags[i]]) delete tempObj[product.tags[i]];
  }
  return !Object.keys(tempObj).length;
}
