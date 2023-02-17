import {
  FilterType,
  ProductObjectType,
  ProductUnitType,
  SelectedFilterType,
} from "../../../config/types/Product";

type handleListProps = {
  products: ProductObjectType;
  filter: SelectedFilterType;
  sortBy: string;
};

type handleTagsProps = {
  product: ProductUnitType;
  filter: SelectedFilterType;
};

export default function handleFilter({
  products,
  filter,
  sortBy,
}: handleListProps): ProductUnitType[] {
  let res: ProductUnitType[];
  if (!Object.values(filter).length) res = Object.values(products);
  else
    res = Object.values(products).filter(
      (product) =>
        (!filter.price.length ||
          (+product.price >= filter.price[0] &&
            +product.price <= filter.price[1])) &&
        (!filter.tags?.length ||
          filter.tags?.includes("All Tags") ||
          !filter.tags?.length ||
          handleTags({ product, filter })) &&
        (!filter.size?.length ||
          (+product.size >= filter.size[0] &&
            +product.size <= filter.size[1])) &&
        (filter.stock === "All" || filter.stock === product.stock)
    );
  switch (sortBy) {
    case "Price low to high":
      return res.sort((a, b) => +a.price - +b.price);
    case "Price high to low":
      return res.sort((a, b) => +b.price - +a.price);
    case "Customer rating":
      return res.sort((a, b) => +b.ratings.avg - +a.ratings.avg);
    case "Stock":
      return res.sort((a, b) => a.stock.localeCompare(b.stock));
    case "Product (A-Z)":
      return res.sort((a, b) => a.name.localeCompare(b.name));
    case "Product (Z-A)":
      return res.sort((a, b) => -1 * a.name.localeCompare(b.name));
    case "Relevance":
      return res;
    default:
      return res;
  }
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
