import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import {
  ProductObjectType,
  FilterType,
  SelectedFilterType,
} from "../config/types/Product";

type ProductContextType = {
  products: ProductObjectType;
  setProducts: Dispatch<SetStateAction<ProductObjectType>>;
  filter: FilterType;
  setFilter: Dispatch<SetStateAction<FilterType>>;
  selectedFilter: SelectedFilterType;
  setSelectedFilter: Dispatch<SetStateAction<SelectedFilterType>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
};

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);

type ProductContextProviderType = {
  children: ReactNode;
};

export const ProductContextProvider = ({
  children,
}: ProductContextProviderType) => {
  const [products, setProducts] = useState<ProductObjectType>(
    {} as ProductObjectType
  );

  const [selectedFilter, setSelectedFilter] = useState<SelectedFilterType>(
    {} as SelectedFilterType
  );

  const [sortBy, setSortBy] = useState<string>("Relevance");

  const [filter, setFilter] = useState<FilterType>({} as FilterType);

  const value = useMemo(
    () => ({
      products,
      setProducts,
      filter,
      setFilter,
      selectedFilter,
      setSelectedFilter,
      sortBy,
      setSortBy,
    }),
    [products, filter, selectedFilter, sortBy]
  );
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
