import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { ProductObjectType } from "../config/types/Product";

type ProductContextType = {
  products: ProductObjectType;
  setProducts: Dispatch<SetStateAction<ProductObjectType>>;
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
  const value = useMemo(() => ({ products, setProducts }), [products]);
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
