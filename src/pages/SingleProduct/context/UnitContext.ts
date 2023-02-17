import { createContext, Dispatch, SetStateAction } from "react";
import { ProductUnitType } from "../../../config/types/Product";

type UnitContextType = {
  unit: ProductUnitType;
  setUnit: Dispatch<SetStateAction<ProductUnitType>>;
};

export const UnitContext = createContext<UnitContextType>(
  {} as UnitContextType
);
