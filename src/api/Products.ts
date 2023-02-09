import { ProductObjectType, ProductUnitType } from "../config/types/Product";
import apiClient from "./client";

export const getProductVersion = async (
  version: {
    _id: string;
    __v: number;
  }[]
): Promise<string[][] | undefined> => {
  let { data } = await apiClient.post<string[][]>("/products/version", {
    keys: version,
  });
  return data;
};

export const getProductPhotos = async (
  photo_ids: string[]
): Promise<string[]> => {
  let photoArr = [];

  for (var i = 0; i < photo_ids.length; i++) {
    let id = photo_ids[i];
    let { data } = await apiClient.get<string>("/download/products/" + id);
    photoArr.push("data:image/png;base64," + data);
  }
  return photoArr;
};

export const getProductDetails = async (): Promise<
  ProductObjectType | undefined
> => {
  let { data } = await apiClient.get<ProductUnitType[]>("/products/all");
  if (!data) return;
  let tempRes = {} as ProductObjectType;
  data.forEach((product) => {
    tempRes[product._id] = product;
  });
  return tempRes;
};

export const getProductDetailsByIdArr = async (
  prod: string[]
): Promise<ProductObjectType | undefined> => {
  let tempRes = {} as ProductObjectType;
  for (var i = 0; i < prod.length; i++) {
    let { data } = await apiClient.get<ProductUnitType>("/products/" + prod[i]);
    if (data) tempRes[data._id] = data;
  }
  return tempRes;
};
