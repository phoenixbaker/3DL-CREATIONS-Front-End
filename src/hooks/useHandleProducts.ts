import { useEffect } from "react";
import { getProductDetails } from "../api/Products";
import useProducts from "./useProducts";

export default function useHandleProducts() {
  let { products, setProducts } = useProducts();

  useEffect(() => {
    handleProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  async function handleProducts() {
    let res = await getProductDetails();
    if (!res) return;

    setProducts(res);
  }
}
