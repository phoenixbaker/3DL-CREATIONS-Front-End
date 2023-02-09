export interface ProductObjectType {
  [key: string]: ProductUnitType;
}

export type ProductUnitType = {
  name: string;
  description: string;
  tags: string[];
  images?: string[];
  photos_id: string[];
  price: string;
  size: string;
  stock: string;
  __v: number;
  _id: string;
};
