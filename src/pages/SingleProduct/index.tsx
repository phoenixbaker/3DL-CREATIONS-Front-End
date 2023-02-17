import { useMemo } from "react";
import {
  Cart,
  Details,
  Images,
  Ratings,
  SideBar,
  Size,
  Container,
} from "./components";
import { UnitContext } from "./context/UnitContext";
import useOnLoad from "./hooks/useOnLoad";

export default function SingleProduct() {
  let [unit, setUnit] = useOnLoad();

  return (
    <UnitContext.Provider value={{ unit, setUnit }}>
      <Container>
        <Images />
        <SideBar>
          <Details />
          <Size />
          <Cart />
          <Ratings />
        </SideBar>
      </Container>
    </UnitContext.Provider>
  );
}
