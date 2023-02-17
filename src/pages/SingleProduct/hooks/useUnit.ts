import { useContext } from "react";
import { UnitContext } from "../context/UnitContext";

export default function useUnit() {
  return useContext(UnitContext);
}
