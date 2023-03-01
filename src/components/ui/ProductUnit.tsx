import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { ProductUnitType } from "../../config/types/Product";
import useProducts from "../../hooks/useProducts";
import { getProductPhotos } from "../../api/Products";

interface ProductListType {
  product: ProductUnitType;
  className?: string;
}

export default function ProductList({ product, className }: ProductListType) {
  let { setProducts } = useProducts();

  useEffect(() => {
    handlePhoto();
  }, []);

  async function handlePhoto() {
    await getProductPhotos(product.photos_id).then((res) =>
      setProducts((prevObj) => ({
        ...prevObj,
        [product._id]: {
          ...prevObj[product._id],
          images: res,
        },
      }))
    );
  }

  return (
    <motion.div
      className={`flex flex-col w-fit h-fit shadow-xl ${className}`}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.12,
        },
      }}
    >
      <Link to={`/products/${product._id}`}>
        {product.images ? (
          <img
            src={product.images[0]}
            className="w-60 h-60 object-cover rounded-t-lg"
          />
        ) : (
          <div className="flex items-center justify-center w-60 h-60 object-cover rounded-t-lg">
            <CircularProgress size={"1vh"} />
          </div>
        )}

        <div className="flex flex-col gap-x-6 p-4 bg-white w-full rounded-b-lg">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <h1 className="text-xs font-extralight pb-3">
            {product.tags.map((val, i) => {
              if (i === product.tags.length - 1) return `${val}`;
              else return `${val}, `;
            })}
          </h1>
          <div className="flex items-end justify-between h-fit">
            <h1 className="text-2xl">{"$" + product.price}</h1>
            <div className="flex flex-col items-end">
              <h1 className="text-sm">{product.size + "cm"}</h1>
              <h1 className="text-xs font-light">{product.stock}</h1>
            </div>
          </div>
          <div></div>
        </div>
      </Link>
    </motion.div>
  );
}
