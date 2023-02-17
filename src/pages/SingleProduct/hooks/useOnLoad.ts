import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { getProductPhotos } from "../../../api/Products";
import { ProductUnitType } from "../../../config/types/Product";
import useProducts from "../../../hooks/useProducts";

export default function useOnLoad(): [
  ProductUnitType,
  Dispatch<SetStateAction<ProductUnitType>>
] {
  const { id } = useParams();
  const { products, setProducts } = useProducts();
  const navigate = useNavigate();

  const [unit, setUnit] = useState<ProductUnitType>({} as ProductUnitType);

  useEffect(() => {
    if (id && Object.keys(products).length) {
      if (!products[id]) navigate("/products");
      else setUnit(products[id]);
    }
  }, [products]);

  useEffect(() => {
    if (!!Object.keys(unit).length) handlePhoto();
  }, [unit]);

  async function handlePhoto() {
    await getProductPhotos(unit.photos_id).then((res) =>
      setProducts((prevObj) => ({
        ...prevObj,
        [unit._id]: {
          ...prevObj[unit._id],
          images: res,
        },
      }))
    );
  }

  return [unit, setUnit];
}
