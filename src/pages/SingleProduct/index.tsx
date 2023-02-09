import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductPhotos } from "../../api/Products";
import { ProductUnitType } from "../../config/types/Product";

import useProducts from "../../hooks/useProducts";

export default function SingleProduct() {
  const { id } = useParams();
  const { products, setProducts } = useProducts();

  const [prod, setProd] = useState({} as ProductUnitType);

  useEffect(() => {
    if (id && JSON.stringify(products).length > 2) {
      if (!products[id]) return console.warn("PRODUCT NOT FOUND REDIRECT");
      else return setProd(products[id]);
    }
  }, [products]);

  useEffect(() => {
    handlePhoto();
  });

  async function handlePhoto() {
    await getProductPhotos(prod.photos_id).then((res) =>
      setProducts((prevObj) => ({
        ...prevObj,
        [prod._id]: {
          ...prevObj[prod._id],
          images: res,
        },
      }))
    );
  }

  return (
    <section>
      {prod ? (
        <div className="grid grid-cols-5 h-screen">
          <br />
          <div className="flex h-fit px-12 py-8 col-span-3 ">
            <div className="grid grid-cols-3 bg-gray-50">
              {prod.images?.length ? (
                <img
                  src={prod.images[0]}
                  className="col-span-2 p-10 w-full"
                ></img>
              ) : (
                <CircularProgress className="col-span-2" size={"5vh"} />
              )}
              <div className="bg-white m-5 p-4 flex flex-col gap-y-12">
                <h1 className="font-bold text-2xl">{prod.name}</h1>
                <h1 className="text-sm font-light">{prod.description}</h1>
                <div className="flex items-end justify-between">
                  <h1 className=" text-xl font-bold">{prod.stock}</h1>
                  <h1>{"$" + prod.price}</h1>
                </div>
                <button>SIZE OPTIONS</button>
                <button>ADD TO CART</button>
              </div>
            </div>
          </div>
          <br />
        </div>
      ) : (
        <div>LOADING...</div>
      )}
    </section>
  );
}
