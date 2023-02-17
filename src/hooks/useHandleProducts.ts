import { useEffect } from "react";
import { getProductDetails } from "../api/Products";
import useProducts from "./useProducts";

export default function useHandleProducts() {
  let { setProducts } = useProducts();

  useEffect(() => {
    handleProducts();
  }, []);

  async function handleProducts() {
    let res = await getProductDetails();
    if (!res) return;

    setProducts(res);
  }
}
